import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) { }

  @Post('cast')
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.voteService.create(createVoteDto);
  }

  @Get(':voteId')
  findOne(@Param('id') id: string) {
    return this.voteService.findOne(+id);
  }
}

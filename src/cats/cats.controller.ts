import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { AuthGuard } from '../Guards/auth.gaurd'
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    throw new HttpException({ status: HttpStatus?.INTERNAL_SERVER_ERROR, message: "Something went wrong" }, HttpStatus.FORBIDDEN);
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [UserModule, VoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

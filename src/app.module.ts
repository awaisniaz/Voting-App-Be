import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptable } from './Interceptor/logging.interceptor';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR, useClass: LoggingInterceptable
  }],
})
export class AppModule { }

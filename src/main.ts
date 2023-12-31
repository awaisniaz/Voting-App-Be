import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggingInterceptable } from './Interceptor/logging.interceptor';
async function VotingApp() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  await app.listen(3000);
}
VotingApp();

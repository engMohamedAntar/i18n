//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { I18nValidationExceptionFilter } from 'nestjs-i18n';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // To use nestjs-i18n in your DTO validation but it is not working
  // app.useGlobalPipes(new I18nValidationPipe({ whitelist: true }));

  app.useGlobalPipes(new ValidationPipe({
     whitelist: true, 
     transform: true, 
     forbidNonWhitelisted: true 
  }));

  // For nestjs-i18n to translate the class-validator errors 
  app.useGlobalFilters(new I18nValidationExceptionFilter());



  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get<number>('PORT') || 3000;

  await app.listen(port);
}

bootstrap();

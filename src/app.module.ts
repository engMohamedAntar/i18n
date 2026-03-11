import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

//app.module
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongoModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, //take lang from query
        AcceptLanguageResolver, //take Accept-Language header
        new HeaderResolver(['custom-lang']), //take custom-lang header
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}

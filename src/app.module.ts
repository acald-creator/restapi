import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedController } from './feed/feed.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    FeedModule
  ],
  controllers: [AppController, FeedController, UsersController],
  providers: [AppService],
})
export class AppModule { }

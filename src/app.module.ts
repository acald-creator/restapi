import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedController } from './feed/feed.controller';
import { FeedItem } from './models/feed-item.model';
import { User } from './models/user.model';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'testdb',
      models: [User, FeedItem],
    }),
    UsersModule
  ],
  controllers: [AppController, FeedController, UsersController],
  providers: [AppService],
})
export class AppModule { }

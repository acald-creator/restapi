import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedController } from './feed/feed.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, FeedController, UsersController],
  providers: [AppService],
})
export class AppModule {}

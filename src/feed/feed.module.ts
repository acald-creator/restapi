import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedItem } from 'src/models/feed-item.model';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [SequelizeModule.forFeature([FeedItem])],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule { }

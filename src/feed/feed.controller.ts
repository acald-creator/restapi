import { Controller, Get } from '@nestjs/common';

@Controller('feed')
export class FeedController {
    @Get()
    findAll(): string {
        return 'This action returns all feeds';
    }
}

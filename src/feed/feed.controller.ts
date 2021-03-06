import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('feed')
export class FeedController {
    @Post()
    create(@Res() res: Response) {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }
}

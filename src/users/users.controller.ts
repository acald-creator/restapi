import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }

    @Get(':id')
    findByPk(@Param('id') id: string): Promise<User> {
        return this.usersService.findByPk(id);
    }
}

import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class FeedService {
    constructor(private sequelize: Sequelize) { }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User,) { }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findByPk(id: string): Promise<User> {
    return this.userModel.findByPk();
  }
}
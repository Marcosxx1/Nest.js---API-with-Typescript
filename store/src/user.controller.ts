import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  private userRepositry = new UserRepository();

  @Post()
  async createUser(@Body() userData) {
    this.userRepositry.addUser(userData);
    return userData;
  }
}
import { Body, Controller, Get, Post, Put, Query, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Omit<User, 'id'>,
  ): Promise<User> {
    return this.usersService.update(parseInt(id, 10), updateUserDto);
  }

  @Get('search')
  searchByName(@Query('name') name: string): Promise<User[]> {
    return this.usersService.searchByName(name);
  }

  @Get('filter')
  filterByEmail(@Query('email') email: string): Promise<User[]> {
    return this.usersService.filterByEmail(email);
  }
}

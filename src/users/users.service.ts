import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDto: Omit<User, 'id'>): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = Object.assign(user, updateUserDto);
    return this.usersRepository.save(updatedUser);
  }

  async searchByName(name: string): Promise<User[]> {
    return this.usersRepository
      .createQueryBuilder('users')
      .where('users.name LIKE :name', { name: `%${name}%` })
      .getMany();
  }

  async filterByEmail(email: string): Promise<User[]> {
    return this.usersRepository.find({ where: { email } });
  }
}

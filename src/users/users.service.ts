import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from './user.interface';

@Injectable()
export class UsersService implements UserInterface {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }
  findAll() {
    return this.userRepository.find();
  }
  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }
  remove(id: number) {
    return this.userRepository.delete({ id: id });
  }
}

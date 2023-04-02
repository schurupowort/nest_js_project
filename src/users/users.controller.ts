import {Get, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { type } from 'os';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }
    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status:200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status:200, type: [User]})

    @UseGuards(JwtAuthGuard)
    @Get()
    GetAll(){
        return this.usersService.getAllUsers();
    }
   
    
}

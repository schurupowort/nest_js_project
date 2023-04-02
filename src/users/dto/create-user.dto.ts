import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto{

    @ApiProperty({example:'user@mail.com', description:'email'})
    readonly email: string;
    @ApiProperty({example:'qwerty1234', description:'Пароль'})
    readonly password: string;

}
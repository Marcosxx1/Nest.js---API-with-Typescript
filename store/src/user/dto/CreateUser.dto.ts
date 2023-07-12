import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail(undefined, { message: 'Email is not valid' })
  email: string;

  @MinLength(6, { message: 'Password is too short' })
  password: string;
}
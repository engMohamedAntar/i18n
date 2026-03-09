//create-user.dto
import { IsEmail, IsString, Length } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  //@IsEmail({}, { message: i18nValidationMessage('validation.Invalid_Email') }) // This line didn't work
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsString()
  readonly country: string;
 
  @IsString()
  readonly password: string;
}

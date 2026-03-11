//create-user.dto
import { IsDefined, IsEmail, IsString, Length, ValidateNested } from 'class-validator';
import { LocalizedFieldDto } from '../../shared/localized-field.dto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  //@IsEmail({}, { message: i18nValidationMessage('validation.Invalid_Email') }) // This line didn't work
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsDefined()
  @Type(() => LocalizedFieldDto)
  @ValidateNested()
  readonly country: LocalizedFieldDto;

  @IsString()
  readonly password: string;
}

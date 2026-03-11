import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LocalizedFieldDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  en: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  ar: string;
}

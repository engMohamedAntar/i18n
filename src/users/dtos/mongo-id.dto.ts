//mongo-id.dto.ts
import { IsMongoId } from 'class-validator';

export class MongoIdDto {
  @IsMongoId()
  id: string;
}

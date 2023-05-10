import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class createNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @Length(3, 15)
  @IsNotEmpty()
  category: string;
}

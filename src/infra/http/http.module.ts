import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { UnreadNotification } from '../../application/use-cases/unread-notification';
import { GetRecipientNotifications } from '../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotification } from '../../application/use-cases/count-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

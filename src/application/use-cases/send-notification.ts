import { Injectable } from '@nestjs/common';
import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}

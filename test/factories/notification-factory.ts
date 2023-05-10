import { Content } from '@application/entities/Content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/Notification';

type Overrride = Partial<NotificationProps>;

export function makeNotification(override: Overrride = {}) {
  return new Notification({
    content: new Content('this is notification'),
    recipientId: 'example-id-2',
    category: 'social',
    ...override,
  });
}

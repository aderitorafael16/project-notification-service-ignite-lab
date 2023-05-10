import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Unread Notification', () => {
  it('Should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('Should not be able to read a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});

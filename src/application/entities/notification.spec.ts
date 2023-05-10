import { Content } from './Content';
import { Notification } from './Notification';

describe('Notification', () => {
  it('Should be able to create notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'Social',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});

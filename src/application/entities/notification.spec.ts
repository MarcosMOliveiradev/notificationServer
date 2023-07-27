import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to creat a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-notofication',
    });

    expect(notification).toBeTruthy();
  });
});

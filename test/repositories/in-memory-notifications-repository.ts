import { Notification } from '@application/entities/notifications';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      return null;
    }
    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIdex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIdex >= 0) {
      this.notifications[notificationIdex] = notification;
    }
  }
}

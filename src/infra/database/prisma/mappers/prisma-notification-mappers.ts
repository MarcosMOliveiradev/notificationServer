import { Notification } from '@application/entities/notifications';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipiendId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}

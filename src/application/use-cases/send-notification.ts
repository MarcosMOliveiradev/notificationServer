import { Content } from '../entities/content';
import { Notification } from '../entities/notifications';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificatrionRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotofocation {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificatrionRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}

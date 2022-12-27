import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface CountRecipientNotificationsRequest {
  recipientId: string;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CountRecipientNotificationsRequest): Promise<number> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countByRecipientId(
      recipientId,
    );

    return count;
  }
}

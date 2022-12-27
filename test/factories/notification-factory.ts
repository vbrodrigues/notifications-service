import { Content } from '../../src/application/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    recipientId: 'recipient-2',
    content: new Content('Nova solicitação de amizade.'),
    ...override,
  });
}

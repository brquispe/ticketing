import { Publisher, Subjects, TicketUpdatedEvent } from '@netlogical/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

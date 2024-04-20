import { Publisher, Subjects, TicketCreatedEvent } from '@netlogical/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;

}

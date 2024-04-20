import { Subjects, Publisher, PaymentCreatedEvent } from '@netlogical/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

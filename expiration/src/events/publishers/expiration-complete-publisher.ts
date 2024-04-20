import { Subjects, Publisher, ExpirationCompleteEvent } from '@netlogical/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

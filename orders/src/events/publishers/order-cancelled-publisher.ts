import { Publisher, OrderCancelledEvent, Subjects } from "@netlogical/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

import { Listener, OrderCreatedEvent, OrderStatus, Subjects } from "@netlogical/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { expirationQueue } from "../../queues/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message): Promise<void> {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log('Waiting this many miliseconds to process the job', delay);

    await expirationQueue.add({
      orderId: data.id
    }, {
      delay,
    });

    msg.ack();
  }
}

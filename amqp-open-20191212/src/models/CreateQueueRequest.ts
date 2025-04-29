// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically delete the queue. Valid values:
   * 
   * *   true: The queue is automatically deleted. After the last consumer unsubscribes from the queue, the queue is automatically deleted.
   * *   false: The queue is not automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The validity period after which the queue is automatically deleted. If the queue is not accessed within the specified period of time, the queue is automatically deleted.
   * 
   * Unit: milliseconds.
   * 
   * >  You can use the feature that corresponds to this parameter only after you enable the feature. To enable the feature, [submit a ticket](https://ticket-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @example
   * 10000
   */
  autoExpireState?: number;
  /**
   * @remarks
   * The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
   * 
   * If a consumer rejects a message that cannot be redelivered, ApsaraMQ for RabbitMQ routes the message to the specified dead-letter exchange. Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange for storage.
   * 
   * @example
   * DLExchange
   */
  deadLetterExchange?: string;
  /**
   * @remarks
   * The dead-letter routing key. The key must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   * @example
   * test.dl
   */
  deadLetterRoutingKey?: string;
  /**
   * @remarks
   * Specifies whether the exchange is an exclusive exchange. Valid values:
   * 
   * *   true: The exchange is an exclusive exchange. Only the connection that declares the exclusive exchange can use the exclusive exchange. After the connection is closed, the exclusive exchange is automatically deleted.
   * *   false: The exchange is not an exclusive exchange.
   * 
   * @example
   * false
   */
  exclusiveState?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance on which you want to create a queue.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is unavailable in the current version of ApsaraMQ for RabbitMQ.
   * 
   * The maximum number of messages that can be stored in the queue. If this threshold is exceeded, the earliest stored messages in the queue are deleted.
   * 
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @remarks
   * Queue priorities are not supported. The value does not affect the call or return results.
   * 
   * @example
   * 10
   */
  maximumPriority?: number;
  /**
   * @remarks
   * The message time to live (TTL) of the queue.
   * 
   * *   If the retention period of a message in the queue exceeds the message TTL of the queue, the message expires.
   * *   The message TTL must be set to a non-negative integer. The maximum message TTL is one day. Unit: milliseconds. For example, if the message TTL is 1,000 milliseconds, the message can be retained for up to 1 second in the queue.
   * 
   * @example
   * 1000
   */
  messageTTL?: number;
  /**
   * @remarks
   * The name of the queue that you want to create.
   * 
   * *   The name must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * *   After the queue is created, you cannot change the name of the queue. If you want to change the name of the queue, delete the queue and create another queue.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the vhost to which the queue that you want to create belongs. The name must be 1 to 255 characters in length, and can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteState: 'AutoDeleteState',
      autoExpireState: 'AutoExpireState',
      deadLetterExchange: 'DeadLetterExchange',
      deadLetterRoutingKey: 'DeadLetterRoutingKey',
      exclusiveState: 'ExclusiveState',
      instanceId: 'InstanceId',
      maxLength: 'MaxLength',
      maximumPriority: 'MaximumPriority',
      messageTTL: 'MessageTTL',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteState: 'boolean',
      autoExpireState: 'number',
      deadLetterExchange: 'string',
      deadLetterRoutingKey: 'string',
      exclusiveState: 'boolean',
      instanceId: 'string',
      maxLength: 'number',
      maximumPriority: 'number',
      messageTTL: 'number',
      queueName: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


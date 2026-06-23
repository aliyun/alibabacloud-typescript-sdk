// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically delete the queue. Valid values:
   * 
   * - true: The queue is automatically deleted after the last consumer unsubscribes from it.
   * 
   * - false: The queue is not automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The auto-expiration time for the queue. The queue is automatically deleted if it is not accessed within the specified time period.
   * 
   * Unit: milliseconds.
   * 
   * > This feature must be enabled before you can use this parameter. To enable the feature, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex)<props="intl">[submit a ticket](https://ticket-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @example
   * 10000
   */
  autoExpireState?: number;
  /**
   * @remarks
   * The dead-letter exchange. This type of exchange is used to receive rejected messages.
   * 
   * If a consumer rejects a message and the message is not requeued, ApsaraMQ for RabbitMQ routes the message to the specified dead-letter exchange. The dead-letter exchange then routes the message to a bound queue for storage.
   * 
   * @example
   * DLExchange
   */
  deadLetterExchange?: string;
  /**
   * @remarks
   * The dead-letter routing key.
   * The key can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@). The key must be 1 to 255 characters in length.
   * 
   * @example
   * test.dl
   */
  deadLetterRoutingKey?: string;
  /**
   * @remarks
   * Specifies whether the queue is an exclusive queue. Valid values:
   * 
   * - true: The queue is an exclusive queue. An exclusive queue can be used only by the connection that declares it. The queue is automatically deleted after the connection is closed.
   * 
   * - false: The queue is not an exclusive queue.
   * 
   * @example
   * false
   */
  exclusiveState?: boolean;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the queue belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not supported in the current version.
   * 
   * The maximum number of messages that can be stored in the queue. If this limit is exceeded, the earliest messages in the queue are deleted.
   * 
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @remarks
   * The priority of the queue. The recommended value is an integer from 1 to 10.
   * 
   * > This parameter is used for message priority. It is supported only by dedicated instances and can be used only after the message priority feature is enabled. To enable the feature, <props="china">[submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex)<props="intl">[submit a ticket](https://ticket-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @example
   * 10
   */
  maximumPriority?: number;
  /**
   * @remarks
   * The time to live (TTL) of a message in the queue.
   * 
   * - A message expires if its retention time in the queue exceeds the configured TTL.
   * 
   * - The message TTL must be a non-negative integer. The maximum value is 1 day. The unit is milliseconds. For example, if the value is 1000, the message can be stored in the queue for a maximum of 1 second.
   * 
   * @example
   * 1000
   */
  messageTTL?: number;
  /**
   * @remarks
   * The name of the queue to create.
   * 
   * - The queue name can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@). The name must be 1 to 255 characters in length.
   * 
   * - After a queue is created, its name cannot be changed. To change the name, delete the queue and create a new one.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the vhost to which the queue belongs.
   * The name can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@). The name must be 1 to 255 characters in length.
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


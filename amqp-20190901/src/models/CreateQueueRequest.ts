// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueRequest extends $dara.Model {
  autoDelete?: boolean;
  autoExpire?: number;
  consoleSessionId?: string;
  deadLetterExchange?: string;
  deadLetterRoutingKey?: string;
  exclusive?: boolean;
  instanceId?: string;
  maxLength?: number;
  maximunPrioty?: number;
  messageTTL?: number;
  ordered?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  queueName?: string;
  retryInherit?: boolean;
  retryInterval?: number;
  retryTimes?: number;
  singleActiveConsumer?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDelete: 'AutoDelete',
      autoExpire: 'AutoExpire',
      consoleSessionId: 'ConsoleSessionId',
      deadLetterExchange: 'DeadLetterExchange',
      deadLetterRoutingKey: 'DeadLetterRoutingKey',
      exclusive: 'Exclusive',
      instanceId: 'InstanceId',
      maxLength: 'MaxLength',
      maximunPrioty: 'MaximunPrioty',
      messageTTL: 'MessageTTL',
      ordered: 'Ordered',
      queueName: 'QueueName',
      retryInherit: 'RetryInherit',
      retryInterval: 'RetryInterval',
      retryTimes: 'RetryTimes',
      singleActiveConsumer: 'SingleActiveConsumer',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDelete: 'boolean',
      autoExpire: 'number',
      consoleSessionId: 'string',
      deadLetterExchange: 'string',
      deadLetterRoutingKey: 'string',
      exclusive: 'boolean',
      instanceId: 'string',
      maxLength: 'number',
      maximunPrioty: 'number',
      messageTTL: 'number',
      ordered: 'boolean',
      queueName: 'string',
      retryInherit: 'boolean',
      retryInterval: 'number',
      retryTimes: 'number',
      singleActiveConsumer: 'boolean',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


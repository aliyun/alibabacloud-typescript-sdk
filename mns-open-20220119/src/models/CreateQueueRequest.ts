// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateQueueRequestDlqPolicy } from "./CreateQueueRequestDlqPolicy";
import { CreateQueueRequestTag } from "./CreateQueueRequestTag";


export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The period after which all messages sent to the queue are consumed. Valid values: 0 to 604800. Unit: seconds. Default value: 0
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: CreateQueueRequestDlqPolicy;
  /**
   * @remarks
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * *   true: enabled.
   * *   false: disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the queue. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the queue. After the specified retention period ends, the message is deleted regardless of whether the message is consumed. Valid values: 60 to 604800. Unit: seconds. Default value: 345600.
   * 
   * @example
   * 345600
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum duration for which long polling requests are held after the ReceiveMessage operation is called. Valid values: 0 to 30. Unit: seconds. Default value: 0
   * 
   * @example
   * 0
   */
  pollingWaitSeconds?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * This parameter is required.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  queueName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateQueueRequestTag[];
  /**
   * @remarks
   * The duration for which a message stays in the Inactive state after the message is received from the queue. Valid values: 1 to 43200. Unit: seconds. Default value: 30.
   * 
   * @example
   * 60
   */
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      dlqPolicy: 'DlqPolicy',
      enableLogging: 'EnableLogging',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      tag: 'Tag',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      dlqPolicy: CreateQueueRequestDlqPolicy,
      enableLogging: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      tag: { 'type': 'array', 'itemType': CreateQueueRequestTag },
      visibilityTimeout: 'number',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


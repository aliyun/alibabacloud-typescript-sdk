// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The target queue for dead-letter message delivery.
   * 
   * @example
   * deadLetterQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable dead-letter message delivery.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of times a message can be delivered.
   * 
   * @example
   * 3
   */
  maxReceiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetQueue: 'DeadLetterTargetQueue',
      enabled: 'Enabled',
      maxReceiveCount: 'MaxReceiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetQueue: 'string',
      enabled: 'boolean',
      maxReceiveCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequestTenantRateLimitPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable rate limiting. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of receives per second.
   * 
   * @example
   * 1000
   */
  maxReceivesPerSecond?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      maxReceivesPerSecond: 'MaxReceivesPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxReceivesPerSecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The delay period for all messages sent to the queue. A message sent to the queue can be consumed only after the delay period specified by this parameter elapses. Unit: seconds.
   * 
   * Valid values: 0 to 604800.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter policy.
   */
  dlqPolicy?: CreateQueueRequestDlqPolicy;
  /**
   * @remarks
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enableLogging?: boolean;
  enableSSE?: boolean;
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum size of a message body that can be sent to the queue. Unit: bytes.
   * 
   * Valid values: 1024 to 65536.
   * 
   * Default value: 65536.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the queue. After the specified duration elapses from the time the message is sent to the queue, the message is deleted regardless of whether it has been consumed. Unit: seconds.
   * 
   * Valid values: 60 to 604800.
   * 
   * Default value: 345600.
   * 
   * @example
   * 345600
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum wait time for a ReceiveMessage request when the queue is empty. Unit: seconds.
   * 
   * Valid values: 0 to 30.
   * 
   * Default value: 0.
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
   * The type of the queue. Valid values:
   *    * normal: standard queue.
   *    * fifo: FIFO queue.
   * 
   * @example
   * normal
   */
  queueType?: string;
  sseAlgorithm?: string;
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: CreateQueueRequestTag[];
  /**
   * @remarks
   * The rate limiting policy.
   */
  tenantRateLimitPolicy?: CreateQueueRequestTenantRateLimitPolicy;
  /**
   * @remarks
   * The duration for which a consumed message stays in the Inactive state after it is changed from the Active state. Unit: seconds.
   * 
   * Valid values: 1 to 43200.
   * 
   * Default value: 30.
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
      enableSSE: 'EnableSSE',
      kmsKeyId: 'KmsKeyId',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      queueType: 'QueueType',
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      tag: 'Tag',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      dlqPolicy: CreateQueueRequestDlqPolicy,
      enableLogging: 'boolean',
      enableSSE: 'boolean',
      kmsKeyId: 'string',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      queueType: 'string',
      sseAlgorithm: 'string',
      sseType: 'string',
      tag: { 'type': 'array', 'itemType': CreateQueueRequestTag },
      tenantRateLimitPolicy: CreateQueueRequestTenantRateLimitPolicy,
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
    if(this.tenantRateLimitPolicy && typeof (this.tenantRateLimitPolicy as any).validate === 'function') {
      (this.tenantRateLimitPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


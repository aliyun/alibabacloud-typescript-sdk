// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueueRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter messages.
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
   * The maximum number of receive attempts for a message.
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
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * Specifies whether to enable throttling. Valid values:
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
   * The delay time for all messages sent to the queue. A message can be consumed only after the specified delay time elapses from the time it is sent to the queue. Valid values: 0 to 604800. Unit: seconds. Default value: 0.
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
   * Specifies whether to enable the Log Management feature. Valid values:
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
  /**
   * @remarks
   * Specifies whether log broker encryption is enabled. Valid values: true and false.
   */
  enableSSE?: boolean;
  /**
   * @remarks
   * The KMS key ID. This parameter is required only when SseType is set to KMS.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The maximum size of a message body that can be sent to the queue. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum retention period of a message in the queue. After the specified period elapses from the time the message is sent to the queue, the message is deleted regardless of whether it has been received. Valid values: 60 to 604800. Unit: seconds. Default value: 345600.
   * 
   * @example
   * 345600
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum wait time for a ReceiveMessage request when no messages are available in the queue. Valid values: 0 to 30. Unit: seconds. Default value: 0.
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
   *    * normal: Standard queue.
   *    * fifo: FIFO queue.
   * 
   * @example
   * normal
   */
  queueType?: string;
  /**
   * @remarks
   * The storage encryption algorithm. AES-256-GCM is supported. If you do not specify this parameter, the default algorithm is used.
   * 
   * @example
   * AES-256-GCM
   */
  sseAlgorithm?: string;
  /**
   * @remarks
   * The storage encryption method. Valid values: SMQ and KMS.
   * 
   * @example
   * KMS
   */
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tag?: CreateQueueRequestTag[];
  /**
   * @remarks
   * The throttling policy.
   */
  tenantRateLimitPolicy?: CreateQueueRequestTenantRateLimitPolicy;
  /**
   * @remarks
   * The duration for which a message remains in the inactive state after it is received from the queue. Valid values: 1 to 43200. Unit: seconds. Default value: 30.
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


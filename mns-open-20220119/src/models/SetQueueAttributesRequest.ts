// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetQueueAttributesRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The target queue for dead-letter message delivery.
   * 
   * @example
   * deadLetterTargetQueue
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

export class SetQueueAttributesRequestTenantRateLimitPolicy extends $dara.Model {
  enabled?: boolean;
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

export class SetQueueAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The delay time for all messages sent to this queue. Messages sent to the queue can be consumed only after the delay time specified by this parameter has elapsed.
   * 
   * Valid values: 0 to 604800. Unit: seconds.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: SetQueueAttributesRequestDlqPolicy;
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
   * The maximum length of the message body sent to this queue.
   * 
   * Valid values: 1024 to 65536. Unit: bytes.
   * 
   * Default value: 65536.
   * 
   * @example
   * 1024
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in this queue. After the time specified by this parameter has elapsed since the message was sent to the queue, the message is deleted regardless of whether it has been consumed.
   * 
   * Valid values: 60 to 604800. Unit: seconds.
   * 
   * Default value: 345600.
   * 
   * @example
   * 120
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum wait time for a ReceiveMessage request on this queue when no messages are available in the queue.
   * 
   * Valid values: 0 to 30. Unit: seconds.
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
   * testqueue
   */
  queueName?: string;
  sseAlgorithm?: string;
  sseType?: string;
  tenantRateLimitPolicy?: SetQueueAttributesRequestTenantRateLimitPolicy;
  /**
   * @remarks
   * The duration for which a message stays in the Inactive state after it is consumed from the queue and changes from the Active state to the Inactive state.
   * 
   * Valid values: 1 to 43200. Unit: seconds.
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
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      dlqPolicy: SetQueueAttributesRequestDlqPolicy,
      enableLogging: 'boolean',
      enableSSE: 'boolean',
      kmsKeyId: 'string',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      sseAlgorithm: 'string',
      sseType: 'string',
      tenantRateLimitPolicy: SetQueueAttributesRequestTenantRateLimitPolicy,
      visibilityTimeout: 'number',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
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


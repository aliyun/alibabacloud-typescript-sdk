// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetQueueAttributesRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The queue to which dead-letter messages are delivered.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter message delivery.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of retries.
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
  dlqPolicy?: SetQueueAttributesRequestDlqPolicy;
  /**
   * @remarks
   * Specifies whether to enable the log management feature. Valid values:
   * 
   * *   true: enabled.
   * *   false: disabled. Default value: false.
   * 
   * @example
   * True
   */
  enableLogging?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the queue. Valid values: 1024 to 65536. Unit: bytes. Default value: 65536.
   * 
   * @example
   * 1024
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the queue. After the specified retention period ends, the message is deleted regardless of whether the message is received. Valid values: 60 to 604800. Unit: seconds. Default value: 345600.
   * 
   * @example
   * 120
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
   * testqueue
   */
  queueName?: string;
  tenantRateLimitPolicy?: SetQueueAttributesRequestTenantRateLimitPolicy;
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
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      dlqPolicy: SetQueueAttributesRequestDlqPolicy,
      enableLogging: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
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


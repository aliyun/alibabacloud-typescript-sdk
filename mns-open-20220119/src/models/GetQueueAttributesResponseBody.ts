// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueAttributesResponseBodyDataDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter message delivery.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether dead-letter message delivery is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of delivery attempts for a message.
   * 
   * @example
   * 3
   */
  maxReceiveCount?: string;
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
      maxReceiveCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponseBodyDataTenantRateLimitPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether throttling is enabled. Valid values:
   * - true
   * - false
   * 
   * @example
   * true
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

export class GetQueueAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The approximate total number of messages in the Active state in the queue.
   * 
   * <warning>This field will be deprecated and default to 0. We recommend that you use the CloudMonitor API to obtain metrics.</warning>
   * 
   * @example
   * 0
   */
  activeMessages?: number;
  /**
   * @remarks
   * The time when the queue was created. The value is a UNIX timestamp in seconds in UTC.
   * 
   * @example
   * 1250700999
   */
  createTime?: number;
  /**
   * @remarks
   * The approximate total number of messages in the Delayed state in the queue.
   * 
   * <warning>This field will be deprecated and default to 0. We recommend that you use the CloudMonitor API to obtain metrics.</warning>
   * 
   * @example
   * 0
   */
  delayMessages?: number;
  /**
   * @remarks
   * The delay time for all messages sent to the queue. Messages sent to the queue can be consumed only after the delay time specified by this parameter elapses. Unit: seconds.
   * 
   * @example
   * 30
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: GetQueueAttributesResponseBodyDataDlqPolicy;
  /**
   * @remarks
   * Specifies whether server-side encryption is enabled. Valid values: true and false.
   * 
   * @example
   * true
   */
  enableSSE?: boolean;
  /**
   * @remarks
   * Specifies whether server-side encryption is enabled.
   * 
   * @example
   * true
   */
  encryptionEnabled?: boolean;
  /**
   * @remarks
   * The approximate total number of messages in the Inactive state in the queue.
   * 
   * <warning>This field will be deprecated and default to 0. We recommend that you use the CloudMonitor API to obtain metrics.</warning>
   * 
   * @example
   * 0
   */
  inactiveMessages?: number;
  /**
   * @remarks
   * The KMS key ID.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The time when the queue attributes were last modified. The value is a UNIX timestamp in seconds in UTC.
   * 
   * @example
   * 1250700999
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Specifies whether the log management feature is enabled.
   * 
   * - True: Enabled.
   * 
   * - False: Disabled.
   * 
   * @example
   * True
   */
  loggingEnabled?: boolean;
  /**
   * @remarks
   * The maximum length of the message body that can be sent to the queue. Unit: bytes.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum retention period of messages in the queue. After the time specified by this parameter elapses from the time when a message is sent to the queue, the message is deleted regardless of whether it has been consumed. Unit: seconds.
   * 
   * @example
   * 65536
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum waiting time for a ReceiveMessage request when the queue is empty. Unit: seconds.
   * 
   * @example
   * 0
   */
  pollingWaitSeconds?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * demo-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The queue type. Valid values:
   * - normal: Standard queue.
   * - fifo: FIFO queue.
   * 
   * @example
   * normal
   */
  queueType?: string;
  /**
   * @remarks
   * The server-side encryption algorithm. Currently, only AES-256-GCM is supported. If this parameter is not specified, the default algorithm is used.
   * 
   * @example
   * AES-256-GCM
   */
  sseAlgorithm?: string;
  /**
   * @remarks
   * The server-side encryption method. Valid values: SMQ and KMS.
   * 
   * @example
   * KMS
   */
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: GetQueueAttributesResponseBodyDataTags[];
  /**
   * @remarks
   * The throttling policy.
   */
  tenantRateLimitPolicy?: GetQueueAttributesResponseBodyDataTenantRateLimitPolicy;
  /**
   * @remarks
   * The duration for which a message remains in the Inactive state after it is consumed from the queue.
   * Valid values: 1 to 43200. Unit: seconds.
   * Default value: 30.
   * 
   * @example
   * 60
   */
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      activeMessages: 'ActiveMessages',
      createTime: 'CreateTime',
      delayMessages: 'DelayMessages',
      delaySeconds: 'DelaySeconds',
      dlqPolicy: 'DlqPolicy',
      enableSSE: 'EnableSSE',
      encryptionEnabled: 'EncryptionEnabled',
      inactiveMessages: 'InactiveMessages',
      kmsKeyId: 'KmsKeyId',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      queueType: 'QueueType',
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      tags: 'Tags',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeMessages: 'number',
      createTime: 'number',
      delayMessages: 'number',
      delaySeconds: 'number',
      dlqPolicy: GetQueueAttributesResponseBodyDataDlqPolicy,
      enableSSE: 'boolean',
      encryptionEnabled: 'boolean',
      inactiveMessages: 'number',
      kmsKeyId: 'string',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      queueType: 'string',
      sseAlgorithm: 'string',
      sseType: 'string',
      tags: { 'type': 'array', 'itemType': GetQueueAttributesResponseBodyDataTags },
      tenantRateLimitPolicy: GetQueueAttributesResponseBodyDataTenantRateLimitPolicy,
      visibilityTimeout: 'number',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class GetQueueAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetQueueAttributesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The response status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetQueueAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


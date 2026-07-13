// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueResponseBodyDataPageDataDlqPolicy extends $dara.Model {
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
   * Indicates whether dead-letter message delivery is enabled.
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

export class ListQueueResponseBodyDataPageDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class ListQueueResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The approximate total number of messages in the Active state in this queue.
   * 
   * This field will default to 0 in the future and is not recommended. Use CloudMonitor API to retrieve this metric instead.
   * 
   * @example
   * 0
   */
  activeMessages?: number;
  /**
   * @remarks
   * The time when the queue was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1250700999
   */
  createTime?: number;
  /**
   * @remarks
   * The approximate total number of messages in the Delayed state in this queue.
   * 
   * This field will default to 0 in the future and is not recommended. Use CloudMonitor API to retrieve this metric instead.
   * 
   * @example
   * 0
   */
  delayMessages?: number;
  /**
   * @remarks
   * The delay period after which all messages sent to this queue become consumable. Unit: seconds.
   * 
   * @example
   * 30
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: ListQueueResponseBodyDataPageDataDlqPolicy;
  enableSSE?: boolean;
  encryptionEnabled?: boolean;
  /**
   * @remarks
   * The approximate total number of messages in the Inactive state in this queue.
   * 
   * This field will default to 0 in the future and is not recommended. Use CloudMonitor API to retrieve this metric instead.
   * 
   * @example
   * 0
   */
  inactiveMessages?: number;
  kmsKeyId?: string;
  /**
   * @remarks
   * The most recent time when the queue attributes were modified. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1250700999
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Indicates whether the log management feature is enabled.
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
   * The maximum size of a message body that can be sent to this queue. Unit: bytes.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum period for which a message can be retained in this queue. After the specified period elapses since a message is sent to the queue, the message is deleted regardless of whether it has been consumed. Unit: seconds.
   * 
   * @example
   * 65536
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum wait time for a ReceiveMessage request when the queue is empty. Unit: seconds.
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
   * The type of the queue. Valid values:
   *    * normal: standard queue
   *    * fifo: FIFO queue
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
  tags?: ListQueueResponseBodyDataPageDataTags[];
  /**
   * @remarks
   * The duration for which a message stays in the Inactive state after it is consumed from the queue.
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
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeMessages: 'number',
      createTime: 'number',
      delayMessages: 'number',
      delaySeconds: 'number',
      dlqPolicy: ListQueueResponseBodyDataPageDataDlqPolicy,
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
      tags: { 'type': 'array', 'itemType': ListQueueResponseBodyDataPageDataTags },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The results returned on the current page.
   */
  pageData?: ListQueueResponseBodyDataPageData[];
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  pages?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 130
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListQueueResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBody extends $dara.Model {
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
  data?: ListQueueResponseBodyData;
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
   * The status of the response.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: ListQueueResponseBodyData,
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


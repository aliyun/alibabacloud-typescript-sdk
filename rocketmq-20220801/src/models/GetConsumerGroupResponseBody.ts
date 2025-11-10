// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupResponseBodyDataConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * Fixed interval retry time,Value range, unit: seconds
   *  - Concurrently:10-1800
   *  - Orderly:1-600
   * 
   * @example
   * 20
   */
  fixedIntervalRetryTime?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy.
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: fixed-interval retry
   * *   DefaultRetryPolicy: exponential backoff retry
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      fixedIntervalRetryTime: 'fixedIntervalRetryTime',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      fixedIntervalRetryTime: 'number',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumption retry policy of the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   */
  consumeRetryPolicy?: GetConsumerGroupResponseBodyDataConsumeRetryPolicy;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The time when the consumer group was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The message delivery method of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * Maximum received message tps
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @example
   * LITE_SELECTIVE
   */
  messageModel?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the consumer group.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * test1
   */
  topicName?: string;
  /**
   * @remarks
   * The time when the consumer group was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      maxReceiveTps: 'maxReceiveTps',
      messageModel: 'messageModel',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: GetConsumerGroupResponseBodyDataConsumeRetryPolicy,
      consumerGroupId: 'string',
      createTime: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      maxReceiveTps: 'number',
      messageModel: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.consumeRetryPolicy && typeof (this.consumeRetryPolicy as any).validate === 'function') {
      (this.consumeRetryPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConsumerGroupResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerGroupResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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


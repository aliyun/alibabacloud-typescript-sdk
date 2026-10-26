// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupResponseBodyDataConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer fails to consume a message due to an exception and the message still cannot be consumed after retries, the message is delivered to the dead-letter topic for subsequent business recovery or review. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The fixed retry interval. Unit: seconds.
   *  - Concurrently (concurrent delivery): 10-1800
   *  - Orderly (ordered delivery): 1-600
   * 
   * @example
   * 20
   */
  fixedIntervalRetryTime?: number;
  /**
   * @remarks
   * The maximum number of retry attempts.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy type.
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
   * The time when the consumer group was created, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The delivery order of the consumer group.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Indicates whether exclusive consumption is enabled.
   * 
   * @example
   * false
   */
  exclusive?: boolean;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for consuming messages.
   * 
   * @example
   * 2000
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The consumption pattern. Valid values:
   *  - CLUSTERING: clustering consumption.
   *  - LITE_SELECTIVE: LITE_SELECTIVE.
   * 
   * @example
   * LITE_SELECTIVE
   */
  messageModel?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the consumer group.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The topic name for the lite type.
   * 
   * @example
   * test1
   */
  topicName?: string;
  /**
   * @remarks
   * The time when the consumer group was last updated, in the format of YYYY-MM-DD HH:mm:ss.
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
      exclusive: 'exclusive',
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
      exclusive: 'boolean',
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
   * The fault code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetConsumerGroupResponseBodyData;
  /**
   * @remarks
   * The dynamic fault code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic fault message.
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
   * The fault message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID, which can be used to troubleshoot and locate faults.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execute operation was successful.
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


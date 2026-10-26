// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequestConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer fails to consume a message and the message still failed after retries, the message is delivered to the dead-letter topic for subsequent business recovery or backtracking. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The fixed retry interval, in seconds. This parameter takes effect when the retry policy is set to FixedRetryPolicy.
   * 
   * Valid values:
   * - Concurrent delivery: 10 to 1800
   * - Ordered delivery: 1 to 600
   * 
   * @example
   * 10
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
   * The retry policy type. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid parameter values:
   * - FixedRetryPolicy: fixed-interval retry, supported only for ordered delivery
   * - DefaultRetryPolicy: progressive backoff retry, supported only for concurrent delivery
   * 
   * This parameter is required.
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

export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The consumption retry policy of the consumer group to be created. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The delivery order type of the consumer group to be created.
   * 
   * Valid parameter values:
   * - Concurrently: concurrent delivery
   * - Orderly: ordered delivery
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Specifies whether to enable exclusive subscription, which means a LiteTopic can only be subscribed to by one consumer. Set to true to enable or false to shutdown.
   */
  exclusive?: boolean;
  /**
   * @remarks
   * The maximum TPS for consuming messages.
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The subscribe pattern for consumers:
   * - CLUSTERING: clustering consumption pattern. All consumers in the ConsumerGroup share the same subscription.
   * - LITE_SELECTIVE: lightweight consumption pattern. Consumers in the ConsumerGroup can have different subscriptions.
   * 
   * @example
   * LITE_SELECTIVE
   */
  messageModel?: string;
  /**
   * @remarks
   * The remarks for the consumer group to be created.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The name of the lite-type topic to subscribe to when using the LITE_SELECTIVE consumption pattern.
   * 
   * @example
   * liteTopicTest
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      exclusive: 'exclusive',
      maxReceiveTps: 'maxReceiveTps',
      messageModel: 'messageModel',
      remark: 'remark',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: CreateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      exclusive: 'boolean',
      maxReceiveTps: 'number',
      messageModel: 'string',
      remark: 'string',
      topicName: 'string',
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


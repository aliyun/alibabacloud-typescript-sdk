// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerGroupRequestConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer fails to consume a message and the message still fails after retries, the message is delivered to the dead-letter topic for subsequent business recovery or review. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The fixed retry interval. Unit: seconds. This parameter takes effect only when the retry policy is set to FixedRetryPolicy (fixed-interval retry).
   * Valid values:
   *   - Concurrent delivery: 10-1800
   *   - Ordered delivery: 1-600
   * 
   * @example
   * 10
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
   * The retry policy type. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * - FixedRetryPolicy: fixed-interval retry. Only ordered delivery is supported.
   * - DefaultRetryPolicy: incremental backoff retry. Only concurrent delivery is supported.
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

export class UpdateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The updated consumption retry policy of the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: UpdateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * Modification is not supported.
   * 
   * @example
   * Concurrently
   * 
   * @deprecated
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The upper limit of TPS for consuming messages.
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The updated remarks of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      maxReceiveTps: 'maxReceiveTps',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: UpdateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      maxReceiveTps: 'number',
      remark: 'string',
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


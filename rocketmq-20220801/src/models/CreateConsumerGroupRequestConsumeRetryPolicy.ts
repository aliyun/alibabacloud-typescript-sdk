// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequestConsumeRetryPolicy extends $dara.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a message still fails to be consumed after the maximum number of retries specified in the consumption retry policy is reached, the message is delivered to the dead-letter topic for subsequent business recovery or backtracking. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * Fixed retry interval, unit: seconds.This option is effective when retryPolicy is FixedRetryPolicy.Value range：
   *   - Concurrently:10-600
   *   - Orderly:1-60
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
   * The retry policy. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: fixed-interval retry. This value is valid only if you set deliveryOrderType to Orderly.
   * *   DefaultRetryPolicy: exponential backoff retry. This value is valid only if you set deliveryOrderType to Concurrently.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConsumerGroupRequestConsumeRetryPolicy } from "./CreateConsumerGroupRequestConsumeRetryPolicy";


export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The consumption retry policy of the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The message delivery method of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The maximum number of messages that can be processed by consumers per second.
   * 
   * @example
   * 300
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The description of the consumer group.
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
      consumeRetryPolicy: CreateConsumerGroupRequestConsumeRetryPolicy,
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


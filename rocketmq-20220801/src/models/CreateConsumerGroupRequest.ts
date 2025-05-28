// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateConsumerGroupRequestConsumeRetryPolicy } from "./CreateConsumerGroupRequestConsumeRetryPolicy";


export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * consume retry policy
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * Maximum received message tps
   * 
   * @example
   * 300
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The HTTP status code.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger } from "./RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger";


export class RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails extends $dara.Model {
  /**
   * @remarks
   * amount of the supplementary refund for the change order
   * 
   * @example
   * 30
   */
  changeOrderRefundFee?: number;
  /**
   * @remarks
   * amount of the supplementary refund for the original order
   * 
   * @example
   * 30
   */
  originalOrderRefundFee?: number;
  /**
   * @remarks
   * passenger for the refund
   */
  passenger?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeOrderRefundFee: 'change_order_refund_fee',
      originalOrderRefundFee: 'original_order_refund_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderRefundFee: 'number',
      originalOrderRefundFee: 'number',
      passenger: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetailsPassenger,
    };
  }

  validate() {
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


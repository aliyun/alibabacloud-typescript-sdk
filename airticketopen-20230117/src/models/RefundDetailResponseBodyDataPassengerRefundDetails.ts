// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailResponseBodyDataPassengerRefundDetailsPassenger } from "./RefundDetailResponseBodyDataPassengerRefundDetailsPassenger";
import { RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee } from "./RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee";


export class RefundDetailResponseBodyDataPassengerRefundDetails extends $dara.Model {
  /**
   * @remarks
   * information of the passenger applying for a refund
   */
  passenger?: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger;
  /**
   * @remarks
   * details of the refund fee
   */
  refundFee?: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee;
  static names(): { [key: string]: string } {
    return {
      passenger: 'passenger',
      refundFee: 'refund_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passenger: RefundDetailResponseBodyDataPassengerRefundDetailsPassenger,
      refundFee: RefundDetailResponseBodyDataPassengerRefundDetailsRefundFee,
    };
  }

  validate() {
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(this.refundFee && typeof (this.refundFee as any).validate === 'function') {
      (this.refundFee as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


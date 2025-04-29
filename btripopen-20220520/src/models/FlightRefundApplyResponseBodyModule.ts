// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * refun1234
   */
  disSubOrderId?: string;
  /**
   * @example
   * 1231231
   */
  refundApplyId?: number;
  /**
   * @example
   * 1000
   */
  refundFee?: number;
  /**
   * @example
   * 100
   */
  refundMoney?: number;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
      refundApplyId: 'refund_apply_id',
      refundFee: 'refund_fee',
      refundMoney: 'refund_money',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
      refundApplyId: 'number',
      refundFee: 'number',
      refundMoney: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


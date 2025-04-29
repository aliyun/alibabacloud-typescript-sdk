// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailV2Request extends $dara.Model {
  /**
   * @example
   * cheshiapi
   */
  isvName?: string;
  /**
   * @example
   * 1002039195025156784
   */
  orderId?: string;
  outOrderId?: string;
  outRefundApplyId?: string;
  /**
   * @example
   * 1002039195025156700
   */
  refundApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundApplyId: 'out_refund_apply_id',
      refundApplyId: 'refund_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      outRefundApplyId: 'string',
      refundApplyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


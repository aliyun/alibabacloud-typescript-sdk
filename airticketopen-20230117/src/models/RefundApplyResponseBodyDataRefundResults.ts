// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundApplyResponseBodyDataRefundResultsRefundPassengers } from "./RefundApplyResponseBodyDataRefundResultsRefundPassengers";


export class RefundApplyResponseBodyDataRefundResults extends $dara.Model {
  /**
   * @remarks
   * reason for refund application failure
   * 
   * @example
   * desc reason
   */
  failReason?: string;
  /**
   * @remarks
   * refund order number
   * 
   * @example
   * 4966***617202
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * passengers of current refund order
   */
  refundPassengers?: RefundApplyResponseBodyDataRefundResultsRefundPassengers[];
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund order created successfully
   * 
   * 1: refund order creation failed
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      failReason: 'fail_reason',
      refundOrderNum: 'refund_order_num',
      refundPassengers: 'refund_passengers',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      refundOrderNum: 'number',
      refundPassengers: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResultsRefundPassengers },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundPassengers)) {
      $dara.Model.validateArray(this.refundPassengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


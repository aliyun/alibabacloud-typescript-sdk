// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundApplyResponseBodyDataRefundResults } from "./RefundApplyResponseBodyDataRefundResults";


export class RefundApplyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund results
   */
  refundResults?: RefundApplyResponseBodyDataRefundResults[];
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundResults: 'refund_results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundResults: { 'type': 'array', 'itemType': RefundApplyResponseBodyDataRefundResults },
    };
  }

  validate() {
    if(Array.isArray(this.refundResults)) {
      $dara.Model.validateArray(this.refundResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


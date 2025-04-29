// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderRefundDetailQueryResponseBodyModuleRefundDetails } from "./OrderRefundDetailQueryResponseBodyModuleRefundDetails";


export class OrderRefundDetailQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1017002195370467138
   */
  orderId?: string;
  refundDetails?: OrderRefundDetailQueryResponseBodyModuleRefundDetails[];
  /**
   * @example
   * 10000
   */
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      refundDetails: 'refund_details',
      totalAmount: 'total_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      refundDetails: { 'type': 'array', 'itemType': OrderRefundDetailQueryResponseBodyModuleRefundDetails },
      totalAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.refundDetails)) {
      $dara.Model.validateArray(this.refundDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


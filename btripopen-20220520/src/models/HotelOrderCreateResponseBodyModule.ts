// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123
   */
  btripOrderId?: number;
  paymentNo?: string;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      paymentNo: 'payment_no',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'number',
      paymentNo: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


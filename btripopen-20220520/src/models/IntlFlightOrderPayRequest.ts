// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderPayRequest extends $dara.Model {
  /**
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @example
   * ZHANG/SAN
   */
  buyerName?: string;
  /**
   * @example
   * TRAVEL
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  orderPrice?: number;
  /**
   * @example
   * F11372878673688133632
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      isvName: 'isv_name',
      orderId: 'order_id',
      orderPrice: 'order_price',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      orderId: 'string',
      orderPrice: 'number',
      outOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailRequest extends $dara.Model {
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
   * 1012000000000000
   */
  orderId?: string;
  /**
   * @example
   * F11374007131319304192
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      orderId: 'string',
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


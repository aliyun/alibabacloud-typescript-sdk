// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderPayRequest extends $dara.Model {
  extParams?: { [key: string]: any };
  /**
   * @example
   * TRAVEL
   */
  isvName?: string;
  /**
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @example
   * F11372878673688133632
   */
  outOrderId?: string;
  /**
   * @example
   * 15500
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      extParams: 'ext_params',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.extParams) {
      $dara.Model.validateMap(this.extParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderPayShrinkRequest extends $dara.Model {
  extParamsShrink?: string;
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
      extParamsShrink: 'ext_params',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extParamsShrink: 'string',
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
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


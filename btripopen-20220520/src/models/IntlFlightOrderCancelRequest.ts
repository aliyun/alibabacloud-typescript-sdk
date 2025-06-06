// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderCancelRequest extends $dara.Model {
  /**
   * @example
   * TRAVEL
   */
  isvName?: string;
  memo?: string;
  /**
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
      isvName: 'isv_name',
      memo: 'memo',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      memo: 'string',
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


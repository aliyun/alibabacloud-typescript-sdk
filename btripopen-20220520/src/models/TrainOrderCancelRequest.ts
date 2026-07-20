// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCancelRequest extends $dara.Model {
  /**
   * @example
   * 1234223
   */
  changeOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @example
   * 123321245534
   */
  outChangeOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      orderId: 'order_id',
      outChangeOrderId: 'out_change_order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      orderId: 'string',
      outChangeOrderId: 'string',
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


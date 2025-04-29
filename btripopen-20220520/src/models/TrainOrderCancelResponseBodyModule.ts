// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCancelResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 11127278782
   */
  changeOrderId?: string;
  /**
   * @example
   * 116019444
   */
  orderId?: string;
  /**
   * @example
   * 43534345
   */
  outChangeOrderId?: string;
  /**
   * @example
   * 3702553342926024704
   */
  outOrderId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      orderId: 'order_id',
      outChangeOrderId: 'out_change_order_id',
      outOrderId: 'out_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      orderId: 'string',
      outChangeOrderId: 'string',
      outOrderId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderChangeConfirmResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123445443444
   */
  changeOrderId?: string;
  /**
   * @example
   * 116019444
   */
  orderId?: string;
  /**
   * @example
   * 1234232
   */
  outOrderId?: string;
  /**
   * @example
   * 0
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      orderId: 'string',
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


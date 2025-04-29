// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyRefundResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 116019444
   */
  orderId?: string;
  /**
   * @example
   * 1017002195370467200
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


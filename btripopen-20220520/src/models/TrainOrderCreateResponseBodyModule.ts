// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1017002195798359369
   */
  orderId?: string;
  /**
   * @example
   * 1233333
   */
  outOrderId?: string;
  /**
   * @example
   * 9
   */
  payStatus?: string;
  /**
   * @example
   * 5
   */
  serviceFee?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      payStatus: 'pay_status',
      serviceFee: 'service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      payStatus: 'string',
      serviceFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


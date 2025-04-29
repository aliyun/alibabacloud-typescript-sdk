// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderPayResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1017124195788186048
   */
  orderId?: string;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


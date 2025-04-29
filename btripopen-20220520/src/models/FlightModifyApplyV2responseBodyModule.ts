// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyApplyV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1017002195370467138
   */
  orderId?: string;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195786853020
   */
  outSubOrderId?: string;
  /**
   * @example
   * 1019195786853020
   */
  subOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      subOrderId: 'sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
      subOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


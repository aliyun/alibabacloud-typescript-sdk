// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2ResponseBodyModule extends $dara.Model {
  asyncCreateOrderKey?: string;
  /**
   * @example
   * 2023-08-10 17:42:32
   */
  latestPayTime?: string;
  /**
   * @example
   * 1017002195798359369
   */
  orderId?: number;
  /**
   * @example
   * cheshiapi002kwl
   */
  outOrderId?: string;
  /**
   * @example
   * 32
   */
  status?: number;
  /**
   * @example
   * 51000
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      latestPayTime: 'latest_pay_time',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      status: 'status',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      latestPayTime: 'string',
      orderId: 'number',
      outOrderId: 'string',
      status: 'number',
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


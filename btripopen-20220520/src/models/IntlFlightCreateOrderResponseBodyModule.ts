// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * deb6372db8194f1c94c23bc4fadc508d
   */
  asyncCreateOrderKey?: string;
  /**
   * @example
   * 2023-08-10 17:42:32
   */
  latestPayTime?: string;
  /**
   * @example
   * 1003038197806523003
   */
  orderId?: number;
  /**
   * @example
   * F11378244642107293696
   */
  outOrderId?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  /**
   * @example
   * -1
   */
  status?: number;
  /**
   * @example
   * 22300
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      latestPayTime: 'latest_pay_time',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      payStatus: 'pay_status',
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
      payStatus: 'number',
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


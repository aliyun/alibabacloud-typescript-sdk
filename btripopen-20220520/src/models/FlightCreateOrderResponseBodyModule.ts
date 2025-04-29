// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 3287177727711
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 123
   */
  btripOrderId?: number;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  lastPayTime?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 100
   */
  paymentPrice?: number;
  /**
   * @example
   * 100
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      btripOrderId: 'btrip_order_id',
      disOrderId: 'dis_order_id',
      lastPayTime: 'last_pay_time',
      orderStatus: 'order_status',
      payStatus: 'pay_status',
      paymentPrice: 'payment_price',
      totalPrice: 'total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      btripOrderId: 'number',
      disOrderId: 'string',
      lastPayTime: 'string',
      orderStatus: 'number',
      payStatus: 'number',
      paymentPrice: 'number',
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


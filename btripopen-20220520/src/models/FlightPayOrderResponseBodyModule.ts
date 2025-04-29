// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1000
   */
  actualPayPrice?: number;
  /**
   * @example
   * 12989127316726531726
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  lastPayTime?: string;
  /**
   * @example
   * 0
   */
  payStatus?: number;
  static names(): { [key: string]: string } {
    return {
      actualPayPrice: 'actual_pay_price',
      alipayTradeNo: 'alipay_trade_no',
      lastPayTime: 'last_pay_time',
      payStatus: 'pay_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPayPrice: 'number',
      alipayTradeNo: 'string',
      lastPayTime: 'string',
      payStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


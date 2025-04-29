// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingPayResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  canRetry?: boolean;
  /**
   * @example
   * 1000
   */
  payPrice?: number;
  payStatus?: number;
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  payTime?: string;
  /**
   * @example
   * 23098276578908765
   */
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      canRetry: 'can_retry',
      payPrice: 'pay_price',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      tradeNo: 'trade_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRetry: 'boolean',
      payPrice: 'number',
      payStatus: 'number',
      payTime: 'string',
      tradeNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


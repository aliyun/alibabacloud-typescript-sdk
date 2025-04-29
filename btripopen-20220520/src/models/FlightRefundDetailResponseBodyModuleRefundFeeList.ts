// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundDetailResponseBodyModuleRefundFeeList extends $dara.Model {
  /**
   * @example
   * 293982882881999
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 100
   */
  refundFee?: number;
  /**
   * @example
   * 100
   */
  refundPrice?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      refundFee: 'refund_fee',
      refundPrice: 'refund_price',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayTradeNo: 'string',
      refundFee: 'number',
      refundPrice: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


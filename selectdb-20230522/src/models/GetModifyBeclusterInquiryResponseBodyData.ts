// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModifyBEClusterInquiryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  refundAmount?: string;
  /**
   * @remarks
   * The amount of money.
   * 
   * @example
   * 1.76
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      refundAmount: 'RefundAmount',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      refundAmount: 'string',
      tradeAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


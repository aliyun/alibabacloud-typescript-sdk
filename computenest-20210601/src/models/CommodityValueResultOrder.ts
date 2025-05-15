// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CommodityValueResultOrder extends $dara.Model {
  /**
   * @remarks
   * 货币代码。
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * 优惠后。
   * 
   * @example
   * 9.99
   */
  tradeAmount?: string;
  /**
   * @remarks
   * 抵扣金额。
   * 
   * @example
   * 1.99
   */
  discountAmount?: string;
  /**
   * @remarks
   * 优惠前。
   * 
   * @example
   * 11.98
   */
  originalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      tradeAmount: 'TradeAmount',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      tradeAmount: 'string',
      discountAmount: 'string',
      originalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


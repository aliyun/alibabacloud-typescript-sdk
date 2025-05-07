// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataOrder extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0018518
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.0092592
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the promotion rule.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 0.0074074
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


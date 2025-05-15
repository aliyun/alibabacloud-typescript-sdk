// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos extends $dara.Model {
  /**
   * @remarks
   * Discount amount.
   * 
   * @example
   * 100
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 900
   */
  originalAmount?: number;
  /**
   * @remarks
   * Pricing module identifier.
   * 
   * @example
   * instance
   */
  resource?: string;
  /**
   * @remarks
   * Discounted price.
   * 
   * @example
   * 500
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      resource: 'Resource',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      resource: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceRenewPriceResponseBodyDataPricePromotions } from "./GetResourceRenewPriceResponseBodyDataPricePromotions";


export class GetResourceRenewPriceResponseBodyDataPrice extends $dara.Model {
  /**
   * @remarks
   * The currency type.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount. The actual price is calculated based on the following formula: Actual price = Original price - Discount.
   * 
   * @example
   * 1
   */
  discountPrice?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 11
   */
  originalPrice?: string;
  /**
   * @remarks
   * The coupon description.
   */
  promotions?: GetResourceRenewPriceResponseBodyDataPricePromotions[];
  /**
   * @remarks
   * The actual price. The actual price is calculated based on the following formula: Actual price = Original price - Discount.
   * 
   * @example
   * 10
   */
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      promotions: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataPricePromotions },
      tradePrice: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


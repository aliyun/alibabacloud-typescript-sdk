// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourcePriceResponseBodyPriceModelPricePromotions } from "./GetResourcePriceResponseBodyPriceModelPricePromotions";


export class GetResourcePriceResponseBodyPriceModelPrice extends $dara.Model {
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
   * 1.00
   */
  discountPrice?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 11.00
   */
  originalPrice?: string;
  /**
   * @remarks
   * The coupon metadata.
   */
  promotions?: GetResourcePriceResponseBodyPriceModelPricePromotions[];
  /**
   * @remarks
   * The actual price. The actual price is calculated based on the following formula: Actual price = Original price - Discount.
   * 
   * @example
   * 10.00
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
      promotions: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelPricePromotions },
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


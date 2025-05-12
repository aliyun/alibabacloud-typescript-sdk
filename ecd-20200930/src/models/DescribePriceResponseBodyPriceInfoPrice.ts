// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPricePromotions } from "./DescribePriceResponseBodyPriceInfoPricePromotions";


export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The unit of currency (USD).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discounted amount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The orders.
   */
  orderLines?: { [key: string]: string };
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2.796
   */
  originalPrice?: number;
  /**
   * @remarks
   * The promotions.
   */
  promotions?: DescribePriceResponseBodyPriceInfoPricePromotions[];
  /**
   * @remarks
   * The price under an effective savings plan.
   * 
   * @example
   * 50.00
   */
  spPrice?: number;
  /**
   * @remarks
   * The actual price. The original price minus the discounted amount equals the actual price.
   * 
   * @example
   * 2.796
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      spPrice: 'SpPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderLines: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPricePromotions },
      spPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.orderLines) {
      $dara.Model.validateMap(this.orderLines);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


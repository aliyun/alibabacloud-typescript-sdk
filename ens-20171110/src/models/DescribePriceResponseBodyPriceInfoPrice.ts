// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The type of currency.
   * 
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 1
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 16125.00
   */
  originalPrice?: number;
  /**
   * @remarks
   * The final price.
   * 
   * @example
   * 126.75
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


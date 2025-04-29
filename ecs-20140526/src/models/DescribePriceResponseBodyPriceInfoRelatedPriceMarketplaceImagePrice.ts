// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice extends $dara.Model {
  /**
   * @remarks
   * The currency unit.
   * 
   * China site (aliyun.com): CNY
   * 
   * International site (alibabacloud.com): USD
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 100
   */
  originalPrice?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 100
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


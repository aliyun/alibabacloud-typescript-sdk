// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail extends $dara.Model {
  /**
   * @example
   * 20.00
   */
  discountPrice?: number;
  /**
   * @example
   * 100.00
   */
  originalPrice?: number;
  /**
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
   * @example
   * 80.00
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resourceType: 'ResourceType',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resourceType: 'string',
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


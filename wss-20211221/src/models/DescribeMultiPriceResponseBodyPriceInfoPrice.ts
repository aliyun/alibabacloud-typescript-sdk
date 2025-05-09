// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails } from "./DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails";
import { DescribeMultiPriceResponseBodyPriceInfoPricePromotions } from "./DescribeMultiPriceResponseBodyPriceInfoPricePromotions";


export class DescribeMultiPriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 534.6
   */
  discountPrice?: number;
  /**
   * @example
   * 6800
   */
  originalPrice?: number;
  priceDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails[];
  promotions?: DescribeMultiPriceResponseBodyPriceInfoPricePromotions[];
  refundInstanceIdPriceMap?: { [key: string]: number };
  /**
   * @example
   * 60.00
   */
  refundPrice?: number;
  /**
   * @example
   * 82.6
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      priceDetails: 'PriceDetails',
      promotions: 'Promotions',
      refundInstanceIdPriceMap: 'RefundInstanceIdPriceMap',
      refundPrice: 'RefundPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      priceDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails },
      promotions: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePromotions },
      refundInstanceIdPriceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      refundPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.priceDetails)) {
      $dara.Model.validateArray(this.priceDetails);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(this.refundInstanceIdPriceMap) {
      $dara.Model.validateMap(this.refundInstanceIdPriceMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


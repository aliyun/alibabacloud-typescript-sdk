// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PromotionInfo } from "./PromotionInfo";


export class PriceInfo extends $dara.Model {
  currency?: string;
  discountPrice?: string;
  originalPrice?: string;
  payType?: string;
  promotionResults?: PromotionInfo[];
  resourceType?: string;
  spotInstanceTypeOriginalPrice?: string;
  spotInstanceTypePrice?: string;
  spotOriginalPrice?: string;
  spotPrice?: string;
  taxPrice?: string;
  tradePrice?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      payType: 'PayType',
      promotionResults: 'PromotionResults',
      resourceType: 'ResourceType',
      spotInstanceTypeOriginalPrice: 'SpotInstanceTypeOriginalPrice',
      spotInstanceTypePrice: 'SpotInstanceTypePrice',
      spotOriginalPrice: 'SpotOriginalPrice',
      spotPrice: 'SpotPrice',
      taxPrice: 'TaxPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'string',
      originalPrice: 'string',
      payType: 'string',
      promotionResults: { 'type': 'array', 'itemType': PromotionInfo },
      resourceType: 'string',
      spotInstanceTypeOriginalPrice: 'string',
      spotInstanceTypePrice: 'string',
      spotOriginalPrice: 'string',
      spotPrice: 'string',
      taxPrice: 'string',
      tradePrice: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.promotionResults)) {
      $dara.Model.validateArray(this.promotionResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule extends $dara.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules extends $dara.Model {
  rule?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $dara.Model {
  discountPrice?: number;
  originalPrice?: number;
  resource?: string;
  subRules?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resource: 'Resource',
      subRules: 'SubRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resource: 'string',
      subRules: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.subRules && typeof (this.subRules as any).validate === 'function') {
      (this.subRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos extends $dara.Model {
  detailInfo?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo[];
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo },
    };
  }

  validate() {
    if(Array.isArray(this.detailInfo)) {
      $dara.Model.validateArray(this.detailInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The currency. Valid values:
   * 
   * - `CNY`: For the China site.
   * 
   * - `USD`: For the international site.
   * 
   * @example
   * CNY
   */
  currency?: string;
  detailInfos?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 61.320
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 175.200
   */
  originalPrice?: number;
  /**
   * @remarks
   * The final price (original price - discount).
   * 
   * @example
   * 113.880
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos,
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.detailInfos && typeof (this.detailInfos as any).validate === 'function') {
      (this.detailInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @example
   * 100
   */
  originalPrice?: number;
  /**
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

export class DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPrice extends $dara.Model {
  marketplaceImagePrice?: DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice;
  static names(): { [key: string]: string } {
    return {
      marketplaceImagePrice: 'MarketplaceImagePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketplaceImagePrice: DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPriceMarketplaceImagePrice,
    };
  }

  validate() {
    if(this.marketplaceImagePrice && typeof (this.marketplaceImagePrice as any).validate === 'function') {
      (this.marketplaceImagePrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule extends $dara.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfoRules extends $dara.Model {
  rule?: DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceResponseBodyPriceInfoRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice;
  relatedPrice?: DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPrice;
  rules?: DescribeInstanceModificationPriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      relatedPrice: 'RelatedPrice',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice,
      relatedPrice: DescribeInstanceModificationPriceResponseBodyPriceInfoRelatedPrice,
      rules: DescribeInstanceModificationPriceResponseBodyPriceInfoRules,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    if(this.relatedPrice && typeof (this.relatedPrice as any).validate === 'function') {
      (this.relatedPrice as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceModificationPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Price information, including price details and promotional rules.
   */
  priceInfo?: DescribeInstanceModificationPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3DC3196-379B-4F32-A2C5-B937134FAD8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeInstanceModificationPriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


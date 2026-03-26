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
   * The currency unit. Valid values:
   * 
   * *   Alibaba Cloud China site (aliyun.com): CNY
   * *   Alibaba Cloud International site (alibabacloud.com): USD
   * 
   * @example
   * CNY
   */
  currency?: string;
  detailInfos?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos;
  /**
   * @remarks
   * The discount.
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
   * The transaction price, which is equal to the original price minus the discount.
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
   * The price.
   */
  price?: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice;
  rules?: DescribeInstanceModificationPriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice,
      rules: DescribeInstanceModificationPriceResponseBodyPriceInfoRules,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
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
   * Details about the prices and promotion rules.
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


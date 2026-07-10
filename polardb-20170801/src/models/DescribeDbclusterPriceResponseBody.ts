// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
  couponNo?: string;
  isSelected?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      isSelected: 'IsSelected',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      isSelected: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPriceResponseBodyPriceInfoCoupons extends $dara.Model {
  coupon?: DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon },
    };
  }

  validate() {
    if(Array.isArray(this.coupon)) {
      $dara.Model.validateArray(this.coupon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleId)) {
      $dara.Model.validateArray(this.ruleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPriceResponseBodyPriceInfo extends $dara.Model {
  coupons?: DescribeDBClusterPriceResponseBodyPriceInfoCoupons;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 1978.2
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1099.0
   */
  originalPrice?: number;
  ruleIds?: DescribeDBClusterPriceResponseBodyPriceInfoRuleIds;
  /**
   * @remarks
   * The final price, which is the original price minus the discount.
   * 
   * @example
   * 165.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      ruleIds: 'RuleIds',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribeDBClusterPriceResponseBodyPriceInfoCoupons,
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      ruleIds: DescribeDBClusterPriceResponseBodyPriceInfoRuleIds,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    if(this.ruleIds && typeof (this.ruleIds as any).validate === 'function') {
      (this.ruleIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPriceResponseBodyRulesRule extends $dara.Model {
  name?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribeDBClusterPriceResponseBodyRules extends $dara.Model {
  rule?: DescribeDBClusterPriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeDBClusterPriceResponseBodyRulesRule },
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

export class DescribeDBClusterPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order type. Valid values:
   * * BUY: new purchase.
   * * UPGRADE: specification change.
   * * RENEW: renewal.
   * * CONVERT: billing method conversion.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The price details.
   */
  priceInfo?: DescribeDBClusterPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E2FE3BB-C677-5FF9-9FC5-XXX
   */
  requestId?: string;
  rules?: DescribeDBClusterPriceResponseBodyRules;
  /**
   * @remarks
   * Indicates whether discounts are allowed.
   * 
   * @example
   * False
   */
  showDiscount?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderType: 'OrderType',
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      rules: 'Rules',
      showDiscount: 'ShowDiscount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderType: 'string',
      priceInfo: DescribeDBClusterPriceResponseBodyPriceInfo,
      requestId: 'string',
      rules: DescribeDBClusterPriceResponseBodyRules,
      showDiscount: 'boolean',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
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


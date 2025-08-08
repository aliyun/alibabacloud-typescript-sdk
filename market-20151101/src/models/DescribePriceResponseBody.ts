// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyCouponsCoupon extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  canPromFee?: number;
  couponDesc?: string;
  couponName?: string;
  /**
   * @example
   * ActiveCoupon
   */
  couponOptionCode?: string;
  /**
   * @example
   * 3874923111
   */
  couponOptionNo?: string;
  /**
   * @example
   * false
   */
  isSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionCode: 'CouponOptionCode',
      couponOptionNo: 'CouponOptionNo',
      isSelected: 'IsSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionCode: 'string',
      couponOptionNo: 'string',
      isSelected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyCoupons extends $dara.Model {
  coupon?: DescribePriceResponseBodyCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyCouponsCoupon },
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

export class DescribePriceResponseBodyPromotionRulesPromotionRule extends $dara.Model {
  name?: string;
  /**
   * @example
   * 102112
   */
  ruleId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRules extends $dara.Model {
  promotionRule?: DescribePriceResponseBodyPromotionRulesPromotionRule[];
  static names(): { [key: string]: string } {
    return {
      promotionRule: 'PromotionRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRule: { 'type': 'array', 'itemType': DescribePriceResponseBodyPromotionRulesPromotionRule },
    };
  }

  validate() {
    if(Array.isArray(this.promotionRule)) {
      $dara.Model.validateArray(this.promotionRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $dara.Model {
  coupons?: DescribePriceResponseBodyCoupons;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * true
   */
  cuxiao?: boolean;
  /**
   * @example
   * MONTH
   */
  cycle?: string;
  /**
   * @example
   * 178.20
   */
  discountPrice?: number;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * ORDER.NO_REAL_NAME_AUTHENTICATION
   */
  expressionCode?: string;
  expressionMessage?: string;
  infoTitle?: string;
  /**
   * @example
   * 198.00
   */
  originalPrice?: number;
  /**
   * @example
   * cmgj01****
   */
  productCode?: string;
  promotionRules?: DescribePriceResponseBodyPromotionRules;
  /**
   * @example
   * 19.80
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      cuxiao: 'Cuxiao',
      cycle: 'Cycle',
      discountPrice: 'DiscountPrice',
      duration: 'Duration',
      expressionCode: 'ExpressionCode',
      expressionMessage: 'ExpressionMessage',
      infoTitle: 'InfoTitle',
      originalPrice: 'OriginalPrice',
      productCode: 'ProductCode',
      promotionRules: 'PromotionRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribePriceResponseBodyCoupons,
      currency: 'string',
      cuxiao: 'boolean',
      cycle: 'string',
      discountPrice: 'number',
      duration: 'number',
      expressionCode: 'string',
      expressionMessage: 'string',
      infoTitle: 'string',
      originalPrice: 'number',
      productCode: 'string',
      promotionRules: DescribePriceResponseBodyPromotionRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    if(this.promotionRules && typeof (this.promotionRules as any).validate === 'function') {
      (this.promotionRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
  checkErrMsg?: string;
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      checkErrMsg: 'CheckErrMsg',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkErrMsg: 'string',
      errorCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
  couponNo?: string;
  description?: string;
  isSelected?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      description: 'Description',
      isSelected: 'IsSelected',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      description: 'string',
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

export class DescribeRenewalPriceResponseBodyPriceInfoCoupons extends $dara.Model {
  coupon?: DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon },
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

export class DescribeRenewalPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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

export class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
  activityInfo?: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo;
  coupons?: DescribeRenewalPriceResponseBodyPriceInfoCoupons;
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  ruleIds?: DescribeRenewalPriceResponseBodyPriceInfoRuleIds;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      activityInfo: 'ActivityInfo',
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
      activityInfo: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo,
      coupons: DescribeRenewalPriceResponseBodyPriceInfoCoupons,
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      ruleIds: DescribeRenewalPriceResponseBodyPriceInfoRuleIds,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.activityInfo && typeof (this.activityInfo as any).validate === 'function') {
      (this.activityInfo as any).validate();
    }
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

export class DescribeRenewalPriceResponseBodyRulesRule extends $dara.Model {
  description?: string;
  name?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class DescribeRenewalPriceResponseBodyRules extends $dara.Model {
  rule?: DescribeRenewalPriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyRulesRule },
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

export class DescribeRenewalPriceResponseBody extends $dara.Model {
  priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
  requestId?: string;
  rules?: DescribeRenewalPriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
      requestId: 'string',
      rules: DescribeRenewalPriceResponseBodyRules,
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


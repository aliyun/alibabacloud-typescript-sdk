// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
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

export class DescribePriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
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

export class DescribePriceResponseBodyPriceInfoCoupons extends $dara.Model {
  coupon?: DescribePriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoCouponsCoupon },
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

export class DescribePriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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

export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  activityInfo?: DescribePriceResponseBodyPriceInfoActivityInfo;
  coupons?: DescribePriceResponseBodyPriceInfoCoupons;
  currency?: string;
  discountPrice?: number;
  orderLines?: any;
  originalPrice?: number;
  ruleIds?: DescribePriceResponseBodyPriceInfoRuleIds;
  tradeMaxRCUAmount?: number;
  tradeMinRCUAmount?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      activityInfo: 'ActivityInfo',
      coupons: 'Coupons',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      ruleIds: 'RuleIds',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityInfo: DescribePriceResponseBodyPriceInfoActivityInfo,
      coupons: DescribePriceResponseBodyPriceInfoCoupons,
      currency: 'string',
      discountPrice: 'number',
      orderLines: 'any',
      originalPrice: 'number',
      ruleIds: DescribePriceResponseBodyPriceInfoRuleIds,
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
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

export class DescribePriceResponseBodyRulesRule extends $dara.Model {
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

export class DescribePriceResponseBodyRules extends $dara.Model {
  rule?: DescribePriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribePriceResponseBodyRulesRule },
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

export class DescribePriceResponseBodyServerlessPrice extends $dara.Model {
  RCUDiscountMaxAmount?: number;
  RCUDiscountMinAmount?: number;
  RCUOriginalMaxAmount?: number;
  RCUOriginalMinAmount?: number;
  storageOriginalAmount?: number;
  totalOriginalMaxAmount?: number;
  totalOriginalMinAmount?: number;
  tradeMaxRCUAmount?: number;
  tradeMinRCUAmount?: number;
  storageDiscountAmount?: number;
  static names(): { [key: string]: string } {
    return {
      RCUDiscountMaxAmount: 'RCUDiscountMaxAmount',
      RCUDiscountMinAmount: 'RCUDiscountMinAmount',
      RCUOriginalMaxAmount: 'RCUOriginalMaxAmount',
      RCUOriginalMinAmount: 'RCUOriginalMinAmount',
      storageOriginalAmount: 'StorageOriginalAmount',
      totalOriginalMaxAmount: 'TotalOriginalMaxAmount',
      totalOriginalMinAmount: 'TotalOriginalMinAmount',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
      storageDiscountAmount: 'storageDiscountAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RCUDiscountMaxAmount: 'number',
      RCUDiscountMinAmount: 'number',
      RCUOriginalMaxAmount: 'number',
      RCUOriginalMinAmount: 'number',
      storageOriginalAmount: 'number',
      totalOriginalMaxAmount: 'number',
      totalOriginalMinAmount: 'number',
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
      storageDiscountAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $dara.Model {
  orderParams?: string;
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  requestId?: string;
  rules?: DescribePriceResponseBodyRules;
  serverlessPrice?: DescribePriceResponseBodyServerlessPrice;
  showDiscount?: boolean;
  tradeMaxRCUAmount?: number;
  tradeMinRCUAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderParams: 'OrderParams',
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      rules: 'Rules',
      serverlessPrice: 'ServerlessPrice',
      showDiscount: 'ShowDiscount',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderParams: 'string',
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
      rules: DescribePriceResponseBodyRules,
      serverlessPrice: DescribePriceResponseBodyServerlessPrice,
      showDiscount: 'boolean',
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.serverlessPrice && typeof (this.serverlessPrice as any).validate === 'function') {
      (this.serverlessPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Error description
   */
  checkErrMsg?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * 123456
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * Success
   */
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
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected.
   * 
   * @example
   * true
   */
  isSelected?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The information about the promotion.
   */
  activityInfo?: DescribePriceResponseBodyPriceInfoActivityInfo;
  /**
   * @remarks
   * The information about the coupon.
   */
  coupons?: DescribePriceResponseBodyPriceInfoCoupons;
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
   * The discount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * Order Information
   */
  orderLines?: any;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2504
   */
  originalPrice?: number;
  /**
   * @remarks
   * An array that consists of the ID of the promotion rule.
   */
  ruleIds?: DescribePriceResponseBodyPriceInfoRuleIds;
  /**
   * @remarks
   * The estimated hourly cost that is calculated based on the maximum number of RCUs you specify.
   * 
   * @example
   * 1**
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The estimated hourly cost that is calculated based on the minimum number of RCUs you specify.
   * 
   * @example
   * 2**
   */
  tradeMinRCUAmount?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 2504
   */
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
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * Activity Description
   */
  description?: string;
  /**
   * @remarks
   * The name of the promotion rule.
   * 
   * @example
   * Rule1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
   * 
   * @example
   * 1020021003939076
   */
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
  /**
   * @remarks
   * The discount amount of the maximum number of RCUs.
   * 
   * @example
   * 1**.*
   */
  RCUDiscountMaxAmount?: number;
  /**
   * @remarks
   * The discount amount of the minimum number of RCUs.
   * 
   * @example
   * 1*.*
   */
  RCUDiscountMinAmount?: number;
  /**
   * @remarks
   * The price of the maximum number of RCUs.
   * 
   * @example
   * 2**.*
   */
  RCUOriginalMaxAmount?: number;
  /**
   * @remarks
   * The price of the minimum number of RCUs.
   * 
   * @example
   * 3*.*
   */
  RCUOriginalMinAmount?: number;
  /**
   * @remarks
   * The original price of the disk capacity.
   * 
   * @example
   * 1*
   */
  storageOriginalAmount?: number;
  /**
   * @remarks
   * The maximum total price before the discount.
   * 
   * @example
   * 2**.*
   */
  totalOriginalMaxAmount?: number;
  /**
   * @remarks
   * The minimum total price before the discount.
   * 
   * @example
   * 2*.*
   */
  totalOriginalMinAmount?: number;
  /**
   * @remarks
   * The transaction price of the maximum number of RCUs.
   * 
   * @example
   * 1**.*
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The transaction price of the minimum number of RCUs.
   * 
   * @example
   * 2*.*
   */
  tradeMinRCUAmount?: number;
  /**
   * @remarks
   * The discounted price of the disk capacity.
   * 
   * @example
   * 2.*
   */
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
  /**
   * @remarks
   * The order parameters.
   * 
   * >  If the **OrderParamOut** parameter is set to **true**, the value of the OrderParams parameter is returned.
   * 
   * @example
   * {\\"autoPay\\":false}"
   */
  orderParams?: string;
  /**
   * @remarks
   * The price information.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA0ADDDC-0BEB-4381-A3ED-73B4C79B8CC6
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the promotion rule.
   */
  rules?: DescribePriceResponseBodyRules;
  /**
   * @remarks
   * The pricing information about a serverless RDS instance.
   */
  serverlessPrice?: DescribePriceResponseBodyServerlessPrice;
  /**
   * @remarks
   * Indicates whether discounts can be used.
   * 
   * @example
   * True
   */
  showDiscount?: boolean;
  /**
   * @remarks
   * The estimated hourly fee that is calculated based on the maximum number of RCUs.
   * 
   * @example
   * 2**
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The estimated hourly fee that is calculated based on the minimum number of RCUs.
   * 
   * @example
   * 1**
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyOrderCouponsCoupon extends $dara.Model {
  activityExtInfo?: { [key: string]: any };
  couponNo?: string;
  description?: string;
  effective?: boolean;
  isSelected?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      activityExtInfo: 'ActivityExtInfo',
      couponNo: 'CouponNo',
      description: 'Description',
      effective: 'Effective',
      isSelected: 'IsSelected',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      couponNo: 'string',
      description: 'string',
      effective: 'boolean',
      isSelected: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.activityExtInfo) {
      $dara.Model.validateMap(this.activityExtInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyOrderCoupons extends $dara.Model {
  coupon?: DescribeRenewalPriceResponseBodyOrderCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyOrderCouponsCoupon },
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

export class DescribeRenewalPriceResponseBodyOrderRuleIds extends $dara.Model {
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

export class DescribeRenewalPriceResponseBodyOrder extends $dara.Model {
  coupons?: DescribeRenewalPriceResponseBodyOrderCoupons;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   USD: United States dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 1144.8
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 1144.8
   */
  originalAmount?: number;
  ruleIds?: DescribeRenewalPriceResponseBodyOrderRuleIds;
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribeRenewalPriceResponseBodyOrderCoupons,
      currency: 'string',
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: DescribeRenewalPriceResponseBodyOrderRuleIds,
      tradeAmount: 'number',
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

export class DescribeRenewalPriceResponseBodyRulesRule extends $dara.Model {
  name?: string;
  ruleDescId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
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

export class DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds extends $dara.Model {
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

export class DescribeRenewalPriceResponseBodySubOrdersSubOrder extends $dara.Model {
  discountAmount?: number;
  instanceId?: string;
  originalAmount?: number;
  ruleIds?: DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds;
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      instanceId: 'InstanceId',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      instanceId: 'string',
      originalAmount: 'number',
      ruleIds: DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds,
      tradeAmount: 'number',
    };
  }

  validate() {
    if(this.ruleIds && typeof (this.ruleIds as any).validate === 'function') {
      (this.ruleIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodySubOrders extends $dara.Model {
  subOrder?: DescribeRenewalPriceResponseBodySubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodySubOrdersSubOrder },
    };
  }

  validate() {
    if(Array.isArray(this.subOrder)) {
      $dara.Model.validateArray(this.subOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of orders.
   */
  order?: DescribeRenewalPriceResponseBodyOrder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  rules?: DescribeRenewalPriceResponseBodyRules;
  subOrders?: DescribeRenewalPriceResponseBodySubOrders;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      requestId: 'RequestId',
      rules: 'Rules',
      subOrders: 'SubOrders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeRenewalPriceResponseBodyOrder,
      requestId: 'string',
      rules: DescribeRenewalPriceResponseBodyRules,
      subOrders: DescribeRenewalPriceResponseBodySubOrders,
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.subOrders && typeof (this.subOrders as any).validate === 'function') {
      (this.subOrders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


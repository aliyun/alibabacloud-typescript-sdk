// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyOrderCouponsCoupon extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The coupon description.
   * 
   * @example
   * coupondemo
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

export class DescribePriceResponseBodyOrderCoupons extends $dara.Model {
  coupon?: DescribePriceResponseBodyOrderCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyOrderCouponsCoupon },
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

export class DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds extends $dara.Model {
  optionId?: number[];
  static names(): { [key: string]: string } {
    return {
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.optionId)) {
      $dara.Model.validateArray(this.optionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderDepreciateInfoContractActivity extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * ****
   */
  activityId?: number;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * contract promotion_order_xxx discount
   */
  activityName?: string;
  /**
   * @remarks
   * The preferential price.
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion code.
   * 
   * @example
   * ****
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion IDs.
   */
  optionIds?: DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * ****
   */
  prodFee?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      finalFee: 'FinalFee',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      optionIds: 'OptionIds',
      prodFee: 'ProdFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      finalFee: 'number',
      finalPromFee: 'number',
      optionCode: 'string',
      optionIds: DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds,
      prodFee: 'number',
    };
  }

  validate() {
    if(this.optionIds && typeof (this.optionIds as any).validate === 'function') {
      (this.optionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * 30%
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * 9*
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The activity information.
   */
  contractActivity?: DescribePriceResponseBodyOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The promotional offer (displayed in the total order amount).
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the promotional offer.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the price reduction rate is displayed.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * 1*
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * **
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * 12*
   */
  originalStandAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      contractActivity: 'ContractActivity',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      isShow: 'IsShow',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      contractActivity: DescribePriceResponseBodyOrderDepreciateInfoContractActivity,
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'boolean',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
    };
  }

  validate() {
    if(this.contractActivity && typeof (this.contractActivity as any).validate === 'function') {
      (this.contractActivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderRuleIds extends $dara.Model {
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

export class DescribePriceResponseBodyOrder extends $dara.Model {
  /**
   * @remarks
   * The order code.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * Details about coupons.
   */
  coupons?: DescribePriceResponseBodyOrderCoupons;
  /**
   * @remarks
   * The currency used for payment. A value of CNY is used when the order was generated on the China site (aliyun.com), and a value of USD is used when the order was generated on the international site (alibabacloud.com).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The activity information.
   */
  depreciateInfo?: DescribePriceResponseBodyOrderDepreciateInfo;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 0.21
   */
  discountAmount?: string;
  /**
   * @remarks
   * The service fees of the order.
   * 
   * @example
   * 0.1
   */
  handlingFeeAmount?: string;
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The information about the order.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.21
   */
  originalAmount?: string;
  /**
   * @remarks
   * The rule IDs.
   */
  ruleIds?: DescribePriceResponseBodyOrderRuleIds;
  /**
   * @remarks
   * Indicates whether the discount information is displayed.
   */
  showDiscountInfo?: boolean;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * ****
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 0
   */
  standPrice?: number;
  /**
   * @remarks
   * The transaction price of the order.
   * 
   * @example
   * 10
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      coupons: 'Coupons',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      handlingFeeAmount: 'HandlingFeeAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      showDiscountInfo: 'ShowDiscountInfo',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      coupons: DescribePriceResponseBodyOrderCoupons,
      currency: 'string',
      depreciateInfo: DescribePriceResponseBodyOrderDepreciateInfo,
      discountAmount: 'string',
      handlingFeeAmount: 'string',
      isContractActivity: 'boolean',
      message: 'string',
      originalAmount: 'string',
      ruleIds: DescribePriceResponseBodyOrderRuleIds,
      showDiscountInfo: 'boolean',
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'string',
    };
  }

  validate() {
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
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
   * The name of the rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1111111111
   */
  ruleDescId?: number;
  /**
   * @remarks
   * The title of the rule.
   * 
   * @example
   * test
   */
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

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds extends $dara.Model {
  optionId?: number[];
  static names(): { [key: string]: string } {
    return {
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.optionId)) {
      $dara.Model.validateArray(this.optionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity extends $dara.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * 1412025702634847
   */
  activityId?: number;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * ****
   */
  activityName?: string;
  /**
   * @remarks
   * The preferential price.
   * 
   * @example
   * ****
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   * 
   * @example
   * ****
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * ****
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion IDs.
   */
  optionIds?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * ****
   */
  prodFee?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      finalFee: 'FinalFee',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      optionIds: 'OptionIds',
      prodFee: 'ProdFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      finalFee: 'number',
      finalPromFee: 'number',
      optionCode: 'string',
      optionIds: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds,
      prodFee: 'number',
    };
  }

  validate() {
    if(this.optionIds && typeof (this.optionIds as any).validate === 'function') {
      (this.optionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * ****
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * ****
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The contract promotion.
   */
  contractActivity?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The promotional offer (displayed in the total order amount).
   * 
   * @example
   * ****
   */
  differential?: number;
  /**
   * @remarks
   * The name of the promotional offer.
   * 
   * @example
   * ****
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * ****
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * ****
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * ****
   */
  originalStandAmount?: number;
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 2024-11-18T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      contractActivity: 'ContractActivity',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      contractActivity: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity,
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(this.contractActivity && typeof (this.contractActivity as any).validate === 'function') {
      (this.contractActivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo extends $dara.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * ******
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * ****
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The promotional offer (displayed in the total order amount).
   * 
   * @example
   * ****
   */
  differential?: number;
  /**
   * @remarks
   * The name of the promotional offer.
   * 
   * @example
   * ****
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * ****
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the price reduction rate is displayed.
   * 
   * @example
   * true
   */
  isShow?: boolean;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * ****
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * ****
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * ****
   */
  originalStandAmount?: number;
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 2024-09-23T14:00:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      isShow: 'IsShow',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'boolean',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr extends $dara.Model {
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * ****
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * ****
   */
  name?: string;
  /**
   * @remarks
   * The attribute type.
   * 
   * @example
   * ****
   */
  type?: number;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * ****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs extends $dara.Model {
  moduleAttr?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr[];
  static names(): { [key: string]: string } {
    return {
      moduleAttr: 'moduleAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleAttr: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr },
    };
  }

  validate() {
    if(Array.isArray(this.moduleAttr)) {
      $dara.Model.validateArray(this.moduleAttr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * ****
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * ****
   */
  discountFee?: number;
  /**
   * @remarks
   * The module attributes.
   */
  moduleAttrs?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs;
  /**
   * @remarks
   * The module code.
   * 
   * @example
   * ****
   */
  moduleCode?: string;
  /**
   * @remarks
   * The module ID.
   * 
   * @example
   * ****
   */
  moduleId?: string;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * ****
   */
  moduleName?: string;
  /**
   * @remarks
   * Indicates whether the order is paid.
   * 
   * @example
   * true
   */
  needOrderPay?: boolean;
  /**
   * @remarks
   * The actual amount paid.
   * 
   * @example
   * 0.0
   */
  payFee?: number;
  /**
   * @remarks
   * Indicates whether the item is billed.
   * 
   * @example
   * ****
   */
  pricingModule?: boolean;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * ****
   */
  standPrice?: number;
  /**
   * @remarks
   * The original price of the instance.
   * 
   * @example
   * 0.0
   */
  totalProductFee?: number;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      depreciateInfo: 'DepreciateInfo',
      discountFee: 'DiscountFee',
      moduleAttrs: 'ModuleAttrs',
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      needOrderPay: 'NeedOrderPay',
      payFee: 'PayFee',
      pricingModule: 'PricingModule',
      standPrice: 'StandPrice',
      totalProductFee: 'TotalProductFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractActivity: 'boolean',
      depreciateInfo: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo,
      discountFee: 'number',
      moduleAttrs: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs,
      moduleCode: 'string',
      moduleId: 'string',
      moduleName: 'string',
      needOrderPay: 'boolean',
      payFee: 'number',
      pricingModule: 'boolean',
      standPrice: 'number',
      totalProductFee: 'number',
    };
  }

  validate() {
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
    }
    if(this.moduleAttrs && typeof (this.moduleAttrs as any).validate === 'function') {
      (this.moduleAttrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstance extends $dara.Model {
  moduleInstance?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance[];
  static names(): { [key: string]: string } {
    return {
      moduleInstance: 'ModuleInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleInstance: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance },
    };
  }

  validate() {
    if(Array.isArray(this.moduleInstance)) {
      $dara.Model.validateArray(this.moduleInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion extends $dara.Model {
  /**
   * @remarks
   * The additional activity information.
   * 
   * @example
   * ****
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The amount that can be deducted by using the coupon.
   * 
   * @example
   * ****
   */
  canPromFee?: string;
  /**
   * @remarks
   * Indicates whether coupons are used. Valid values:
   * 
   * *   default or null (default): Coupons are used.
   * *   youhuiquan_promotion_option_id_for_blank: Coupons are not used.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * ****
   */
  description?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * ****
   */
  name?: string;
  /**
   * @remarks
   * The promotion code.
   * 
   * @example
   * ****
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * ****
   */
  promotionName?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the promotion option is selected.
   * 
   * @example
   * false
   */
  selected?: boolean;
  /**
   * @remarks
   * Indicates whether the discount is displayed.
   * 
   * @example
   * False
   */
  show?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityExtInfo: 'ActivityExtInfo',
      canPromFee: 'CanPromFee',
      couponNo: 'CouponNo',
      description: 'Description',
      name: 'Name',
      optionCode: 'OptionCode',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
      show: 'Show',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      canPromFee: 'string',
      couponNo: 'string',
      description: 'string',
      name: 'string',
      optionCode: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
      show: 'boolean',
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

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions extends $dara.Model {
  optionalPromotion?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion[];
  static names(): { [key: string]: string } {
    return {
      optionalPromotion: 'OptionalPromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionalPromotion: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion },
    };
  }

  validate() {
    if(Array.isArray(this.optionalPromotion)) {
      $dara.Model.validateArray(this.optionalPromotion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail extends $dara.Model {
  /**
   * @remarks
   * The additional activity information.
   * 
   * @example
   * ****
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The derived promotion type.
   * 
   * @example
   * ****
   */
  derivedPromType?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * ****
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * ****
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion type.
   * 
   * @example
   * ****
   */
  promType?: string;
  /**
   * @remarks
   * The promotion code.
   * 
   * @example
   * ****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * ****
   */
  promotionId?: number;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * ****
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      activityExtInfo: 'ActivityExtInfo',
      derivedPromType: 'DerivedPromType',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      promType: 'PromType',
      promotionCode: 'PromotionCode',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      derivedPromType: 'string',
      finalPromFee: 'number',
      optionCode: 'string',
      promType: 'string',
      promotionCode: 'string',
      promotionId: 'number',
      promotionName: 'string',
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

export class DescribePriceResponseBodySubOrdersSubOrderPromDetailList extends $dara.Model {
  promDetail?: DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail[];
  static names(): { [key: string]: string } {
    return {
      promDetail: 'PromDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promDetail: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail },
    };
  }

  validate() {
    if(Array.isArray(this.promDetail)) {
      $dara.Model.validateArray(this.promDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderRuleIds extends $dara.Model {
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

export class DescribePriceResponseBodySubOrdersSubOrder extends $dara.Model {
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * ****
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 0.21
   */
  discountAmount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1xxxxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether eligibility for the contracted discount is met.
   * 
   * @example
   * ****
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The configuration details for each instance of an order line item.
   */
  moduleInstance?: DescribePriceResponseBodySubOrdersSubOrderModuleInstance;
  /**
   * @remarks
   * The optional promotions.
   */
  optionalPromotions?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.21
   */
  originalAmount?: string;
  /**
   * @remarks
   * Details about promotions.
   */
  promDetailList?: DescribePriceResponseBodySubOrdersSubOrderPromDetailList;
  /**
   * @remarks
   * The hit rule IDs.
   */
  ruleIds?: DescribePriceResponseBodySubOrdersSubOrderRuleIds;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * ****
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * ****
   */
  standPrice?: number;
  /**
   * @remarks
   * The transaction price of the order.
   * 
   * @example
   * 10
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      instanceId: 'InstanceId',
      isContractActivity: 'IsContractActivity',
      moduleInstance: 'ModuleInstance',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      promDetailList: 'PromDetailList',
      ruleIds: 'RuleIds',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractActivity: 'boolean',
      depreciateInfo: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo,
      discountAmount: 'string',
      instanceId: 'string',
      isContractActivity: 'boolean',
      moduleInstance: DescribePriceResponseBodySubOrdersSubOrderModuleInstance,
      optionalPromotions: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions,
      originalAmount: 'string',
      promDetailList: DescribePriceResponseBodySubOrdersSubOrderPromDetailList,
      ruleIds: DescribePriceResponseBodySubOrdersSubOrderRuleIds,
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'string',
    };
  }

  validate() {
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
    }
    if(this.moduleInstance && typeof (this.moduleInstance as any).validate === 'function') {
      (this.moduleInstance as any).validate();
    }
    if(this.optionalPromotions && typeof (this.optionalPromotions as any).validate === 'function') {
      (this.optionalPromotions as any).validate();
    }
    if(this.promDetailList && typeof (this.promDetailList as any).validate === 'function') {
      (this.promDetailList as any).validate();
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

export class DescribePriceResponseBodySubOrders extends $dara.Model {
  subOrder?: DescribePriceResponseBodySubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrder },
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

export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the order.
   */
  order?: DescribePriceResponseBodyOrder;
  /**
   * @remarks
   * The parameters of the order. When OrderParamOut is set to `true`, this parameter is returned.
   * 
   * @example
   * String
   */
  orderParams?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A40BE4E-1890-4972-889C-FEFA37663635
   */
  requestId?: string;
  /**
   * @remarks
   * Details about promotion rules.
   */
  rules?: DescribePriceResponseBodyRules;
  /**
   * @remarks
   * The orders that match the coupons.
   */
  subOrders?: DescribePriceResponseBodySubOrders;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      orderParams: 'OrderParams',
      requestId: 'RequestId',
      rules: 'Rules',
      subOrders: 'SubOrders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribePriceResponseBodyOrder,
      orderParams: 'string',
      requestId: 'string',
      rules: DescribePriceResponseBodyRules,
      subOrders: DescribePriceResponseBodySubOrders,
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


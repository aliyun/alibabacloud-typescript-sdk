// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList extends $dara.Model {
  promotionRuleId?: number[];
  static names(): { [key: string]: string } {
    return {
      promotionRuleId: 'PromotionRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRuleId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.promotionRuleId)) {
      $dara.Model.validateArray(this.promotionRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCouponsCoupon extends $dara.Model {
  /**
   * @remarks
   * The activity type of the coupon. Valid values:
   * 
   * *   **payondemand**: subscription
   * *   **payasyougo**: pay-as-you-go
   * 
   * @example
   * payondemand
   */
  activityCategory?: string;
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
   * The description of the coupon.
   * 
   * @example
   * ceshi
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the coupon was selected. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * youhuiquan111
   */
  name?: string;
  /**
   * @remarks
   * The code of the coupon.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotional option code.
   * 
   * @example
   * youhui_quan
   */
  promotionOptionCode?: string;
  /**
   * @remarks
   * The IDs of the rules that correspond to the coupon.
   */
  promotionRuleIdList?: DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList;
  static names(): { [key: string]: string } {
    return {
      activityCategory: 'ActivityCategory',
      couponNo: 'CouponNo',
      description: 'Description',
      isSelected: 'IsSelected',
      name: 'Name',
      optionCode: 'OptionCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionRuleIdList: 'PromotionRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCategory: 'string',
      couponNo: 'string',
      description: 'string',
      isSelected: 'string',
      name: 'string',
      optionCode: 'string',
      promotionOptionCode: 'string',
      promotionRuleIdList: DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList,
    };
  }

  validate() {
    if(this.promotionRuleIdList && typeof (this.promotionRuleIdList as any).validate === 'function') {
      (this.promotionRuleIdList as any).validate();
    }
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
   * 41120065996xxxxx
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
   * The price after the promotion.
   * 
   * @example
   * 20522.4
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   * 
   * @example
   * 3621.6
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * wanhua_activity
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
   * 24144.0
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
   * The contract promotion.
   */
  contractActivity?: DescribePriceResponseBodyOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
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
  isShow?: string;
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
      isShow: 'string',
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
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The information of coupons.
   */
  coupons?: DescribePriceResponseBodyOrderCoupons;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: DescribePriceResponseBodyOrderDepreciateInfo;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 322.4
   */
  discountAmount?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The promotional activity information.
   * 
   * @example
   * [{\\”activityCategory\\”:\\”discount\\”,\\”activityExtInfo\\”:{\\”noUseYouhuiquan\\”:\\”true\\”,\\”activityId\\”:\\”191156098xxxx\\”,\\”activityExtraAttr\\”:\\”{\\\\\\\\”forbiddenCpsProfit\\\\\\\\”:\\\\\\\\”true\\\\\\\\”,\\\\\\\\”forbiddenCouponsRestricted\\\\\\\\”:\\\\\\\\”true\\\\\\\\”,\\\\\\\\”forbiddenAmbassadorProfit\\\\\\\\”:\\\\\\\\”true\\\\\\\\”}\\”,\\”isActivityIdFromWanHuaTong\\”:\\”true\\”,\\”isContractActivity\\”:\\”false\\”},\\”canPromFee\\”:906130,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promotionName\\”:\\”FY24--MongoDB replica set - first-time purchase - \\* discount for a one-year period - first-time purchase benefits\\”,\\”promotionOptionNo\\”:\\”19115609882xxxx\\”,\\”promotionRuleIdList\\”:[2091xxxx],\\”selected\\”:true,\\”targetArticleItemCodes\\”:[]},{\\”activityCategory\\”:\\”discount\\”,\\”activityExtInfo\\”:{\\”activityId\\”:\\”1018040010xxxxx\\”,\\”wanHuaOrderExpireSec\\”:\\”604800\\”,\\”isActivityIdFromWanHuaTong\\”:\\”true\\”,\\”isContractActivity\\”:\\”false\\”},\\”canPromFee\\”:339799,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promotionName\\”:\\”FY24--MongoDB discount for a one-year period \\”,\\”promotionOptionNo\\”:\\”10180400107xxxxx\\”,\\”promotionRuleIdList\\”:[xxxxx],\\”selected\\”:false,\\”targetArticleItemCodes\\”:[]}]”
   */
  optionalPromotions?: string;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 322.4
   */
  originalAmount?: string;
  /**
   * @remarks
   * The promotional activity that is hit.
   * 
   * @example
   * [{\\”finalPromFee\\”:90xxx,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promType\\”:\\”discount\\”,\\”promotionId\\”:2091xxxx,\\”promotionName\\”:\\”\\* discount is provided for new users who purchase ApsaraDB for MongoDB replica set instances for one year. A new user can purchase an ApsaraDB for MongoDB replica set instance only by using the discount.\\”}]”
   */
  promDetailList?: string;
  /**
   * @remarks
   * The rules of the order.
   */
  ruleIds?: DescribePriceResponseBodyOrderRuleIds;
  /**
   * @remarks
   * Indicates whether the discount information is displayed.
   * 
   * @example
   * true
   */
  showDiscountInfo?: boolean;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standPrice?: number;
  totalCostAmount?: number;
  /**
   * @remarks
   * The final price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contractActivity: 'ContractActivity',
      coupons: 'Coupons',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      promDetailList: 'PromDetailList',
      ruleIds: 'RuleIds',
      showDiscountInfo: 'ShowDiscountInfo',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      totalCostAmount: 'TotalCostAmount',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contractActivity: 'boolean',
      coupons: DescribePriceResponseBodyOrderCoupons,
      currency: 'string',
      depreciateInfo: DescribePriceResponseBodyOrderDepreciateInfo,
      discountAmount: 'string',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: 'string',
      originalAmount: 'string',
      promDetailList: 'string',
      ruleIds: DescribePriceResponseBodyOrderRuleIds,
      showDiscountInfo: 'boolean',
      standDiscountPrice: 'number',
      standPrice: 'number',
      totalCostAmount: 'number',
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
   * The rule name.
   * 
   * @example
   * demoname
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2075****
   */
  ruleDescId?: number;
  /**
   * @remarks
   * The rule title.
   * 
   * @example
   * demo
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
   * 41120065996xxxxx
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
   * The price after the promotion.
   * 
   * @example
   * 20522.4
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   * 
   * @example
   * 3621.6
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * wanhua_activity
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
   * 24144.0
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
  contractActivity?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
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
  isShow?: string;
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
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 2024-02-29 10:30:00
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
      contractActivity: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity,
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'string',
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
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
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
  isShow?: string;
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
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'string',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
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
   * dds_dbtype
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * MongoDB
   */
  name?: string;
  /**
   * @remarks
   * The attribute type.
   * 
   * @example
   * 3
   */
  type?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * MongoDB
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
      type: 'string',
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

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail extends $dara.Model {
  /**
   * @remarks
   * The additional promotion information.
   * 
   * @example
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * subPrice
   */
  derivedPromType?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The code of the commodity to which the coupon can be applied.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * discount
   */
  promType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * aliwood-xxx
   */
  promotionCode?: string;
  /**
   * @remarks
   * The ID of the promotional activity.
   * 
   * @example
   * 8105187xxxx
   */
  promotionId?: number;
  /**
   * @remarks
   * The promotional activity name.
   * 
   * @example
   * [Item with price reduction in x xxxx] ApsaraDB for MongoDB instances of a full range of specifications - xxxxx
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

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList extends $dara.Model {
  promDetail?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail[];
  static names(): { [key: string]: string } {
    return {
      promDetail: 'PromDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promDetail: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail },
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

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The cycle fee of the module.
   * 
   * @example
   * 0.0
   */
  cycleFee?: string;
  /**
   * @remarks
   * The activity information.
   */
  depreciateInfo?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0.0
   */
  discountFee?: string;
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
   * dds_dbtype
   */
  moduleCode?: string;
  /**
   * @remarks
   * The module ID
   * 
   * @example
   * 1017110000415xxx
   */
  moduleId?: number;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * database type
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
   * false
   */
  pricingModule?: boolean;
  /**
   * @remarks
   * The promotion details.
   */
  promDetailList?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 451.00
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standPrice?: number;
  /**
   * @remarks
   * The original price of the product.
   * 
   * @example
   * 0.0
   */
  totalProductFee?: number;
  unitPriceUnit4Buy?: string;
  /**
   * @remarks
   * The price type.
   * 
   * @example
   * monthPrice
   */
  priceType?: string;
  /**
   * @remarks
   * The unit of the price.
   * 
   * @example
   * xxxx
   */
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      cycleFee: 'CycleFee',
      depreciateInfo: 'DepreciateInfo',
      discountFee: 'DiscountFee',
      moduleAttrs: 'ModuleAttrs',
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      needOrderPay: 'NeedOrderPay',
      payFee: 'PayFee',
      pricingModule: 'PricingModule',
      promDetailList: 'PromDetailList',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      totalProductFee: 'TotalProductFee',
      unitPriceUnit4Buy: 'UnitPriceUnit4Buy',
      priceType: 'priceType',
      priceUnit: 'priceUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractActivity: 'boolean',
      cycleFee: 'string',
      depreciateInfo: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo,
      discountFee: 'string',
      moduleAttrs: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs,
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
      needOrderPay: 'boolean',
      payFee: 'number',
      pricingModule: 'boolean',
      promDetailList: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList,
      standDiscountPrice: 'number',
      standPrice: 'number',
      totalProductFee: 'number',
      unitPriceUnit4Buy: 'string',
      priceType: 'string',
      priceUnit: 'string',
    };
  }

  validate() {
    if(this.depreciateInfo && typeof (this.depreciateInfo as any).validate === 'function') {
      (this.depreciateInfo as any).validate();
    }
    if(this.moduleAttrs && typeof (this.moduleAttrs as any).validate === 'function') {
      (this.moduleAttrs as any).validate();
    }
    if(this.promDetailList && typeof (this.promDetailList as any).validate === 'function') {
      (this.promDetailList as any).validate();
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

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList extends $dara.Model {
  promotionRuleId?: string[];
  static names(): { [key: string]: string } {
    return {
      promotionRuleId: 'promotionRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRuleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promotionRuleId)) {
      $dara.Model.validateArray(this.promotionRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes extends $dara.Model {
  targetArticleItemCode?: string[];
  static names(): { [key: string]: string } {
    return {
      targetArticleItemCode: 'targetArticleItemCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetArticleItemCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetArticleItemCode)) {
      $dara.Model.validateArray(this.targetArticleItemCode);
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
   * The activity type.
   * 
   * @example
   * discount
   */
  activityCategory?: string;
  /**
   * @remarks
   * The additional activity information.
   * 
   * @example
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The amount that can be deducted by using the coupon.
   * 
   * @example
   * 4560789
   */
  canPromFee?: number;
  /**
   * @remarks
   * The promotion type.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * [Item with price reduction in xxx] ApsaraDB for MongoDB instances of a full range of specifications - xxx
   */
  promotionName?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 1512010241xxxxx
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The promotion IDs.
   */
  promotionRuleIdList?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList;
  /**
   * @remarks
   * Indicates whether
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
   * true
   */
  show?: boolean;
  /**
   * @remarks
   * The specification codes of the product.
   */
  targetArticleItemCodes?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes;
  static names(): { [key: string]: string } {
    return {
      activityCategory: 'ActivityCategory',
      activityExtInfo: 'ActivityExtInfo',
      canPromFee: 'CanPromFee',
      optionCode: 'OptionCode',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      promotionRuleIdList: 'PromotionRuleIdList',
      selected: 'Selected',
      show: 'Show',
      targetArticleItemCodes: 'TargetArticleItemCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCategory: 'string',
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      canPromFee: 'number',
      optionCode: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      promotionRuleIdList: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList,
      selected: 'boolean',
      show: 'boolean',
      targetArticleItemCodes: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes,
    };
  }

  validate() {
    if(this.activityExtInfo) {
      $dara.Model.validateMap(this.activityExtInfo);
    }
    if(this.promotionRuleIdList && typeof (this.promotionRuleIdList as any).validate === 'function') {
      (this.promotionRuleIdList as any).validate();
    }
    if(this.targetArticleItemCodes && typeof (this.targetArticleItemCodes as any).validate === 'function') {
      (this.targetArticleItemCodes as any).validate();
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
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * subPrice
   */
  derivedPromType?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The code of the coupon.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * discount
   */
  promType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * ali-wood
   */
  promotionCode?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 233xxxxx
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the promotional activity.
   * 
   * @example
   * [Item with price reduction in x xxxx] ApsaraDB for MongoDB instances of a full range of specifications - xxxxx
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
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
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
   * 322.4
   */
  discountAmount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp1b6e54e7cc****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the discount is hit.
   * 
   * @example
   * true
   */
  isNewOfficialActivity?: string;
  /**
   * @remarks
   * The configuration item of the instance in the order.
   */
  moduleInstance?: DescribePriceResponseBodySubOrdersSubOrderModuleInstance;
  /**
   * @remarks
   * The promotional options that can be configured.
   */
  optionalPromotions?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 322.4
   */
  originalAmount?: string;
  /**
   * @remarks
   * The promotion details.
   */
  promDetailList?: DescribePriceResponseBodySubOrdersSubOrderPromDetailList;
  /**
   * @remarks
   * The activity rules.
   */
  ruleIds?: DescribePriceResponseBodySubOrdersSubOrderRuleIds;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 8687
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 62982
   */
  standPrice?: number;
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      instanceId: 'InstanceId',
      isContractActivity: 'IsContractActivity',
      isNewOfficialActivity: 'IsNewOfficialActivity',
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
      isNewOfficialActivity: 'string',
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
   * The order information.
   */
  order?: DescribePriceResponseBodyOrder;
  /**
   * @remarks
   * The order parameters.
   * 
   * > This parameter is returned only when the **OrderParamOut** parameter is set to **true**.
   * 
   * @example
   * {\\"autoPay\\":false}"
   */
  orderParams?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27227A3D-6B86-56F3-9E03-9E60F001CE12
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribePriceResponseBodyRules;
  /**
   * @remarks
   * The coupon rules.
   */
  subOrders?: DescribePriceResponseBodySubOrders;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * 27227A3D-6B87-56F3-9E03-9E60F001****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      orderParams: 'OrderParams',
      requestId: 'RequestId',
      rules: 'Rules',
      subOrders: 'SubOrders',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribePriceResponseBodyOrder,
      orderParams: 'string',
      requestId: 'string',
      rules: DescribePriceResponseBodyRules,
      subOrders: DescribePriceResponseBodySubOrders,
      traceId: 'string',
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


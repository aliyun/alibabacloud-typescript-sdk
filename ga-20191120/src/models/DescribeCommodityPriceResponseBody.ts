// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails extends $dara.Model {
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 40000.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The code of the commodity module.
   * 
   * @example
   * spec
   */
  moduleCode?: string;
  /**
   * @remarks
   * The name of the commodity module.
   * 
   * @example
   * Specification
   */
  moduleName?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 200000.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 160000.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      moduleCode: 'string',
      moduleName: 'string',
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

export class DescribeCommodityPriceResponseBodyOrderDetailsPromDetails extends $dara.Model {
  /**
   * @remarks
   * The discounted price.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * 0.01
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The code of the discount option.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The sub-type of the discount.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * deduct
   */
  promType?: string;
  /**
   * @remarks
   * The ID of the discount item.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * 50003298014****
   */
  promotionId?: string;
  /**
   * @remarks
   * The name of the discount item.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * coupon
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      promType: 'PromType',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalPromFee: 'number',
      optionCode: 'string',
      promType: 'string',
      promotionId: 'string',
      promotionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyOrderDetails extends $dara.Model {
  /**
   * @remarks
   * The code of the commodity.
   * 
   * @example
   * ga_gapluspre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the commodity.
   * 
   * @example
   * Global Accelerator_Instance Type (Subscription)
   */
  commodityName?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 419.8
   */
  discountPrice?: number;
  /**
   * @remarks
   * The information about the commodity module.
   */
  moduleDetails?: DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails[];
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2099
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the discount.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   */
  promDetails?: DescribeCommodityPriceResponseBodyOrderDetailsPromDetails[];
  /**
   * @remarks
   * The number of instances that are purchased.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The IDs of discount rules.
   */
  ruleIds?: number[];
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 1679.2
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      discountPrice: 'DiscountPrice',
      moduleDetails: 'ModuleDetails',
      originalPrice: 'OriginalPrice',
      promDetails: 'PromDetails',
      quantity: 'Quantity',
      ruleIds: 'RuleIds',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      discountPrice: 'number',
      moduleDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetailsModuleDetails },
      originalPrice: 'number',
      promDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetailsPromDetails },
      quantity: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetails)) {
      $dara.Model.validateArray(this.moduleDetails);
    }
    if(Array.isArray(this.promDetails)) {
      $dara.Model.validateArray(this.promDetails);
    }
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyPromotions extends $dara.Model {
  /**
   * @remarks
   * The discounted amount.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * 0
   */
  canPromFee?: number;
  /**
   * @remarks
   * The code of the commodity to which the coupon can be applied.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionName?: string;
  /**
   * @remarks
   * The code of the coupon.
   * > *   `youhuiquan_promotion_option_id_for_blank` indicates coupons that cannot be applied to the commodity.
   * > *   This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * 50003298014****
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the coupon was selected.
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   * 
   * @example
   * false
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      optionCode: 'OptionCode',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      optionCode: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBodyRuleDetails extends $dara.Model {
  /**
   * @remarks
   * The ID of the discount rule.
   * 
   * @example
   * 102104100786****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the discount rule.
   * 
   * @example
   * GA New Customers Small II Specification Monthly Subscription - 20% Discount
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The currency unit.
   * 
   * *   China site: **CNY**.
   * *   International site: **USD**.
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
   * 419.8
   */
  discountPrice?: number;
  /**
   * @remarks
   * The details of the commodity module.
   */
  orderDetails?: DescribeCommodityPriceResponseBodyOrderDetails[];
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2099
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the coupon.
   * 
   * >  This parameter does not take effect for accounts registered on the China site (aliyun.com).
   */
  promotions?: DescribeCommodityPriceResponseBodyPromotions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the discount rules.
   */
  ruleDetails?: DescribeCommodityPriceResponseBodyRuleDetails[];
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 1679.2
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderDetails: 'OrderDetails',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      requestId: 'RequestId',
      ruleDetails: 'RuleDetails',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      orderDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyOrderDetails },
      originalPrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyPromotions },
      requestId: 'string',
      ruleDetails: { 'type': 'array', 'itemType': DescribeCommodityPriceResponseBodyRuleDetails },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderDetails)) {
      $dara.Model.validateArray(this.orderDetails);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(Array.isArray(this.ruleDetails)) {
      $dara.Model.validateArray(this.ruleDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


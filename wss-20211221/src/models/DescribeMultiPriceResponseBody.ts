// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails extends $dara.Model {
  /**
   * @example
   * 734.65
   */
  discountPrice?: number;
  /**
   * @example
   * DesktopType
   */
  moduleCode?: string;
  moduleName?: string;
  /**
   * @example
   * eds.enterprise_office.8c32g
   */
  moduleValue?: string;
  /**
   * @example
   * 10900
   */
  originalPrice?: number;
  savingPlanDiscountPrice?: number;
  /**
   * @example
   * 292.2
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      moduleValue: 'ModuleValue',
      originalPrice: 'OriginalPrice',
      savingPlanDiscountPrice: 'SavingPlanDiscountPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      moduleCode: 'string',
      moduleName: 'string',
      moduleValue: 'string',
      originalPrice: 'number',
      savingPlanDiscountPrice: 'number',
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

export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail extends $dara.Model {
  /**
   * @example
   * 20.00
   */
  discountPrice?: number;
  /**
   * @example
   * 100.00
   */
  originalPrice?: number;
  /**
   * @example
   * DurationPackage
   */
  resourceType?: string;
  savingPlanRecommendPrice?: number;
  /**
   * @example
   * 80.00
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resourceType: 'ResourceType',
      savingPlanRecommendPrice: 'SavingPlanRecommendPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resourceType: 'string',
      savingPlanRecommendPrice: 'number',
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

export class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails extends $dara.Model {
  moduleDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails[];
  /**
   * @example
   * 1
   */
  orderItem?: number;
  priceDetail?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail;
  static names(): { [key: string]: string } {
    return {
      moduleDetails: 'ModuleDetails',
      orderItem: 'OrderItem',
      priceDetail: 'PriceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails },
      orderItem: 'number',
      priceDetail: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail,
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetails)) {
      $dara.Model.validateArray(this.moduleDetails);
    }
    if(this.priceDetail && typeof (this.priceDetail as any).validate === 'function') {
      (this.priceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiPriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
  /**
   * @example
   * new
   */
  optionCode?: string;
  promotionDesc?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  promotionName?: string;
  /**
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
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

export class DescribeMultiPriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 534.6
   */
  discountPrice?: number;
  /**
   * @example
   * 6800
   */
  originalPrice?: number;
  priceDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails[];
  promotions?: DescribeMultiPriceResponseBodyPriceInfoPricePromotions[];
  refundInstanceIdPriceMap?: { [key: string]: number };
  /**
   * @example
   * 60.00
   */
  refundPrice?: number;
  /**
   * @example
   * 82.6
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      priceDetails: 'PriceDetails',
      promotions: 'Promotions',
      refundInstanceIdPriceMap: 'RefundInstanceIdPriceMap',
      refundPrice: 'RefundPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      priceDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails },
      promotions: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePromotions },
      refundInstanceIdPriceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      refundPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.priceDetails)) {
      $dara.Model.validateArray(this.priceDetails);
    }
    if(Array.isArray(this.promotions)) {
      $dara.Model.validateArray(this.promotions);
    }
    if(this.refundInstanceIdPriceMap) {
      $dara.Model.validateMap(this.refundInstanceIdPriceMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiPriceResponseBodyPriceInfoRules extends $dara.Model {
  /**
   * @example
   * accounts_suspect_users
   */
  description?: string;
  /**
   * @example
   * hrzdvc
   */
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

export class DescribeMultiPriceResponseBodyPriceInfo extends $dara.Model {
  price?: DescribeMultiPriceResponseBodyPriceInfoPrice;
  rules?: DescribeMultiPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeMultiPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoRules },
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiPriceResponseBody extends $dara.Model {
  priceInfo?: DescribeMultiPriceResponseBodyPriceInfo;
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
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
      priceInfo: DescribeMultiPriceResponseBodyPriceInfo,
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


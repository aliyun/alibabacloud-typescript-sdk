// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CommodityValueResultOrder extends $dara.Model {
  /**
   * @remarks
   * 货币代码。
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * 优惠后。
   * 
   * @example
   * 9.99
   */
  tradeAmount?: string;
  /**
   * @remarks
   * 抵扣金额。
   * 
   * @example
   * 1.99
   */
  discountAmount?: string;
  /**
   * @remarks
   * 优惠前。
   * 
   * @example
   * 11.98
   */
  originalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      tradeAmount: 'TradeAmount',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      tradeAmount: 'string',
      discountAmount: 'string',
      originalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs extends $dara.Model {
  /**
   * @remarks
   * 属性类型，可选值：
   * 
   * 1. 1：商品属性 
   * 2. 2：规格属性 
   * 3. 3：模块属性 
   * 4. 4：外部参数（备用）
   * 
   * @example
   * 3
   */
  type?: number;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 20GB
   */
  name?: string;
  /**
   * @remarks
   * Module attr code
   * 
   * @example
   * rds_storage
   */
  code?: string;
  /**
   * @remarks
   * Value
   * 
   * @example
   * 20
   */
  value?: string;
  /**
   * @remarks
   * Unit
   * 
   * @example
   * GB
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      code: 'Code',
      value: 'Value',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      name: 'string',
      code: 'string',
      value: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityValueResultSubOrdersSubOrderModuleInstance extends $dara.Model {
  /**
   * @remarks
   * 模块ID。
   * 
   * @example
   * 1234
   */
  moduleId?: number;
  /**
   * @remarks
   * 模块名称。
   * 
   * @example
   * Rds
   */
  moduleName?: string;
  /**
   * @remarks
   * 模块代码。
   * 
   * @example
   * rds_dbtype
   */
  moduleCode?: string;
  /**
   * @remarks
   * 产品原价（元）。
   * 
   * @example
   * 10.00
   */
  totalProductFee?: number;
  /**
   * @remarks
   * 折扣费用（元）。
   * 
   * @example
   * 1.99
   */
  discountFee?: number;
  /**
   * @remarks
   * 实付金额（元）。
   * 
   * @example
   * 8.01
   */
  payFee?: number;
  /**
   * @remarks
   * 价格单位。
   * 
   * @example
   * 元/GB/小时
   */
  priceUnit?: string;
  /**
   * @remarks
   * 是否计价项。
   * 
   * @example
   * true
   */
  isPricingModule?: boolean;
  /**
   * @remarks
   * 在订单中是否需要支付。
   * 
   * @example
   * true
   */
  needOrderPay?: boolean;
  /**
   * @remarks
   * 定价类型。
   * 
   * @example
   * hourPrice
   */
  priceType?: string;
  /**
   * @remarks
   * 模块属性。
   */
  moduleAttrs?: CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs[];
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      moduleCode: 'ModuleCode',
      totalProductFee: 'TotalProductFee',
      discountFee: 'DiscountFee',
      payFee: 'PayFee',
      priceUnit: 'PriceUnit',
      isPricingModule: 'IsPricingModule',
      needOrderPay: 'NeedOrderPay',
      priceType: 'PriceType',
      moduleAttrs: 'ModuleAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
      moduleName: 'string',
      moduleCode: 'string',
      totalProductFee: 'number',
      discountFee: 'number',
      payFee: 'number',
      priceUnit: 'string',
      isPricingModule: 'boolean',
      needOrderPay: 'boolean',
      priceType: 'string',
      moduleAttrs: { 'type': 'array', 'itemType': CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs },
    };
  }

  validate() {
    if(Array.isArray(this.moduleAttrs)) {
      $dara.Model.validateArray(this.moduleAttrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityValueResultSubOrdersSubOrder extends $dara.Model {
  /**
   * @remarks
   * 模块（实例）信息。
   */
  moduleInstance?: CommodityValueResultSubOrdersSubOrderModuleInstance[];
  static names(): { [key: string]: string } {
    return {
      moduleInstance: 'ModuleInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleInstance: { 'type': 'array', 'itemType': CommodityValueResultSubOrdersSubOrderModuleInstance },
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

export class CommodityValueResultSubOrders extends $dara.Model {
  /**
   * @remarks
   * 订单子项。
   */
  subOrder?: CommodityValueResultSubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': CommodityValueResultSubOrdersSubOrder },
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

export class CommodityValueResultCoupons extends $dara.Model {
  /**
   * @remarks
   * 可支付金额。
   * 
   * @example
   * 9.99
   */
  canPromFee?: number;
  /**
   * @remarks
   * Coupon Description
   * 
   * @example
   * 10元优惠券（有效期至2024年9月8日）
   */
  couponDesc?: string;
  /**
   * @remarks
   * Coupon Name
   * 
   * @example
   * 10元优惠券
   */
  couponName?: string;
  /**
   * @remarks
   * Coupon OptionNo
   * 
   * @example
   * 50008800000xxxx
   */
  couponOptionNo?: string;
  /**
   * @remarks
   * 是否选中。
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionNo: 'CouponOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionNo: 'string',
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

export class CommodityValueResult extends $dara.Model {
  /**
   * @remarks
   * 订单信息。
   */
  order?: CommodityValueResultOrder;
  /**
   * @remarks
   * 询价类型，可选值：
   * 1. Buy：新购询价。
   * 2. ModificationBuy：变配询价。
   * 
   * @example
   * Buy
   */
  inquiryType?: string;
  /**
   * @remarks
   * 订单子项。
   */
  subOrders?: CommodityValueResultSubOrders;
  /**
   * @remarks
   * 优惠券。
   */
  coupons?: CommodityValueResultCoupons[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      inquiryType: 'InquiryType',
      subOrders: 'SubOrders',
      coupons: 'Coupons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: CommodityValueResultOrder,
      inquiryType: 'string',
      subOrders: CommodityValueResultSubOrders,
      coupons: { 'type': 'array', 'itemType': CommodityValueResultCoupons },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.subOrders && typeof (this.subOrders as any).validate === 'function') {
      (this.subOrders as any).validate();
    }
    if(Array.isArray(this.coupons)) {
      $dara.Model.validateArray(this.coupons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommodityValue extends $dara.Model {
  /**
   * @remarks
   * Result模型。
   */
  result?: CommodityValueResult;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: CommodityValueResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


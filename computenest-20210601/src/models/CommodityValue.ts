// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CommodityValueResultOrder extends $dara.Model {
  /**
   * @remarks
   * The currency code.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount after the discount is applied.
   * 
   * @example
   * 9.99
   */
  tradeAmount?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 1.99
   */
  discountAmount?: string;
  /**
   * @remarks
   * The original amount.
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
   * The attribute type. Valid values:
   * 
   * 1. 1: product attribute
   * 
   * 2. 2: specification attribute
   * 
   * 3. 3: module attribute
   * 
   * 4. 4: external parameter (reserved)
   * 
   * @example
   * 3
   */
  type?: number;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * 20GB
   */
  name?: string;
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * rds_storage
   */
  code?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * 20
   */
  value?: string;
  /**
   * @remarks
   * The unit of the value.
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
   * The module ID.
   * 
   * @example
   * 1234
   */
  moduleId?: number;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * 数据库类型
   */
  moduleName?: string;
  /**
   * @remarks
   * The module code.
   * 
   * @example
   * rds_dbtype
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original price of the product, in CNY.
   * 
   * @example
   * 10.00
   */
  totalProductFee?: number;
  /**
   * @remarks
   * The discount, in CNY.
   * 
   * @example
   * 1.99
   */
  discountFee?: number;
  /**
   * @remarks
   * The amount payable, in CNY.
   * 
   * @example
   * 8.01
   */
  payFee?: number;
  /**
   * @remarks
   * The unit of the price.
   * 
   * @example
   * 元/GB/小时
   */
  priceUnit?: string;
  /**
   * @remarks
   * Indicates whether the module is a billing item.
   * 
   * @example
   * true
   */
  isPricingModule?: boolean;
  /**
   * @remarks
   * Indicates whether payment is required for the module in the order.
   * 
   * @example
   * true
   */
  needOrderPay?: boolean;
  /**
   * @remarks
   * The pricing type.
   * 
   * @example
   * hourPrice
   */
  priceType?: string;
  /**
   * @remarks
   * The module attributes.
   */
  moduleAttrs?: CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs[];
  /**
   * @remarks
   * The English name of the module.
   * 
   * @example
   * 数据单元
   */
  moduleNameEn?: string;
  /**
   * @remarks
   * The English name of the price unit.
   * 
   * @example
   * 元/月
   */
  priceUnitEn?: string;
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
      moduleNameEn: 'ModuleNameEn',
      priceUnitEn: 'PriceUnitEn',
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
      moduleNameEn: 'string',
      priceUnitEn: 'string',
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
   * The module or instance information.
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
   * The sub-orders.
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
   * The payable amount.
   * 
   * @example
   * 9.99
   */
  canPromFee?: number;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * 10元优惠券（有效期至2024年9月8日）
   */
  couponDesc?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * 10元优惠券
   */
  couponName?: string;
  /**
   * @remarks
   * The coupon number.
   * 
   * @example
   * 50008800000xxxx
   */
  couponOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected.
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
   * The order information.
   */
  order?: CommodityValueResultOrder;
  /**
   * @remarks
   * The inquiry type. Valid values:
   * 
   * 1. Buy: an inquiry for a new purchase.
   * 
   * 2. ModificationBuy: an inquiry for an upgrade or downgrade.
   * 
   * @example
   * Buy
   */
  inquiryType?: string;
  /**
   * @remarks
   * The sub-orders.
   */
  subOrders?: CommodityValueResultSubOrders;
  /**
   * @remarks
   * The coupons.
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
   * The Result model.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CommodityValueResultOrder extends $dara.Model {
  /**
   * @remarks
   * The code of the native currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * Amount after the discount.
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
   * Amount before the discount.
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
   * The type of the attribute. Valid values:
   * 
   * 1.  1: product
   * 2.  2\\. specifications
   * 3.  3: module
   * 4.  4: external parameters (backup)
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
   * Rds
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
   * The original price (RMB).
   * 
   * @example
   * 10.00
   */
  totalProductFee?: number;
  /**
   * @remarks
   * The discount amount (RMB).
   * 
   * @example
   * 1.99
   */
  discountFee?: number;
  /**
   * @remarks
   * The amount actually paid (RMB).
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
   * Yuan/GB/hour
   */
  priceUnit?: string;
  /**
   * @remarks
   * Indicates whether the item is billed.
   * 
   * @example
   * true
   */
  isPricingModule?: boolean;
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
  moduleNameEn?: string;
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
   * The information about the module (instance).
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
   * The order sub-item.
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
   * CNY 10 coupon (valid until September 8, 2024)
   */
  couponDesc?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * CNY 10 coupon
   */
  couponName?: string;
  /**
   * @remarks
   * The coupon ID.
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
   * The information about the order.
   */
  order?: CommodityValueResultOrder;
  /**
   * @remarks
   * The RFQ type. Valid values:
   * 
   * 1.  Buy: price inquiry for new resources.
   * 2.  ModificationBuy: price inquiry for resource configuration changes.
   * 
   * @example
   * Buy
   */
  inquiryType?: string;
  /**
   * @remarks
   * The order sub-items.
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
   * The result model.
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


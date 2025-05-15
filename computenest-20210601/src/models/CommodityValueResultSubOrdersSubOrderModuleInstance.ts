// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs } from "./CommodityValueResultSubOrdersSubOrderModuleInstanceModuleAttrs";


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


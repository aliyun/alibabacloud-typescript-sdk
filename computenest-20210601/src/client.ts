// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

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

export class CheckServiceDeployableResponseBodyCheckResults extends $dara.Model {
  /**
   * @remarks
   * Returns a hint message for the result.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Check type, invalid values:
   * 
   * - Balance ：Account balance.
   * 
   * - Quota:  Account quota.
   * 
   * @example
   * Balance
   */
  type?: string;
  /**
   * @remarks
   * Inspection result.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class ContinueDeployServiceInstanceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The parameters that can be modified. The operation that is performed to modify the parameters does not cause a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions. The new values of the parameters determine whether the operation that is performed to modify the parameters causes a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified. The operation that is performed to modify the parameters causes a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersNotAllowedToBeModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parametersAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersAllowedToBeModified);
    }
    if(Array.isArray(this.parametersConditionallyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersConditionallyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersNotAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersNotAllowedToBeModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the service instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * *   **Day**
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestOperationMetadata extends $dara.Model {
  /**
   * @remarks
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * ```json
   *   {
   *     "vncInfo": [
   *       {
   *         "instanceId": "i-001",
   *         "username": "admin",
   *         "password": "******",
   *         "vncPassword": "******"
   *       }
   *     ]
   *   }
   *   ```
   */
  extraInfo?: string;
  /**
   * @remarks
   * Imported resource.
   * 
   * @example
   * {   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The operation start time.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
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

export class CreateServiceInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateServiceInstanceShrinkRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the service instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * *   **Day**
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequestOperationMetadata extends $dara.Model {
  /**
   * @remarks
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * ```json
   *   {
   *     "vncInfo": [
   *       {
   *         "instanceId": "i-001",
   *         "username": "admin",
   *         "password": "******",
   *         "vncPassword": "******"
   *       }
   *     ]
   *   }
   *   ```
   */
  extraInfo?: string;
  /**
   * @remarks
   * Imported resource.
   * 
   * @example
   * {   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The operation start time.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
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

export class CreateServiceInstanceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region endpoint.
   * 
   * @example
   * computenest.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponseBodyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * Operations on specific resources.
   */
  action?: string[];
  /**
   * @remarks
   * The specific objects authorized. An asterisk (*) denotes all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadataComponentsMappings extends $dara.Model {
  /**
   * @remarks
   * The mappings.
   */
  mappings?: { [key: string]: string };
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      mappings: 'Mappings',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityCssMetadata extends $dara.Model {
  /**
   * @remarks
   * The mapping information about the billing items.
   */
  componentsMappings?: GetServiceResponseBodyCommodityCssMetadataComponentsMappings[];
  static names(): { [key: string]: string } {
    return {
      componentsMappings: 'ComponentsMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityCssMetadataComponentsMappings },
    };
  }

  validate() {
    if(Array.isArray(this.componentsMappings)) {
      $dara.Model.validateArray(this.componentsMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package one.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodityMarketplaceMetadata extends $dara.Model {
  /**
   * @remarks
   * The mappings between the service specifications and the template or package.
   */
  specificationMappings?: GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings[];
  static names(): { [key: string]: string } {
    return {
      specificationMappings: 'SpecificationMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationMappings: { 'type': 'array', 'itemType': GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings },
    };
  }

  validate() {
    if(Array.isArray(this.specificationMappings)) {
      $dara.Model.validateArray(this.specificationMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommoditySpecifications extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00****
   */
  code?: string;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * specifications1
   */
  name?: string;
  /**
   * @remarks
   * The subscription duration. Unit: week or year.
   */
  times?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      times: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.times)) {
      $dara.Model.validateArray(this.times);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyCommodity extends $dara.Model {
  /**
   * @remarks
   * The billing method of the service. Valid values:
   * 
   * *   **PREPAY** (default): subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Lingxiao.
   */
  cssMetadata?: GetServiceResponseBodyCommodityCssMetadata;
  /**
   * @remarks
   * The deploy page.
   * 
   * @example
   * Order： Order page
   * Detail： Detail page
   */
  deployPage?: string;
  /**
   * @remarks
   * The metadata of Alibaba Cloud Marketplace.
   */
  marketplaceMetadata?: GetServiceResponseBodyCommodityMarketplaceMetadata;
  /**
   * @remarks
   * The order time.
   */
  orderTime?: { [key: string]: string[] };
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
   * 
   * @example
   * {
   *     "Enabled":false    "PublicAccessUrl":"https://example.com"
   * }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The specification details of the service in Alibaba Cloud Marketplace.
   */
  specifications?: GetServiceResponseBodyCommoditySpecifications[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      cssMetadata: 'CssMetadata',
      deployPage: 'DeployPage',
      marketplaceMetadata: 'MarketplaceMetadata',
      orderTime: 'OrderTime',
      saasBoostMetadata: 'SaasBoostMetadata',
      specifications: 'Specifications',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      cssMetadata: GetServiceResponseBodyCommodityCssMetadata,
      deployPage: 'string',
      marketplaceMetadata: GetServiceResponseBodyCommodityMarketplaceMetadata,
      orderTime: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      saasBoostMetadata: 'string',
      specifications: { 'type': 'array', 'itemType': GetServiceResponseBodyCommoditySpecifications },
      type: 'string',
    };
  }

  validate() {
    if(this.cssMetadata && typeof (this.cssMetadata as any).validate === 'function') {
      (this.cssMetadata as any).validate();
    }
    if(this.marketplaceMetadata && typeof (this.marketplaceMetadata as any).validate === 'function') {
      (this.marketplaceMetadata as any).validate();
    }
    if(this.orderTime) {
      $dara.Model.validateMap(this.orderTime);
    }
    if(Array.isArray(this.specifications)) {
      $dara.Model.validateArray(this.specifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyInstanceRoleInfos extends $dara.Model {
  /**
   * @remarks
   * The content of the policy.
   * 
   * @example
   * {\\n  \\"Version\\": \\"1\\",\\n  \\"Statement\\": [\\n    {\\n      \\"Effect\\": \\"Allow\\",\\n      \\"Action\\": \\"*\\",\\n      \\"Principal\\": \\"*\\",\\n      \\"Resource\\": \\"*\\"\\n    }\\n  ]\\n}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The information of the RAM entity.
   */
  principals?: string[];
  /**
   * @remarks
   * The ram role name.
   * 
   * @example
   * ram-for-dts
   */
  roleName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      principals: 'Principals',
      roleName: 'RoleName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      principals: { 'type': 'array', 'itemType': 'string' },
      roleName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceDocumentInfos extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to access the document.
   * 
   * @example
   * https://help.aliyun.com/zh/compute-nest/use-cases/deploy-an-sd-painting-service-instance?spm=a2c4g.11186623.0.i2
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language that you use for the query. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      documentUrl: 'DocumentUrl',
      locale: 'Locale',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentUrl: 'string',
      locale: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosAgreements extends $dara.Model {
  /**
   * @remarks
   * The agreement name.
   * 
   * @example
   * User agreement
   */
  name?: string;
  /**
   * @remarks
   * The agreement URL.
   * 
   * @example
   * https://url
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfosSoftwares extends $dara.Model {
  /**
   * @remarks
   * The name of the Software.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The version of the software.
   * 
   * @example
   * 6.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The agreement information about the service.
   */
  agreements?: GetServiceResponseBodyServiceInfosAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Service document information.
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: GetServiceResponseBodyServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosAgreements },
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfosSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodySupportContacts extends $dara.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetServiceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetServiceEstimateCostRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * 优惠券ID
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Year
   * *   Month
   * *   Day
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit for the private connection established based on the private network interconnection mode of Compute Nest.
   * 
   * @example
   * 1536Mbps
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * ie-569a9be34f5534f6bc6559b5c1xxxxxx.service-51f80502802e48xxxxxx.cn-hangzhou.computenest.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of the endpoints of the private connections.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The state of the ingress endpoint. Valid values:
   * 
   * *   Ready: The ingress endpoint is connected.
   * *   Pending: The ingress endpoint is being connected.
   * *   Failed: The ingress endpoint fails to be connected.
   * *   Deleted: The ingress endpoint is deleted.
   * *   Deleting: The ingress endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The state of the network service. Valid values:
   * 
   * *   Ready: The network service is connected.
   * *   Pending: The network service is being connected.
   * *   Failed: The network service fails to be connected.
   * *   Deleted: The network service is deleted.
   * *   Deleting: The network service is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the endpoint of the private connection established based on the private network interconnection mode of Compute Nest belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The names of the security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The names of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      regionId: 'RegionId',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      regionId: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointIps)) {
      $dara.Model.validateArray(this.endpointIps);
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The network configurations, which are mainly used for private connections.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The endpoint ID of the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the private zone of the custom private domain name.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  /**
   * @remarks
   * The region ID of the endpoint of the PrivateLink connection.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      privateZoneId: 'PrivateZoneId',
      privateZoneName: 'PrivateZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      privateZoneId: 'string',
      privateZoneName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionConfigs)) {
      $dara.Model.validateArray(this.connectionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID of the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The information about private connections.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The PrivateZone ID.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The information about the reverse private connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      privateVpcConnections: 'PrivateVpcConnections',
      privateZoneId: 'PrivateZoneId',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      privateZoneId: 'string',
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  validate() {
    if(Array.isArray(this.privateVpcConnections)) {
      $dara.Model.validateArray(this.privateVpcConnections);
    }
    if(Array.isArray(this.reversePrivateVpcConnections)) {
      $dara.Model.validateArray(this.reversePrivateVpcConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * Docker Community Edition
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceUpgradableServiceInfos extends $dara.Model {
  /**
   * @remarks
   * An upgradable service version.
   * 
   * @example
   * draft
   */
  version?: string;
  /**
   * @remarks
   * The version name of an upgradable service version.
   * 
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $dara.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The time when the service version was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The URL of the service documentation.
   * 
   * @example
   * http://example.com
   */
  serviceDocUrl?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-9c8a3522528b4fe8****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Draft
   * *   Submited
   * *   Approved
   * *   Online
   * *   Offline
   * *   Deleted
   * *   Launching
   * *   Beta
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The upgradable service version.
   */
  upgradableServiceInfos?: GetServiceInstanceResponseBodyServiceUpgradableServiceInfos[];
  /**
   * @remarks
   * The service version that can be updated.
   */
  upgradableServiceVersions?: string[];
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {
   *   "Type": "OOS",
   *   "Description": "Changelog or something description",
   *   "SupportUpgradeFromVersions": [1, 2],
   *   "UpgradeSteps": {
   *     "PreUpgradeStage": {
   *       "Description": "初始化数据库",
   *       "Type": "RunCommand",
   *       "ResourceName": "EcsRole1",
   *       "CommandType": "runShellScript",
   *       "CommandContent": "echo hello"
   *     },
   *     "UpgradeStage": [{
   *       "Description": "更新EcsRole1实例",
   *       "Type": "RunCommand",
   *       "ResourceName": "EcsRole1",
   *       "ArtifactsDownloadDirectory": "/home/admin",
   *       "CommandType": "runShellScript",
   *       "CommandContent": "echo hello"
   *     }],
   *     "PostUpgradeStage": {
   *       "Description": "部署后post check",
   *       "Type": "None/RunCommand",
   *       "ResourceName": "EcsRole1",
   *       "CommandType": "runShellScript",
   *       "CommandContent": "echo hello"
   *     }
   *   }
   * }
   */
  upgradeMetadata?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 1.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      upgradableServiceInfos: 'UpgradableServiceInfos',
      upgradableServiceVersions: 'UpgradableServiceVersions',
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      publishTime: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      upgradableServiceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceUpgradableServiceInfos },
      upgradableServiceVersions: { 'type': 'array', 'itemType': 'string' },
      upgradeMetadata: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.upgradableServiceInfos)) {
      $dara.Model.validateArray(this.upgradableServiceInfos);
    }
    if(Array.isArray(this.upgradableServiceVersions)) {
      $dara.Model.validateArray(this.upgradableServiceVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * Renewal duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the resource renewal duration, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-guangzhou:1361753504587228:instance/i-7xv9pgeqvhxg10jji3vd
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos extends $dara.Model {
  /**
   * @remarks
   * Discount amount.
   * 
   * @example
   * 100
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 900
   */
  originalAmount?: number;
  /**
   * @remarks
   * Pricing module identifier.
   * 
   * @example
   * instance
   */
  resource?: string;
  /**
   * @remarks
   * Discounted price.
   * 
   * @example
   * 500
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      resource: 'Resource',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      resource: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules extends $dara.Model {
  /**
   * @remarks
   * Promotion description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Promotion name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Promotion ID.
   * 
   * @example
   * 1021199213
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices extends $dara.Model {
  /**
   * @remarks
   * Currency. Valid values:
   * - CNY: Chinese Yuan.
   * - USD: US Dollar.
   * - JPY: Japanese Yen.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price details of the pricing module.
   */
  detailInfos?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos[];
  /**
   * @remarks
   * Discount.
   * 
   * @example
   * 100
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 900
   */
  originalAmount?: number;
  /**
   * @remarks
   * Renewal duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  /**
   * @remarks
   * Promotion details.
   */
  rules?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules[];
  /**
   * @remarks
   * Discounted price.
   * 
   * @example
   * 500
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceArn: 'ResourceArn',
      rules: 'Rules',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos },
      discountAmount: 'number',
      originalAmount: 'number',
      period: 'number',
      periodUnit: 'string',
      resourceArn: 'string',
      rules: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detailInfos)) {
      $dara.Model.validateArray(this.detailInfos);
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

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * CreateServiceLinkedRole
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the API operation belongs.
   * 
   * @example
   * rds
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * *   Open: public
   * *   Inner: private
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The ROS parameters of the cluster.
   * 
   * @example
   * { "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs", "RegionId": "${RegionId}" }
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiProductId: 'ApiProductId',
      apiType: 'ApiType',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiProductId: 'string',
      apiType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles extends $dara.Model {
  /**
   * @remarks
   * The information about the API operation that is used to create the RAM role.
   */
  apiForCreation?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation;
  /**
   * @remarks
   * Indicates whether the RAM role is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose for which the RAM role is used. Default value: Default. A value of Default indicates that the RAM role is the default role of the service.
   * 
   * @example
   * Default
   */
  function?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunCSManagedVKRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiForCreation: 'ApiForCreation',
      created: 'Created',
      function: 'Function',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiForCreation: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation,
      created: 'boolean',
      function: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(this.apiForCreation && typeof (this.apiForCreation as any).validate === 'function') {
      (this.apiForCreation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $dara.Model {
  /**
   * @remarks
   * The authorization URL of the RAM role.
   * 
   * > This parameter is returned if Created is set to false.
   * 
   * @example
   * https://ram.console.aliyun.com/role/authorization?request={"Services":[{"Service":"CS","Roles":[{"RoleName":"AliyunCSManagedVKRole","TemplateId":"AliyunCSManagedVKRole"},{"RoleName":"AliyunCSDefaultRole","TemplateId":"Default"}]}],"ReturnUrl":"https://cs.console.aliyun.com/"}
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The RAM roles of the service.
   */
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic activation for the service is defined in the template. Valid values:
   * 
   * *   true: Automatic activation for the service is defined in the template.
   * *   false: Manual activation for the service is defined in the template.
   * 
   * @example
   * true
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * The URL that points to the activation page of the service.
   * 
   * > This parameter is returned if Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=sls
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the RAM roles of the service. If this parameter is empty, no RAM role is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * CS
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * *   Enabled: The service is activated.
   * *   Disabled: The service is not activated.
   * *   Unknown: The activation status of the service is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the service is in the Disabled or Unknown state.
   * 
   * > This parameter is returned if Status is set to Disabled or Unknown.
   * 
   * @example
   * No permission
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(this.roleProvision && typeof (this.roleProvision as any).validate === 'function') {
      (this.roleProvision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. If you do not specify Parameters, the parameters and values in the template are used.
   * 
   * >  Parameters is an optional parameter. ParameterKey is required if you specify Parameters.
   * 
   * @example
   * InstanceType
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value that is defined in the template.
   * 
   * >  Parameters is an optional parameter. ParameterValue is required if you specify Parameters.
   * 
   * @example
   * cn-hangzhou-j
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * ZoneId
   */
  propertyName?: string;
  /**
   * @remarks
   * The name of the resource that is defined in the template.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      propertyName: 'PropertyName',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * record not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The names of the associated parameters.
   */
  associationParameterNames?: string[];
  /**
   * @remarks
   * The behavior of the parameter. Valid values:
   * 
   * *   NoLimit: No limit is imposed on the value of this parameter.
   * *   NotSupport: The value of this parameter cannot be queried.
   * *   QueryError: This parameter failed to be queried.
   * 
   * >  If AllowedValues is not returned, Behavior and BehaviorReason are returned, which indicate the behavior of the parameter and the reason for the behavior.
   * 
   * @example
   * NoLimit
   */
  behavior?: string;
  /**
   * @remarks
   * The reason why the behavior of the parameter is returned.
   * 
   * @example
   * No resource property refer to the parameter
   */
  behaviorReason?: string;
  /**
   * @remarks
   * The original constraint information.
   */
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The error details that are returned if the request fails.
   */
  queryErrors?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors[];
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      queryErrors: 'QueryErrors',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      originalConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      queryErrors: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    if(Array.isArray(this.associationParameterNames)) {
      $dara.Model.validateArray(this.associationParameterNames);
    }
    if(Array.isArray(this.originalConstraints)) {
      $dara.Model.validateArray(this.originalConstraints);
    }
    if(Array.isArray(this.queryErrors)) {
      $dara.Model.validateArray(this.queryErrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInformationResponseBodyDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether screencast delivery to OSS is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  actiontrailDeliveryToOssEnabled?: boolean;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * 0101data
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Indicates whether screencast delivery to Object Storage Service (OSS) is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days for which the screencasts are saved.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * /test
   */
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      actiontrailDeliveryToOssEnabled: 'ActiontrailDeliveryToOssEnabled',
      ossBucketName: 'OssBucketName',
      ossEnabled: 'OssEnabled',
      ossExpirationDays: 'OssExpirationDays',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actiontrailDeliveryToOssEnabled: 'boolean',
      ossBucketName: 'string',
      ossEnabled: 'boolean',
      ossExpirationDays: 'number',
      ossPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * Permission policy description.
   * 
   * @example
   * Only read permission policy
   */
  description?: string;
  /**
   * @remarks
   * Policy content.
   * 
   * @example
   * {"Action":["*:Describe*","*:List*","*:Get*","*:BatchGet*","*:Query*","*:BatchQuery*","actiontrail:LookupEvents"],"Resource":["*"],"Effect":"Allow"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * Permission policy name.
   * 
   * @example
   * AliyunComputeNestPolicyForReadOnly
   */
  policyName?: string;
  /**
   * @remarks
   * Permission policy type.
   * 
   * - Custom: Custom policy.
   * - System: System policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   StartTime: the start time of the log event.
   * *   EndTime: the end time of the ActionTrail event.
   * *   EventName: the name of the ActionTrail event.
   * *   ResourceName: the name of the ActionTrail resource.
   * *   ApplicationGroupName: the name of the application group.
   * 
   * @example
   * - StartTime
   * - EndTime
   * - EventName
   * - ResourceName
   * - ApplicationGroupName
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBodyServiceInstancesLogs extends $dara.Model {
  /**
   * @remarks
   * Compliance package risk types. For example, data security checks within a VPC, such as VpcDataRisk
   * 
   * @example
   * VpcDataRisk
   */
  compliancePackType?: string;
  /**
   * @remarks
   * Specific risk rule names for the compliance package. For example, ECS instance migration out of VPC - ecs-move-out-vpc.
   * 
   * @example
   * ecs-move-out-vpc
   */
  complianceRuleName?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * Start creating service instance
   */
  content?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * *   serviceInstance: log generated by the service instance.
   * *   resource: log generated by ROS resources.
   * 
   * @example
   * serviceInstance
   */
  logType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * si-5c6525c0589545c3****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ROS.Stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The log source. Valid values:
   * 
   * computeNest : logs of the deployment and upgrade of the service instance.
   * application: logs generated by the application.
   * actionTrail: logs generated by ActionTrail.
   * compliancePack: Logs originating from the compliance package.
   * ros: Logs originating from ROS.
   * meteringData：Logs originating from the pay-as-you-go model.
   * 
   * @example
   * computeNest
   */
  source?: string;
  /**
   * @remarks
   * The state of the service instance. Valid values:
   * 
   * *   Creating: The service instance is being created.
   * *   Created: The service instance is created.
   * *   Deploying: The service instance is being deployed.
   * *   Deployed: The service instance is deployed.
   * *   DeployedFailed: The service instance failed to be deployed.
   * *   Expired: The service instance expired.
   * *   ExtendSuccess: The service instance is renewed.
   * *   Upgrading: The service instance is being updated.
   * *   UpgradeSuccess: The service instance is updated.
   * 
   * @example
   * Creating
   */
  status?: string;
  /**
   * @remarks
   * The timestamp of the service instance log.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackType: 'CompliancePackType',
      complianceRuleName: 'ComplianceRuleName',
      content: 'Content',
      logType: 'LogType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      source: 'Source',
      status: 'Status',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackType: 'string',
      complianceRuleName: 'string',
      content: 'string',
      logType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      status: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Vaild values:
   * - ExpireTimeStart
   * - ExpireTimeEnd
   * - PayType
   * - ResourceARN
   * 
   * @example
   * ExpireTimeStart
   */
  name?: string;
  /**
   * @remarks
   * The value of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListServiceInstanceResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource expires.
   * 
   * @example
   * 2022-03-01T12:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * RDS
   */
  productType?: string;
  /**
   * @remarks
   * The renewal state. Valid values:
   * 
   * *   AutoRenewal
   * *   ManualRenewal
   * *   NotRenewal
   * 
   * @example
   * AutoRenewal
   */
  renewStatus?: string;
  /**
   * @remarks
   * The renewal period.
   * 
   * @example
   * 1
   */
  renewalPeriod?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  renewalPeriodUnit?: string;
  /**
   * @remarks
   * The ARN of the resource.
   * 
   * @example
   * arn:acs:sag:cn-hangzhou:130920852836****:ccn/ccn-b3qf0q439sq2de****
   */
  resourceARN?: string;
  /**
   * @remarks
   * The state of the resource. Valid values:
   * 
   * *   running
   * *   waiting
   * *   terminated
   * 
   * >  This parameter is returned only for containers.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewStatus: 'RenewStatus',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      resourceARN: 'ResourceARN',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      payType: 'string',
      productCode: 'string',
      productType: 'string',
      renewStatus: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      resourceARN: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory extends $dara.Model {
  /**
   * @remarks
   * The time when the update ended.
   * 
   * @example
   * 2022-04-26T09:09:51Z
   */
  endTime?: string;
  /**
   * @remarks
   * The version before the upgrade.
   * 
   * @example
   * 1
   */
  fromVersion?: string;
  /**
   * @remarks
   * The upgrade result.
   * 
   * @example
   * {\\"PreUpgradeExecutionId\\":\\"exec-123\\"}
   */
  results?: string;
  /**
   * @remarks
   * The time when the update started.
   * 
   * @example
   * 2022-04-26T08:09:51Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the update. Valid values:
   * 
   * *   upgrading: The service instance is being upgraded.
   * *   UpgradeSuccessful: The service instance is upgraded.
   * *   UpgradeFailed: The service instance failed to be upgraded.
   * 
   * @example
   * UpgradeFailed
   */
  status?: string;
  /**
   * @remarks
   * The version after the upgrade.
   * 
   * @example
   * 3
   */
  toVersion?: string;
  /**
   * @remarks
   * The update type.
   * 
   * @example
   * Upgrade
   */
  type?: string;
  /**
   * @remarks
   * The ID of the upgrade record.
   * 
   * @example
   * exec-123
   */
  upgradeHistoryId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      fromVersion: 'FromVersion',
      results: 'Results',
      startTime: 'StartTime',
      status: 'Status',
      toVersion: 'ToVersion',
      type: 'Type',
      upgradeHistoryId: 'UpgradeHistoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      fromVersion: 'string',
      results: 'string',
      startTime: 'string',
      status: 'string',
      toVersion: 'string',
      type: 'string',
      upgradeHistoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * - Name：Query by service name.
   * - ServiceInstanceName：Query by service  instance name.
   * - ServiceInstanceId：Query by service  instance ID.
   * - ServiceId：Query by service ID.
   * - Version：Query by service version.
   * - Status：Query by service status.
   * - DeployType: Query by service deployType.
   * - ServiceType：Query by service deployType.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListServiceInstancesResponseBodyServiceInstancesServiceCommodity extends $dara.Model {
  /**
   * @remarks
   * The configuration metadata related to SaaS Boost.
   * 
   * @example
   * { // Specifies whether to associate the service with the SaaS Boost commodity. Default value: false. "Enabled":true/false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The platform type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * *   SaasBoost: SaaS Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saasBoostMetadata: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $dara.Model {
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Alibaba Cloud Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling the Service Provider Interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 1.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity,
      deployType: 'string',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListServiceInstancesResponseBodyServiceInstances extends $dara.Model {
  /**
   * @remarks
   * The business state of the service instance. Valid values:
   * 
   * *   Normal
   * *   Renewing
   * *   RenewFailed
   * *   Expired
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Marketplace instance.
   * 
   * @example
   * 5827****
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the managed service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The information returned after the service instance is created.
   * 
   * @example
   * {"managementUrl": "http://xx.xx"}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters of the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The deployment progress of the service instance, in percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz6scpcxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * [{"StackId": "stack-xxx"}]
   */
  resources?: string;
  /**
   * @remarks
   * The services.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source from which the service instance is created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      orderId: 'OrderId',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      marketInstanceId: 'string',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      orderId: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   ServiceName: the service name.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBodyServiceUsages extends $dara.Model {
  /**
   * @remarks
   * The review comment.
   * 
   * @example
   * Approved
   */
  comments?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c9f36ec6d19b4exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * LobelChat
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the service application. Valid values:
   * 
   * *   Submitted: The application is submitted for review.
   * *   Approved: The application is approved.
   * *   Rejected: The application is rejected.
   * *   Canceled: The application is canceled.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * TestSupplier
   */
  supplierName?: string;
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  /**
   * @remarks
   * The information about the applicants.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more parameter names to query services. Valid values:
   * 
   * *   ServiceId: the ID of the service.
   * *   Name: the name of the service.
   * *   Status: the state of the service.
   * *   SupplierName: the name of the service provider.
   * 
   * @example
   * Status
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * Deploy Page.
   * 
   * @example
   * Order： Order Page
   * Detail： Detail Page
   */
  deployPage?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deployPage: 'DeployPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deployPage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese.
   * *   en-US: English.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * Docker Community Edition
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * cloud_ssd
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServicesResponseBodyServicesCommodity;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * Service deployment approach. Valid values:
   * - NoWhere
   * 
   * - Marketplace
   * 
   * - ComputeNest
   * 
   * @example
   * ComputeNest
   */
  deployFrom?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2022-01-21T10:35:44Z
   */
  publishTime?: string;
  /**
   * @remarks
   * Service recommendation score.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-6b5d632edd394dxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * http://example1.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - private: The service is a private service and is deployed within the account of a customer.
   * - managed: The service is a fully managed service and is deployed within the account of a service provider.
   * - operation: The service is a hosted O&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The state of the service. Valid values:
   * 
   * *   Draft: The service is a draft.
   * *   Submitted: The service is submitted for review. You cannot modify services in this state.
   * *   Approved: The service is approved. You cannot modify services in this state. You can publish services in this state.
   * *   Launching: The service is being published.
   * *   Online: The service is published.
   * *   Offline: The service is unpublished.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The name of service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierNameEng?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1436322xxxxx
   */
  supplierUid?: number;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * The tenant type of the managed service. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 4
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * v2.0.0
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      deployFrom: 'DeployFrom',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      score: 'Score',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierNameEng: 'SupplierNameEng',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      deployFrom: 'string',
      deployType: 'string',
      publishTime: 'string',
      score: 'number',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierNameEng: 'string',
      supplierUid: 'number',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialDuration: 'string',
      trialType: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * si-44b9923be2d048eb8f5f
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * 
   * @example
   * serviceinstance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The values of the tags.
   * 
   * @example
   * major
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesRequestResourcePeriod extends $dara.Model {
  /**
   * @remarks
   * The renewal duration for the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration of the resource, which is the unit for the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesResponseBodyFailureDetails extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidPeriod
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesResponseBodyRenewalResult extends $dara.Model {
  /**
   * @remarks
   * Number of failed renewals.
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * Number of successfully renewed resources.
   * 
   * @example
   * 9
   */
  succeeded?: number;
  /**
   * @remarks
   * Number of renewed resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      succeeded: 'Succeeded',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      succeeded: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class UpdateServiceInstanceSpecRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   **true (default)**: automatically completes the payment. You must make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated. If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.[](https://rdsnext.console.aliyun.com/dashboard/cn-beijing)
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   **true (default)**: automatically completes the payment. You must make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated. If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.[](https://rdsnext.console.aliyun.com/dashboard/cn-beijing)
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInformationRequestDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable screencast delivery to OSS. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  actiontrailDeliveryToOssEnabled?: boolean;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * "mybucket"
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Specifies whether to enable screencast delivery to Object Storage Service (OSS). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ossEnabled?: boolean;
  /**
   * @remarks
   * The number of days for which the screencasts are saved.
   * 
   * @example
   * 7
   */
  ossExpirationDays?: number;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * "path1/path2/"
   */
  ossPath?: string;
  static names(): { [key: string]: string } {
    return {
      actiontrailDeliveryToOssEnabled: 'ActiontrailDeliveryToOssEnabled',
      ossBucketName: 'OssBucketName',
      ossEnabled: 'OssEnabled',
      ossExpirationDays: 'OssExpirationDays',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actiontrailDeliveryToOssEnabled: 'boolean',
      ossBucketName: 'string',
      ossEnabled: 'boolean',
      ossExpirationDays: 'number',
      ossPath: 'string',
    };
  }

  validate() {
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

export class CancelServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to delete the application.
   * 
   * >  After you delete the application, you must re-enter the application information the next time you submit an application.
   * 
   * @example
   * true
   */
  needDelete?: boolean;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-d6fc5f949a9246xxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      needDelete: 'NeedDelete',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      needDelete: 'boolean',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can view resource group IDs in the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) .
   * 
   * @example
   * rg-acfmzmhzo******
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud resource that you want to move to a new resource group.
   * 
   * @example
   * si-5dc794a7fd254e******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceDeployableRequest extends $dara.Model {
  /**
   * @remarks
   * Total amount of postpaid.
   * 
   * @example
   * 1.29
   */
  postPaidAmount?: string;
  /**
   * @remarks
   * Total amount of prepayment.
   * 
   * @example
   * 0.0
   */
  prePaidAmount?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The trial type of the service instance. Valid values:
   * 
   * *   **Trial**: Trials are supported.
   * *   **NotTrial**: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      postPaidAmount: 'PostPaidAmount',
      prePaidAmount: 'PrePaidAmount',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidAmount: 'string',
      prePaidAmount: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceDeployableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Inspection result.
   */
  checkResults?: CheckServiceDeployableResponseBodyCheckResults[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResults: 'CheckResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResults: { 'type': 'array', 'itemType': CheckServiceDeployableResponseBodyCheckResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResults)) {
      $dara.Model.validateArray(this.checkResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceDeployableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceDeployableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckServiceDeployableResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   true: performs a dry run for the request, but does not create a service instance.
   * *   false: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The options that the system adopts when the system continues to create the service instance.
   */
  option?: string[];
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      option: 'Option',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      option: { 'type': 'array', 'itemType': 'string' },
      parameters: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: ContinueDeployServiceInstanceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: ContinueDeployServiceInstanceResponseBodyDryRunResult,
      requestId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinueDeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ContinueDeployServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: CreateServiceInstanceRequestCommodity;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * Default Group
   */
  contactGroup?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   **true**: performs a dry run for the request, but does not create a service instance.
   * *   **false**: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Prometheus monitoring feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The serviceInstance name.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The operation metadata.
   */
  operationMetadata?: CreateServiceInstanceRequestOperationMetadata;
  /**
   * @remarks
   * The parameters that the customer specifies to deploy the service instance.
   * 
   * >  If region information is required to create a service instance, you must specify the region ID in the value of Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to automatically deduct the resource fees from the account balance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  resourceAutoPay?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * Specification code.
   * 
   * @example
   * yuncode5425200001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Default Ppackage
   */
  specificationName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ECS Template
   */
  templateName?: string;
  /**
   * @remarks
   * The trial type of the service instance. Valid values:
   * 
   * *   **Trial**: Trials are supported.
   * *   **NotTrial**: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      contactGroup: 'ContactGroup',
      dryRun: 'DryRun',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceAutoPay: 'ResourceAutoPay',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: CreateServiceInstanceRequestCommodity,
      contactGroup: 'string',
      dryRun: 'boolean',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      name: 'string',
      operationMetadata: CreateServiceInstanceRequestOperationMetadata,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceAutoPay: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationCode: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.operationMetadata && typeof (this.operationMetadata as any).validate === 'function') {
      (this.operationMetadata as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: CreateServiceInstanceShrinkRequestCommodity;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * Default Group
   */
  contactGroup?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   **true**: performs a dry run for the request, but does not create a service instance.
   * *   **false**: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Prometheus monitoring feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The serviceInstance name.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The operation metadata.
   */
  operationMetadata?: CreateServiceInstanceShrinkRequestOperationMetadata;
  /**
   * @remarks
   * The parameters that the customer specifies to deploy the service instance.
   * 
   * >  If region information is required to create a service instance, you must specify the region ID in the value of Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to automatically deduct the resource fees from the account balance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  resourceAutoPay?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * Specification code.
   * 
   * @example
   * yuncode5425200001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Default Ppackage
   */
  specificationName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateServiceInstanceShrinkRequestTag[];
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ECS Template
   */
  templateName?: string;
  /**
   * @remarks
   * The trial type of the service instance. Valid values:
   * 
   * *   **Trial**: Trials are supported.
   * *   **NotTrial**: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      contactGroup: 'ContactGroup',
      dryRun: 'DryRun',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceAutoPay: 'ResourceAutoPay',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: CreateServiceInstanceShrinkRequestCommodity,
      contactGroup: 'string',
      dryRun: 'boolean',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      name: 'string',
      operationMetadata: CreateServiceInstanceShrinkRequestOperationMetadata,
      parametersShrink: 'string',
      regionId: 'string',
      resourceAutoPay: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      specificationCode: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceShrinkRequestTag },
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.operationMetadata && typeof (this.operationMetadata as any).validate === 'function') {
      (this.operationMetadata as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MartketInstance ID.
   * 
   * @example
   * 786***45
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   **Created**
   * *   **Deploying**
   * *   **DeployedFailed**
   * *   **Deployed**
   * *   **Upgrading**
   * *   **Deleting**
   * *   **Deleted**
   * *   **DeletedFailed**
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceInstanceId: 'ServiceInstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
      serviceInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-d6fc5f949a9246xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The application information.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-d6fc5f949a9246xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The application information.
   */
  userInformationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformationShrink: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformationShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the service instances.
   * 
   * This parameter is required.
   */
  serviceInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstanceId)) {
      $dara.Model.validateArray(this.serviceInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotency of the request. Generate a unique value for this parameter from your client to ensure it is unique across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Region ID. Allowed values:
   * 
   * - cn-hangzhou: East China 1 (Hangzhou).
   * 
   * - ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeployServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeployServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of operation N for which you want to generate the policy information.
   * 
   * Valid values:
   * 
   * *   CreateServiceInstance: creates a serviceInstance by calling the CreateServiceInstance operation.
   * *   UpdateServiceInstance: updates a serviceInstance by calling the UpdateServiceInstance operation.
   * *   DeleteServiceInstance: deletes a serviceInstance by calling the DeleteServiceInstance operation.
   * 
   * >  The default value is the combination of all valid values.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-b3e9ed878b0c4xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * GPU-单机版
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies that are missing.
   */
  missingPolicy?: GenerateServicePolicyResponseBodyMissingPolicy[];
  /**
   * @remarks
   * The RAM policy.
   * 
   * @example
   * {Statement": [{ "Action": ["oos:*"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:DescribeInstances"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:RunInstance"], "Effect": "Allow", "Resource": "*"}], "Version": "1"}
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5040BE9E-8DA2-5C9D-9B70-0EE6027A14BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': GenerateServicePolicyResponseBodyMissingPolicy },
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateServicePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateServicePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Region Id.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance id.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Wordpress
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * Whether to disclose service details.
   */
  showDetails?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      showDetails: 'ShowDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      showDetails: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.showDetails)) {
      $dara.Model.validateArray(this.showDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations of the service.
   * 
   * >  This parameter takes effect only when you specify an alert policy for **PolicyNames**.
   * 
   * @example
   * { "TemplateUrl": "http://template.file.url", "ApplicationGroups": [ { "Name": "applicationGroup1", "TemplateUrl": "url1" }, { "Name": "applicationGroup2", "TemplateUrl": "url2" } ] }
   */
  alarmMetadata?: string;
  /**
   * @remarks
   * The categories of the Flow.
   * 
   * @example
   * AI
   */
  categories?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace.
   */
  commodity?: GetServiceResponseBodyCommodity;
  /**
   * @remarks
   * Service deployment approach, Valid values：
   * 
   * - NoWhere
   * - Marketplace
   * - ComputeNest
   * 
   * @example
   * Marketplace
   */
  deployFrom?: string;
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   * 
   * @example
   * {\\"TemplateUrl\\": \\"http://tidbRosFile\\"}
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The duration for which hosted O\\&M is implemented. Unit: seconds.
   * 
   * @example
   * 259200
   */
  duration?: number;
  /**
   * @remarks
   * Information about the ram role created in the service template.
   */
  instanceRoleInfos?: GetServiceResponseBodyInstanceRoleInfos[];
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is returned if you set **ServiceType** to **private**.
   * 
   * @example
   * false
   */
  isSupportOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {\\"PayType\\":\\"CustomFixTime\\",\\"DefaultLicenseDays\\":7,\\"CustomMetadata\\":[{\\"TemplateName\\":\\"ECS\\",\\"SpecificationName\\":\\"bandwith-0\\",\\"CustomData\\":\\"1\\"}]}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The logging configurations.
   * 
   * @example
   * {\\"Logstores\\":[]}
   */
  logMetadata?: string;
  /**
   * @remarks
   * The operation metadata.
   * 
   * @example
   * {\\"PrometheusConfigMap\\":{\\"New_Vpc_Ack_And_Jumpserver\\":{}}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Deployable
   */
  permission?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length. Separate multiple names with commas (,). Only hosted O\\&M policies are supported.
   * 
   * @example
   * policyName1, policyName2
   */
  policyNames?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  /**
   * @remarks
   * Service document information.
   */
  serviceDocumentInfos?: GetServiceResponseBodyServiceDocumentInfos[];
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceResponseBodyServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * http://example1.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - private: The service is a private service and is deployed within the account of a customer.
   * - managed: The service is a fully managed service and is deployed within the account of a service provider.
   * - operation: The service is a hosted O&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The deploy status of the service. Valid values:
   * - Draft
   * - Beta
   * - Submitted
   * - Approved
   * - Launching
   * - Online
   * - Offline
   * - Creating
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The description of service provider.
   * 
   * @example
   * Computing Nest Community service
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The Logo of service provider.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/xxx/service-image/xxx.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 158927391332*****
   */
  supplierUid?: number;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  supportContacts?: GetServiceResponseBodySupportContacts[];
  /**
   * @remarks
   * The tags.
   */
  tags?: GetServiceResponseBodyTags[];
  /**
   * @remarks
   * The type of the tenant. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: number;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMetadata: 'AlarmMetadata',
      categories: 'Categories',
      commodity: 'Commodity',
      deployFrom: 'DeployFrom',
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      duration: 'Duration',
      instanceRoleInfos: 'InstanceRoleInfos',
      isSupportOperated: 'IsSupportOperated',
      licenseMetadata: 'LicenseMetadata',
      logMetadata: 'LogMetadata',
      operationMetadata: 'OperationMetadata',
      permission: 'Permission',
      policyNames: 'PolicyNames',
      publishTime: 'PublishTime',
      requestId: 'RequestId',
      serviceDocumentInfos: 'ServiceDocumentInfos',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      status: 'Status',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
      supportContacts: 'SupportContacts',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMetadata: 'string',
      categories: 'string',
      commodity: GetServiceResponseBodyCommodity,
      deployFrom: 'string',
      deployMetadata: 'string',
      deployType: 'string',
      duration: 'number',
      instanceRoleInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyInstanceRoleInfos },
      isSupportOperated: 'boolean',
      licenseMetadata: 'string',
      logMetadata: 'string',
      operationMetadata: 'string',
      permission: 'string',
      policyNames: 'string',
      publishTime: 'string',
      requestId: 'string',
      serviceDocumentInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceDocumentInfos },
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceResponseBodyServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      shareType: 'string',
      status: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierUid: 'number',
      supplierUrl: 'string',
      supportContacts: { 'type': 'array', 'itemType': GetServiceResponseBodySupportContacts },
      tags: { 'type': 'array', 'itemType': GetServiceResponseBodyTags },
      tenantType: 'string',
      trialDuration: 'number',
      trialType: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.instanceRoleInfos)) {
      $dara.Model.validateArray(this.instanceRoleInfos);
    }
    if(Array.isArray(this.serviceDocumentInfos)) {
      $dara.Model.validateArray(this.serviceDocumentInfos);
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.supportContacts)) {
      $dara.Model.validateArray(this.supportContacts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * qwertyuiop
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the subscription duration.
   */
  commodity?: GetServiceEstimateCostRequestCommodity;
  /**
   * @remarks
   * The name of the configuration change operation.
   * 
   * @example
   * Parameter change
   */
  operationName?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * { \\"RegionId\\": \\"cn-hangzhou\\", \\"InstanceType\\": \\"ecs.g5.large\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-12xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17xxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      operationName: 'OperationName',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: GetServiceEstimateCostRequestCommodity,
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * qwertyuiop
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the subscription duration.
   */
  commodityShrink?: string;
  /**
   * @remarks
   * The name of the configuration change operation.
   * 
   * @example
   * Parameter change
   */
  operationName?: string;
  /**
   * @remarks
   * The parameters that are specified to deploy the service instance.
   * 
   * @example
   * { \\"RegionId\\": \\"cn-hangzhou\\", \\"InstanceType\\": \\"ecs.g5.large\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-12xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17xxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodityShrink: 'Commodity',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodityShrink: 'string',
      operationName: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The estimated price.
   * 
   * @example
   * {\\"cmgj00059839\\": {\\"Result\\": {\\"InquiryType\\": \\"Buy\\", \\"Order\\": {\\"Currency\\": \\"CNY\\", \\"DiscountAmount\\": \\"0.0\\", \\"TradeAmount\\": \\"0.01\\", \\"OriginalAmount\\": \\"0.01\\"}}}}
   */
  commodity?: { [key: string]: CommodityValue };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08ABBB67-39C9-5EE7-98E5-80486F75CE8D
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * { "EcsInstance" : { "Type" : "ALIYUN::ECS::Instance", "Success" : true, "Result" : { "Order" : { "Currency" : "CNY", "RuleIds" : [ "102111101338\\*\\*\\*\\*" ], "DetailInfos" : { "ResourcePriceModel" : [ { "OriginalPrice" : 0, "DiscountPrice" : 0, "SubRules" : { "Rule" : [ ] }, "Resource" : "bandwidth", "TradePrice" : 0 }, { "OriginalPrice" : 0, "DiscountPrice" : 0, "SubRules" : { "Rule" : [ ] }, "Resource" : "image", "TradePrice" : 0 }, { "OriginalPrice" : 0.366666, "DiscountPrice" : 0.249012, "SubRules" : { "Rule" : [ ] }, "Resource" : "instanceType", "TradePrice" : 0.117654 }, { "OriginalPrice" : 0.055555, "DiscountPrice" : 0.037729, "SubRules" : { "Rule" : [ ] }, "Resource" : "systemDisk", "TradePrice" : 0.017826 } ] }, "TradeAmount" : 0.135, "OriginalAmount" : 0.422, "Coupons" : { "Coupon" : [ ] }, "DiscountAmount" : 0.287 }, "OrderSupplement" : { "PriceUnit" : "/Hour", "ChargeType" : "PostPaid", "Quantity" : 1, "PriceType" : "Total" }, "Rules" : { "Rule" : [ { "RuleDescId" : "102111101338\\*\\*\\*\\*", "Name" : "contract discount_multi-billing item discount_3.208750 discount" } ] } } } }
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: { 'type': 'map', 'keyType': 'string', 'valueType': CommodityValue },
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.commodity) {
      $dara.Model.validateMap(this.commodity);
    }
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceEstimateCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceEstimateCostResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The MarketInstance ID.
   * 
   * @example
   * 704***59
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * >  You must specify either `ServiceInstanceId` or `MarketInstanceId`. Otherwise, the operation fails.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      marketInstanceId: 'MarketInstanceId',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketInstanceId: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business state of the service instance. Valid values:
   * 
   * *   Normal
   * *   Renewing
   * *   RenewFailed
   * *   Expired
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * Cloud Marketplace additional billing items.
   * 
   * @example
   * {"TiKVServerCount":"3","package_version":"yuncode5398300001","PDServerCount":"3","TiDBServerCount":"2"}
   */
  components?: string;
  /**
   * @remarks
   * The time when the serviceInstance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the operation feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Whether to enable Prometheus monitoring.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The expiration time of service instance.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * https://g.console.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxx-xxxxxxxx-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The expiration time of licence.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  licenseEndTime?: string;
  /**
   * @remarks
   * The market Instance ID.
   * 
   * @example
   * 704***59
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This parameter is discontinued.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The serviceInstance  to be operated.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The operation start time.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The outputs returned from creating the service instance.
   * 
   * *   If the service is deployed by using a ROS template, all output fields of the template are returned.
   * *   If the service is deployed by calling an SPI operation, the output fields of the service provider and for the Compute Nest additional features are returned.
   * 
   * @example
   * {"InstanceIds":["i-hp38ofxl0dsyfi7z****"]}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the instance for market. Valid values:
   * 
   * *   Permanent: Permanent purchase
   * *   Subscription: Subscription.
   * *   PayAsYouGo: Pay-as-you-go.
   * *   CustomFixTime: Merchant custom fixed duration.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package one
   */
  predefinedParameterName?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * [{"StackId": "stack-xxx"}]
   */
  resources?: string;
  /**
   * @remarks
   * The information about the service to which the service instance belongs.
   */
  service?: GetServiceInstanceResponseBodyService;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - private: The service is a private service and is deployed within the account of a customer.
   * - managed: The service is a fully managed service and is deployed within the account of a service provider.
   * - operation: The service is a hosted O&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source of the serviceInstance. Valid values:
   * - User
   * - Market
   * - Supplier
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deploy status of the serviceInstance. Valid values:
   * - Created
   * - Deploying
   * - DeployedFailed
   * - Deployed
   * - Upgrading
   * - Deleting
   * - Deleted
   * - DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment state of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 158927391332*****
   */
  supplierUid?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the serviceInstance  was last updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The AliUid of the user.
   * 
   * @example
   * 130920852836****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      components: 'Components',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      isOperated: 'IsOperated',
      licenseEndTime: 'LicenseEndTime',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      components: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      isOperated: 'boolean',
      licenseEndTime: 'string',
      marketInstanceId: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a parameter value from your client to ensure its uniqueness across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Order type. Possible value: Renewal.
   * 
   * This parameter is required.
   * 
   * @example
   * Renewal
   */
  orderType?: string;
  /**
   * @remarks
   * The renewal duration for all prepaid resources of the service instance. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration of all prepaid resources of the service instance, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource renewal configuration.
   */
  resourcePeriod?: GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod[];
  /**
   * @remarks
   * Service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      orderType: 'OrderType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourcePeriod: 'ResourcePeriod',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      orderType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourcePeriod: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostRequestResourcePeriod },
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePeriod)) {
      $dara.Model.validateArray(this.resourcePeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  /**
   * @remarks
   * List of resource price information.
   */
  resourcePrices?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePrices: 'ResourcePrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePrices: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePrices)) {
      $dara.Model.validateArray(this.resourcePrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceInstanceSubscriptionEstimateCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceInstanceSubscriptionEstimateCostResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\",\\"ZoneId\\":\\"cn-hangzhou-g\\",\\"EcsInstanceType\\":\\"ecs.g5.large\\",\\"InstancePassword\\":\\"xxxxxxxx\\",\\"PayType\\":\\"PostPaid\\",\\"PayPeriodUnit\\":\\"Month\\",\\"PayPeriod\\":1}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0efc0db451794bxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ECS
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {\\"RegionId\\":\\"cn-hangzhou\\",\\"ZoneId\\":\\"cn-hangzhou-g\\",\\"EcsInstanceType\\":\\"ecs.g5.large\\",\\"InstancePassword\\":\\"xxxxxxxx\\",\\"PayType\\":\\"PostPaid\\",\\"PayPeriodUnit\\":\\"Month\\",\\"PayPeriod\\":1}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0efc0db451794bxxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ECS
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersShrink: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C27145F-C9F4-545D-A355-DCDDAD63D548
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the services.
   */
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  validate() {
    if(Array.isArray(this.serviceProvisions)) {
      $dara.Model.validateArray(this.serviceProvisions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceProvisionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceProvisionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  deployRegionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the private connection. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enablePrivateVpcConnection?: boolean;
  /**
   * @remarks
   * The configuration parameters of the service instance.
   */
  parameters?: GetServiceTemplateParameterConstraintsRequestParameters[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-731f788406024axxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-461ee95f46ca46xxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * 套餐一
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 模板1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deployRegionId: 'DeployRegionId',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deployRegionId: 'string',
      enablePrivateVpcConnection: 'boolean',
      parameters: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsRequestParameters },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The package family constraints.
   */
  familyConstraints?: string[];
  /**
   * @remarks
   * The constraints on the parameters.
   */
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 449DC03D-A039-56A6-8D6F-6EBCCCE0EE2C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familyConstraints: 'FamilyConstraints',
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyConstraints: { 'type': 'array', 'itemType': 'string' },
      parameterConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.familyConstraints)) {
      $dara.Model.validateArray(this.familyConstraints);
    }
    if(Array.isArray(this.parameterConstraints)) {
      $dara.Model.validateArray(this.parameterConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceTemplateParameterConstraintsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceTemplateParameterConstraintsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceTemplateParameterConstraintsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery settings.
   */
  deliverySettings?: GetUserInformationResponseBodyDeliverySettings;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52EBAF16-22F6-53DB-AE1E-44764FC62AF0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: GetUserInformationResponseBodyDeliverySettings,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInformationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserInformationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query, an empty nextToken indicates there is no next page.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 分页大小。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Next Token
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Permission policy list
   */
  policies?: ListPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policies: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category list of the service.
   */
  categories?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCategoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceCategoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceInstanceLogsRequestFilter[];
  /**
   * @remarks
   * The log source. When this field is empty, query logs with the source set to computeNest and ros. Valid values:
   * 
   * computeNest : logs of the deployment and upgrade of the service instance.
   * application: logs generated by the application.
   * actionTrail: logs generated by ActionTrail.
   * compliancePack: Logs originating from the compliance package.
   * ros: Logs originating from ROS.
   * meteringData：Logs originating from the pay-as-you-go model.
   * 
   * @example
   * computeNest
   */
  logSource?: string;
  /**
   * @remarks
   * The Logstore. You must specify this parameter if you set LogSource to application.
   * 
   * @example
   * logabc
   */
  logstore?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-70a3b15bb626435b****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   Ascending
   * *   (Default) Descending
   * 
   * @example
   * Ascending: Ascending order
   * 
   * Descending (default value): Descending order
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      logSource: 'LogSource',
      logstore: 'Logstore',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstanceLogsRequestFilter },
      logSource: 'string',
      logstore: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The logs of the service instance.
   */
  serviceInstancesLogs?: ListServiceInstanceLogsResponseBodyServiceInstancesLogs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstancesLogs: 'ServiceInstancesLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstancesLogs: { 'type': 'array', 'itemType': ListServiceInstanceLogsResponseBodyServiceInstancesLogs },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstancesLogs)) {
      $dara.Model.validateArray(this.serviceInstancesLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstanceLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Vaild values:
   * 
   * - ExpireTimeStart：
   * Query start time for Subscription resource expiration.
   * <notice>Notice Note: Only supports querying service instances on private deployments.>Notice: 
   * 
   * - ExpireTimeEnd：Query end time for Subscription resource expiration.
   * <notice>Notice Note: Only supports querying service instances on private deployments.>Notice: 
   * 
   * - PayType：The billing method of the read-only instance. 
   * <notice>Notice Note: Only supports querying service instances on private deployments.<notice> 
   * 
   *    Valid values:
   * 
   *    - PayAsYouGo
   * 
   *    - Subscription
   * 
   * - ResourceARN：The Alibaba Cloud Resource Name (ARN) of a resource.
   */
  filters?: ListServiceInstanceResourcesRequestFilters[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If **NextToken** is not returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d8a0cc2a1ee04dce****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * Service Instance resource type，include AliyunResource and ContainerResource.
   * 
   * @example
   * AliyunResource
   */
  serviceInstanceResourceType?: string;
  /**
   * @remarks
   * The tag key and value.
   */
  tag?: ListServiceInstanceResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourceType: 'ServiceInstanceResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListServiceInstanceResourcesRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListServiceInstanceResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: ListServiceInstanceResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListServiceInstanceResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstanceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceUpgradeHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-70a3b15bb62643xxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceUpgradeHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI41
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE3EDF4E-B3B1-19B6-BD01-30D4D00F6E5D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The upgrade history.
   */
  upgradeHistory?: ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      upgradeHistory: 'UpgradeHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      upgradeHistory: { 'type': 'array', 'itemType': ListServiceInstanceUpgradeHistoryResponseBodyUpgradeHistory },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeHistory)) {
      $dara.Model.validateArray(this.upgradeHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceUpgradeHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstanceUpgradeHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstanceUpgradeHistoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstancesRequestFilter[];
  /**
   * @remarks
   * The number of entries page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag key and value.
   */
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the service instances.
   */
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstances)) {
      $dara.Model.validateArray(this.serviceInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceUsagesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceUsagesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18AD0960-A9FE-1AC8-ADF8-22131Fxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The service applications.
   */
  serviceUsages?: ListServiceUsagesResponseBodyServiceUsages[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceUsages: 'ServiceUsages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceUsages: { 'type': 'array', 'itemType': ListServiceUsagesResponseBodyServiceUsages },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceUsages)) {
      $dara.Model.validateArray(this.serviceUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceUsagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceUsagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceUsagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServicesRequestFilter[];
  /**
   * @remarks
   * Keyword fuzzy query.
   * 
   * @example
   * name
   */
  fuzzyKeyword?: string;
  /**
   * @remarks
   * Whether it is used. Optional values:
   * 
   * 
   * 
   * - false: not being used.
   * 
   * 
   * 
   * - true: already in use.
   * 
   * @example
   * false
   */
  inUsed?: boolean;
  /**
   * @remarks
   * The number of entries page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * Service ordering type.
   * 
   * @example
   * UpdateTime
   */
  orderByType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service access type.
   * 
   * @example
   * All
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListServicesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      fuzzyKeyword: 'FuzzyKeyword',
      inUsed: 'InUsed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderByType: 'OrderByType',
      regionId: 'RegionId',
      serviceAccessType: 'ServiceAccessType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServicesRequestFilter },
      fuzzyKeyword: 'string',
      inUsed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderByType: 'string',
      regionId: 'string',
      serviceAccessType: 'string',
      tag: { 'type': 'array', 'itemType': ListServicesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI41
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * *   dataset: dataset
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the tag keys.
   */
  keys?: string[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8872ACE6-0297-54A4-8AAD-3A8623EC6C5D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  /**
   * @remarks
   * A list of resources that have tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  key?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfmTH5rcd4YFfob4P0uDAAc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * *   dataset: dataset
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0631D623-D917-1C2D-ACD6-5B3B19XXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagValuesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The renewal duration for all prepaid resources in the service instance. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration of all prepaid resources in the service instance, which is the unit for the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * List of resource renewals.
   */
  resourcePeriod?: RenewServiceInstanceResourcesRequestResourcePeriod[];
  /**
   * @remarks
   * Service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourcePeriod: 'ResourcePeriod',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourcePeriod: { 'type': 'array', 'itemType': RenewServiceInstanceResourcesRequestResourcePeriod },
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePeriod)) {
      $dara.Model.validateArray(this.resourcePeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of failed renewals.
   */
  failureDetails?: RenewServiceInstanceResourcesResponseBodyFailureDetails[];
  /**
   * @remarks
   * Renewal result.
   */
  renewalResult?: RenewServiceInstanceResourcesResponseBodyRenewalResult;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failureDetails: 'FailureDetails',
      renewalResult: 'RenewalResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureDetails: { 'type': 'array', 'itemType': RenewServiceInstanceResourcesResponseBodyFailureDetails },
      renewalResult: RenewServiceInstanceResourcesResponseBodyRenewalResult,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failureDetails)) {
      $dara.Model.validateArray(this.failureDetails);
    }
    if(this.renewalResult && typeof (this.renewalResult as any).validate === 'function') {
      (this.renewalResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewServiceInstanceResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewServiceInstanceResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewServiceInstanceResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4bxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * *   dataset: dataset
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key and value.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   true: All tags are removed from the resource.
   * *   false (default): The specified tags are removed from the resource.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * You can remove tags from up to 50 resources at a time.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   service: service
   * *   serviceinstance: service instance
   * *   artifact: artifact
   * *   dataset: dataset
   * 
   * This parameter is required.
   * 
   * @example
   * service
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   * 
   * You can specify a maximum of 20 tag keys.
   * 
   * > If you set the `All` parameter to `true`, you do not need to specify tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to authorize the service provider to perform O\\&M operations on the service instance.
   * 
   * @example
   * true
   */
  enableOperation?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17xxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableOperation: 'EnableOperation',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOperation: 'boolean',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceAttributesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: UpdateServiceInstanceSpecRequestCommodity;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. A dry run includes checks on the permissions and instance state.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run but does not create a service instance.
   * *   false: performs a dry run and creates a service instance if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Prometheus monitoring on the user side.
   * 
   * Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration change operation.
   * 
   * To obtain the names and content of the configuration change operations of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameter.
   * 
   * This parameter is available if the service provider set **Method** to **Change Parameter** when configuring configuration change operations.
   * 
   * > 
   * 
   * *   To obtain the parameters of the service that support configuration change, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * *   You can also view the parameters of the service that support configuration change in the **configuration change** dialog box in the [Compute Nest console](https://computenest.console.aliyun.com/service/instance/cn-hangzhou).
   * 
   * For example, if the service supports Elastic Compute Service (ECS) instance type upgrade, you must specify an instance type that has higher specifications than the current one.
   * 
   * @example
   * {
   *   "InstanceType": "ecs.g8ise.2xlarge"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the configuration plan.
   * 
   * This parameter is available if the service provider set **Method** to **Change Plan** when configuring configuration change operations.
   * 
   * To obtain the configuration plan names of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **PredefinedParameters** in the value of **DeployMetadata**.
   * 
   * @example
   * package One
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      dryRun: 'DryRun',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: UpdateServiceInstanceSpecShrinkRequestCommodity;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. A dry run includes checks on the permissions and instance state.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run but does not create a service instance.
   * *   false: performs a dry run and creates a service instance if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Prometheus monitoring on the user side.
   * 
   * Valid values:
   * 
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration change operation.
   * 
   * To obtain the names and content of the configuration change operations of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameter.
   * 
   * This parameter is available if the service provider set **Method** to **Change Parameter** when configuring configuration change operations.
   * 
   * > 
   * 
   * *   To obtain the parameters of the service that support configuration change, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * *   You can also view the parameters of the service that support configuration change in the **configuration change** dialog box in the [Compute Nest console](https://computenest.console.aliyun.com/service/instance/cn-hangzhou).
   * 
   * For example, if the service supports Elastic Compute Service (ECS) instance type upgrade, you must specify an instance type that has higher specifications than the current one.
   * 
   * @example
   * {
   *   "InstanceType": "ecs.g8ise.2xlarge"
   * }
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The name of the configuration plan.
   * 
   * This parameter is available if the service provider set **Method** to **Change Plan** when configuring configuration change operations.
   * 
   * To obtain the configuration plan names of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **PredefinedParameters** in the value of **DeployMetadata**.
   * 
   * @example
   * package One
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      dryRun: 'DryRun',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecShrinkRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parametersShrink: 'string',
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 23396265896****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceSpecResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the applicant.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAYChudnQUoBH+mGWFpb6oP0=
   */
  clientToken?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-39f4f251e94843xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the applicant.
   */
  userInformationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'ServiceId',
      userInformationShrink: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      userInformationShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The modified delivery settings.
   */
  deliverySettings?: UpdateUserInformationRequestDeliverySettings;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: UpdateUserInformationRequestDeliverySettings,
      regionId: 'string',
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInformationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserInformationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   **true**: performs a dry run for the request, but does not upgrade service instance.
   * *   **false**: performs a dry run for the request, and upgrade service instance if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * The parameters required for the upgrade. This parameter is required if the destination version of the service has new parameters.
   * 
   * @example
   * { \\"RegionId\\": \\"cn-hangzhou\\", \\"InstanceType\\": \\"ecs.g5.large\\"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4bxxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The destination version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   **true**: performs a dry run for the request, but does not upgrade service instance.
   * *   **false**: performs a dry run for the request, and upgrade service instance if the request passes the dry run.
   * 
   * @example
   * true
   */
  dryRun?: string;
  /**
   * @remarks
   * The parameters required for the upgrade. This parameter is required if the destination version of the service has new parameters.
   * 
   * @example
   * { \\"RegionId\\": \\"cn-hangzhou\\", \\"InstanceType\\": \\"ecs.g5.large\\"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4bxxxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The destination version.
   * 
   * @example
   * 2
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters required for the upgrade. This parameter is returned only if DryRun is set to true in the request. You can specify the required parameters based on the returned value when you perform an actual request.
   */
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeRequiredParameters)) {
      $dara.Model.validateArray(this.upgradeRequiredParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("computenest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Cancels the application for using a service.
   * 
   * @param request - CancelServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelServiceUsageResponse
   */
  async cancelServiceUsageWithOptions(request: CancelServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<CancelServiceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.needDelete)) {
      query["NeedDelete"] = request.needDelete;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelServiceUsageResponse>(await this.callApi(params, req, runtime), new CancelServiceUsageResponse({}));
  }

  /**
   * Cancels the application for using a service.
   * 
   * @param request - CancelServiceUsageRequest
   * @returns CancelServiceUsageResponse
   */
  async cancelServiceUsage(request: CancelServiceUsageRequest): Promise<CancelServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelServiceUsageWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 服务实例部署前的预检查
   * 
   * @param request - CheckServiceDeployableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceDeployableResponse
   */
  async checkServiceDeployableWithOptions(request: CheckServiceDeployableRequest, runtime: $dara.RuntimeOptions): Promise<CheckServiceDeployableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.postPaidAmount)) {
      query["PostPaidAmount"] = request.postPaidAmount;
    }

    if (!$dara.isNull(request.prePaidAmount)) {
      query["PrePaidAmount"] = request.prePaidAmount;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceDeployable",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckServiceDeployableResponse>(await this.callApi(params, req, runtime), new CheckServiceDeployableResponse({}));
  }

  /**
   * 服务实例部署前的预检查
   * 
   * @param request - CheckServiceDeployableRequest
   * @returns CheckServiceDeployableResponse
   */
  async checkServiceDeployable(request: CheckServiceDeployableRequest): Promise<CheckServiceDeployableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceDeployableWithOptions(request, runtime);
  }

  /**
   * Continues to deploy a service instance after the service instance failed to be deployed.
   * 
   * @remarks
   * This operation is available only for service instances that belong to private services deployed by using Resource Orchestration Service (ROS).
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstanceWithOptions(request: ContinueDeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ContinueDeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueDeployServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ContinueDeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new ContinueDeployServiceInstanceResponse({}));
  }

  /**
   * Continues to deploy a service instance after the service instance failed to be deployed.
   * 
   * @remarks
   * This operation is available only for service instances that belong to private services deployed by using Resource Orchestration Service (ROS).
   * 
   * @param request - ContinueDeployServiceInstanceRequest
   * @returns ContinueDeployServiceInstanceResponse
   */
  async continueDeployServiceInstance(request: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param tmpReq - CreateServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstanceWithOptions(tmpReq: CreateServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceInstanceResponse> {
    tmpReq.validate();
    let request = new CreateServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableInstanceOps)) {
      query["EnableInstanceOps"] = request.enableInstanceOps;
    }

    if (!$dara.isNull(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operationMetadata)) {
      query["OperationMetadata"] = request.operationMetadata;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAutoPay)) {
      query["ResourceAutoPay"] = request.resourceAutoPay;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationCode)) {
      query["SpecificationCode"] = request.specificationCode;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateServiceInstanceResponse>(await this.callApi(params, req, runtime), new CreateServiceInstanceResponse({}));
  }

  /**
   * Creates and deploys a service instance.
   * 
   * @param request - CreateServiceInstanceRequest
   * @returns CreateServiceInstanceResponse
   */
  async createServiceInstance(request: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Creates an application for using a service.
   * 
   * @param tmpReq - CreateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsageWithOptions(tmpReq: CreateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceUsageResponse> {
    tmpReq.validate();
    let request = new CreateServiceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInformation)) {
      request.userInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInformation, "UserInformation", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userInformationShrink)) {
      query["UserInformation"] = request.userInformationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateServiceUsageResponse>(await this.callApi(params, req, runtime), new CreateServiceUsageResponse({}));
  }

  /**
   * Creates an application for using a service.
   * 
   * @param request - CreateServiceUsageRequest
   * @returns CreateServiceUsageResponse
   */
  async createServiceUsage(request: CreateServiceUsageRequest): Promise<CreateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceUsageWithOptions(request, runtime);
  }

  /**
   * Delete service instances.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(request: DeleteServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
  }

  /**
   * Delete service instances.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Deploy service instance in Created status.
   * 
   * @param request - DeployServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstanceWithOptions(request: DeployServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeployServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeployServiceInstanceResponse>(await this.callApi(params, req, runtime), new DeployServiceInstanceResponse({}));
  }

  /**
   * Deploy service instance in Created status.
   * 
   * @param request - DeployServiceInstanceRequest
   * @returns DeployServiceInstanceResponse
   */
  async deployServiceInstance(request: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployServiceInstanceWithOptions(request, runtime);
  }

  /**
   * List available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * List available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 生成并校验服务创建stack所需要的权限
   * 
   * @param request - GenerateServicePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicyWithOptions(request: GenerateServicePolicyRequest, runtime: $dara.RuntimeOptions): Promise<GenerateServicePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateServicePolicy",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GenerateServicePolicyResponse>(await this.callApi(params, req, runtime), new GenerateServicePolicyResponse({}));
  }

  /**
   * 生成并校验服务创建stack所需要的权限
   * 
   * @param request - GenerateServicePolicyRequest
   * @returns GenerateServicePolicyResponse
   */
  async generateServicePolicy(request: GenerateServicePolicyRequest): Promise<GenerateServicePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateServicePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(request: GetServiceRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.showDetails)) {
      query["ShowDetails"] = request.showDetails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  /**
   * Queries the information about a service.
   * 
   * @param request - GetServiceRequest
   * @returns GetServiceResponse
   */
  async getService(request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceWithOptions(request, runtime);
  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param tmpReq - GetServiceEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCostWithOptions(tmpReq: GetServiceEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceEstimateCostResponse> {
    tmpReq.validate();
    let request = new GetServiceEstimateCostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commodity)) {
      request.commodityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commodity, "Commodity", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodityShrink)) {
      query["Commodity"] = request.commodityShrink;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceEstimateCost",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceEstimateCostResponse>(await this.callApi(params, req, runtime), new GetServiceEstimateCostResponse({}));
  }

  /**
   * Queries the estimated price for creating a service instance.
   * 
   * @param request - GetServiceEstimateCostRequest
   * @returns GetServiceEstimateCostResponse
   */
  async getServiceEstimateCost(request: GetServiceEstimateCostRequest): Promise<GetServiceEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the information about a service instance based on the region ID and the ID of the service instance or the Alibaba Cloud Marketplace instance. Information including the service status, template name, and involved resources are returned.
   * 
   * @param request - GetServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstanceWithOptions(request: GetServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.marketInstanceId)) {
      query["MarketInstanceId"] = request.marketInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceInstanceResponse>(await this.callApi(params, req, runtime), new GetServiceInstanceResponse({}));
  }

  /**
   * Queries the information about a service instance based on the region ID and the ID of the service instance or the Alibaba Cloud Marketplace instance. Information including the service status, template name, and involved resources are returned.
   * 
   * @param request - GetServiceInstanceRequest
   * @returns GetServiceInstanceResponse
   */
  async getServiceInstance(request: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Query renewal prices for prepaid resources of private deployment service instance. You can query renewal prices for all prepaid resources included in a service instance, or query renewal prices for specified resources. Only one of the two methods can be used.
   * 
   * @param request - GetServiceInstanceSubscriptionEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceInstanceSubscriptionEstimateCostResponse
   */
  async getServiceInstanceSubscriptionEstimateCostWithOptions(request: GetServiceInstanceSubscriptionEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceInstanceSubscriptionEstimateCostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourcePeriod)) {
      query["ResourcePeriod"] = request.resourcePeriod;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceInstanceSubscriptionEstimateCost",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceInstanceSubscriptionEstimateCostResponse>(await this.callApi(params, req, runtime), new GetServiceInstanceSubscriptionEstimateCostResponse({}));
  }

  /**
   * Query renewal prices for prepaid resources of private deployment service instance. You can query renewal prices for all prepaid resources included in a service instance, or query renewal prices for specified resources. Only one of the two methods can be used.
   * 
   * @param request - GetServiceInstanceSubscriptionEstimateCostRequest
   * @returns GetServiceInstanceSubscriptionEstimateCostResponse
   */
  async getServiceInstanceSubscriptionEstimateCost(request: GetServiceInstanceSubscriptionEstimateCostRequest): Promise<GetServiceInstanceSubscriptionEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceInstanceSubscriptionEstimateCostWithOptions(request, runtime);
  }

  /**
   * 计算巢查询服务是否开通
   * 
   * @param tmpReq - GetServiceProvisionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisionsWithOptions(tmpReq: GetServiceProvisionsRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceProvisionsResponse> {
    tmpReq.validate();
    let request = new GetServiceProvisionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvisions",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new GetServiceProvisionsResponse({}));
  }

  /**
   * 计算巢查询服务是否开通
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: GetServiceProvisionsRequest): Promise<GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries the constraints on the parameters in an Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraintsWithOptions(request: GetServiceTemplateParameterConstraintsRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceTemplateParameterConstraintsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!$dara.isNull(request.enablePrivateVpcConnection)) {
      query["EnablePrivateVpcConnection"] = request.enablePrivateVpcConnection;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.specificationName)) {
      query["SpecificationName"] = request.specificationName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.trialType)) {
      query["TrialType"] = request.trialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceTemplateParameterConstraints",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetServiceTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetServiceTemplateParameterConstraintsResponse({}));
  }

  /**
   * Queries the constraints on the parameters in an Resource Orchestration Service (ROS) template.
   * 
   * @param request - GetServiceTemplateParameterConstraintsRequest
   * @returns GetServiceTemplateParameterConstraintsResponse
   */
  async getServiceTemplateParameterConstraints(request: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a customer.
   * 
   * @param request - GetUserInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInformationResponse
   */
  async getUserInformationWithOptions(request: GetUserInformationRequest, runtime: $dara.RuntimeOptions): Promise<GetUserInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInformation",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetUserInformationResponse>(await this.callApi(params, req, runtime), new GetUserInformationResponse({}));
  }

  /**
   * Queries the information about a customer.
   * 
   * @param request - GetUserInformationRequest
   * @returns GetUserInformationResponse
   */
  async getUserInformation(request: GetUserInformationRequest): Promise<GetUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserInformationWithOptions(request, runtime);
  }

  /**
   * Query Permission Policy List
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
  }

  /**
   * Query Permission Policy List
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * 查询服务类别
   * 
   * @param request - ListServiceCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategoriesWithOptions(runtime: $dara.RuntimeOptions): Promise<ListServiceCategoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceCategories",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceCategoriesResponse>(await this.callApi(params, req, runtime), new ListServiceCategoriesResponse({}));
  }

  /**
   * 查询服务类别
   * @returns ListServiceCategoriesResponse
   */
  async listServiceCategories(): Promise<ListServiceCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceCategoriesWithOptions(runtime);
  }

  /**
   * Queries the deployment and upgrade logs of a service instance.
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogsWithOptions(request: ListServiceInstanceLogsRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstanceLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.logSource)) {
      query["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.logstore)) {
      query["Logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceLogs",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceInstanceLogsResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceLogsResponse({}));
  }

  /**
   * Queries the deployment and upgrade logs of a service instance.
   * 
   * @param request - ListServiceInstanceLogsRequest
   * @returns ListServiceInstanceLogsResponse
   */
  async listServiceInstanceLogs(request: ListServiceInstanceLogsRequest): Promise<ListServiceInstanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceLogsWithOptions(request, runtime);
  }

  /**
   * Queries the resources contained in a service instance.
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResourcesWithOptions(request: ListServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceInstanceResourceType)) {
      query["ServiceInstanceResourceType"] = request.serviceInstanceResourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceResourcesResponse({}));
  }

  /**
   * Queries the resources contained in a service instance.
   * 
   * @param request - ListServiceInstanceResourcesRequest
   * @returns ListServiceInstanceResourcesResponse
   */
  async listServiceInstanceResources(request: ListServiceInstanceResourcesRequest): Promise<ListServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the upgrade history of a service instance.
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistoryWithOptions(request: ListServiceInstanceUpgradeHistoryRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstanceUpgradeHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceUpgradeHistory",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceInstanceUpgradeHistoryResponse>(await this.callApi(params, req, runtime), new ListServiceInstanceUpgradeHistoryResponse({}));
  }

  /**
   * Queries the upgrade history of a service instance.
   * 
   * @param request - ListServiceInstanceUpgradeHistoryRequest
   * @returns ListServiceInstanceUpgradeHistoryResponse
   */
  async listServiceInstanceUpgradeHistory(request: ListServiceInstanceUpgradeHistoryRequest): Promise<ListServiceInstanceUpgradeHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceUpgradeHistoryWithOptions(request, runtime);
  }

  /**
   * {}
   * 
   * @param request - ListServiceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(request: ListServiceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
  }

  /**
   * {}
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsagesWithOptions(request: ListServiceUsagesRequest, runtime: $dara.RuntimeOptions): Promise<ListServiceUsagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceUsages",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServiceUsagesResponse>(await this.callApi(params, req, runtime), new ListServiceUsagesResponse({}));
  }

  /**
   * Queries the applications for using a service.
   * 
   * @param request - ListServiceUsagesRequest
   * @returns ListServiceUsagesResponse
   */
  async listServiceUsages(request: ListServiceUsagesRequest): Promise<ListServiceUsagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceUsagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: ListServicesRequest, runtime: $dara.RuntimeOptions): Promise<ListServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.fuzzyKeyword)) {
      query["FuzzyKeyword"] = request.fuzzyKeyword;
    }

    if (!$dara.isNull(request.inUsed)) {
      query["InUsed"] = request.inUsed;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderByType)) {
      query["OrderByType"] = request.orderByType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceAccessType)) {
      query["ServiceAccessType"] = request.serviceAccessType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  /**
   * Queries a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServicesWithOptions(request, runtime);
  }

  /**
   * 查询标签键列表
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * 查询标签键列表
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * 查询标签资源列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询标签资源列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 查询标签值列表
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * 查询标签值列表
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Renew the prepaid resources included in the private deployment service instance. You can renew all prepaid resources under the specified service instance ID, or you can renew the specified resources. Only one of the two renewal methods can be used.
   * 
   * @param request - RenewServiceInstanceResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewServiceInstanceResourcesResponse
   */
  async renewServiceInstanceResourcesWithOptions(request: RenewServiceInstanceResourcesRequest, runtime: $dara.RuntimeOptions): Promise<RenewServiceInstanceResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourcePeriod)) {
      query["ResourcePeriod"] = request.resourcePeriod;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewServiceInstanceResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RenewServiceInstanceResourcesResponse>(await this.callApi(params, req, runtime), new RenewServiceInstanceResourcesResponse({}));
  }

  /**
   * Renew the prepaid resources included in the private deployment service instance. You can renew all prepaid resources under the specified service instance ID, or you can renew the specified resources. Only one of the two renewal methods can be used.
   * 
   * @param request - RenewServiceInstanceResourcesRequest
   * @returns RenewServiceInstanceResourcesResponse
   */
  async renewServiceInstanceResources(request: RenewServiceInstanceResourcesRequest): Promise<RenewServiceInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewServiceInstanceResourcesWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstanceWithOptions(request: RestartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RestartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RestartServiceInstanceResponse>(await this.callApi(params, req, runtime), new RestartServiceInstanceResponse({}));
  }

  /**
   * When the service instance is Deployed, call the RestartServiceInstance interface to restart the service instance.
   * 
   * @param request - RestartServiceInstanceRequest
   * @returns RestartServiceInstanceResponse
   */
  async restartServiceInstance(request: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartServiceInstanceWithOptions(request, runtime);
  }

  /**
   * Rolls back an upgraded service instance to the previous version.
   * 
   * @param request - RollbackServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstanceWithOptions(request: RollbackServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RollbackServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RollbackServiceInstanceResponse>(await this.callApi(params, req, runtime), new RollbackServiceInstanceResponse({}));
  }

  /**
   * Rolls back an upgraded service instance to the previous version.
   * 
   * @param request - RollbackServiceInstanceRequest
   * @returns RollbackServiceInstanceResponse
   */
  async rollbackServiceInstance(request: RollbackServiceInstanceRequest): Promise<RollbackServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstanceWithOptions(request: StartServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartServiceInstanceResponse>(await this.callApi(params, req, runtime), new StartServiceInstanceResponse({}));
  }

  /**
   * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
   * 
   * @param request - StartServiceInstanceRequest
   * @returns StartServiceInstanceResponse
   */
  async startServiceInstance(request: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startServiceInstanceWithOptions(request, runtime);
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstanceWithOptions(request: StopServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopServiceInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopServiceInstanceResponse>(await this.callApi(params, req, runtime), new StopServiceInstanceResponse({}));
  }

  /**
   * When the service instance is Deployed and StopFailed, call the StopServiceInstance interface to stop the service instance.
   * 
   * @param request - StopServiceInstanceRequest
   * @returns StopServiceInstanceResponse
   */
  async stopServiceInstance(request: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopServiceInstanceWithOptions(request, runtime);
  }

  /**
   * 给资源打标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 给资源打标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 给资源解除标签
   * 
   * @param request - UnTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(request: UnTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UnTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagResources",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnTagResourcesResponse>(await this.callApi(params, req, runtime), new UnTagResourcesResponse({}));
  }

  /**
   * 给资源解除标签
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: UnTagResourcesRequest): Promise<UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceAttributesResponse
   */
  async updateServiceInstanceAttributesWithOptions(request: UpdateServiceInstanceAttributesRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceInstanceAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableOperation)) {
      query["EnableOperation"] = request.enableOperation;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceAttributes",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateServiceInstanceAttributesResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceAttributesResponse({}));
  }

  /**
   * Updates the attributes of a service instance.
   * 
   * @param request - UpdateServiceInstanceAttributesRequest
   * @returns UpdateServiceInstanceAttributesResponse
   */
  async updateServiceInstanceAttributes(request: UpdateServiceInstanceAttributesRequest): Promise<UpdateServiceInstanceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceAttributesWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of a service instance.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Configuration change is enabled and the related parameters are configured for the service by the service provider.
   * 
   * @param tmpReq - UpdateServiceInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpecWithOptions(tmpReq: UpdateServiceInstanceSpecRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceInstanceSpecResponse> {
    tmpReq.validate();
    let request = new UpdateServiceInstanceSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableUserPrometheus)) {
      query["EnableUserPrometheus"] = request.enableUserPrometheus;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.predefinedParametersName)) {
      query["PredefinedParametersName"] = request.predefinedParametersName;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstanceSpec",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateServiceInstanceSpecResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceSpecResponse({}));
  }

  /**
   * Changes the configurations of a service instance.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Configuration change is enabled and the related parameters are configured for the service by the service provider.
   * 
   * @param request - UpdateServiceInstanceSpecRequest
   * @returns UpdateServiceInstanceSpecResponse
   */
  async updateServiceInstanceSpec(request: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Updates the application for using a service.
   * 
   * @param tmpReq - UpdateServiceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceUsageResponse
   */
  async updateServiceUsageWithOptions(tmpReq: UpdateServiceUsageRequest, runtime: $dara.RuntimeOptions): Promise<UpdateServiceUsageResponse> {
    tmpReq.validate();
    let request = new UpdateServiceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userInformation)) {
      request.userInformationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInformation, "UserInformation", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.userInformationShrink)) {
      query["UserInformation"] = request.userInformationShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceUsage",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateServiceUsageResponse>(await this.callApi(params, req, runtime), new UpdateServiceUsageResponse({}));
  }

  /**
   * Updates the application for using a service.
   * 
   * @param request - UpdateServiceUsageRequest
   * @returns UpdateServiceUsageResponse
   */
  async updateServiceUsage(request: UpdateServiceUsageRequest): Promise<UpdateServiceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceUsageWithOptions(request, runtime);
  }

  /**
   * Updates the information about a customer.
   * 
   * @param request - UpdateUserInformationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserInformationResponse
   */
  async updateUserInformationWithOptions(request: UpdateUserInformationRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserInformationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliverySettings)) {
      query["DeliverySettings"] = request.deliverySettings;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserInformation",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateUserInformationResponse>(await this.callApi(params, req, runtime), new UpdateUserInformationResponse({}));
  }

  /**
   * Updates the information about a customer.
   * 
   * @param request - UpdateUserInformationRequest
   * @returns UpdateUserInformationResponse
   */
  async updateUserInformation(request: UpdateUserInformationRequest): Promise<UpdateUserInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserInformationWithOptions(request, runtime);
  }

  /**
   * Upgrades the version of a service instance.
   * 
   * @param tmpReq - UpgradeServiceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstanceWithOptions(tmpReq: UpgradeServiceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeServiceInstanceResponse> {
    tmpReq.validate();
    let request = new UpgradeServiceInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceInstanceId)) {
      query["ServiceInstanceId"] = request.serviceInstanceId;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeServiceInstance",
      version: "2021-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpgradeServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeServiceInstanceResponse({}));
  }

  /**
   * Upgrades the version of a service instance.
   * 
   * @param request - UpgradeServiceInstanceRequest
   * @returns UpgradeServiceInstanceResponse
   */
  async upgradeServiceInstance(request: UpgradeServiceInstanceRequest): Promise<UpgradeServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeServiceInstanceWithOptions(request, runtime);
  }

}

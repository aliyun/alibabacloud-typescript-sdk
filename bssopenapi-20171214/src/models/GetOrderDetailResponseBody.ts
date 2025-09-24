// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties extends $dara.Model {
  /**
   * @remarks
   * The attribute code of the configured item.
   * 
   * @example
   * cloud_ssd
   */
  attrApiCode?: string;
  /**
   * @remarks
   * The API code of the configured item.
   * 
   * @example
   * cloud_ssd
   */
  moduleApiCode?: string;
  /**
   * @remarks
   * The attribute value of the configuration item.
   * 
   * @example
   * cloud_ssd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attrApiCode: 'AttrApiCode',
      moduleApiCode: 'ModuleApiCode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrApiCode: 'string',
      moduleApiCode: 'string',
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

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties extends $dara.Model {
  billModuleProperties?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties[];
  static names(): { [key: string]: string } {
    return {
      billModuleProperties: 'billModuleProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModuleProperties: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties },
    };
  }

  validate() {
    if(Array.isArray(this.billModuleProperties)) {
      $dara.Model.validateArray(this.billModuleProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig extends $dara.Model {
  /**
   * @remarks
   * The API code of the configuration item.
   * 
   * @example
   * datadisk
   */
  apiCode?: string;
  /**
   * @remarks
   * The attributes of the configured item.
   */
  billModuleProperties?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties;
  /**
   * @remarks
   * The code of the configuration item.
   * 
   * @example
   * datadisk
   */
  code?: string;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * Data disk
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiCode: 'ApiCode',
      billModuleProperties: 'BillModuleProperties',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCode: 'string',
      billModuleProperties: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties,
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.billModuleProperties && typeof (this.billModuleProperties as any).validate === 'function') {
      (this.billModuleProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig extends $dara.Model {
  billModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig[];
  static names(): { [key: string]: string } {
    return {
      billModuleConfig: 'billModuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModuleConfig: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfig },
    };
  }

  validate() {
    if(Array.isArray(this.billModuleConfig)) {
      $dara.Model.validateArray(this.billModuleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties extends $dara.Model {
  /**
   * @remarks
   * The attribute code of the configured item.
   * 
   * @example
   * cloud_efficiency
   */
  code?: string;
  /**
   * @remarks
   * The attribute name of the configured item.
   * 
   * @example
   * cloud_efficiency
   */
  name?: string;
  /**
   * @remarks
   * The attribute value of the configured item.
   * 
   * @example
   * cloud_efficiency
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
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

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties extends $dara.Model {
  moduleProperties?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties[];
  static names(): { [key: string]: string } {
    return {
      moduleProperties: 'moduleProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleProperties: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModulePropertiesModuleProperties },
    };
  }

  validate() {
    if(Array.isArray(this.moduleProperties)) {
      $dara.Model.validateArray(this.moduleProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig extends $dara.Model {
  /**
   * @remarks
   * The code of the configuration item.
   * 
   * @example
   * systemdisk
   */
  code?: string;
  /**
   * @remarks
   * The attributes of the configured item.
   */
  moduleProperties?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * System disk
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      moduleProperties: 'ModuleProperties',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleProperties: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties,
      name: 'string',
    };
  }

  validate() {
    if(this.moduleProperties && typeof (this.moduleProperties as any).validate === 'function') {
      (this.moduleProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig extends $dara.Model {
  originalModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig[];
  static names(): { [key: string]: string } {
    return {
      originalModuleConfig: 'originalModuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalModuleConfig: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfig },
    };
  }

  validate() {
    if(Array.isArray(this.originalModuleConfig)) {
      $dara.Model.validateArray(this.originalModuleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrder extends $dara.Model {
  /**
   * @remarks
   * The aftertaxt amount of the order.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: string;
  /**
   * @remarks
   * The billing information about the configurations.
   */
  billModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configurations of the main service.
   * 
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  config?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The currency. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The additional information about the order.
   */
  extendInfos?: { [key: string]: string };
  /**
   * @remarks
   * The instance IDs.
   * 
   * @example
   * ["rm-bp1a2vsr018313t6o"]
   */
  instanceIDs?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user that performs operations on the order. If no RAM user is involved, this parameter is empty.
   * 
   * @example
   * 23424243432
   */
  operator?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 3453425324
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the suborder. A value of productsuborder indicates service suborder. A value of refundsuborder indicates refund suborder.
   * 
   * @example
   * ProductSubOrder
   */
  orderSubType?: string;
  /**
   * @remarks
   * The type of the order. Valid values: new, renew, upgrade, and refund.
   * 
   * @example
   * New
   */
  orderType?: string;
  /**
   * @remarks
   * The configuration information that is not formatted.
   * 
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  originalConfig?: string;
  /**
   * @remarks
   * The information about the configurations.
   */
  originalModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig;
  /**
   * @remarks
   * The currency used for payment. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The payment state. Valid values: unpaid, paid, and canceled.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The time of payment.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @remarks
   * The pretax amount of the order.
   * 
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The pretax amount of the order in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @remarks
   * The pretax gross amount of the order.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @remarks
   * The code of the main service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the main service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The number of main services.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the associated order.
   * 
   * @example
   * 4353453534543
   */
  relatedOrderId?: string;
  /**
   * @remarks
   * The ID of the suborder.
   * 
   * @example
   * 234343
   */
  subOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription and PayAsYouGo.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax of the order.
   * 
   * @example
   * 1
   */
  tax?: string;
  /**
   * @remarks
   * The time when the service ends.
   * 
   * @example
   * 2117-06-08T16:00:00Z
   */
  usageEndTime?: string;
  /**
   * @remarks
   * The time when the service starts.
   * 
   * @example
   * 2017-06-08T16:00:00Z
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      billModuleConfig: 'BillModuleConfig',
      commodityCode: 'CommodityCode',
      config: 'Config',
      createTime: 'CreateTime',
      currency: 'Currency',
      extendInfos: 'ExtendInfos',
      instanceIDs: 'InstanceIDs',
      operator: 'Operator',
      orderId: 'OrderId',
      orderSubType: 'OrderSubType',
      orderType: 'OrderType',
      originalConfig: 'OriginalConfig',
      originalModuleConfig: 'OriginalModuleConfig',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      relatedOrderId: 'RelatedOrderId',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      billModuleConfig: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig,
      commodityCode: 'string',
      config: 'string',
      createTime: 'string',
      currency: 'string',
      extendInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instanceIDs: 'string',
      operator: 'string',
      orderId: 'string',
      orderSubType: 'string',
      orderType: 'string',
      originalConfig: 'string',
      originalModuleConfig: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig,
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      quantity: 'string',
      region: 'string',
      relatedOrderId: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
      usageEndTime: 'string',
      usageStartTime: 'string',
    };
  }

  validate() {
    if(this.billModuleConfig && typeof (this.billModuleConfig as any).validate === 'function') {
      (this.billModuleConfig as any).validate();
    }
    if(this.extendInfos) {
      $dara.Model.validateMap(this.extendInfos);
    }
    if(this.originalModuleConfig && typeof (this.originalModuleConfig as any).validate === 'function') {
      (this.originalModuleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderList extends $dara.Model {
  order?: GetOrderDetailResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrder },
    };
  }

  validate() {
    if(Array.isArray(this.order)) {
      $dara.Model.validateArray(this.order);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The orders returned.
   */
  orderList?: GetOrderDetailResponseBodyDataOrderList;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: GetOrderDetailResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.orderList && typeof (this.orderList as any).validate === 'function') {
      (this.orderList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetOrderDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOrderDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


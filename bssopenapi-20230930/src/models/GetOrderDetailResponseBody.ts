// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModulePropertiesBillModuleProperties extends $dara.Model {
  /**
   * @example
   * cloud_ssd
   */
  attrApiCode?: string;
  /**
   * @example
   * cloud_ssd
   */
  moduleApiCode?: string;
  /**
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
   * apiCode
   * 
   * @example
   * datadisk
   */
  apiCode?: string;
  billModuleProperties?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfigBillModuleConfigBillModuleProperties;
  /**
   * @example
   * datadisk
   */
  code?: string;
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
   * @example
   * cloud_efficiency
   */
  code?: string;
  name?: string;
  /**
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
   * @example
   * systemdisk
   */
  code?: string;
  moduleProperties?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfigOriginalModuleConfigModuleProperties;
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
   * @example
   * 0
   */
  afterTaxAmount?: string;
  billModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderBillModuleConfig;
  /**
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  config?: string;
  /**
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  extendInfos?: { [key: string]: string };
  /**
   * @example
   * ["rm-bp1a2vsr018313t6o"]
   */
  instanceIds?: string;
  /**
   * @example
   * 322315
   */
  operator?: string;
  /**
   * @example
   * 241559391310333
   */
  orderId?: string;
  /**
   * @example
   * productsuborder
   */
  orderSubType?: string;
  /**
   * @example
   * new
   */
  orderType?: string;
  /**
   * @example
   * DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]
   */
  originalConfig?: string;
  originalModuleConfig?: GetOrderDetailResponseBodyDataOrderListOrderOriginalModuleConfig;
  /**
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @example
   * paid
   */
  paymentStatus?: string;
  /**
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * 3
   */
  quantity?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 241559391310332
   */
  relatedOrderId?: string;
  /**
   * @example
   * 234343
   */
  subOrderId?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @example
   * 0
   */
  tax?: string;
  /**
   * @example
   * 2117-06-08T16:00:00Z
   */
  usageEndTime?: string;
  /**
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
      instanceIds: 'InstanceIds',
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
      instanceIds: 'string',
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
   * @example
   * test
   */
  hostName?: string;
  orderList?: GetOrderDetailResponseBodyDataOrderList;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 400
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
   * @example
   * Success
   */
  code?: string;
  data?: GetOrderDetailResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
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


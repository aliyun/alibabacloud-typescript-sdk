// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductLogsResponseBodyDataBillingCommodity extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * snapshot
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 云服务器ECS-快照
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataBillingPriceField extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * Storage
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 零折使用容量
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataCapacityType extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * absolute
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 总量恒定型
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataCommodity extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * ossbag
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 对象存储OSS资源包(包月)
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataCycleType extends $dara.Model {
  /**
   * @remarks
   * The commitment cycle code.
   * 
   * @example
   * hour
   */
  code?: string;
  /**
   * @remarks
   * The commitment cycle name.
   * 
   * @example
   * 小时
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataProduct extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * oss
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 对象存储
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * FPT_ossbag********
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * 标准存储包
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1929817951466001
   */
  accountId?: number;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * icloudtest
   */
  accountName?: string;
  /**
   * @remarks
   * The deducted commodity.
   */
  billingCommodity?: DescribeDeductLogsResponseBodyDataBillingCommodity;
  /**
   * @remarks
   * The deducted commodity code.
   * 
   * @example
   * snapshot
   */
  billingCommodityCode?: string;
  /**
   * @remarks
   * The deducted commodity name.
   * 
   * @example
   * 云服务器ECS-快照
   */
  billingCommodityName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1679036400000
   */
  billingEndTime?: number;
  /**
   * @remarks
   * The deduction instance.
   * 
   * @example
   * cn-beijing
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * The deduction billable item.
   */
  billingPriceField?: DescribeDeductLogsResponseBodyDataBillingPriceField;
  /**
   * @remarks
   * The deduction billable item code.
   * 
   * @example
   * Storage
   */
  billingPriceFieldCode?: string;
  /**
   * @remarks
   * The deduction billable item name.
   * 
   * @example
   * 零折使用容量
   */
  billingPriceFieldName?: string;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 1679032800000
   */
  billingStartTime?: number;
  /**
   * @remarks
   * The display unit of the capacity after deduction.
   * 
   * @example
   * GB
   */
  capacityAfterDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the capacity after deduction.
   * 
   * @example
   * 23.896484
   */
  capacityAfterDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the capacity before deduction.
   * 
   * @example
   * GB
   */
  capacityBeforeDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the capacity before deduction.
   * 
   * @example
   * 40.000000
   */
  capacityBeforeDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the deducted capacity.
   * 
   * @example
   * GB
   */
  capacityDeductedViewUnit?: string;
  /**
   * @remarks
   * The display value of the deducted capacity.
   * 
   * @example
   * 16.103515
   */
  capacityDeductedViewValue?: string;
  /**
   * @remarks
   * The capacity type.
   */
  capacityType?: DescribeDeductLogsResponseBodyDataCapacityType;
  /**
   * @remarks
   * The capacity type code.
   * 
   * @example
   * absolute
   */
  capacityTypeCode?: string;
  /**
   * @remarks
   * The capacity type name.
   * 
   * @example
   * 总量恒定型
   */
  capacityTypeName?: string;
  /**
   * @remarks
   * The commodity.
   */
  commodity?: DescribeDeductLogsResponseBodyDataCommodity;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * ossbag
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * 对象存储OSS资源包(包月)
   */
  commodityName?: string;
  /**
   * @remarks
   * The commitment cycle.
   */
  cycleType?: DescribeDeductLogsResponseBodyDataCycleType;
  /**
   * @remarks
   * The commitment cycle code.
   * 
   * @example
   * hour
   */
  cycleTypeCode?: string;
  /**
   * @remarks
   * The commitment cycle name.
   * 
   * @example
   * 小时
   */
  cycleTypeName?: string;
  /**
   * @remarks
   * The deduction time.
   * 
   * @example
   * 1679039572000
   */
  deductTime?: number;
  /**
   * @remarks
   * The deduction factor.
   * 
   * @example
   * 1
   */
  factor?: string;
  /**
   * @remarks
   * The ID of the account to which the instance belongs.
   * 
   * @example
   * 1990699401005016
   */
  instanceBelongAccountId?: number;
  /**
   * @remarks
   * The name of the account to which the instance belongs.
   * 
   * @example
   * icloudtest
   */
  instanceBelongAccountName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * OSSBAG-cn-****s
   */
  instanceId?: string;
  /**
   * @remarks
   * The display unit of the metering amount after deduction.
   * 
   * @example
   * Byte
   */
  measureAfterDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the metering amount after deduction.
   * 
   * @example
   * 0
   */
  measureAfterDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the metering amount before deduction.
   * 
   * @example
   * GB
   */
  measureBeforeDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the metering amount before deduction.
   * 
   * @example
   * 16.103515
   */
  measureBeforeDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the deducted metering amount.
   * 
   * @example
   * GB
   */
  measureDeductedViewUnit?: string;
  /**
   * @remarks
   * The display value of the deducted metering amount.
   * 
   * @example
   * 16.103515
   */
  measureDeductedViewValue?: string;
  /**
   * @remarks
   * The product.
   */
  product?: DescribeDeductLogsResponseBodyDataProduct;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 对象存储
   */
  productName?: string;
  /**
   * @remarks
   * The deduction account ID.
   * 
   * @example
   * 1990699401005016
   */
  relationAccountId?: number;
  /**
   * @remarks
   * The deduction account name.
   * 
   * @example
   * icloudtest
   */
  relationAccountName?: string;
  /**
   * @remarks
   * The template.
   */
  template?: DescribeDeductLogsResponseBodyDataTemplate;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * FPT_ossbag********
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 标准存储包
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      billingCommodity: 'BillingCommodity',
      billingCommodityCode: 'BillingCommodityCode',
      billingCommodityName: 'BillingCommodityName',
      billingEndTime: 'BillingEndTime',
      billingInstanceId: 'BillingInstanceId',
      billingPriceField: 'BillingPriceField',
      billingPriceFieldCode: 'BillingPriceFieldCode',
      billingPriceFieldName: 'BillingPriceFieldName',
      billingStartTime: 'BillingStartTime',
      capacityAfterDeductViewUnit: 'CapacityAfterDeductViewUnit',
      capacityAfterDeductViewValue: 'CapacityAfterDeductViewValue',
      capacityBeforeDeductViewUnit: 'CapacityBeforeDeductViewUnit',
      capacityBeforeDeductViewValue: 'CapacityBeforeDeductViewValue',
      capacityDeductedViewUnit: 'CapacityDeductedViewUnit',
      capacityDeductedViewValue: 'CapacityDeductedViewValue',
      capacityType: 'CapacityType',
      capacityTypeCode: 'CapacityTypeCode',
      capacityTypeName: 'CapacityTypeName',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      cycleType: 'CycleType',
      cycleTypeCode: 'CycleTypeCode',
      cycleTypeName: 'CycleTypeName',
      deductTime: 'DeductTime',
      factor: 'Factor',
      instanceBelongAccountId: 'InstanceBelongAccountId',
      instanceBelongAccountName: 'InstanceBelongAccountName',
      instanceId: 'InstanceId',
      measureAfterDeductViewUnit: 'MeasureAfterDeductViewUnit',
      measureAfterDeductViewValue: 'MeasureAfterDeductViewValue',
      measureBeforeDeductViewUnit: 'MeasureBeforeDeductViewUnit',
      measureBeforeDeductViewValue: 'MeasureBeforeDeductViewValue',
      measureDeductedViewUnit: 'MeasureDeductedViewUnit',
      measureDeductedViewValue: 'MeasureDeductedViewValue',
      product: 'Product',
      productCode: 'ProductCode',
      productName: 'ProductName',
      relationAccountId: 'RelationAccountId',
      relationAccountName: 'RelationAccountName',
      template: 'Template',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      billingCommodity: DescribeDeductLogsResponseBodyDataBillingCommodity,
      billingCommodityCode: 'string',
      billingCommodityName: 'string',
      billingEndTime: 'number',
      billingInstanceId: 'string',
      billingPriceField: DescribeDeductLogsResponseBodyDataBillingPriceField,
      billingPriceFieldCode: 'string',
      billingPriceFieldName: 'string',
      billingStartTime: 'number',
      capacityAfterDeductViewUnit: 'string',
      capacityAfterDeductViewValue: 'string',
      capacityBeforeDeductViewUnit: 'string',
      capacityBeforeDeductViewValue: 'string',
      capacityDeductedViewUnit: 'string',
      capacityDeductedViewValue: 'string',
      capacityType: DescribeDeductLogsResponseBodyDataCapacityType,
      capacityTypeCode: 'string',
      capacityTypeName: 'string',
      commodity: DescribeDeductLogsResponseBodyDataCommodity,
      commodityCode: 'string',
      commodityName: 'string',
      cycleType: DescribeDeductLogsResponseBodyDataCycleType,
      cycleTypeCode: 'string',
      cycleTypeName: 'string',
      deductTime: 'number',
      factor: 'string',
      instanceBelongAccountId: 'number',
      instanceBelongAccountName: 'string',
      instanceId: 'string',
      measureAfterDeductViewUnit: 'string',
      measureAfterDeductViewValue: 'string',
      measureBeforeDeductViewUnit: 'string',
      measureBeforeDeductViewValue: 'string',
      measureDeductedViewUnit: 'string',
      measureDeductedViewValue: 'string',
      product: DescribeDeductLogsResponseBodyDataProduct,
      productCode: 'string',
      productName: 'string',
      relationAccountId: 'number',
      relationAccountName: 'string',
      template: DescribeDeductLogsResponseBodyDataTemplate,
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.billingCommodity && typeof (this.billingCommodity as any).validate === 'function') {
      (this.billingCommodity as any).validate();
    }
    if(this.billingPriceField && typeof (this.billingPriceField as any).validate === 'function') {
      (this.billingPriceField as any).validate();
    }
    if(this.capacityType && typeof (this.capacityType as any).validate === 'function') {
      (this.capacityType as any).validate();
    }
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.cycleType && typeof (this.cycleType as any).validate === 'function') {
      (this.cycleType as any).validate();
    }
    if(this.product && typeof (this.product as any).validate === 'function') {
      (this.product as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeductLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data list.
   */
  data?: DescribeDeductLogsResponseBodyData[];
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
   * The request ID.
   * 
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeDeductLogsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


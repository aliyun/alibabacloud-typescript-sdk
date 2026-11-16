// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeductLogsResponseBodyDataBillingCommodity extends $dara.Model {
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * snapshot
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * ECS - Snapshot
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
   * The attribute code.
   * 
   * @example
   * Storage
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * Fully offset used capacity
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
   * The attribute code.
   * 
   * @example
   * absolute
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * Fixed total capacity
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
   * The attribute code.
   * 
   * @example
   * ossbag
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * OSS resource plan (subscription)
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
   * The commitment period code.
   * 
   * @example
   * hour
   */
  code?: string;
  /**
   * @remarks
   * The commitment period name.
   * 
   * @example
   * Hour
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
   * The attribute code.
   * 
   * @example
   * oss
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * Object Storage Service
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
   * The attribute code.
   * 
   * @example
   * FPT_ossbag********
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * Standard storage plan
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
   * The offset commodity.
   */
  billingCommodity?: DescribeDeductLogsResponseBodyDataBillingCommodity;
  /**
   * @remarks
   * The offset commodity code.
   * 
   * @example
   * snapshot
   */
  billingCommodityCode?: string;
  /**
   * @remarks
   * The offset commodity name.
   * 
   * @example
   * ECS - Snapshot
   */
  billingCommodityName?: string;
  /**
   * @remarks
   * The expiration time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1679036400000
   */
  billingEndTime?: number;
  /**
   * @remarks
   * The offset instance.
   * 
   * @example
   * cn-beijing
   */
  billingInstanceId?: string;
  /**
   * @remarks
   * The offset billable item.
   */
  billingPriceField?: DescribeDeductLogsResponseBodyDataBillingPriceField;
  /**
   * @remarks
   * The offset billable item code.
   * 
   * @example
   * Storage
   */
  billingPriceFieldCode?: string;
  /**
   * @remarks
   * The offset billable item name.
   * 
   * @example
   * Fully offset used capacity
   */
  billingPriceFieldName?: string;
  /**
   * @remarks
   * The effective period. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1679032800000
   */
  billingStartTime?: number;
  /**
   * @remarks
   * The display unit for capacity after offset.
   * 
   * @example
   * GB
   */
  capacityAfterDeductViewUnit?: string;
  /**
   * @remarks
   * The display value for capacity after offset.
   * 
   * @example
   * 23.896484
   */
  capacityAfterDeductViewValue?: string;
  /**
   * @remarks
   * The display unit for capacity before offset.
   * 
   * @example
   * GB
   */
  capacityBeforeDeductViewUnit?: string;
  /**
   * @remarks
   * The display value for capacity before offset.
   * 
   * @example
   * 40.000000
   */
  capacityBeforeDeductViewValue?: string;
  /**
   * @remarks
   * The display unit for offset capacity.
   * 
   * @example
   * GB
   */
  capacityDeductedViewUnit?: string;
  /**
   * @remarks
   * The display value for offset capacity.
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
   * Fixed total capacity
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
   * OSS resource plan (subscription)
   */
  commodityName?: string;
  /**
   * @remarks
   * The commitment period.
   */
  cycleType?: DescribeDeductLogsResponseBodyDataCycleType;
  /**
   * @remarks
   * The commitment period code.
   * 
   * @example
   * hour
   */
  cycleTypeCode?: string;
  /**
   * @remarks
   * The commitment period name.
   * 
   * @example
   * Hour
   */
  cycleTypeName?: string;
  /**
   * @remarks
   * The offset time. This value is a UNIX timestamp in milliseconds.
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
   * The name of the instance.
   * 
   * @example
   * OSSBAG-cn-****s
   */
  instanceId?: string;
  /**
   * @remarks
   * The display unit of the usage after deduction.
   * 
   * @example
   * Byte
   */
  measureAfterDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the usage after deduction.
   * 
   * @example
   * 0
   */
  measureAfterDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the usage before deduction.
   * 
   * @example
   * GB
   */
  measureBeforeDeductViewUnit?: string;
  /**
   * @remarks
   * The display value of the usage before deduction.
   * 
   * @example
   * 16.103515
   */
  measureBeforeDeductViewValue?: string;
  /**
   * @remarks
   * The display unit of the deducted usage.
   * 
   * @example
   * GB
   */
  measureDeductedViewUnit?: string;
  /**
   * @remarks
   * The display value of the deducted usage.
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
   * Object Storage Service
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the deduction account.
   * 
   * @example
   * 1990699401005016
   */
  relationAccountId?: number;
  /**
   * @remarks
   * The name of the deduction account.
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
   * Standard storage plan
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


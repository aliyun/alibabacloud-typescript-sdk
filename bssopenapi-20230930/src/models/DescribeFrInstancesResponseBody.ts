// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFrInstancesResponseBodyDataAutoPurchase extends $dara.Model {
  alreadyAutoPurchase?: boolean;
  settingAutoPurchase?: boolean;
  supportAutoPurchase?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadyAutoPurchase: 'AlreadyAutoPurchase',
      settingAutoPurchase: 'SettingAutoPurchase',
      supportAutoPurchase: 'SupportAutoPurchase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyAutoPurchase: 'boolean',
      settingAutoPurchase: 'boolean',
      supportAutoPurchase: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrInstancesResponseBodyDataCapacityType extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * deadlineAcc
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * Total decrement
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

export class DescribeFrInstancesResponseBodyDataCommodity extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * slb_albcubag_dp_cn
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * ALB Resource Plan
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

export class DescribeFrInstancesResponseBodyDataCycleType extends $dara.Model {
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

export class DescribeFrInstancesResponseBodyDataDeductRegions extends $dara.Model {
  /**
   * @remarks
   * The deductible region code.
   * 
   * @example
   * cn-beijing
   */
  code?: string;
  /**
   * @remarks
   * The deductible region.
   * 
   * @example
   * Beijing
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

export class DescribeFrInstancesResponseBodyDataProduct extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * slb
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * Server Load Balancer
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

export class DescribeFrInstancesResponseBodyDataStatus extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * valid
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * Valid
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

export class DescribeFrInstancesResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * alb_cubag*******
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * Chinese mainland regions
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

export class DescribeFrInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1990699401005016
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
  autoPurchase?: DescribeFrInstancesResponseBodyDataAutoPurchase;
  /**
   * @remarks
   * The capacity type name.
   * 
   * @example
   * Total decrement
   */
  capacitiyTypeName?: string;
  /**
   * @remarks
   * The capacity type.
   */
  capacityType?: DescribeFrInstancesResponseBodyDataCapacityType;
  /**
   * @remarks
   * The capacity type code.
   * 
   * @example
   * deadlineAcc
   */
  capacityTypeCode?: string;
  /**
   * @remarks
   * The commodity.
   */
  commodity?: DescribeFrInstancesResponseBodyDataCommodity;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * pts
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * Performance Testing
   */
  commodityName?: string;
  /**
   * @remarks
   * The current capacity base unit.
   * 
   * @example
   * CU
   */
  currCapacityBaseUnit?: string;
  /**
   * @remarks
   * The current capacity base value.
   * 
   * @example
   * 1000.000000
   */
  currCapacityBaseValue?: string;
  /**
   * @remarks
   * The current capacity display unit.
   * 
   * @example
   * CU
   */
  currCapacityViewUnit?: string;
  /**
   * @remarks
   * The current capacity display value.
   * 
   * @example
   * 1000.000000
   */
  currCapacityViewValue?: string;
  /**
   * @remarks
   * The commitment cycle.
   */
  cycleType?: DescribeFrInstancesResponseBodyDataCycleType;
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
   * Hour
   */
  cycleTypeName?: string;
  /**
   * @remarks
   * The list of deductible regions.
   */
  deductRegions?: DescribeFrInstancesResponseBodyDataDeductRegions[];
  enableDeductRule?: boolean;
  /**
   * @remarks
   * Indicates whether exchange is supported.
   * 
   * @example
   * false
   */
  enableExchange?: boolean;
  /**
   * @remarks
   * Indicates whether renewal is supported.
   * 
   * @example
   * false
   */
  enableRenew?: boolean;
  /**
   * @remarks
   * Indicates whether upgrade is supported.
   * 
   * @example
   * false
   */
  enableUpgrade?: boolean;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1710604800000
   */
  endTime?: number;
  /**
   * @remarks
   * The exchange commodity code.
   * 
   * @example
   * null
   */
  exchangeCommodityCode?: string;
  /**
   * @remarks
   * The initial capacity base unit.
   * 
   * @example
   * CU
   */
  initCapacityBaseUnit?: string;
  /**
   * @remarks
   * The initial capacity base value.
   * 
   * @example
   * 1000.000000
   */
  initCapacityBaseValue?: string;
  /**
   * @remarks
   * The initial capacity display unit.
   * 
   * @example
   * CU
   */
  initCapacityViewUnit?: string;
  /**
   * @remarks
   * The initial capacity display value.
   * 
   * @example
   * 1000.000000
   */
  initCapacityViewValue?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * alb_cubag*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The period capacity display unit.
   * 
   * @example
   * CU
   */
  periodCapacityViewUnit?: string;
  /**
   * @remarks
   * The period capacity display value.
   * 
   * @example
   * 1000.000000
   */
  periodCapacityViewValue?: string;
  /**
   * @remarks
   * The period time.
   * 
   * @example
   * hour
   */
  periodTime?: string;
  /**
   * @remarks
   * The product.
   */
  product?: DescribeFrInstancesResponseBodyDataProduct;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * pts
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * Performance Testing
   */
  productName?: string;
  /**
   * @remarks
   * The purchase time.
   * 
   * @example
   * 1678939036000
   */
  purchaseTime?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * *
   */
  region?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * cn-qingdao
   */
  regionName?: string;
  /**
   * @remarks
   * The specification.
   * 
   * @example
   * *
   */
  spec?: string;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 1678939035000
   */
  startTime?: number;
  /**
   * @remarks
   * The resource status.
   */
  status?: DescribeFrInstancesResponseBodyDataStatus;
  /**
   * @remarks
   * The resource status code.
   * 
   * @example
   * valid
   */
  statusCode?: string;
  /**
   * @remarks
   * The resource status name.
   * 
   * @example
   * Valid
   */
  statusName?: string;
  /**
   * @remarks
   * The template.
   */
  template?: DescribeFrInstancesResponseBodyDataTemplate;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * FPT_armsappbag_deadlineAcc_bj
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * new_test
   */
  templateName?: string;
  /**
   * @remarks
   * The periodic capacity base unit.
   * 
   * @example
   * CU
   */
  periodCapacityBaseUnit?: string;
  /**
   * @remarks
   * The periodic capacity base value.
   * 
   * @example
   * 1000.000000
   */
  periodCapacityBaseValue?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      autoPurchase: 'AutoPurchase',
      capacitiyTypeName: 'CapacitiyTypeName',
      capacityType: 'CapacityType',
      capacityTypeCode: 'CapacityTypeCode',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      currCapacityBaseUnit: 'CurrCapacityBaseUnit',
      currCapacityBaseValue: 'CurrCapacityBaseValue',
      currCapacityViewUnit: 'CurrCapacityViewUnit',
      currCapacityViewValue: 'CurrCapacityViewValue',
      cycleType: 'CycleType',
      cycleTypeCode: 'CycleTypeCode',
      cycleTypeName: 'CycleTypeName',
      deductRegions: 'DeductRegions',
      enableDeductRule: 'EnableDeductRule',
      enableExchange: 'EnableExchange',
      enableRenew: 'EnableRenew',
      enableUpgrade: 'EnableUpgrade',
      endTime: 'EndTime',
      exchangeCommodityCode: 'ExchangeCommodityCode',
      initCapacityBaseUnit: 'InitCapacityBaseUnit',
      initCapacityBaseValue: 'InitCapacityBaseValue',
      initCapacityViewUnit: 'InitCapacityViewUnit',
      initCapacityViewValue: 'InitCapacityViewValue',
      instanceId: 'InstanceId',
      periodCapacityViewUnit: 'PeriodCapacityViewUnit',
      periodCapacityViewValue: 'PeriodCapacityViewValue',
      periodTime: 'PeriodTime',
      product: 'Product',
      productCode: 'ProductCode',
      productName: 'ProductName',
      purchaseTime: 'PurchaseTime',
      region: 'Region',
      regionName: 'RegionName',
      spec: 'Spec',
      startTime: 'StartTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusName: 'StatusName',
      template: 'Template',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      periodCapacityBaseUnit: 'periodCapacityBaseUnit',
      periodCapacityBaseValue: 'periodCapacityBaseValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      autoPurchase: DescribeFrInstancesResponseBodyDataAutoPurchase,
      capacitiyTypeName: 'string',
      capacityType: DescribeFrInstancesResponseBodyDataCapacityType,
      capacityTypeCode: 'string',
      commodity: DescribeFrInstancesResponseBodyDataCommodity,
      commodityCode: 'string',
      commodityName: 'string',
      currCapacityBaseUnit: 'string',
      currCapacityBaseValue: 'string',
      currCapacityViewUnit: 'string',
      currCapacityViewValue: 'string',
      cycleType: DescribeFrInstancesResponseBodyDataCycleType,
      cycleTypeCode: 'string',
      cycleTypeName: 'string',
      deductRegions: { 'type': 'array', 'itemType': DescribeFrInstancesResponseBodyDataDeductRegions },
      enableDeductRule: 'boolean',
      enableExchange: 'boolean',
      enableRenew: 'boolean',
      enableUpgrade: 'boolean',
      endTime: 'number',
      exchangeCommodityCode: 'string',
      initCapacityBaseUnit: 'string',
      initCapacityBaseValue: 'string',
      initCapacityViewUnit: 'string',
      initCapacityViewValue: 'string',
      instanceId: 'string',
      periodCapacityViewUnit: 'string',
      periodCapacityViewValue: 'string',
      periodTime: 'string',
      product: DescribeFrInstancesResponseBodyDataProduct,
      productCode: 'string',
      productName: 'string',
      purchaseTime: 'number',
      region: 'string',
      regionName: 'string',
      spec: 'string',
      startTime: 'number',
      status: DescribeFrInstancesResponseBodyDataStatus,
      statusCode: 'string',
      statusName: 'string',
      template: DescribeFrInstancesResponseBodyDataTemplate,
      templateCode: 'string',
      templateName: 'string',
      periodCapacityBaseUnit: 'string',
      periodCapacityBaseValue: 'string',
    };
  }

  validate() {
    if(this.autoPurchase && typeof (this.autoPurchase as any).validate === 'function') {
      (this.autoPurchase as any).validate();
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
    if(Array.isArray(this.deductRegions)) {
      $dara.Model.validateArray(this.deductRegions);
    }
    if(this.product && typeof (this.product as any).validate === 'function') {
      (this.product as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
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

export class DescribeFrInstancesResponseBody extends $dara.Model {
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
  data?: DescribeFrInstancesResponseBodyData[];
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
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': DescribeFrInstancesResponseBodyData },
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


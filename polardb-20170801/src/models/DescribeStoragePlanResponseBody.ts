// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStoragePlanResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 18170112322*****
   */
  aliUid?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * polardb_package
   */
  commodityCode?: string;
  /**
   * @remarks
   * The expiration time of the storage plan.
   * 
   * @example
   * 2021-10-23 00:00:00
   */
  endTimes?: string;
  /**
   * @remarks
   * The capacity unit of the storage plan.
   * 
   * @example
   * GB
   */
  initCapaCityViewUnit?: string;
  /**
   * @remarks
   * The total capacity of the storage plan.
   * 
   * @example
   * 500.000
   */
  initCapacityViewValue?: string;
  /**
   * @remarks
   * The resource instance ID.
   * 
   * @example
   * 500072****
   */
  instanceId?: string;
  /**
   * @remarks
   * The period capacity unit of the storage plan.
   * 
   * @example
   * GB
   */
  periodCapaCityViewUnit?: string;
  /**
   * @remarks
   * The period capacity of the storage plan. The period capacity gradually decreases as the storage plan is used.
   * 
   * @example
   * 400.000
   */
  periodCapacityViewValue?: string;
  /**
   * @remarks
   * The period duration. This indicates that the capacity of the storage plan is measured and consumed by the hour.
   * 
   * @example
   * hour
   */
  periodTime?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * polardb
   */
  prodCode?: string;
  /**
   * @remarks
   * The purchase time of the storage plan.
   * 
   * @example
   * 2021-09-22 12:03:27
   */
  purchaseTimes?: string;
  /**
   * @remarks
   * The effective period of the storage plan.
   * 
   * @example
   * 2021-09-22 12:03:25
   */
  startTimes?: string;
  /**
   * @remarks
   * The status of the storage plan. Valid values:
   * 
   * - **Valid**: Valid.
   * 
   * - **Invalid**: Invalid.
   * 
   * @example
   * Valid
   */
  status?: string;
  /**
   * @remarks
   * The type of the storage plan. Valid values:
   * 
   * - **Overseas**: Hong Kong (China) and regions outside China
   * 
   * - **Mainland**: the Chinese mainland
   * 
   * - **Financial**: Finance Cloud
   * 
   * @example
   * Overseas
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the resource plan. Valid values:
   * 
   *  - **FPT_polardb_package_absolute_1540888383**: the Chinese mainland
   * 
   * - **FPT_polardb_package_absolute_1540890081**: Hong Kong (China) and regions outside China
   * 
   * - **FPT_polardb_package_absolute_1567151499**: Finance Cloud
   * 
   * @example
   * FPT_polardb_package_absolute_1540890081
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      commodityCode: 'CommodityCode',
      endTimes: 'EndTimes',
      initCapaCityViewUnit: 'InitCapaCityViewUnit',
      initCapacityViewValue: 'InitCapacityViewValue',
      instanceId: 'InstanceId',
      periodCapaCityViewUnit: 'PeriodCapaCityViewUnit',
      periodCapacityViewValue: 'PeriodCapacityViewValue',
      periodTime: 'PeriodTime',
      prodCode: 'ProdCode',
      purchaseTimes: 'PurchaseTimes',
      startTimes: 'StartTimes',
      status: 'Status',
      storageType: 'StorageType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      commodityCode: 'string',
      endTimes: 'string',
      initCapaCityViewUnit: 'string',
      initCapacityViewValue: 'string',
      instanceId: 'string',
      periodCapaCityViewUnit: 'string',
      periodCapacityViewValue: 'string',
      periodTime: 'string',
      prodCode: 'string',
      purchaseTimes: 'string',
      startTimes: 'string',
      status: 'string',
      storageType: 'string',
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

export class DescribeStoragePlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of storage plans.
   */
  items?: DescribeStoragePlanResponseBodyItems[];
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9384D30-5C9A-11EA-BFC0-F754D2Bxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeStoragePlanResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


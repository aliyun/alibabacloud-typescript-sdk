// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the resource plan.
   * 
   * @example
   * dcdnpaybag
   */
  commodityCode?: string;
  /**
   * @remarks
   * The current remaining capacity of the instance.
   * - Unit for traffic plans: Byte.
   * 
   * - Unit for request plans: count.
   * 
   * @example
   * 53661095687
   */
  currCapacity?: string;
  /**
   * @remarks
   * The base unit of the current remaining capacity of the instance.
   * 
   * @example
   * Byte
   */
  currCapacityBaseUnit?: string;
  /**
   * @remarks
   * The display unit of the current remaining capacity of the instance.
   * 
   * @example
   * GB
   */
  currCapacityShowUnit?: string;
  /**
   * @remarks
   * The display value of the current remaining capacity of the instance.
   * 
   * @example
   * 49.975789
   */
  currCapacityShowValue?: string;
  /**
   * @remarks
   * The name of the resource plan.
   * 
   * @example
   * Data Transfer Plan in Asia Pacific 1
   */
  displayName?: string;
  /**
   * @remarks
   * The expiration time in UTC. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2024-12-02T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The total capacity of the resource plan.
   * - Unit for traffic plans: Byte.
   * 
   * - Unit for request plans: count.
   * 
   * @example
   * 107374182400
   */
  initCapacity?: string;
  /**
   * @remarks
   * The base unit of the total capacity of the resource plan.
   * 
   * @example
   * Byte
   */
  initCapacityBaseUnit?: string;
  /**
   * @remarks
   * The display unit of the total capacity of the resource plan.
   * 
   * @example
   * GB
   */
  initCapacityShowUnit?: string;
  /**
   * @remarks
   * The display value of the total capacity of the resource plan.
   * 
   * @example
   * 100.000000
   */
  initCapacityShowValue?: string;
  /**
   * @remarks
   * The instance ID of the resource plan.
   * 
   * @example
   * ****_ResourcePack-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * CN
   */
  region?: string;
  /**
   * @remarks
   * The effective period in UTC. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2024-03-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the resource plan.
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * FPT_dcdnpaybag_deadlineAcc_****
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      currCapacityBaseUnit: 'CurrCapacityBaseUnit',
      currCapacityShowUnit: 'CurrCapacityShowUnit',
      currCapacityShowValue: 'CurrCapacityShowValue',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      initCapacity: 'InitCapacity',
      initCapacityBaseUnit: 'InitCapacityBaseUnit',
      initCapacityShowUnit: 'InitCapacityShowUnit',
      initCapacityShowValue: 'InitCapacityShowValue',
      instanceId: 'InstanceId',
      region: 'Region',
      startTime: 'StartTime',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currCapacity: 'string',
      currCapacityBaseUnit: 'string',
      currCapacityShowUnit: 'string',
      currCapacityShowValue: 'string',
      displayName: 'string',
      endTime: 'string',
      initCapacity: 'string',
      initCapacityBaseUnit: 'string',
      initCapacityShowUnit: 'string',
      initCapacityShowValue: 'string',
      instanceId: 'string',
      region: 'string',
      startTime: 'string',
      status: 'string',
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

export class DescribeUserResourcePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The array of ResourcePackageInfo objects.
   */
  resourcePackageInfos?: DescribeUserResourcePackageResponseBodyResourcePackageInfos[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourcePackageInfos: { 'type': 'array', 'itemType': DescribeUserResourcePackageResponseBodyResourcePackageInfos },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageInfos)) {
      $dara.Model.validateArray(this.resourcePackageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


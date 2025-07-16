// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * @example
   * cdnflowbag
   */
  commodityCode?: string;
  /**
   * @remarks
   * The remaining quota of the resource plan.
   * 
   * *   For a data transfer plan, the quota is measured in bytes.
   * *   For a request resource plan, the quota is measured in the number of requests.
   * 
   * @example
   * 10995089554629
   */
  currCapacity?: string;
  currCapacityBaseUnit?: string;
  currCapacityShowUnit?: string;
  currCapacityShowValue?: string;
  /**
   * @remarks
   * The name of the resource plan.
   * 
   * @example
   * CDN data transfer plan (Chinese mainland)
   */
  displayName?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2018-07-01T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The total quota of the resource plan.
   * 
   * *   For a data transfer plan, the quota is measured in bytes.
   * *   For a request resource plan, the quota is measured in the number of requests.
   * 
   * @example
   * 536870912000
   */
  initCapacity?: string;
  initCapacityBaseUnit?: string;
  initCapacityShowUnit?: string;
  initCapacityShowValue?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * FP-ilttxc23a
   */
  instanceId?: string;
  region?: string;
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2017-12-05T19:10:58Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the resource plan. Valid values:
   * 
   * *   **valid**: valid
   * *   **closed**: expired
   * 
   * @example
   * valid
   */
  status?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * CDN data transfer plan
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

export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePackageInfo)) {
      $dara.Model.validateArray(this.resourcePackageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserResourcePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84839536-2B7E-457D-9D8C-82E6C7D4E1A3
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about resource plans. The returned information is displayed in an array of ResourcePackageInfo nodes.
   */
  resourcePackageInfos?: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeCdnUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  validate() {
    if(this.resourcePackageInfos && typeof (this.resourcePackageInfos as any).validate === 'function') {
      (this.resourcePackageInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


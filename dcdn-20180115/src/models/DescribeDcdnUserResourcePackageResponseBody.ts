// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
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
   * The remaining quota of the resource plan.
   * 
   * *   The unit for traffic: bytes.
   * *   The unit for requests: count.
   * 
   * @example
   * 10000000
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
   * HTTPS requests for static content
   */
  displayName?: string;
  /**
   * @remarks
   * The expiration time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-08-24T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The total quota of the resource plan.
   * 
   * *   The unit for traffic: bytes.
   * *   The unit for requests: count.
   * 
   * @example
   * 10000000
   */
  initCapacity?: string;
  initCapacityBaseUnit?: string;
  initCapacityShowUnit?: string;
  initCapacityShowValue?: string;
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * @example
   * CDNFLOWBAG-cn-7pp2bihrb01ii0
   */
  instanceId?: string;
  region?: string;
  /**
   * @remarks
   * The validation time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-08-24T04:09:22Z
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
   * FPT_dcdnpaybag_deadlineAcc_1541151058
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

export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
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

export class DescribeDcdnUserResourcePackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96ED3127-EC7A-57C5-AFA6-A689B24B2530
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about resource plans. The returned information is displayed in the format that is specified by the ResourcePackageInfo parameter.
   */
  resourcePackageInfos?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos,
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


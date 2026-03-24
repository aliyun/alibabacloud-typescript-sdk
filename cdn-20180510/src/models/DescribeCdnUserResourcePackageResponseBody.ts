// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
  commodityCode?: string;
  currCapacity?: string;
  currCapacityBaseUnit?: string;
  currCapacityShowUnit?: string;
  currCapacityShowValue?: string;
  displayName?: string;
  endTime?: string;
  initCapacity?: string;
  initCapacityBaseUnit?: string;
  initCapacityShowUnit?: string;
  initCapacityShowValue?: string;
  instanceId?: string;
  region?: string;
  startTime?: string;
  status?: string;
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


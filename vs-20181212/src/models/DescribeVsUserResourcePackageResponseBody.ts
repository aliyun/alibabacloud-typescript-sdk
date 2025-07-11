// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
  commodityCode?: string;
  currCapacity?: string;
  displayName?: string;
  initCapacity?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      displayName: 'DisplayName',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currCapacity: 'string',
      displayName: 'string',
      initCapacity: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfos extends $dara.Model {
  resourcePackageInfo?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
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

export class DescribeVsUserResourcePackageResponseBody extends $dara.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeVsUserResourcePackageResponseBodyResourcePackageInfos,
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


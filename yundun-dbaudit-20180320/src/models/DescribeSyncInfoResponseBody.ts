// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncInfoResponseBodyInstanceInfo extends $dara.Model {
  accessType?: number;
  aliuid?: number;
  customName?: string;
  ecsEip?: string;
  ecsInstanceId?: string;
  ecsInternetIp?: string;
  ecsIntranetIp?: string;
  ecsNetworkType?: string;
  ecsStatus?: string;
  ecsUuid?: string;
  expireTime?: number;
  imageVersionName?: string;
  instanceId?: string;
  planCode?: string;
  planName?: string;
  planUpgradeStatus?: number;
  planUpgradeable?: string;
  productCode?: string;
  productName?: string;
  publicAccessControl?: number;
  regionName?: string;
  regionNo?: string;
  renewable?: boolean;
  startTime?: number;
  status?: number;
  upgradeStatus?: number;
  vendorCode?: string;
  vswitchId?: string;
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      aliuid: 'Aliuid',
      customName: 'CustomName',
      ecsEip: 'EcsEip',
      ecsInstanceId: 'EcsInstanceId',
      ecsInternetIp: 'EcsInternetIp',
      ecsIntranetIp: 'EcsIntranetIp',
      ecsNetworkType: 'EcsNetworkType',
      ecsStatus: 'EcsStatus',
      ecsUuid: 'EcsUuid',
      expireTime: 'ExpireTime',
      imageVersionName: 'ImageVersionName',
      instanceId: 'InstanceId',
      planCode: 'PlanCode',
      planName: 'PlanName',
      planUpgradeStatus: 'PlanUpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      productCode: 'ProductCode',
      productName: 'ProductName',
      publicAccessControl: 'PublicAccessControl',
      regionName: 'RegionName',
      regionNo: 'RegionNo',
      renewable: 'Renewable',
      startTime: 'StartTime',
      status: 'Status',
      upgradeStatus: 'UpgradeStatus',
      vendorCode: 'VendorCode',
      vswitchId: 'VswitchId',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'number',
      aliuid: 'number',
      customName: 'string',
      ecsEip: 'string',
      ecsInstanceId: 'string',
      ecsInternetIp: 'string',
      ecsIntranetIp: 'string',
      ecsNetworkType: 'string',
      ecsStatus: 'string',
      ecsUuid: 'string',
      expireTime: 'number',
      imageVersionName: 'string',
      instanceId: 'string',
      planCode: 'string',
      planName: 'string',
      planUpgradeStatus: 'number',
      planUpgradeable: 'string',
      productCode: 'string',
      productName: 'string',
      publicAccessControl: 'number',
      regionName: 'string',
      regionNo: 'string',
      renewable: 'boolean',
      startTime: 'number',
      status: 'number',
      upgradeStatus: 'number',
      vendorCode: 'string',
      vswitchId: 'string',
      zoneNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncInfoResponseBody extends $dara.Model {
  instanceInfo?: DescribeSyncInfoResponseBodyInstanceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: DescribeSyncInfoResponseBodyInstanceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceInfo && typeof (this.instanceInfo as any).validate === 'function') {
      (this.instanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


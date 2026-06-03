// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  description?: string;
  ecsStatus?: string;
  expireTime?: number;
  imageVersionName?: string;
  instanceId?: string;
  instanceStatus?: string;
  internetEndpoint?: string;
  internetIp?: string;
  intranetEndpoint?: string;
  intranetIp?: string;
  legacy?: boolean;
  licenseCode?: string;
  networkType?: string;
  operatable?: boolean;
  planUpgradeStatus?: number;
  planUpgradeable?: boolean;
  regionId?: string;
  renewable?: boolean;
  seriesCode?: string;
  startTime?: number;
  upgradeStatus?: number;
  upgradeable?: boolean;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ecsStatus: 'EcsStatus',
      expireTime: 'ExpireTime',
      imageVersionName: 'ImageVersionName',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      internetIp: 'InternetIp',
      intranetEndpoint: 'IntranetEndpoint',
      intranetIp: 'IntranetIp',
      legacy: 'Legacy',
      licenseCode: 'LicenseCode',
      networkType: 'NetworkType',
      operatable: 'Operatable',
      planUpgradeStatus: 'PlanUpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      regionId: 'RegionId',
      renewable: 'Renewable',
      seriesCode: 'SeriesCode',
      startTime: 'StartTime',
      upgradeStatus: 'UpgradeStatus',
      upgradeable: 'Upgradeable',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ecsStatus: 'string',
      expireTime: 'number',
      imageVersionName: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      internetIp: 'string',
      intranetEndpoint: 'string',
      intranetIp: 'string',
      legacy: 'boolean',
      licenseCode: 'string',
      networkType: 'string',
      operatable: 'boolean',
      planUpgradeStatus: 'number',
      planUpgradeable: 'boolean',
      regionId: 'string',
      renewable: 'boolean',
      seriesCode: 'string',
      startTime: 'number',
      upgradeStatus: 'number',
      upgradeable: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


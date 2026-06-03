// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $dara.Model {
  accessType?: number;
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
  licenseCode?: string;
  networkType?: string;
  operatable?: boolean;
  planUpgradeStatus?: number;
  planUpgradeable?: boolean;
  privateWhiteList?: string[];
  publicAccessControl?: number;
  publicWhiteList?: string[];
  regionId?: string;
  renewable?: boolean;
  securityGroupIds?: string[];
  seriesCode?: string;
  startTime?: number;
  upgradeStatus?: number;
  upgradeable?: boolean;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
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
      licenseCode: 'LicenseCode',
      networkType: 'NetworkType',
      operatable: 'Operatable',
      planUpgradeStatus: 'PlanUpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      privateWhiteList: 'PrivateWhiteList',
      publicAccessControl: 'PublicAccessControl',
      publicWhiteList: 'PublicWhiteList',
      regionId: 'RegionId',
      renewable: 'Renewable',
      securityGroupIds: 'SecurityGroupIds',
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
      accessType: 'number',
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
      licenseCode: 'string',
      networkType: 'string',
      operatable: 'boolean',
      planUpgradeStatus: 'number',
      planUpgradeable: 'boolean',
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicAccessControl: 'number',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      renewable: 'boolean',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      seriesCode: 'string',
      startTime: 'number',
      upgradeStatus: 'number',
      upgradeable: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateWhiteList)) {
      $dara.Model.validateArray(this.privateWhiteList);
    }
    if(Array.isArray(this.publicWhiteList)) {
      $dara.Model.validateArray(this.publicWhiteList);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceAttribute && typeof (this.instanceAttribute as any).validate === 'function') {
      (this.instanceAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


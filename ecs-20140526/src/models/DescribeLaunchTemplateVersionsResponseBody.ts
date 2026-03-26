// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk extends $dara.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  diskName?: string;
  encrypted?: string;
  iops?: number;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      iops: 'Iops',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      diskName: 'string',
      encrypted: 'string',
      iops: 'number',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk extends $dara.Model {
  autoSnapshotPolicyId?: string;
  burstingEnabled?: boolean;
  category?: string;
  deleteWithInstance?: boolean;
  description?: string;
  device?: string;
  diskName?: string;
  encrypted?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  provisionedIops?: number;
  size?: number;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks extends $dara.Model {
  dataDisk?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisksDataDisk },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataImageOptions extends $dara.Model {
  loginAsNonRoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginAsNonRoot: 'LoginAsNonRoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginAsNonRoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds extends $dara.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface extends $dara.Model {
  deleteOnRelease?: boolean;
  description?: string;
  instanceType?: string;
  networkInterfaceName?: string;
  networkInterfaceTrafficMode?: string;
  primaryIpAddress?: string;
  securityGroupId?: string;
  securityGroupIds?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceType: 'InstanceType',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      primaryIpAddress: 'PrimaryIpAddress',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceType: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      primaryIpAddress: 'string',
      securityGroupId: 'string',
      securityGroupIds: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds,
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces extends $dara.Model {
  networkInterface?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      networkInterface: 'NetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterface: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityGroupIds extends $dara.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityOptions extends $dara.Model {
  trustedSystemMode?: string;
  static names(): { [key: string]: string } {
    return {
      trustedSystemMode: 'TrustedSystemMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trustedSystemMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags extends $dara.Model {
  instanceTag?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag[];
  static names(): { [key: string]: string } {
    return {
      instanceTag: 'InstanceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTag: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTagsInstanceTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTag)) {
      $dara.Model.validateArray(this.instanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData extends $dara.Model {
  systemDisk?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk;
  autoReleaseTime?: string;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  creditSpecification?: string;
  dataDisks?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks;
  deletionProtection?: boolean;
  deploymentSetId?: string;
  description?: string;
  enableVmOsConfig?: boolean;
  hostName?: string;
  httpEndpoint?: string;
  httpPutResponseHopLimit?: number;
  httpTokens?: string;
  imageId?: string;
  imageOptions?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataImageOptions;
  imageOwnerAlias?: string;
  instanceChargeType?: string;
  instanceName?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  ipv6AddressCount?: number;
  keyPairName?: string;
  networkInterfaces?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces;
  networkType?: string;
  passwordInherit?: boolean;
  period?: number;
  periodUnit?: string;
  privateIpAddress?: string;
  ramRoleName?: string;
  resourceGroupId?: string;
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  securityGroupIds?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityGroupIds;
  securityOptions?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityOptions;
  spotDuration?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  tags?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags;
  userData?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      creditSpecification: 'CreditSpecification',
      dataDisks: 'DataDisks',
      deletionProtection: 'DeletionProtection',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      enableVmOsConfig: 'EnableVmOsConfig',
      hostName: 'HostName',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      networkInterfaces: 'NetworkInterfaces',
      networkType: 'NetworkType',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      ramRoleName: 'RamRoleName',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      spotDuration: 'SpotDuration',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      tags: 'Tags',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSystemDisk,
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      creditSpecification: 'string',
      dataDisks: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataDataDisks,
      deletionProtection: 'boolean',
      deploymentSetId: 'string',
      description: 'string',
      enableVmOsConfig: 'boolean',
      hostName: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageId: 'string',
      imageOptions: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataImageOptions,
      imageOwnerAlias: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      networkInterfaces: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfaces,
      networkType: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      ramRoleName: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityGroupIds,
      securityOptions: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataSecurityOptions,
      spotDuration: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      tags: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataTags,
      userData: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(this.dataDisks && typeof (this.dataDisks as any).validate === 'function') {
      (this.dataDisks as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.networkInterfaces && typeof (this.networkInterfaces as any).validate === 'function') {
      (this.networkInterfaces as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet extends $dara.Model {
  createTime?: string;
  createdBy?: string;
  defaultVersion?: boolean;
  launchTemplateData?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData;
  launchTemplateId?: string;
  launchTemplateName?: string;
  modifiedTime?: string;
  versionDescription?: string;
  versionNumber?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      defaultVersion: 'DefaultVersion',
      launchTemplateData: 'LaunchTemplateData',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      modifiedTime: 'ModifiedTime',
      versionDescription: 'VersionDescription',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createdBy: 'string',
      defaultVersion: 'boolean',
      launchTemplateData: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateData,
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      modifiedTime: 'string',
      versionDescription: 'string',
      versionNumber: 'number',
    };
  }

  validate() {
    if(this.launchTemplateData && typeof (this.launchTemplateData as any).validate === 'function') {
      (this.launchTemplateData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets extends $dara.Model {
  launchTemplateVersionSet?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersionSet: 'LaunchTemplateVersionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersionSet: { 'type': 'array', 'itemType': DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSet },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateVersionSet)) {
      $dara.Model.validateArray(this.launchTemplateVersionSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplateVersionsResponseBody extends $dara.Model {
  launchTemplateVersionSets?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3989ED0C-20A1-4351-A127-2067FF8390AX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of launch templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      launchTemplateVersionSets: 'LaunchTemplateVersionSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateVersionSets: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.launchTemplateVersionSets && typeof (this.launchTemplateVersionSets as any).validate === 'function') {
      (this.launchTemplateVersionSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


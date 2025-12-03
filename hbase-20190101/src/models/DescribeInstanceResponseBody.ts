// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyNeedUpgradeComps extends $dara.Model {
  comps?: string[];
  static names(): { [key: string]: string } {
    return {
      comps: 'Comps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.comps)) {
      $dara.Model.validateArray(this.comps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyTagsTag extends $dara.Model {
  /**
   * @example
   * test_key
   */
  key?: string;
  /**
   * @example
   * test_value
   */
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

export class DescribeInstanceResponseBodyTags extends $dara.Model {
  tag?: DescribeInstanceResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * open
   */
  backupStatus?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @example
   * testhbase
   */
  clusterName?: string;
  /**
   * @example
   * cluster
   */
  clusterType?: string;
  /**
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @example
   * open
   */
  coldStorageStatus?: string;
  /**
   * @example
   * true
   */
  confirmMaintainTime?: string;
  /**
   * @example
   * 4
   */
  coreDiskCount?: string;
  /**
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @example
   * hbase.sn2.2xlarge
   */
  coreInstanceType?: string;
  /**
   * @example
   * 2
   */
  coreNodeCount?: number;
  /**
   * @example
   * 2021-07-19T11:23:22
   */
  createdTime?: string;
  /**
   * @example
   * 2021-07-19T03:23:22Z
   */
  createdTimeUTC?: string;
  /**
   * @example
   * 12
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableHbaseProxy?: boolean;
  /**
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @example
   * NoEncryption
   */
  encryptionType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2022-02-24T00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 2022-02-23T16:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @example
   * ld-bp150tns0sjxs****
   */
  instanceId?: string;
  /**
   * @example
   * testhbase
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @example
   * true
   */
  isHa?: boolean;
  /**
   * @example
   * true
   */
  isLatestVersion?: boolean;
  /**
   * @example
   * true
   */
  isMultiModel?: boolean;
  /**
   * @example
   * 2.3.2
   */
  lproxyMinorVersion?: string;
  /**
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * 0
   */
  masterDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @example
   * hbase.sn2.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @example
   * 2.2.9.1
   */
  minorVersion?: string;
  /**
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @example
   * phoenxi:4.0
   */
  moduleStackVersion?: string;
  /**
   * @example
   * false
   */
  needUpgrade?: boolean;
  needUpgradeComps?: DescribeInstanceResponseBodyNeedUpgradeComps;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * ld-uf699153o1m2l****
   */
  parentId?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3F429923-B6F6-52C5-9C2A-5B8A8C6BBA66
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeInstanceResponseBodyTags;
  /**
   * @example
   * 25.00
   */
  taskProgress?: string;
  taskStatus?: string;
  /**
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      backupStatus: 'BackupStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      coldStorageSize: 'ColdStorageSize',
      coldStorageStatus: 'ColdStorageStatus',
      confirmMaintainTime: 'ConfirmMaintainTime',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      enableHbaseProxy: 'EnableHbaseProxy',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      isHa: 'IsHa',
      isLatestVersion: 'IsLatestVersion',
      isMultiModel: 'IsMultiModel',
      lproxyMinorVersion: 'LproxyMinorVersion',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      minorVersion: 'MinorVersion',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      needUpgrade: 'NeedUpgrade',
      needUpgradeComps: 'NeedUpgradeComps',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      backupStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      coldStorageSize: 'number',
      coldStorageStatus: 'string',
      confirmMaintainTime: 'string',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      enableHbaseProxy: 'boolean',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      isHa: 'boolean',
      isLatestVersion: 'boolean',
      isMultiModel: 'boolean',
      lproxyMinorVersion: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      minorVersion: 'string',
      moduleId: 'number',
      moduleStackVersion: 'string',
      needUpgrade: 'boolean',
      needUpgradeComps: DescribeInstanceResponseBodyNeedUpgradeComps,
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeInstanceResponseBodyTags,
      taskProgress: 'string',
      taskStatus: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.needUpgradeComps && typeof (this.needUpgradeComps as any).validate === 'function') {
      (this.needUpgradeComps as any).validate();
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel extends $dara.Model {
  hdfsMinorVersion?: string;
  /**
   * @example
   * ld-t4nn71xa0yn****-az-a
   */
  insName?: string;
  isHdfsLatestVersion?: string;
  /**
   * @example
   * true
   */
  isLatestVersion?: boolean;
  latestHdfsMinorVersion?: string;
  latestMinorVersion?: string;
  /**
   * @example
   * 2.1.24
   */
  minorVersion?: string;
  /**
   * @example
   * primary
   */
  role?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hdfsMinorVersion: 'HdfsMinorVersion',
      insName: 'InsName',
      isHdfsLatestVersion: 'IsHdfsLatestVersion',
      isLatestVersion: 'IsLatestVersion',
      latestHdfsMinorVersion: 'LatestHdfsMinorVersion',
      latestMinorVersion: 'LatestMinorVersion',
      minorVersion: 'MinorVersion',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hdfsMinorVersion: 'string',
      insName: 'string',
      isHdfsLatestVersion: 'string',
      isLatestVersion: 'boolean',
      latestHdfsMinorVersion: 'string',
      latestMinorVersion: 'string',
      minorVersion: 'string',
      role: 'string',
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

export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels extends $dara.Model {
  multiZoneInstanceModel?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel[];
  static names(): { [key: string]: string } {
    return {
      multiZoneInstanceModel: 'MultiZoneInstanceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiZoneInstanceModel: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel },
    };
  }

  validate() {
    if(Array.isArray(this.multiZoneInstanceModel)) {
      $dara.Model.validateArray(this.multiZoneInstanceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneClusterResponseBodyTagsTag extends $dara.Model {
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

export class DescribeMultiZoneClusterResponseBodyTags extends $dara.Model {
  tag?: DescribeMultiZoneClusterResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMultiZoneClusterResponseBodyTagsTag },
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

export class DescribeMultiZoneClusterResponseBody extends $dara.Model {
  /**
   * @example
   * vsw-t4nax9mp3wk0czn****
   */
  arbiterVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1c
   */
  arbiterZoneId?: string;
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * ld-t4nn71xa0yn****
   */
  clusterId?: string;
  /**
   * @example
   * mz_test
   */
  clusterName?: string;
  coldStorageSize?: number;
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
   * cloud_efficiency
   */
  coreDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @example
   * 2020-10-15T18:04:52
   */
  createdTime?: string;
  /**
   * @example
   * 2020-10-15T10:04:52Z
   */
  createdTimeUTC?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * 2a****
   */
  encryptionKey?: string;
  /**
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @example
   * 2020-11-16T08:00:00
   */
  expireTime?: string;
  /**
   * @example
   * 2020-11-16T00:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @example
   * ld-t4nn71xa0yn****
   */
  instanceId?: string;
  /**
   * @example
   * mz_test
   */
  instanceName?: string;
  /**
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @example
   * 4
   */
  logDiskCount?: string;
  /**
   * @example
   * 100
   */
  logDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  logDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  logInstanceType?: string;
  /**
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @example
   * 06:00:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 02:00:00
   */
  maintainStartTime?: string;
  /**
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @example
   * 50
   */
  masterDiskSize?: number;
  /**
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @example
   * 2.0
   */
  moduleStackVersion?: string;
  /**
   * @example
   * ap-southeast-1-abc-aliyun
   */
  multiZoneCombination?: string;
  multiZoneInstanceModels?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * ld-fls1gf31y5s35****
   */
  parentId?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * vsw-t4n3s1zd2gtidg****
   */
  primaryVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1a
   */
  primaryZoneId?: string;
  /**
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @example
   * A02C0E6D-3A47-4FA0-BA7E-60793CE256DA
   */
  requestId?: string;
  /**
   * @example
   * rg-lk51f5fer315e****
   */
  resourceGroupId?: string;
  /**
   * @example
   * vsw-t4nvvk7xur3rdi****
   */
  standbyVSwitchIds?: string;
  /**
   * @example
   * ap-southeast-1b
   */
  standbyZoneId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeMultiZoneClusterResponseBodyTags;
  taskProgress?: string;
  taskStatus?: string;
  /**
   * @example
   * vpc-t4nx81tmlixcq5****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchIds: 'ArbiterVSwitchIds',
      arbiterZoneId: 'ArbiterZoneId',
      autoRenewal: 'AutoRenewal',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      coldStorageSize: 'ColdStorageSize',
      coreDiskCount: 'CoreDiskCount',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      createdTime: 'CreatedTime',
      createdTimeUTC: 'CreatedTimeUTC',
      duration: 'Duration',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expireTimeUTC: 'ExpireTimeUTC',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isDeletionProtection: 'IsDeletionProtection',
      logDiskCount: 'LogDiskCount',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      majorVersion: 'MajorVersion',
      masterDiskSize: 'MasterDiskSize',
      masterDiskType: 'MasterDiskType',
      masterInstanceType: 'MasterInstanceType',
      masterNodeCount: 'MasterNodeCount',
      moduleId: 'ModuleId',
      moduleStackVersion: 'ModuleStackVersion',
      multiZoneCombination: 'MultiZoneCombination',
      multiZoneInstanceModels: 'MultiZoneInstanceModels',
      networkType: 'NetworkType',
      parentId: 'ParentId',
      payType: 'PayType',
      primaryVSwitchIds: 'PrimaryVSwitchIds',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      standbyVSwitchIds: 'StandbyVSwitchIds',
      standbyZoneId: 'StandbyZoneId',
      status: 'Status',
      tags: 'Tags',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchIds: 'string',
      arbiterZoneId: 'string',
      autoRenewal: 'boolean',
      clusterId: 'string',
      clusterName: 'string',
      coldStorageSize: 'number',
      coreDiskCount: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      createdTime: 'string',
      createdTimeUTC: 'string',
      duration: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      expireTime: 'string',
      expireTimeUTC: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isDeletionProtection: 'boolean',
      logDiskCount: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      majorVersion: 'string',
      masterDiskSize: 'number',
      masterDiskType: 'string',
      masterInstanceType: 'string',
      masterNodeCount: 'number',
      moduleId: 'number',
      moduleStackVersion: 'string',
      multiZoneCombination: 'string',
      multiZoneInstanceModels: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels,
      networkType: 'string',
      parentId: 'string',
      payType: 'string',
      primaryVSwitchIds: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      standbyVSwitchIds: 'string',
      standbyZoneId: 'string',
      status: 'string',
      tags: DescribeMultiZoneClusterResponseBodyTags,
      taskProgress: 'string',
      taskStatus: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.multiZoneInstanceModels && typeof (this.multiZoneInstanceModels as any).validate === 'function') {
      (this.multiZoneInstanceModels as any).validate();
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


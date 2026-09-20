// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModelsMultiZoneInstanceModel extends $dara.Model {
  hdfsMinorVersion?: string;
  insName?: string;
  isHdfsLatestVersion?: string;
  isLatestVersion?: boolean;
  latestHdfsMinorVersion?: string;
  latestMinorVersion?: string;
  minorVersion?: string;
  role?: string;
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
   * @remarks
   * The vSwitch ID of the arbiter zone.
   * 
   * @example
   * vsw-t4nax9mp3wk0czn****
   */
  arbiterVSwitchIds?: string;
  /**
   * @remarks
   * The zone ID of the arbiter zone.
   * 
   * @example
   * ap-southeast-1c
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the multi-zone instance when PayType is set to Prepaid. Valid values:
   * - True: Auto-renewal is enabled.
   * - False: Auto-renewal is disabled.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ld-t4nn71xa0yn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * mz_test
   */
  clusterName?: string;
  /**
   * @remarks
   * The cold storage size. Unit: GB.
   * 
   * @example
   * 800
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The number of core node disks.
   * 
   * @example
   * 4
   */
  coreDiskCount?: string;
  /**
   * @remarks
   * The disk size of a core node. Unit: GB.
   * 
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * The disk type of core nodes. Valid values:
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - local_hdd_pro: throughput-intensive local disk.
   * - local_ssd_pro: I/O-intensive local disk.
   * 
   * @example
   * cloud_efficiency
   */
  coreDiskType?: string;
  /**
   * @remarks
   * The node specifications of core nodes.
   * 
   * @example
   * hbase.sn1.large
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The number of core nodes. The minimum value is 4, and the increment is a multiple of 2.
   * 
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * The creation time in the current time zone.
   * 
   * @example
   * 2020-10-15T18:04:52
   */
  createdTime?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2020-10-15T10:04:52Z
   */
  createdTimeUTC?: string;
  /**
   * @remarks
   * The Unified Auto Renewal Cycle. This parameter is not returned for pay-as-you-go instances.
   * - Monthly subscription: The auto-renewal epoch is 1 month.
   * - Yearly subscription: The auto-renewal epoch is 1 year (12 months).
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the encryption key. This parameter is empty if encryption is not enabled.
   * 
   * > Cloud disk encryption cannot be disabled after it is enabled.
   * 
   * @example
   * 2a****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * 
   * - NULL: Encryption is not enabled. This is the default value.
   * 
   * - CloudDisk: Cloud disk encryption. The encryption key is specified by the **EncryptionKey** parameter.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * The service type. Currently, only hbaseue is supported.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * The expiration time in the current time zone. This parameter is returned only when PayType is set to Prepaid.
   * 
   * @example
   * 2020-11-16T08:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The expiration time in UTC. This parameter is returned only when PayType is set to Prepaid.
   * 
   * @example
   * 2020-11-16T00:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @remarks
   * The initial default password.
   * 
   * @example
   * yKcYVkFsULmC
   */
  initialRootPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ld-t4nn71xa0yn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * mz_test
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * - True: Deletion protection is enabled. The instance cannot be deleted. An error message is returned if you attempt to delete the instance.
   * - False: Deletion protection is disabled. The instance can be deleted.
   * 
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @remarks
   * The number of disks per log node.
   * 
   * @example
   * 4
   */
  logDiskCount?: string;
  /**
   * @remarks
   * The size of a single disk on a log node. Unit: GB.
   * 
   * @example
   * 100
   */
  logDiskSize?: number;
  /**
   * @remarks
   * The disk type of log nodes. Valid values:
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD.
   * - local_hdd_pro: throughput-intensive local disk.
   * - local_ssd_pro: I/O-intensive local disk.
   * 
   * @example
   * cloud_efficiency
   */
  logDiskType?: string;
  /**
   * @remarks
   * The node specifications of log nodes. You can call [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) to query the exact information.
   * 
   * @example
   * hbase.sn1.large
   */
  logInstanceType?: string;
  /**
   * @remarks
   * The number of log nodes. The minimum value is 4, and the value must be a multiple of 4.
   * 
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @remarks
   * The end time of the O&M window. The format is HH:MMZ, such as 20:00Z.
   * 
   * @example
   * 06:00:00
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M window. The format is HH:MMZ, such as 20:00Z.
   * 
   * @example
   * 02:00:00
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The major version based on the engine type. Currently, only version 2.0 of hbaseue is supported.
   * 
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The disk size of master nodes.
   * 
   * @example
   * 50
   */
  masterDiskSize?: number;
  /**
   * @remarks
   * The disk type of master nodes.
   * 
   * @example
   * cloud_efficiency
   */
  masterDiskType?: string;
  /**
   * @remarks
   * The node specifications of master nodes.
   * 
   * @example
   * hbase.sn1.large
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * The number of master nodes.
   * 
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @remarks
   * The module ID.
   * 
   * @example
   * 0
   */
  moduleId?: number;
  /**
   * @remarks
   * The module software stack version.
   * 
   * @example
   * 2.0
   */
  moduleStackVersion?: string;
  /**
   * @remarks
   * The zone combination of the multi-zone instance.
   * 
   * @example
   * ap-southeast-1-abc-aliyun
   */
  multiZoneCombination?: string;
  multiZoneInstanceModels?: DescribeMultiZoneClusterResponseBodyMultiZoneInstanceModels;
  /**
   * @remarks
   * The network type. Currently, only VPC is supported.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The instance ID of the primary instance. This parameter is returned only when the instance is a component instance.
   * 
   * @example
   * ld-fls1gf31y5s35****
   */
  parentId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - Prepaid: subscription.
   * - Postpaid: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The vSwitch ID of the primary zone instance.
   * 
   * @example
   * vsw-t4n3s1zd2gtidg****
   */
  primaryVSwitchIds?: string;
  /**
   * @remarks
   * The zone ID of the primary zone instance.
   * 
   * @example
   * ap-southeast-1a
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A02C0E6D-3A47-4FA0-BA7E-60793CE256DA
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * rg-lk51f5fer315e****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID of the secondary zone instance.
   * 
   * @example
   * vsw-t4nvvk7xur3rdi****
   */
  standbyVSwitchIds?: string;
  /**
   * @remarks
   * The zone ID of the secondary zone instance.
   * 
   * @example
   * ap-southeast-1b
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - CREATING: The cluster is being created.
   * - ACTIVATION: The cluster is running.
   * - DELETING: The cluster is being deleted.
   * - RESTARTING: The cluster is being restarted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeMultiZoneClusterResponseBodyTags;
  /**
   * @remarks
   * The progress of the task running on the instance, in percentage (%). Tasks initiated from the ApsaraDB for HBase console include specification changes, node scale-out, node scale-in, instance restart, and minor engine version update.
   * 
   * @example
   * 42
   */
  taskProgress?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - running: The task is running.
   * - pause: The task is paused.
   * - fail: The task is interrupted.
   * - finish: The task is completed.
   * 
   * @example
   * running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
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
      initialRootPassword: 'InitialRootPassword',
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
      initialRootPassword: 'string',
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


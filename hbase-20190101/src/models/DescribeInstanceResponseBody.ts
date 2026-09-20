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

export class DescribeInstanceResponseBodySingleZoneRiskAlert extends $dara.Model {
  /**
   * @remarks
   * The confirmation date.
   * 
   * @example
   * 2026-09-01
   */
  confirmDate?: string;
  /**
   * @remarks
   * The disposition type.
   * 
   * @example
   * NO_SET: Not set.
   * PLAN_MIGRATION: Plan to migrate to Lindorm multi-zone edition.
   * EXTERNAL_BIZ_HA: Business-level disaster recovery
   */
  dispositionType?: string;
  /**
   * @remarks
   * Indicates whether an alert is required.
   * 
   * @example
   * false
   */
  needAlert?: boolean;
  /**
   * @remarks
   * The planned completion date.
   * 
   * @example
   * 2027-01-01
   */
  plannedCompletionDate?: string;
  static names(): { [key: string]: string } {
    return {
      confirmDate: 'ConfirmDate',
      dispositionType: 'DispositionType',
      needAlert: 'NeedAlert',
      plannedCompletionDate: 'PlannedCompletionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmDate: 'string',
      dispositionType: 'string',
      needAlert: 'boolean',
      plannedCompletionDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyTagsTag extends $dara.Model {
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
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * - **true**: Auto-renewal is enabled.
   * - **false**: Auto-renewal is not enabled.
   * 
   * > This parameter is returned only when PayType is set to Prepaid (subscription).
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * Indicates whether the backup feature is supported. Valid values:
   * - **open**: The backup feature is supported.
   * - **close**: The backup feature is not supported.
   * 
   * @example
   * open
   */
  backupStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * testhbase
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - **cluster**: Cluster Edition.
   * - **single**: single-node.
   * 
   * @example
   * cluster
   */
  clusterType?: string;
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
   * Indicates whether the cold storage feature is supported. Valid values:
   * - **open**: The cold storage feature is supported.
   * - **close**: The cold storage feature is not supported.
   * 
   * @example
   * open
   */
  coldStorageStatus?: string;
  /**
   * @remarks
   * Indicates whether the O&M window of the instance has been confirmed for the first time. Valid values:
   * - **true**: Confirmed.
   * - **false**: Not confirmed.
   * 
   * > The **Confirm the O&M window for the first time** dialog box appears only when you access the **Basic Information** page of the instance for the first time.
   * 
   * @example
   * true
   */
  confirmMaintainTime?: string;
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
   * The disk capacity of core nodes. Unit: GB.
   * 
   * @example
   * 100
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * The disk type of core nodes. Valid values:
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * - **local_hdd**: local HDD.
   * - **local__ssd**: local SSD.
   * 
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @remarks
   * The node specifications of core nodes.
   * 
   * @example
   * hbase.sn2.2xlarge
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The number of core nodes.
   * 
   * @example
   * 2
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-07-19T11:23:22
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the instance was created, in UTC format.
   * 
   * @example
   * 2021-07-19T03:23:22Z
   */
  createdTimeUTC?: string;
  /**
   * @remarks
   * The Unified Auto Renewal Cycle.
   * 
   * - Monthly subscription: The auto-renewal epoch is 1 month.
   * - Yearly subscription: The auto-renewal epoch is 1 year (12 months).
   * 
   * > This parameter is returned only when PayType is set to Prepaid (subscription).
   * 
   * @example
   * 12
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether access from the HBase open source client is supported. Valid values:
   * 
   * - **true**: Access is supported.
   * 
   * - **false**: Access is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enableHbaseProxy?: boolean;
  /**
   * @remarks
   * The encryption key.
   * 
   * > This parameter is returned only when the encryption type is **CloudDisk**.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-9a164dae****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption type. Valid values:
   * - **NoEncryption**: Encryption is not enabled.
   * - **CloudDisk**: Cloud disk encryption is enabled.
   * - **EncryptionKey**: The encryption key specified by the parameter.
   * 
   * > Cloud disk encryption cannot be disabled after it is enabled.
   * 
   * @example
   * NoEncryption
   */
  encryptionType?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * - **hbase**: ApsaraDB for HBase Standard Edition or ApsaraDB for HBase single-node.
   * - **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition.
   * - **serverlesshbase**: ApsaraDB for HBase Serverless Edition.
   * - **bds**: BDS instance.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-02-24T00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires, in UTC format.
   * 
   * @example
   * 2022-02-23T16:00:00Z
   */
  expireTimeUTC?: string;
  /**
   * @remarks
   * The initial default password.
   * 
   * @example
   * LFuVlAvSKsbo
   */
  initialRootPassword?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * testhbase
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * false
   */
  isDeletionProtection?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is configured for high availability. Valid values:
   * - **true**: Configured for high availability.
   * - **false**: Not configured for high availability.
   * 
   * > - Cluster Edition instances are configured for high availability with default configurations and use 2 master nodes.
   * - Single-node instances are configured with the actual active capacity.
   * 
   * @example
   * true
   */
  isHa?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is the latest version. Valid values:
   * - **true**: The instance is the latest version.
   * - **false**: The instance is not the latest version.
   * 
   * @example
   * true
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is a multi-model Cluster Edition instance. Valid values:
   * - **true**: The instance is a multi-model Cluster Edition instance.
   * - **false**: The instance is not a multi-model Cluster Edition instance.
   * 
   * @example
   * true
   */
  isMultiModel?: boolean;
  /**
   * @remarks
   * The minor version of the LPROXY service.
   * 
   * @example
   * 2.3.2
   */
  lproxyMinorVersion?: string;
  /**
   * @remarks
   * The end time of the O&M window.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the O&M window.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The major version number.
   * 
   * @example
   * 2.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The disk capacity of master nodes. Unit: GB.
   * 
   * @example
   * 0
   */
  masterDiskSize?: number;
  /**
   * @remarks
   * The disk type of master nodes. Valid values:
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * 
   * > This parameter is returned for single-node instances.
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
   * hbase.sn2.large
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * The master node type. Valid values:
   * - **0**: The master node is a single node.
   * - **2**: The master node is in Cluster Edition.
   * 
   * @example
   * 2
   */
  masterNodeCount?: number;
  /**
   * @remarks
   * The minor version number of the instance.
   * 
   * @example
   * 2.2.9.1
   */
  minorVersion?: string;
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
   * The module type version.
   * 
   * @example
   * phoenxi:4.0
   */
  moduleStackVersion?: string;
  /**
   * @remarks
   * Indicates whether the instance components need to be upgraded. Valid values:
   * - **true**: Upgrade is required.
   * - **false**: Upgrade is not required.
   * 
   * @example
   * false
   */
  needUpgrade?: boolean;
  needUpgradeComps?: DescribeInstanceResponseBodyNeedUpgradeComps;
  /**
   * @remarks
   * The network type. Valid values:
   * - **VPC**: Virtual Private Cloud. If the network type is VPC, the VswitchId and VpcId parameters are returned.
   * - **CLASSIC**: classic network.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The parent instance ID.
   * 
   * @example
   * ld-uf699153o1m2l****
   */
  parentId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Prepaid**: subscription.
   * - **Postpaid**: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F429923-B6F6-52C5-9C2A-5B8A8C6BBA66
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The single-zone risk alert information.
   */
  singleZoneRiskAlert?: DescribeInstanceResponseBodySingleZoneRiskAlert;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **CREATING**: The instance is being created.
   * - **ACTIVATION**: The instance is running.
   * - **DELETING**: The instance is being deleted.
   * - **RESTARTING**: The instance is being restarted.
   * - **MINOR_VERSION_TRANSING**: A minor engine version update is in progress.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  tags?: DescribeInstanceResponseBodyTags;
  /**
   * @remarks
   * The task progress of the instance, in percentage (%). Tasks initiated from the ApsaraDB for HBase console include specification changes, node scale-out, node scale-in, instance restart, and minor engine version updates.
   * 
   * @example
   * 25.00
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
   * The VPC ID. This parameter is returned when **NetworkType** is **2**.
   * 
   * @example
   * vpc-bp15s22y1a7sff5gj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is returned when **NetworkType** is **2**.
   * 
   * @example
   * vsw-bp1foll427ze3d4ps****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
      initialRootPassword: 'InitialRootPassword',
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
      singleZoneRiskAlert: 'SingleZoneRiskAlert',
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
      initialRootPassword: 'string',
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
      singleZoneRiskAlert: DescribeInstanceResponseBodySingleZoneRiskAlert,
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
    if(this.singleZoneRiskAlert && typeof (this.singleZoneRiskAlert as any).validate === 'function') {
      (this.singleZoneRiskAlert as any).validate();
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


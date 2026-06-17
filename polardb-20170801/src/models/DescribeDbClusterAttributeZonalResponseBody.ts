// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbClusterAttributeZonalResponseBodyDBNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for bursting.
   * 
   * @example
   * 6
   */
  addedCpuCores?: string;
  /**
   * @remarks
   * The number of CPU cores in the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The node role. Valid values:
   * 
   * - **Writer**: The primary node.
   * 
   * - **Reader**: The read-only node.
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * - **Creating**: The node is being created.
   * 
   * - **Running**: The node is running.
   * 
   * - **Deleting**: The node is being deleted.
   * 
   * - **Rebooting**: The node is being restarted.
   * 
   * - **DBNodeCreating**: A node is being added.
   * 
   * - **DBNodeDeleting**: A node is being deleted.
   * 
   * - **ClassChanging**: The node specifications are being changed.
   * 
   * - **NetAddressCreating**: A network connection is being created.
   * 
   * - **NetAddressDeleting**: A network connection is being deleted.
   * 
   * - **NetAddressModifying**: A network connection is being modified.
   * 
   * - **MinorVersionUpgrading**: The minor version is being updated.
   * 
   * - **Maintaining**: The instance is under maintenance.
   * 
   * - **Switching**: A failover is in progress.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node has a failover priority. A higher priority value indicates a higher probability that the node is elected as the primary node during a failover.
   * Valid values: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * Indicates whether hot standby is enabled. Valid values:
   * 
   * - **ON**: Enabled
   * 
   * - **OFF**: Disabled
   * 
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:
   * 
   * - **ON**: Enabled
   * 
   * - **OFF**: Disabled
   * 
   * @example
   * ON
   */
  imciSwitch?: string;
  /**
   * @remarks
   * The ID of the primary node in a Multi-master Cluster Edition cluster.
   * 
   * @example
   * pi-bp18z52akld3*****
   */
  masterId?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections to the cluster.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum number of input/output operations per second (IOPS).
   * 
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The memory size of the node. Unit: MB.
   * 
   * @example
   * 8192
   */
  memorySize?: string;
  /**
   * @remarks
   * The name of the hot replica compute node that corresponds to the node in an architecture where hot standby storage and hot standby compute are enabled.
   * 
   * @example
   * pi-bp18z52mirror*****
   */
  mirrorInsName?: string;
  /**
   * @remarks
   * MultiMasterLocalStandby
   * 
   * @example
   * MultiMasterLocalStandby
   */
  multiMasterLocalStandby?: string;
  /**
   * @remarks
   * MultiMasterPrimaryNode
   * 
   * @example
   * MultiMasterPrimaryNode
   */
  multiMasterPrimaryNode?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: Enabled
   * 
   * - off: Disabled
   * 
   * @example
   * off
   */
  orca?: string;
  /**
   * @remarks
   * The size of the remote memory. Unit: MB.
   * 
   * @example
   * 3072
   */
  remoteMemorySize?: string;
  /**
   * @remarks
   * Indicates whether the global consistency (high-performance mode) feature is enabled for the node. Valid values:
   * 
   * - **ON**: Enabled
   * 
   * - **OFF**: Disabled
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  sccMode?: string;
  /**
   * @remarks
   * The routing weight.
   * Valid values: 1 to 100. Default value: 1.
   * 
   * @example
   * 1
   */
  serverWeight?: string;
  /**
   * @remarks
   * The Serverless type. Valid values:
   * 
   * - AgileServerless: Agile
   * 
   * - SteadyServerless: Steady
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Indicates whether the node is in the primary or secondary zone. This parameter is mainly used for resource peering.
   * Valid values:
   * 
   * - Primary: The primary zone
   * 
   * - Standby: The secondary zone
   * 
   * @example
   * Primary
   */
  subCluster?: string;
  /**
   * @remarks
   * SubGroupDescription
   * 
   * @example
   * SubGroupDescription
   */
  subGroupDescription?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addedCpuCores: 'AddedCpuCores',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      masterId: 'MasterId',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      memorySize: 'MemorySize',
      mirrorInsName: 'MirrorInsName',
      multiMasterLocalStandby: 'MultiMasterLocalStandby',
      multiMasterPrimaryNode: 'MultiMasterPrimaryNode',
      orca: 'Orca',
      remoteMemorySize: 'RemoteMemorySize',
      sccMode: 'SccMode',
      serverWeight: 'ServerWeight',
      serverlessType: 'ServerlessType',
      subCluster: 'SubCluster',
      subGroupDescription: 'SubGroupDescription',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedCpuCores: 'string',
      cpuCores: 'string',
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      masterId: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      memorySize: 'string',
      mirrorInsName: 'string',
      multiMasterLocalStandby: 'string',
      multiMasterPrimaryNode: 'string',
      orca: 'string',
      remoteMemorySize: 'string',
      sccMode: 'string',
      serverWeight: 'string',
      serverlessType: 'string',
      subCluster: 'string',
      subGroupDescription: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbClusterAttributeZonalResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * MySQL
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

export class DescribeDbClusterAttributeZonalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the free trial for the AI feature
   * 
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @remarks
   * The AI node type. Valid values:
   * 
   * - **SearchNode**: Search node.
   * 
   * - **DLNode**: AI node.
   * 
   * @example
   * DLNode
   */
  aiType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * - **X86**
   * 
   * - **ARM**
   * 
   * @example
   * x86
   */
  architecture?: string;
  /**
   * @remarks
   * The upgrade method for the minor version
   * 
   * - Auto: Automatic upgrade
   * 
   * - Manual: Manual upgrade
   * 
   * @example
   * Auto
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * The maximum number of blktags for the file system.
   * 
   * @example
   * 7,864,320
   */
  blktagTotal?: number;
  /**
   * @remarks
   * The number of used blktags.
   * 
   * @example
   * 5,242,880
   */
  blktagUsed?: number;
  /**
   * @remarks
   * Indicates whether the I/O performance burst feature is enabled for the ESSD AutoPL disk. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * The [product edition](https://help.aliyun.com/document_detail/183258.html). Valid values:
   * 
   * - **Normal**: Cluster Edition
   * 
   * - **Basic**: Single Node
   * 
   * - **Archive**: X-Engine
   * 
   * - **NormalMultimaster**: Multi-master Cluster Edition
   * 
   * - **SENormal**: Standard Edition
   * 
   * > * PolarDB for PostgreSQL clusters of PostgreSQL 11 do not support the single node edition.
   * >
   * > * PolarDB for MySQL clusters of 8.0 and 5.7, and PolarDB for PostgreSQL clusters of PostgreSQL 14 support the Standard Edition.
   * >
   * > * PolarDB for MySQL clusters of 8.0 support X-Engine and the Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether storage compression is enabled. Valid values:
   * 
   * - ON: Enabled
   * 
   * - OFF: Disabled
   * 
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @remarks
   * The size of the compressed data in storage.
   * 
   * > This parameter is returned only when storage compression is enabled for the cluster.
   * 
   * @example
   * 15529410560
   */
  compressStorageUsed?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cluster specifications.
   * 
   * @example
   * polar.mysql.x8.medium.c
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Creating**: The cluster is being created.
   * 
   * - **Running**: The cluster is running.
   * 
   * - **Deleting**: The cluster is being released.
   * 
   * - **Rebooting**: The cluster is being restarted.
   * 
   * - **DBNodeCreating**: A node is being added.
   * 
   * - **DBNodeDeleting**: A node is being deleted.
   * 
   * - **ClassChanging**: The node specifications are being changed.
   * 
   * - **NetAddressCreating**: A network connection is being created.
   * 
   * - **NetAddressDeleting**: A network connection is being deleted.
   * 
   * - **NetAddressModifying**: A network connection is being modified.
   * 
   * - **Deleted**: The cluster is released.
   * 
   * - **ClassChanged**: Resources are being reclaimed after an upgrade or downgrade.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The details of the node information.
   */
  DBNodes?: DescribeDbClusterAttributeZonalResponseBodyDBNodes[];
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The status of the current minor version of the database. Valid values:
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is old. We recommend that you upgrade the cluster to the latest version.
   * 
   * - **HighRisk**: The current version has critical bugs. Upgrade the cluster to the latest version immediately.
   * 
   * - **Beta**: The current version is a beta version.
   * 
   * > * For more information about how to upgrade the minor engine version, see [Upgrade versions](https://help.aliyun.com/document_detail/158572.html).
   * >
   * > * This parameter is returned only when the **DBType** parameter is set to **MySQL**.
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @remarks
   * The total size of level-1 backups (snapshots). Unit: bytes.
   * 
   * @example
   * 74448896
   */
  dataLevel1BackupChainSize?: number;
  /**
   * @remarks
   * The data replication relationship mode. Valid values:
   * 
   * - **AsyncSync**: Asynchronous
   * 
   * - **SemiSync**: Semi-synchronous
   * 
   * @example
   * AsyncSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The lock state of the cluster for deletion. Valid values:
   * 
   * - **0**: The cluster is not locked and can be deleted.
   * 
   * - **1**: The cluster is locked and cannot be deleted.
   * 
   * @example
   * 0
   */
  deletionLock?: number;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for **Prepaid** (subscription) clusters. An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired.
   * 
   * > This parameter is returned only for subscription clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Indicates whether resources of the new primary database are supplemented after a cross-zone failover. Valid values:
   * 
   * - **true**: Yes
   * 
   * - **false**: No
   * 
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @remarks
   * Indicates whether the hot standby storage cluster (and standby compute nodes) feature is enabled. Valid values:
   * 
   * - **StandbyClusterON**: The hot standby storage cluster feature or both the hot standby storage cluster and standby compute node features are enabled.
   * 
   * - **StandbyClusterOFF**: The hot standby storage cluster feature or both the hot standby storage cluster and standby compute node features are disabled.
   * 
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * 
   * - `ON`: Enabled.
   * 
   * - `OFF`: Disabled.
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * Failover with hot replica. Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * False
   */
  imperceptibleSwitch?: string;
  /**
   * @remarks
   * The maximum number of inodes for the file system.
   * 
   * @example
   * 6,291,456
   */
  inodeTotal?: number;
  /**
   * @remarks
   * The number of used inodes.
   * 
   * @example
   * 4,194,304
   */
  inodeUsed?: number;
  /**
   * @remarks
   * Indicates whether the cluster uses the latest kernel version. Valid values:
   * 
   * - **true**: Yes
   * 
   * - **false**: No
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the database proxy uses the latest version. Valid values:
   * 
   * - **true**: Yes
   * 
   * - **false**: No
   * 
   * @example
   * false
   */
  isProxyLatestVersion?: boolean;
  /**
   * @remarks
   * The lock mode. Valid values:
   * 
   * - **Unlock**: The cluster is not locked.
   * 
   * - **ManualLock**: The cluster is manually locked.
   * 
   * - **LockByExpiration**: The cluster is automatically locked upon expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and is displayed in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).
   * 
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: Enabled
   * 
   * - off: Disabled
   * 
   * @example
   * ON
   */
  orca?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: Pay-as-you-go.
   * 
   * - **Prepaid**: Subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The read and write IOPS that are preconfigured for the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * 
   * 
   * <props="china">
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * 
   * 
   * <props="china">
   * 
   * > This parameter is supported only when StorageType is set to ESSDAUTOPL.
   * 
   * @example
   * 1000
   */
  provisionedIops?: string;
  /**
   * @remarks
   * The number of CPU cores for the database proxy.
   * 
   * @example
   * 4
   */
  proxyCpuCores?: string;
  /**
   * @remarks
   * The Serverless type of the database proxy. Valid values:
   * 
   * - AgileServerless: Agile. This indicates a Serverless cluster.
   * 
   * - SteadyServerless: Steady. This indicates a cluster with defined specifications (a subscription or pay-as-you-go cluster).
   * 
   * @example
   * SteadyServerless
   */
  proxyServerlessType?: string;
  /**
   * @remarks
   * The number of CPU cores for the database proxy with standard specifications.
   * 
   * @example
   * 2
   */
  proxyStandardCpuCores?: string;
  /**
   * @remarks
   * The status of the database proxy. Valid values:
   * 
   * - **Creating**: The proxy is being created.
   * 
   * - **Running**: The proxy is running.
   * 
   * - **Deleting**: The proxy is being released.
   * 
   * - **Rebooting**: The proxy is being restarted.
   * 
   * - **DBNodeCreating**: A node is being added.
   * 
   * - **DBNodeDeleting**: A node is being deleted.
   * 
   * - **ClassChanging**: The node specifications are being changed.
   * 
   * - **NetAddressCreating**: A network connection is being created.
   * 
   * - **NetAddressDeleting**: A network connection is being deleted.
   * 
   * - **NetAddressModifying**: A network connection is being modified.
   * 
   * - **Deleted**: The proxy is released.
   * 
   * @example
   * Running
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The type of the database proxy. Valid values:
   * 
   * - **Exclusive**: Dedicated Enterprise Edition
   * 
   * - **General**: Standard Enterprise Edition
   * 
   * @example
   * Exclusive
   */
  proxyType?: string;
  /**
   * @remarks
   * The region ID.
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
   * 074467EF-86B9-4C23-ACBF-E9B81A******
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * - If RestoreType is set to **RestoreByTime** or **RestoreByTimeOss**, this parameter indicates the point in time for the restoration.
   * 
   * - If RestoreType is set to **RestoreByBackupSet** or **RestoreByBackupSetOss**, this parameter indicates the ID of the backup set that is used for the restoration.
   * 
   * > This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.
   * 
   * @example
   * 2179639137
   */
  restoreDataPoint?: string;
  /**
   * @remarks
   * The method used to restore the cluster. Valid values:
   * 
   * - **RestoreByTime**: The cluster is restored from a point in time based on a level-1 backup.
   * 
   * - **RestoreByBackupSet**: The cluster is restored from a backup set based on a level-1 backup.
   * 
   * - **RestoreByTimeOss**: The cluster is restored from a point in time based on a level-2 backup.
   * 
   * - **RestoreByBackupSetOss**: The cluster is restored from a backup set based on a level-2 backup.
   * 
   * - **CloneFromSourceCluster**: The cluster is cloned from a source cluster.
   * 
   * > This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.
   * 
   * @example
   * RestoreByTime
   */
  restoreType?: string;
  /**
   * @remarks
   * RowCompression
   * 
   * @example
   * OFF
   */
  rowCompression?: string;
  /**
   * @remarks
   * The storage usage for SQL. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 0
   */
  SQLSize?: number;
  /**
   * @remarks
   * The Serverless type. Valid values:
   * 
   * - AgileServerless: Agile
   * 
   * - SteadyServerless: Steady
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The source cluster ID.
   * 
   * > This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.
   * 
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The ID of the region where the source cluster resides.
   * 
   * > This parameter is returned only if a source cluster ID exists.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The cross-zone disaster recovery mode. Valid values:
   * 
   * - **ON**: The cross-zone disaster recovery mode is enabled.
   * 
   * - **OFF**: The cross-zone disaster recovery mode is disabled.
   * 
   * - **0**: Customer drill mode.
   * 
   * @example
   * OFF
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * The maximum storage capacity of the current cluster specifications. Unit: bytes.
   * 
   * @example
   * 10995116277760
   */
  storageMax?: number;
  /**
   * @remarks
   * The billing method for storage. Valid values:
   * 
   * - **Postpaid**: Pay-as-you-go.
   * 
   * - **Prepaid**: Subscription.
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage class of the Enterprise Edition. Valid values:
   * 
   * - **PSL5**
   * 
   * - **PSL4**
   * 
   * The storage class of the Standard Edition. Valid values:
   * 
   * - **ESSDPL0**
   * 
   * - **ESSDPL1**
   * 
   * - **ESSDPL2**
   * 
   * - **ESSDPL3**
   * 
   * - **ESSDAUTOPL**
   * 
   * @example
   * ESSDPL0
   */
  storageType?: string;
  /**
   * @remarks
   * The used storage space. Unit: bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether strong consistency is enabled for the multi-zone cluster. Valid values:
   * 
   * - **ON**: Strong consistency is enabled for the multi-zone cluster. This applies to Standard Edition clusters that are deployed in three zones.
   * 
   * - **OFF**: Strong consistency is not enabled for the multi-zone cluster.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * The specification type of the compute node. Valid values:
   * 
   * - **Exclusive**: Dedicated
   * 
   * - **General**: General-purpose
   * 
   * > This parameter is returned only for PolarDB for MySQL Cluster Edition clusters.
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * Indicates whether the failover with hot replica feature that is compatible with the IMCI feature is supported.
   * 
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  /**
   * @remarks
   * The details of the tags.
   */
  tags?: DescribeDbClusterAttributeZonalResponseBodyTags[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The virtual switch ID.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i,cn-hangzhou-g
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      aiCreatingTime: 'AiCreatingTime',
      aiType: 'AiType',
      architecture: 'Architecture',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      blktagTotal: 'BlktagTotal',
      blktagUsed: 'BlktagUsed',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      compressStorageMode: 'CompressStorageMode',
      compressStorageUsed: 'CompressStorageUsed',
      creationTime: 'CreationTime',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      dataLevel1BackupChainSize: 'DataLevel1BackupChainSize',
      dataSyncMode: 'DataSyncMode',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      hasCompleteStandbyRes: 'HasCompleteStandbyRes',
      hotStandbyCluster: 'HotStandbyCluster',
      imciAutoIndex: 'ImciAutoIndex',
      imperceptibleSwitch: 'ImperceptibleSwitch',
      inodeTotal: 'InodeTotal',
      inodeUsed: 'InodeUsed',
      isLatestVersion: 'IsLatestVersion',
      isProxyLatestVersion: 'IsProxyLatestVersion',
      lockMode: 'LockMode',
      maintainTime: 'MaintainTime',
      orca: 'Orca',
      payType: 'PayType',
      provisionedIops: 'ProvisionedIops',
      proxyCpuCores: 'ProxyCpuCores',
      proxyServerlessType: 'ProxyServerlessType',
      proxyStandardCpuCores: 'ProxyStandardCpuCores',
      proxyStatus: 'ProxyStatus',
      proxyType: 'ProxyType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      restoreDataPoint: 'RestoreDataPoint',
      restoreType: 'RestoreType',
      rowCompression: 'RowCompression',
      SQLSize: 'SQLSize',
      serverlessType: 'ServerlessType',
      sourceDBCluster: 'SourceDBCluster',
      sourceRegionId: 'SourceRegionId',
      standbyHAMode: 'StandbyHAMode',
      storageMax: 'StorageMax',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      strictConsistency: 'StrictConsistency',
      subCategory: 'SubCategory',
      supportInstantSwitchWithImci: 'SupportInstantSwitchWithImci',
      tags: 'Tags',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCreatingTime: 'string',
      aiType: 'string',
      architecture: 'string',
      autoUpgradeMinorVersion: 'string',
      blktagTotal: 'number',
      blktagUsed: 'number',
      burstingEnabled: 'string',
      category: 'string',
      compressStorageMode: 'string',
      compressStorageUsed: 'number',
      creationTime: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeDbClusterAttributeZonalResponseBodyDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      DBVersionStatus: 'string',
      dataLevel1BackupChainSize: 'number',
      dataSyncMode: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      hasCompleteStandbyRes: 'boolean',
      hotStandbyCluster: 'string',
      imciAutoIndex: 'string',
      imperceptibleSwitch: 'string',
      inodeTotal: 'number',
      inodeUsed: 'number',
      isLatestVersion: 'boolean',
      isProxyLatestVersion: 'boolean',
      lockMode: 'string',
      maintainTime: 'string',
      orca: 'string',
      payType: 'string',
      provisionedIops: 'string',
      proxyCpuCores: 'string',
      proxyServerlessType: 'string',
      proxyStandardCpuCores: 'string',
      proxyStatus: 'string',
      proxyType: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      restoreDataPoint: 'string',
      restoreType: 'string',
      rowCompression: 'string',
      SQLSize: 'number',
      serverlessType: 'string',
      sourceDBCluster: 'string',
      sourceRegionId: 'string',
      standbyHAMode: 'string',
      storageMax: 'number',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUsed: 'number',
      strictConsistency: 'string',
      subCategory: 'string',
      supportInstantSwitchWithImci: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDbClusterAttributeZonalResponseBodyTags },
      VPCId: 'string',
      vSwitchId: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


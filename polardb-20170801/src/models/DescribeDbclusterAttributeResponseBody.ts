// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyBranchChildBranch extends $dara.Model {
  branchLsn?: string;
  branchTime?: string;
  DBClusterDescription?: string;
  hasChild?: boolean;
  insName?: string;
  static names(): { [key: string]: string } {
    return {
      branchLsn: 'BranchLsn',
      branchTime: 'BranchTime',
      DBClusterDescription: 'DBClusterDescription',
      hasChild: 'HasChild',
      insName: 'InsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchLsn: 'string',
      branchTime: 'string',
      DBClusterDescription: 'string',
      hasChild: 'boolean',
      insName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyBranch extends $dara.Model {
  branchLsn?: string;
  branchTime?: string;
  childBranch?: DescribeDBClusterAttributeResponseBodyBranchChildBranch[];
  parentInsName?: string;
  static names(): { [key: string]: string } {
    return {
      branchLsn: 'BranchLsn',
      branchTime: 'BranchTime',
      childBranch: 'ChildBranch',
      parentInsName: 'ParentInsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchLsn: 'string',
      branchTime: 'string',
      childBranch: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyBranchChildBranch },
      parentInsName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childBranch)) {
      $dara.Model.validateArray(this.childBranch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores that are added for the elastic scaling feature within seconds.
   * 
   * @example
   * 6
   */
  addedCpuCores?: string;
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-03-23T21:35:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The CXL remote memory configuration.
   * 
   * @example
   * 3072
   */
  DBNodeCXLRemoteMemory?: string;
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
   * The role of the node. Valid values:
   * 
   * - **Writer**: the primary node.
   * 
   * - **Reader**: a read-only node.
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * - **Creating**
   * 
   * - **Running**
   * 
   * - **Deleting**
   * 
   * - **Rebooting**
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
   * - **MinorVersionUpgrading**: The minor version is being upgraded.
   * 
   * - **Maintaining**: The instance is being maintained.
   * 
   * - **Switching**: A switchover is in progress.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node has a failover priority. A larger value indicates a higher priority for the node to be promoted to the primary node during a failover. Valid values: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * Indicates whether the hot replica feature is enabled. Valid values:
   * 
   * - **ON**: enabled
   * 
   * - **OFF**: disabled
   * 
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:
   * 
   * - **ON**: enabled
   * 
   * - **OFF**: disabled
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
   * The maximum input/output operations per second (IOPS).
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
   * The name of the hot replica compute node that corresponds to the node in an architecture where both hot standby storage and hot standby compute are enabled.
   * 
   * @example
   * pi-bp18z52mirror*****
   */
  mirrorInsName?: string;
  /**
   * @remarks
   * The local secondary node in a multi-master cluster.
   * 
   * @example
   * pi-****************
   */
  multiMasterLocalStandby?: string;
  /**
   * @remarks
   * The primary node in a multi-master cluster.
   * 
   * @example
   * pi-****************
   */
  multiMasterPrimaryNode?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: enabled
   * 
   * - off: disabled
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
   * Indicates whether global consistency (high-performance mode) is enabled for the node. Valid values:
   * 
   * - **ON**: enabled
   * 
   * - **OFF**: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  sccMode?: string;
  /**
   * @remarks
   * The routing weight. Valid values: 1 to 100. Default value: 1.
   * 
   * @example
   * 1
   */
  serverWeight?: string;
  /**
   * @remarks
   * The Serverless type of the node. Valid values:
   * 
   * - AgileServerless: agile, which indicates a Serverless node.
   * 
   * - SteadyServerless: steady, which indicates that Serverless capabilities are added to a node with defined specifications.
   * 
   * > * This parameter is supported only for Serverless clusters or clusters with defined specifications for which the Serverless feature is enabled. For more information, see [Serverless](https://help.aliyun.com/document_detail/452274.html).
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Indicates whether the node is in the primary zone or a secondary zone. This parameter is mainly used for peer resources. Valid values:
   * 
   * - Primary: the primary zone
   * 
   * - Standby: a secondary zone
   * 
   * @example
   * Primary
   */
  subCluster?: string;
  /**
   * @remarks
   * The description of the cluster subgroup.
   * 
   * @example
   * test Description
   */
  subGroupDescription?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addedCpuCores: 'AddedCpuCores',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeCXLRemoteMemory: 'DBNodeCXLRemoteMemory',
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
      DBNodeCXLRemoteMemory: 'string',
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

export class DescribeDBClusterAttributeResponseBodyTags extends $dara.Model {
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

export class DescribeDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The start time of the free trial for the AI feature.
   * 
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @remarks
   * The AI node type. Valid values:
   * 
   * - **SearchNode**: a search node.
   * 
   * - **DLNode**: an AI node.
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
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * The method for minor version upgrades.
   * 
   * - Auto: automatic upgrade
   * 
   * - Manual: manual upgrade
   * 
   * @example
   * Manual
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
  branch?: DescribeDBClusterAttributeResponseBodyBranch;
  /**
   * @remarks
   * Indicates whether the performance burst feature is enabled for the ESSD AutoPL disk. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
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
   * - **Basic**: Single Node Edition
   * 
   * - **Archive**: X-Engine
   * 
   * - **NormalMultimaster**: Multi-master Cluster Edition
   * 
   * - **SENormal**: Standard Edition
   * 
   * > * The single node edition is not supported for PolarDB for PostgreSQL that runs PostgreSQL 11.
   * >
   * > * The Standard Edition is supported on PolarDB for MySQL that runs MySQL 8.0 or 5.7 and on PolarDB for PostgreSQL that runs PostgreSQL 14.
   * >
   * > * PolarDB for MySQL that runs MySQL 8.0 supports X-Engine and the Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether column-oriented tables are enabled.
   * 
   * @example
   * OFF
   */
  columnTable?: string;
  /**
   * @remarks
   * Indicates whether storage compression is enabled. Valid values:
   * 
   * - ON: enabled
   * 
   * - OFF: disabled
   * 
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @remarks
   * The size of the compressed storage data.
   * 
   * > This parameter is returned only when the storage compression feature is enabled for the cluster.
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
   * pc-*****************
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
   * The cluster status. For more information about the valid values, see [Cluster states](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The details of the nodes.
   */
  DBNodes?: DescribeDBClusterAttributeResponseBodyDBNodes[];
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
   * The status of the minor engine version. Valid values:
   * 
   * - **Stable**: The current version is stable.
   * 
   * - **Old**: The current version is old. Upgrade the cluster to the latest version.
   * 
   * - **HighRisk**: The current version has critical defects. Immediately upgrade the cluster to the latest version.
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
   * The data replication mode. Valid values:
   * 
   * - **AsyncSync**: asynchronous
   * 
   * - **SemiSync**: semi-synchronous
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
   * The cluster engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for subscription clusters. An empty value is returned for pay-as-you-go clusters.
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
   * Indicates whether resources for the new primary database are provisioned after a cross-zone failover. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @remarks
   * Indicates whether the hot standby storage cluster (and standby compute nodes) is enabled. Valid values:
   * 
   * - **StandbyClusterON**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are enabled.
   * 
   * - **StandbyClusterOFF**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are disabled.
   * 
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * 
   * - `ON`: enabled.
   * 
   * - `OFF`: disabled.
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * The imperceptible switchover feature. Valid values:
   * 
   * - `true`: enabled.
   * 
   * - `false`: disabled.
   * 
   * @example
   * true
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
   * Indicates whether the kernel is the latest version. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the database proxy is the latest version. Valid values:
   * 
   * - **true**
   * 
   * - **false**
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
   * - **LockByExpiration**: The cluster is automatically locked after it expires.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and is in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).
   * 
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: enabled
   * 
   * - off: disabled
   * 
   * @example
   * ON
   */
  orca?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
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
   * 2500
   */
  provisionedIops?: string;
  /**
   * @remarks
   * The number of CPU cores of the database proxy.
   * 
   * @example
   * 4
   */
  proxyCpuCores?: string;
  /**
   * @remarks
   * The Serverless type of the database proxy. Valid values:
   * 
   * - AgileServerless: agile, which indicates a Serverless cluster.
   * 
   * - SteadyServerless: steady, which indicates a cluster with defined specifications (a subscription or pay-as-you-go cluster).
   * 
   * @example
   * SteadyServerless
   */
  proxyServerlessType?: string;
  /**
   * @remarks
   * The number of CPU cores of the database proxy with standard specifications.
   * 
   * @example
   * 2
   */
  proxyStandardCpuCores?: string;
  /**
   * @remarks
   * The status of the database proxy. Valid values:
   * 
   * - **Creating**
   * 
   * - **Running**
   * 
   * - **Deleting**: The proxy is being released.
   * 
   * - **Rebooting**
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
   * - **General** : Standard Enterprise Edition
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
   * rg-***************
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
   * The method that is used to restore the cluster. Valid values:
   * 
   * - **RestoreByTime**: The cluster is restored to a point in time from a level-1 backup.
   * 
   * - **RestoreByBackupSet**: The cluster is restored from a level-1 backup set.
   * 
   * - **RestoreByTimeOss**: The cluster is restored to a point in time from a level-2 backup.
   * 
   * - **RestoreByBackupSetOss**: The cluster is restored from a level-2 backup set.
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
   * The row compression settings.
   * 
   * @example
   * OFF
   */
  rowCompression?: string;
  /**
   * @remarks
   * The storage usage for SQL statements. Unit: bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 0
   */
  SQLSize?: number;
  /**
   * @remarks
   * The running state of the search node.
   * 
   * @example
   * Running
   */
  searchClusterStatus?: string;
  /**
   * @remarks
   * The size of the compressed storage data of the search node.
   * 
   * > This parameter is returned only when the storage compression feature is enabled for the cluster.
   * 
   * @example
   * 15529410560
   */
  searchCompressStorageUsed?: number;
  /**
   * @remarks
   * The storage usage of the search node.
   * 
   * @example
   * 3012558848
   */
  searchStorageUsed?: number;
  /**
   * @remarks
   * The Serverless type of the cluster. Valid values:
   * 
   * - AgileServerless: agile, which indicates a Serverless cluster.
   * 
   * - SteadyServerless: steady, which indicates a cluster with defined specifications for which the Serverless feature is enabled.
   * 
   * > This parameter is supported only for Serverless clusters or clusters with defined specifications for which the Serverless feature is enabled.
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The source cluster ID.
   * > This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.
   * 
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * > This parameter is returned only when the source cluster ID exists.
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
   * - **0**: The customer drill mode.
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
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage space of the subscription cluster. Unit: bytes.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage class. The value is fixed as **HighPerformance**.
   * 
   * @example
   * HighPerformance
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
   * Indicates whether strong consistency is enabled for the multi-zone data. Valid values:
   * 
   * - **ON**: Strong consistency is enabled for the multi-zone data. This applies to Standard Edition clusters that are deployed across three zones.
   * 
   * - **OFF**: Strong consistency is not enabled for the multi-zone data.
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
   * Indicates whether the instant switchover feature that is compatible with IMCI is supported.
   * 
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  /**
   * @remarks
   * The details of the tags.
   */
  tags?: DescribeDBClusterAttributeResponseBodyTags[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The virtual switch ID.
   * 
   * @example
   * vsw-*********************
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
      branch: 'Branch',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      columnTable: 'ColumnTable',
      compressStorageMode: 'CompressStorageMode',
      compressStorageUsed: 'CompressStorageUsed',
      creationTime: 'CreationTime',
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
      searchClusterStatus: 'SearchClusterStatus',
      searchCompressStorageUsed: 'SearchCompressStorageUsed',
      searchStorageUsed: 'SearchStorageUsed',
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
      branch: DescribeDBClusterAttributeResponseBodyBranch,
      burstingEnabled: 'string',
      category: 'string',
      columnTable: 'string',
      compressStorageMode: 'string',
      compressStorageUsed: 'number',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBNodes },
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
      searchClusterStatus: 'string',
      searchCompressStorageUsed: 'number',
      searchStorageUsed: 'number',
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
      tags: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyTags },
      VPCId: 'string',
      vSwitchId: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    if(this.branch && typeof (this.branch as any).validate === 'function') {
      (this.branch as any).validate();
    }
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


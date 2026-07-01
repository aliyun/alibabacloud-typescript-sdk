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
   * The number of CPU cores added by second-level rapid scaling.
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
   * - **Writer**: read/write node.
   * - **Reader**: read-only node.
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * * **Creating**: being created.
   * * **Running**: running.
   * * **Deleting**: being deleted.
   * * **Rebooting**: being restarted.
   * * **DBNodeCreating**: adding a node.
   * * **DBNodeDeleting**: deleting a node.
   * * **ClassChanging**: changing node specifications.
   * * **NetAddressCreating**: creating network connectivity.
   * * **NetAddressDeleting**: deleting network connectivity.
   * * **NetAddressModifying**: modifying network connectivity.
   * * **MinorVersionUpgrading**: performing a minor engine version upgrade.
   * * **Maintaining**: instance under maintenance.
   * * **Switching**: being switched.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node has a failover priority that determines the probability of the node being elected as the primary node during a failover. A higher value indicates a higher priority.
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
   * - **ON**: enabled.
   * 
   * - **OFF**: disabled.
   * 
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether In-Memory Column Index (IMCI) is enabled. Valid values:
   * 
   * - **ON**: enabled.
   * 
   * - **OFF**: disabled.
   * 
   * @example
   * ON
   */
  imciSwitch?: string;
  /**
   * @remarks
   * The primary node ID of the Multi-master Cluster Edition.
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
   * The maximum number of I/O requests per second (IOPS).
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
   * The name of the hot replica compute node that corresponds to the node in the Hot Standby Cluster and compute architecture.
   * 
   * @example
   * pi-bp18z52mirror*****
   */
  mirrorInsName?: string;
  /**
   * @remarks
   * The multi-master local standby node.
   * 
   * @example
   * pi-****************
   */
  multiMasterLocalStandby?: string;
  /**
   * @remarks
   * The multi-master primary node.
   * 
   * @example
   * pi-****************
   */
  multiMasterPrimaryNode?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: enabled.
   * 
   * - off: disabled.
   * 
   * @example
   * off
   */
  orca?: string;
  /**
   * @remarks
   * The remote memory size. Unit: MB.
   * 
   * @example
   * 3072
   */
  remoteMemorySize?: string;
  /**
   * @remarks
   * Indicates whether the global consistency (high-performance mode) feature is enabled for the node. Valid values:
   * 
   * - **ON**: The feature is enabled.
   * 
   * - **OFF**: The feature is disabled.
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
   * The serverless type of the node. Valid values:
   * 
   * - AgileServerless: agile serverless node.
   * - SteadyServerless: steady serverless node, which is a node with defined specifications that has the serverless capability enabled.
   * 
   * > This parameter is supported only for serverless clusters or clusters with defined specifications that have the serverless feature enabled. For more information, see [Serverless](https://help.aliyun.com/document_detail/452274.html).
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Indicates whether the node is in the primary zone or the secondary zone. This parameter is mainly used for resource-equivalent deployments.
   * Valid values:
   * - Primary: primary zone.
   * - Standby: secondary zone.
   * 
   * @example
   * Primary
   */
  subCluster?: string;
  /**
   * @remarks
   * The cluster subgroup description.
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
   * The start time of the free AI trial.
   * 
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @remarks
   * The AI node type. Valid values:
   *      
   * - **SearchNode**: search node.
   * - **DLNode**: AI node.
   * 
   * @example
   * DLNode
   */
  aiType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * - **X86**
   * - **ARM**
   * 
   * @example
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * The minor version update method. Valid values:
   * 
   * - Auto: automatic update.
   * - Manual: manual update.
   * 
   * @example
   * Manual
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * The maximum number of blktags in the file system.
   * 
   * @example
   * 7,864,320
   */
  blktagTotal?: number;
  /**
   * @remarks
   * The current blktag usage.
   * 
   * @example
   * 5,242,880
   */
  blktagUsed?: number;
  branch?: DescribeDBClusterAttributeResponseBodyBranch;
  /**
   * @remarks
   * Indicates whether I/O performance burst is enabled for the ESSD AutoPL cloud disk. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * The [edition](https://help.aliyun.com/document_detail/183258.html) of the cluster. Valid values:
   * * **Normal**: Cluster Edition
   * * **Basic**: Single Node Edition
   * * **Archive**: PolarDB X-Engine Edition
   * * **NormalMultimaster**: Multi-master Cluster Edition
   * * **SENormal**: PolarDB for MySQL Standard Edition
   * 
   * > * PolarDB for PostgreSQL (PostgreSQL 11) does not support Single Node Edition.
   * >* PolarDB for MySQL 8.0, PolarDB for MySQL 5.7, and PolarDB for PostgreSQL (PostgreSQL 14) support PolarDB for MySQL Standard Edition.
   * >* PolarDB for MySQL 8.0 supports PolarDB X-Engine Edition and Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether column store tables are enabled.
   * 
   * @example
   * OFF
   */
  columnTable?: string;
  /**
   * @remarks
   * Indicates whether storage compression is enabled. Valid values:
   * - ON: enabled
   * - OFF: disabled
   * 
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @remarks
   * The compressed storage data size.
   * >This parameter is returned only when the storage compression feature is enabled for the cluster.
   * 
   * @example
   * 15529410560
   */
  compressStorageUsed?: number;
  connectionResourceQuota?: number;
  connectionResourceUsed?: number;
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
   * The cluster status. For more information, see [Cluster status table](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The details of nodes.
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
   * The status of the current minor engine version. Valid values:
   * * **Stable**: The current version is stable.
   * * **Old**: The current version is outdated. Upgrade to the latest version.
   * * **HighRisk**: The current version has critical defects. Upgrade to the latest version immediately.
   * * **Beta**: The current version is a beta version.
   * 
   * > * For information about how to upgrade the minor engine version, see [Version upgrade](https://help.aliyun.com/document_detail/158572.html).
   * > * This parameter is returned only when the database engine type (**DBType**) is **MySQL**.
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @remarks
   * The total size of level-1 backups (snapshots), in bytes.
   * 
   * @example
   * 74448896
   */
  dataLevel1BackupChainSize?: number;
  /**
   * @remarks
   * The data replication relationship mode. Valid values:
   * - **AsyncSync**: asynchronous
   * - **SemiSync**: semi-synchronous
   * 
   * @example
   * AsyncSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The lock status for cluster deletion. Valid values:
   * * **0**: Unlocked. The cluster can be deleted.
   * * **1**: Locked. The cluster cannot be deleted.
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
   * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired.
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription).
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Indicates whether resources are replenished for the new primary database after a cross-zone failover. Valid values:
   * - **true**: Resources are replenished.
   * - **false**: Resources are not replenished.
   * 
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @remarks
   * Indicates whether the Hot Standby Cluster (and standby compute nodes) is enabled. Valid values:
   * - **StandbyClusterON**: The Hot Standby Cluster and standby compute nodes are enabled.
   * - **StandbyClusterOFF**: The Hot Standby Cluster and standby compute nodes are disabled.
   * 
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * - `ON`: enabled.
   * - `OFF`: disabled.
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * The failover with hot replica feature. Valid values:
   * - `true`: enabled.
   * - `false`: disabled.
   * 
   * @example
   * true
   */
  imperceptibleSwitch?: string;
  /**
   * @remarks
   * The maximum number of inodes in the file system.
   * 
   * @example
   * 6,291,456
   */
  inodeTotal?: number;
  /**
   * @remarks
   * The current inode usage.
   * 
   * @example
   * 4,194,304
   */
  inodeUsed?: number;
  /**
   * @remarks
   * Indicates whether the cluster runs the latest Milvus version. Valid values:
   * 
   * - **true**: The cluster runs the latest Milvus version.
   * 
   * - **false**: The cluster does not run the latest Milvus version.
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the database proxy is the latest version. Valid values:
   * 
   * - **true**: The database proxy is the latest version.
   * - **false**: The database proxy is not the latest version.
   * 
   * @example
   * false
   */
  isProxyLatestVersion?: boolean;
  /**
   * @remarks
   * The lock mode. Valid values: 
   * 
   * - **Unlock**: not locked.
   * - **ManualLock**: manually locked. 
   * - **LockByExpiration**: automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance window of the cluster, in the `HH:mmZ-HH:mmZ` format (UTC). For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+08:00).
   * 
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * - on: enabled.
   * 
   * - off: disabled.
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
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.</p>
   * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>Baseline performance = min{1,800 + 50 × capacity, 50,000}.</p>
   * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>This parameter is supported only when StorageType is set to ESSDAUTOPL.</note>
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
   * The serverless type of the database proxy. Valid values:
   * - AgileServerless: agile serverless cluster.
   * - SteadyServerless: steady serverless, which is a cluster with defined specifications (subscription or pay-as-you-go billing).
   * 
   * @example
   * SteadyServerless
   */
  proxyServerlessType?: string;
  /**
   * @remarks
   * The number of CPU cores in the standard configuration of the database proxy.
   * 
   * @example
   * 2
   */
  proxyStandardCpuCores?: string;
  /**
   * @remarks
   * The status of the database proxy. Valid values:
   * 
   * - **Creating**: being created.
   * - **Running**: running.
   * - **Deleting**: being released.
   * - **Rebooting**: being restarted.
   * - **DBNodeCreating**: adding a node.
   * - **DBNodeDeleting**: deleting a node.
   * - **ClassChanging**: changing node specifications.
   * - **NetAddressCreating**: creating network connectivity.
   * - **NetAddressDeleting**: deleting network connectivity.
   * - **NetAddressModifying**: modifying network connectivity.
   * - **Deleted**: released.
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
   * rg-***************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * * If RestoreType is **RestoreByTime** or **RestoreByTimeOss**, this value indicates the point in time to which the cluster is restored.
   * * If RestoreType is **RestoreByBackupSet** or **RestoreByBackupSetOss**, this value indicates the backup set ID used for the restoration.
   * 
   * <note>This parameter is supported only for clusters restored from a backup set or point in time after June 1, 2024.</note>
   * 
   * @example
   * 2179639137
   */
  restoreDataPoint?: string;
  /**
   * @remarks
   * The restoration method of the cluster. Valid values:
   * 
   * * **RestoreByTime**: point-in-time restore based on a level-1 backup.
   * * **RestoreByBackupSet**: restore from a level-1 backup set.
   * * **RestoreByTimeOss**: point-in-time restore based on a level-2 backup.
   * * **RestoreByBackupSetOss**: restore from a level-2 backup set.
   * * **CloneFromSourceCluster**: clone from the source cluster.
   * 
   * <note>This parameter is supported only for clusters restored from a backup set or point in time after June 1, 2024.</note>
   * 
   * @example
   * RestoreByTime
   */
  restoreType?: string;
  /**
   * @remarks
   * The row compression setting.
   * 
   * @example
   * OFF
   */
  rowCompression?: string;
  /**
   * @remarks
   * The storage size of SQL statements, in bytes. A value of -1 indicates that no data is available.
   * 
   * @example
   * 0
   */
  SQLSize?: number;
  /**
   * @remarks
   * The running status of the search node.
   * 
   * @example
   * Running
   */
  searchClusterStatus?: string;
  /**
   * @remarks
   * The compressed storage data size of the search node.
   * >This parameter is returned only when the storage compression feature is enabled for the cluster.
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
   * The serverless type of the cluster. Valid values:
   * 
   * - AgileServerless: agile serverless cluster.
   * - SteadyServerless: steady serverless, which is a cluster with defined specifications that has the serverless feature enabled.
   * 
   * > This parameter is supported only for serverless clusters or clusters with defined specifications that have the serverless feature enabled.
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The source cluster ID.
   * <note>This parameter is supported only for clusters restored from a backup set or point in time after June 1, 2024.</note>
   * 
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * <note>This parameter is returned only when the source cluster ID exists.</note>
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The cross-zone disaster recovery mode. Valid values:
   * - **ON**: Cross-zone disaster recovery is enabled.
   * - **OFF**: Cross-zone disaster recovery is disabled.
   * - **0**: Customer drill mode.
   * 
   * @example
   * OFF
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * The maximum storage capacity for the current cluster specifications, in bytes.
   * 
   * @example
   * 10995116277760
   */
  storageMax?: number;
  /**
   * @remarks
   * The billing method for storage. Valid values:
   * 
   * - **Postpaid**: pay-by-capacity (pay-as-you-go).
   * - **Prepaid**: pay-by-space (subscription).
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage space for pay-by-space (subscription) billing. Unit: bytes.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage type. The value is fixed as **HighPerformance**.
   * 
   * @example
   * HighPerformance
   */
  storageType?: string;
  /**
   * @remarks
   * The storage usage, in bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether multi-zone strong data consistency is enabled for the cluster. Valid values:
   * 
   * - **ON**: Multi-zone strong data consistency is enabled. This applies to PolarDB for MySQL Standard Edition with three-zone deployment.
   * 
   * - **OFF**: Multi-zone strong data consistency is not enabled.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * The specification type of compute nodes. Valid values:
   * * **Exclusive**: Dedicated
   * * **General**: General-purpose
   * 
   * > This parameter is returned only for PolarDB for MySQL clusters of the Cluster Edition.
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * Indicates whether failover with hot replica is supported with IMCI compatibility.
   * 
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  /**
   * @remarks
   * The details of tags.
   */
  tags?: DescribeDBClusterAttributeResponseBodyTags[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
      connectionResourceQuota: 'ConnectionResourceQuota',
      connectionResourceUsed: 'ConnectionResourceUsed',
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
      connectionResourceQuota: 'number',
      connectionResourceUsed: 'number',
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


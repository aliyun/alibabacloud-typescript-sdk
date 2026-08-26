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
   * The number of CPU cores added by automatically scaling local resources.
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
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  dedicatedHostModel?: boolean;
  /**
   * @remarks
   * The failover priority. Each node has a failover priority that determines the probability of the node being elected as the primary node during a failover. A larger value indicates a higher priority.
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
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether In-Memory Column Index is enabled. Valid values:
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
   * The name of the hot replica that corresponds to the node in the hot standby storage and compute architecture.
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
   * @example
   * off
   */
  orca?: string;
  remoteMemoryMax?: number;
  remoteMemoryMin?: number;
  remoteMemoryRecommended?: number;
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
   * This parameter is required.
   * 
   * @example
   * ON
   */
  sccMode?: string;
  /**
   * @remarks
   * The routing weight.
   * 
   * @example
   * 1
   */
  serverWeight?: string;
  /**
   * @remarks
   * The serverless type of the node. Valid values:
   * 
   * - AgileServerless: agile serverless. The node is a serverless node.
   * - SteadyServerless: steady serverless. The node is a node with defined specifications that has the serverless feature enabled.
   * 
   * > * This parameter is supported only for serverless clusters or clusters with defined specifications that have the serverless feature enabled. For more information, see [Serverless](https://help.aliyun.com/document_detail/452274.html).
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Indicates whether the node is in the primary zone or the secondary zone. This parameter is mainly used for resource-symmetric deployments.
   * 
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
      dedicatedHostModel: 'DedicatedHostModel',
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
      remoteMemoryMax: 'RemoteMemoryMax',
      remoteMemoryMin: 'RemoteMemoryMin',
      remoteMemoryRecommended: 'RemoteMemoryRecommended',
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
      dedicatedHostModel: 'boolean',
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
      remoteMemoryMax: 'number',
      remoteMemoryMin: 'number',
      remoteMemoryRecommended: 'number',
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
   * The start time of the free AI feature.
   * 
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @remarks
   * The AI node type. Valid values:
   * 
   * @example
   * DLNode
   */
  aiType?: string;
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * @example
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * The minor version update policy.
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
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * The [product edition](https://help.aliyun.com/document_detail/183258.html). Valid values:
   * * **Normal**: Cluster Edition
   * * **Basic**: Single Node Edition
   * * **Archive**: PolarDB X-Engine Edition
   * * **NormalMultimaster**: Multi-master Cluster Edition
   * * **SENormal**: PolarDB for MySQL Standard Edition
   * 
   * > * PolarDB for PostgreSQL 11 does not support Single Node Edition.
   * >* PolarDB for MySQL 8.0, PolarDB for MySQL 5.7, and PolarDB for PostgreSQL 14 support PolarDB for MySQL Standard Edition.
   * >* PolarDB for MySQL 8.0 supports PolarDB X-Engine Edition and Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the column store table is enabled.
   * 
   * @example
   * OFF
   */
  columnTable?: string;
  /**
   * @remarks
   * Indicates whether storage compression is enabled. Valid values:
   * 
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @remarks
   * The size of the storage data after compression.
   * 
   * @example
   * 15529410560
   */
  compressStorageUsed?: number;
  /**
   * @remarks
   * The connection resource quota (AgenticDB exclusive).
   */
  connectionResourceQuota?: number;
  /**
   * @remarks
   * The number of connection resources used (AgenticDB exclusive).
   */
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
   * The node information.
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
   * The status of the current minor version. Valid values:
   * * **Stable**: The current version is stable.
   * * **Old**: The current version is outdated. Upgrade to the latest version.
   * * **HighRisk**: The current version has critical defects. Upgrade to the latest version immediately.
   * * **Beta**: The current version is a Beta version.
   * 
   * > * For more information about how to upgrade the minor version, see [Version upgrade](https://help.aliyun.com/document_detail/158572.html).
   * > * This parameter is returned only when the database engine type (**DBType**) is **MySQL**.
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
   * - **AsyncSync**: asynchronous
   * - **SemiSync**: semi-synchronous
   * 
   * @example
   * AsyncSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The lock status of cluster deletion. Valid values:
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
   * > Only clusters whose billing method is **Prepaid** (subscription) return a specific value for this parameter. **Postpaid** (pay-as-you-go) clusters return an empty value.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Indicates whether resources for the new primary database are replenished after a cross-zone failover. Valid values:
   * - **true**: Resources are replenished.
   * - **false**: Resources are not replenished.
   * 
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @remarks
   * Indicates whether the hot standby storage cluster (and Standby compute nodes) is enabled. Valid values:
   * - **StandbyClusterON**: The hot standby storage cluster and Standby compute nodes are enabled.
   * - **StandbyClusterOFF**: The hot standby storage cluster and Standby compute nodes are disabled.
   * 
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * The failover with hot replica feature. Valid values:
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
   * Indicates whether the cluster is running the latest kernel version. Valid values:
   * 
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * Indicates whether the database proxy is the latest version. Valid values:
   * 
   * @example
   * false
   */
  isProxyLatestVersion?: boolean;
  /**
   * @remarks
   * The lock mode. Valid values:
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format (UTC). For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+08:00).
   * 
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The Orca feature. Valid values:
   * 
   * @example
   * ON
   */
  orca?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read/write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.</p>
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
   * 
   * - AgileServerless: agile serverless, which indicates a serverless cluster.
   * - SteadyServerless: steady serverless, which indicates a cluster with defined specifications (a subscription or pay-as-you-go cluster).
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
   * @example
   * Running
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The type of the database proxy. Valid values:
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
   * * If RestoreType is **RestoreByBackupSet** or **RestoreByBackupSetOss**, this value indicates the ID of the backup set from which the cluster is restored.
   * 
   * <note>This parameter is supported only for clusters that are restored from a backup set or to a point in time after June 1, 2024.</note>
   * 
   * @example
   * 2179639137
   */
  restoreDataPoint?: string;
  /**
   * @remarks
   * The cluster restoration method. Valid values:
   * 
   * * **RestoreByTime**: Restores from a point in time based on a level-1 backup.
   * * **RestoreByBackupSet**: Restores from a backup set based on a level-1 backup.
   * * **RestoreByTimeOss**: Restores from a point in time based on a level-2 backup.
   * * **RestoreByBackupSetOss**: Restores from a backup set based on a level-2 backup.
   * * **CloneFromSourceCluster**: Clones from the source cluster.
   * 
   * <note>This parameter is supported only for clusters that are restored from a backup set or a point in time after June 1, 2024.</note>
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
   * The storage size of SQL statements. Unit: bytes. A value of -1 indicates that no data is available.
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
   * - AgileServerless: agile serverless. This value indicates a serverless cluster.
   * - SteadyServerless: steady serverless. This value indicates a cluster with defined specifications that has the serverless feature enabled.
   * 
   * > This parameter is supported only for serverless clusters or clusters with defined specifications that have the serverless feature enabled.
   * 
   * @example
   * SteadyServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The ID of the source cluster.
   * <note>This parameter is supported only for clusters restored from a backup set or point in time after June 1, 2024.</note>
   * 
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The cross-zone disaster recovery mode. Valid values:
   * - **ON**: Cross-zone disaster recovery mode is enabled.
   * - **OFF**: Cross-zone disaster recovery mode is disabled.
   * - **0**: Customer drill mode.
   * 
   * @example
   * OFF
   */
  standbyHAMode?: string;
  storageAutoScale?: string;
  /**
   * @remarks
   * The maximum storage capacity for the current cluster specifications. Unit: bytes.
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
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage space billed by space (subscription). Unit: bytes.
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
  storageUpperBound?: number;
  /**
   * @remarks
   * The storage usage. Unit: bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether multi-zone strong data consistency is enabled for the cluster. Valid values:
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * The specification type of the compute node. Valid values:
   * 
   * * **Exclusive**: Dedicated
   * * **General**: General-purpose
   * 
   * > This parameter is returned only for PolarDB for MySQL Cluster Edition clusters.
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * Indicates whether the failover with hot replica feature that is compatible with IMCI is supported.
   * 
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  /**
   * @remarks
   * The tag information.
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
      storageAutoScale: 'StorageAutoScale',
      storageMax: 'StorageMax',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUpperBound: 'StorageUpperBound',
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
      storageAutoScale: 'string',
      storageMax: 'number',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUpperBound: 'number',
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


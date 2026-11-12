import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterAttributeResponseBodyBranchChildBranch extends $dara.Model {
    /**
     * @remarks
     * The log sequence number (LSN) of the child branch.
     *
     * @example
     * 2/2
     */
    branchLsn?: string;
    /**
     * @remarks
     * The branch time of the child branch. The time follows the RFC 3339 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    branchTime?: string;
    /**
     * @remarks
     * The description of the child branch cluster.
     *
     * @example
     * test
     */
    DBClusterDescription?: string;
    /**
     * @remarks
     * Indicates whether lower-level child branches exist.
     *
     * @example
     * false
     */
    hasChild?: boolean;
    /**
     * @remarks
     * The name of the child branch instance.
     *
     * @example
     * pc-2bbb22b2bb22bb222
     */
    insName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterAttributeResponseBodyBranch extends $dara.Model {
    /**
     * @remarks
     * The log sequence number (LSN) of the current branch.
     *
     * @example
     * 2/2
     */
    branchLsn?: string;
    /**
     * @remarks
     * The branch time of the current branch. The time follows the RFC 3339 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    branchTime?: string;
    /**
     * @remarks
     * The list of child branches.
     *
     * @example
     * []
     */
    childBranch?: DescribeDBClusterAttributeResponseBodyBranchChildBranch[];
    /**
     * @remarks
     * The name of the parent branch instance.
     *
     * @example
     * pc-2bbb22b2bb22bb222
     */
    parentInsName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
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
     * The number of CPU cores for the node.
     *
     * @example
     * 2
     */
    cpuCores?: string;
    /**
     * @remarks
     * The time when the node was created.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2020-03-23T21:35:43Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The Compute Express Link (CXL) remote memory configuration.
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
     * The description of the node.
     *
     * @example
     * test
     */
    DBNodeDescription?: string;
    /**
     * @remarks
     * The ID of the node.
     *
     * @example
     * pi-****************
     */
    DBNodeId?: string;
    /**
     * @remarks
     * The role of the node. Valid values:
     *
     * - **Writer**: Primary node.
     * - **Reader**: Read-only node.
     *
     * @example
     * Reader
     */
    DBNodeRole?: string;
    /**
     * @remarks
     * The status of the node. Valid values:
     * * **Creating**: The node is being created.
     * * **Running**: The node is running.
     * * **Deleting**: The node is being deleted.
     * * **Rebooting**: The node is restarting.
     * * **DBNodeCreating**: A node is being added.
     * * **DBNodeDeleting**: A node is being deleted.
     * * **ClassChanging**: The node specifications are being changed.
     * * **NetAddressCreating**: A network connection is being created.
     * * **NetAddressDeleting**: A network connection is being deleted.
     * * **NetAddressModifying**: A network connection is being modified.
     * * **MinorVersionUpgrading**: The minor version is being upgraded.
     * * **Maintaining**: The instance is under maintenance.
     * * **Switching**: A switchover is in progress.
     *
     * @example
     * Running
     */
    DBNodeStatus?: string;
    /**
     * @remarks
     * Indicates whether the node uses the exclusive host mode.
     *
     * @example
     * false
     */
    dedicatedHostModel?: boolean;
    /**
     * @remarks
     * The failover priority. Each node has a failover priority, which determines the probability of the node being elected as the primary node during a failover. A higher value indicates a higher priority.
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
     * - **ON**: Enabled.
     *
     * - **OFF**: Disabled.
     *
     * @example
     * ON
     */
    hotReplicaMode?: string;
    /**
     * @remarks
     * Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:
     *
     * - **ON**: Enabled.
     *
     * - **OFF**: Disabled.
     *
     * @example
     * ON
     */
    imciSwitch?: string;
    /**
     * @remarks
     * The ID of the primary node in the Multi-master Cluster Edition.
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
     * The maximum number of I/O requests per second, namely IOPS.
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
     * The name of the hot replica corresponding to the node in the architecture with hot standby storage and hot standby compute enabled.
     *
     * @example
     * pi-bp18z52mirror*****
     */
    mirrorInsName?: string;
    /**
     * @remarks
     * The local secondary node in the multi-master architecture.
     *
     * @example
     * pi-****************
     */
    multiMasterLocalStandby?: string;
    /**
     * @remarks
     * The primary node in the multi-master architecture.
     *
     * @example
     * pi-****************
     */
    multiMasterPrimaryNode?: string;
    /**
     * @remarks
     * The Orca feature status. Valid values:
     *
     * - on: Enabled.
     *
     * - off: Disabled.
     *
     * @example
     * off
     */
    orca?: string;
    /**
     * @remarks
     * The maximum remote memory capacity of the node.
     *
     * @example
     * 0
     */
    remoteMemoryMax?: number;
    /**
     * @remarks
     * The minimum remote memory capacity of the node.
     *
     * @example
     * 0
     */
    remoteMemoryMin?: number;
    /**
     * @remarks
     * The recommended remote memory capacity of the node.
     *
     * @example
     * 0
     */
    remoteMemoryRecommended?: number;
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
     * - **ON**: Enabled.
     *
     * - **OFF**: Disabled.
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
     * - AgileServerless: Agile state, which refers to serverless nodes.
     * - SteadyServerless: Steady state, which refers to nodes in a cluster with defined specifications that have serverless capabilities enabled.
     *
     * > * This parameter is supported only for serverless clusters or a cluster with defined specifications that have the serverless feature enabled. For more information, see [Serverless](https://help.aliyun.com/document_detail/452274.html).
     *
     * @example
     * SteadyServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * Indicates whether the node is in the primary zone or secondary zone. This is mainly used for resource symmetry.
     * Valid values:
     * - Primary: Primary zone.
     * - Standby: Secondary zone.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterAttributeResponseBodyTags extends $dara.Model {
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The start time of the free AI feature.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2024-03-13T01:20:28Z
     */
    aiCreatingTime?: string;
    /**
     * @remarks
     * The type of the AI node. Valid values:
     *
     * - **SearchNode**: Search node.
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
     * The minor engine version update method. Valid values:
     *
     * - Auto: Automatic update.
     * - Manual: Manual update.
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
     * 7864320
     */
    blktagTotal?: number;
    /**
     * @remarks
     * The current blktag usage.
     *
     * @example
     * 5242880
     */
    blktagUsed?: number;
    /**
     * @remarks
     * The branch information of the cluster.
     *
     * @example
     * {}
     */
    branch?: DescribeDBClusterAttributeResponseBodyBranch;
    /**
     * @remarks
     * Indicates whether I/O performance burst is enabled for the ESSD AutoPL cloud disk. Valid values:
     *
     * - **true**: Enabled.
     * - **false**: Disabled.
     *
     * @example
     * false
     */
    burstingEnabled?: string;
    /**
     * @remarks
     * The [edition](https://help.aliyun.com/document_detail/183258.html). Valid values:
     * * **Normal**: Cluster Edition
     * * **Basic**: Single Node Edition
     * * **Archive**: X-Engine Edition
     * * **NormalMultimaster**: Multi-master Cluster Edition
     * * **SENormal**: Standard Edition
     *
     * > * PolarDB for PostgreSQL 11 does not support the Single Node Edition.
     * > * PolarDB for MySQL 8.0 and 5.7, and PolarDB for PostgreSQL 14 support the Standard Edition.
     * > * PolarDB for MySQL 8.0 supports the X-Engine Edition and Multi-master Cluster Edition.
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
     * - ON: Enabled.
     * - OFF: Disabled.
     *
     * @example
     * ON
     */
    compressStorageMode?: string;
    /**
     * @remarks
     * The size of the compressed storage data.
     * >This parameter is returned only when the storage compression feature is enabled for the cluster.
     *
     * @example
     * 15529410560
     */
    compressStorageUsed?: number;
    /**
     * @remarks
     * The quota for connection resources (exclusive to AgenticDB).
     *
     * @example
     * 0
     */
    connectionResourceQuota?: number;
    /**
     * @remarks
     * The number of used connection resources (exclusive to AgenticDB).
     *
     * @example
     * 0
     */
    connectionResourceUsed?: number;
    /**
     * @remarks
     * The time when the cluster was created.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     *
     * @example
     * 2020-08-14T05:58:42Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The description of the cluster.
     *
     * @example
     * test
     */
    DBClusterDescription?: string;
    /**
     * @remarks
     * The ID of the cluster.
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
     * The status of the cluster. For more information about valid values, see [Cluster status table](https://help.aliyun.com/document_detail/99286.html).
     *
     * @example
     * Running
     */
    DBClusterStatus?: string;
    /**
     * @remarks
     * The details of the nodes.
     *
     * @example
     * []
     */
    DBNodes?: DescribeDBClusterAttributeResponseBodyDBNodes[];
    /**
     * @remarks
     * The type of the database engine.
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
     * The status of the current minor database engine version. Valid values:
     * * **Stable**: The current version is stable.
     * * **Old**: The current version is outdated. Upgrade to the latest version.
     * * **HighRisk**: The current version has critical defects. Upgrade to the latest version immediately.
     * * **Beta**: The current version is a beta version.
     *
     * > * For more information about how to upgrade the minor database engine version, see [Version upgrade](https://help.aliyun.com/document_detail/158572.html).
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
     * The data replication relationship pattern. Valid values:
     * - **AsyncSync**: Asynchronous.
     * - **SemiSync**: Semi-synchronous.
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
     * The engine of the cluster.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    /**
     * @remarks
     * The expiration time of the cluster.
     *
     * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). For **Postpaid** (pay-as-you-go) clusters, an empty value is returned.
     *
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
     * Indicates whether resources for the new primary database are replenished after a cross-zone switch. Valid values:
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    hasCompleteStandbyRes?: boolean;
    /**
     * @remarks
     * Indicates whether the storage Hot Standby Cluster (and standby compute nodes) is enabled. Valid values:
     * - **StandbyClusterON**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are enabled.
     * - **StandbyClusterOFF**: The hot standby storage cluster or both the hot standby storage cluster and standby compute nodes are disabled.
     *
     * @example
     * StandbyClusterON
     */
    hotStandbyCluster?: string;
    /**
     * @remarks
     * The automatic IMCI-based query acceleration feature. Valid values:
     * - `ON`: Enabled.
     * - `OFF`: Disabled.
     *
     * @example
     * OFF
     */
    imciAutoIndex?: string;
    /**
     * @remarks
     * The seamless switchover feature. Valid values:
     * - `true`: Enabled.
     * - `false`: Disabled.
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
     * 6291456
     */
    inodeTotal?: number;
    /**
     * @remarks
     * The current inode usage.
     *
     * @example
     * 4194304
     */
    inodeUsed?: number;
    /**
     * @remarks
     * Indicates whether the latest kernel version is used. Valid values:
     *
     * - **true**: Yes.
     *
     * - **false**: No.
     *
     * @example
     * false
     */
    isLatestVersion?: boolean;
    /**
     * @remarks
     * Indicates whether the latest version of PolarProxy is used. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    isProxyLatestVersion?: boolean;
    /**
     * @remarks
     * The lock mode. Valid values:
     *
     * - **Unlock**: Unlocked.
     * - **ManualLock**: Manually locked.
     * - **LockByExpiration**: Automatically locked due to cluster expiration.
     *
     * @example
     * Unlock
     */
    lockMode?: string;
    /**
     * @remarks
     * The maintenance window of the cluster. The time is in the `HH:mmZ-HH:mmZ` format and displayed in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).
     *
     * @example
     * 18:00Z-19:00Z
     */
    maintainTime?: string;
    /**
     * @remarks
     * The Orca feature. Valid values:
     *
     * - on: Enabled.
     *
     * - off: Disabled.
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
     * - **Prepaid**: Subscription.
     *
     * @example
     * Prepaid
     */
    payType?: string;
    /**
     * @remarks
     * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read and write IOPS for the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline performance}.</p>
     * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>Baseline performance = min{1,800 + 50 × Capacity, 50,000}.</p>
     * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>This parameter is supported only when StorageType is set to ESSDAUTOPL.</note>
     *
     * @example
     * 2500
     */
    provisionedIops?: string;
    /**
     * @remarks
     * The number of CPU cores for PolarProxy.
     *
     * @example
     * 4
     */
    proxyCpuCores?: string;
    /**
     * @remarks
     * The serverless type of the database proxy. Valid values:
     * - AgileServerless: Agile state, which refers to serverless clusters.
     * - SteadyServerless: Steady state, which refers to cluster with defined specifications (clusters whose billing method is subscription or pay-as-you-go).
     *
     * @example
     * SteadyServerless
     */
    proxyServerlessType?: string;
    /**
     * @remarks
     * The number of CPU cores for the standard configuration of the database proxy.
     *
     * @example
     * 2
     */
    proxyStandardCpuCores?: string;
    /**
     * @remarks
     * The status of the database proxy. Valid values:
     *
     * - **Creating**: Creating.
     * - **Running**: Running.
     * - **Deleting**: Releasing.
     * - **Rebooting**: Restarting.
     * - **DBNodeCreating**: Increasing nodes.
     * - **DBNodeDeleting**: Deleting nodes.
     * - **ClassChanging**: Changing node specifications.
     * - **NetAddressCreating**: Creating network connectivity.
     * - **NetAddressDeleting**: Deleting network connectivity.
     * - **NetAddressModifying**: Modifying network connectivity.
     * - **Deleted**: Released.
     *
     * @example
     * Running
     */
    proxyStatus?: string;
    /**
     * @remarks
     * The type of the database proxy. Valid values:
     *
     * - **Exclusive**: Dedicated Enterprise Edition.
     * - **General**: Standard Enterprise Edition.
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
     * The ID of the request.
     *
     * @example
     * 074467EF-86B9-4C23-ACBF-E9B81A******
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-***************
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * * If RestoreType is set to **RestoreByTime** or **RestoreByTimeOss**, this value indicates the point in time to which the cluster is restored.
     * * If RestoreType is set to **RestoreByBackupSet** or **RestoreByBackupSetOss**, this value indicates the ID of the backup set from which the cluster is restored.
     *
     * <note>This parameter is supported only for clusters restored from backup sets or points in time after June 1, 2024.</note>
     *
     * @example
     * 2179639137
     */
    restoreDataPoint?: string;
    /**
     * @remarks
     * The restoration method of the cluster. Valid values:
     *
     * * **RestoreByTime**: Point-in-time restore based on level-1 backups.
     * * **RestoreByBackupSet**: Restoration from a backup set based on level-1 backups.
     * * **RestoreByTimeOss**: Point-in-time restore based on level-2 backups.
     * * **RestoreByBackupSetOss**: Restoration from a backup set based on level-2 backups.
     * * **CloneFromSourceCluster**: Cloned from the source cluster.
     *
     * <note>This parameter is supported only for clusters restored from backup sets or points in time after June 1, 2024.</note>
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
     * The storage usage of SQL statements. Unit: bytes. A value of -1 indicates that no data is available.
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
     * The size of compressed storage data on the search node.
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
     * The serverless type of the cluster. Valid values:
     *
     * - AgileServerless: Agile state, which refers to serverless clusters.
     * - SteadyServerless: Steady state, which refers to cluster with defined specifications that have serverless capabilities enabled.
     *
     * > This parameter is supported only for serverless clusters or cluster with defined specifications that have the serverless feature enabled.
     *
     * @example
     * SteadyServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * The ID of the source cluster.
     * <note>This parameter is supported only for clusters restored from backup sets or points in time after June 1, 2024.</note>
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
     * Indicates whether automatic storage scaling is enabled for the Standard Edition cluster. A value of Enable indicates that the feature is enabled, and a value of Disable indicates that the feature is disabled.
     *
     * @example
     * Enable
     */
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
     * The storage billing method. Valid values:
     *
     * - **Postpaid**: Pay-as-you-go based on storage capacity.
     * - **Prepaid**: Subscription based on storage space.
     *
     * @example
     * Prepaid
     */
    storagePayType?: string;
    /**
     * @remarks
     * The storage space for subscription billing. Unit: bytes.
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
     * The upper limit for automatic storage scaling of the Standard Edition cluster, in GB.
     *
     * @example
     * 800
     */
    storageUpperBound?: number;
    /**
     * @remarks
     * The amount of used storage space, in bytes.
     *
     * @example
     * 3012558848
     */
    storageUsed?: number;
    /**
     * @remarks
     * Indicates whether strong data consistency across multiple zones is enabled for the cluster. Valid values:
     *
     * - **ON**: Strong data consistency across multiple zones is enabled. This applies to the Standard Edition in a three-zone deployment scenario.
     *
     * - **OFF**: Strong data consistency across multiple zones is disabled.
     *
     * @example
     * ON
     */
    strictConsistency?: string;
    /**
     * @remarks
     * The specification type of the compute node. Valid values:
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
     * Indicates whether the failover with hot replica feature compatible with IMCI is supported.
     *
     * @example
     * ON
     */
    supportInstantSwitchWithImci?: string;
    /**
     * @remarks
     * The details of the tags.
     *
     * @example
     * []
     */
    tags?: DescribeDBClusterAttributeResponseBodyTags[];
    /**
     * @remarks
     * The ID of the virtual private cloud (VPC).
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The ID of the vSwitch.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}

import * as $dara from '@darabonba/typescript';
export declare class DescribeDbClusterAttributeZonalResponseBodyDBNodes extends $dara.Model {
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
     * The time when the cluster was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
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
     * - **Writer**: Primary node.
     * - **Reader**: Read-only node.
     *
     * @example
     * Reader
     */
    DBNodeRole?: string;
    /**
     * @remarks
     * The node status. Valid values:
     * * **Creating**: Creating.
     * * **Running**: Running.
     * * **Deleting**: Deleting.
     * * **Rebooting**: Restarting.
     * * **DBNodeCreating**: Increasing nodes.
     * * **DBNodeDeleting**: Deleting nodes.
     * * **ClassChanging**: Changing node specifications.
     * * **NetAddressCreating**: Creating network connectivity.
     * * **NetAddressDeleting**: Deleting network connectivity.
     * * **NetAddressModifying**: Modifying network connectivity.
     * * **MinorVersionUpgrading**: Minor version upgrade in progress.
     * * **Maintaining**: Instance maintenance in progress.
     * * **Switching**: Switching.
     *
     * @example
     * Running
     */
    DBNodeStatus?: string;
    /**
     * @remarks
     * The failover priority. Each node has a failover priority, which determines the probability of the node being elected as the primary node during a failover. A larger value indicates a higher priority.
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
     * Indicates whether the column store index is enabled. Valid values:
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
     * The identifier of the local read-only node in the multi-master architecture.
     *
     * @example
     * MultiMasterLocalStandby
     */
    multiMasterLocalStandby?: string;
    /**
     * @remarks
     * The identifier of the primary node in the multi-master architecture.
     *
     * @example
     * MultiMasterPrimaryNode
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
     * The serverless type. Valid values:
     *
     * - AgileServerless: Agile.
     * - SteadyServerless: Steady.
     *
     * @example
     * AgileServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * Indicates whether the node is in the primary zone or the secondary zone. This is mainly used for resource symmetry.
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
     * The description of the node subgroup.
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
export declare class DescribeDbClusterAttributeZonalResponseBodyTags extends $dara.Model {
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
export declare class DescribeDbClusterAttributeZonalResponseBody extends $dara.Model {
    /**
     * @remarks
     * The start time of the free AI feature. The time is in the YYYY-MM-DDTHH:mm:ssZ format (UTC time).
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
     * x86
     */
    architecture?: string;
    /**
     * @remarks
     * The minor version update method. Valid values:
     *
     * - Auto: Automatic update.
     * - Manual: Manual update.
     *
     * @example
     * Auto
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
     * * **Normal**: Cluster Edition.
     * * **Basic**: Single Node Edition.
     * * **Archive**: X-Engine.
     * * **NormalMultimaster**: Multi-master Cluster Edition.
     * * **SENormal**: Standard Edition.
     *
     * > * PolarDB for PostgreSQL 11 does not support the Single Node Edition.
     * >* PolarDB for MySQL 8.0 and 5.7, and PolarDB for PostgreSQL 14 support the Standard Edition.
     * >* PolarDB for MySQL 8.0 supports X-Engine and the Multi-master Cluster Edition.
     *
     * @example
     * Normal
     */
    category?: string;
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
     * > This parameter is returned only when the storage compression feature is enabled for the cluster.
     *
     * @example
     * 15529410560
     */
    compressStorageUsed?: number;
    /**
     * @remarks
     * The time when the cluster was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
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
     * * **ClassChanged**: Revoking resources after specification upgrade and downgrade.
     *
     * @example
     * Running
     */
    DBClusterStatus?: string;
    /**
     * @remarks
     * The details of the nodes.
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
     * The status of the current minor engine version. Valid values:
     * * **Stable**: The current version is stable.
     * * **Old**: The current version is outdated. Upgrade to the latest version.
     * * **HighRisk**: The current version has critical defects. Upgrade to the latest version immediately.
     * * **Beta**: The current version is a beta version.
     *
     * > * For more information about how to upgrade the minor engine version, see [Upgrade the minor engine version](https://help.aliyun.com/document_detail/158572.html).
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
     * - **AsyncSync**: Asynchronous synchronization.
     * - **SemiSync**: Semi-synchronous synchronization.
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
     * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). For clusters whose billing method is **Postpaid** (pay-as-you-go), an empty value is returned. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
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
     * Indicates whether the resources of the new primary database are supplemented after a cross-zone switch. Valid values:
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    hasCompleteStandbyRes?: boolean;
    /**
     * @remarks
     * Indicates whether the Hot Standby Cluster (and standby compute nodes) is enabled. Valid values:
     * - **StandbyClusterON**: The Hot Standby Cluster is enabled, or both the Hot Standby Cluster and standby compute nodes are enabled.
     * - **StandbyClusterOFF**: The Hot Standby Cluster is shut down, or both the Hot Standby Cluster and standby compute nodes are shut down.
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
     * False
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
     * Indicates whether the kernel version is the latest. Valid values:
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
     * Indicates whether the database proxy is of the latest version. Valid values:
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
     * The maintenance window of the cluster. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC. For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 00:00 to 01:00 (UTC+8).
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
     * <p id="p_wyg_t4a_glm" props="china" icmsditafragmentmagic=1>The provisioned read and write IOPS for the ESSD AutoPL cloud disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.</p>
     * <p id="p_6de_jxy_k2g" props="china" icmsditafragmentmagic=1>Baseline performance = min{1,800 + 50 × capacity, 50,000}.</p>
     * <note id="note_7kj_j0o_rgs" props="china" icmsditafragmentmagic=1>This parameter is supported only when StorageType is set to ESSDAUTOPL.</note>
     *
     * @example
     * 1000
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
     * - AgileServerless: Agile mode, which indicates a serverless cluster.
     * - SteadyServerless: Steady mode, which indicates a cluster with defined specifications (a cluster whose billing type is subscription or pay-as-you-go).
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
     * The database proxy type. Valid values:
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
     * * If RestoreType is set to **RestoreByTime** or **RestoreByTimeOss**, this value indicates the point in time to which the cluster is restored.
     * * If RestoreType is set to **RestoreByBackupSet** or **RestoreByBackupSetOss**, this value indicates the ID of the backup set from which the cluster is restored.
     *
     * <note>This parameter is supported only for clusters restored from a backup set or a point in time after June 1, 2024.</note>
     *
     * @example
     * 2179639137
     */
    restoreDataPoint?: string;
    /**
     * @remarks
     * The cluster restoration method. Valid values:
     *
     * * **RestoreByTime**: Restores the cluster from a point in time based on a level-1 backup.
     * * **RestoreByBackupSet**: Restores the cluster from a backup set based on a level-1 backup.
     * * **RestoreByTimeOss**: Restores the cluster from a point in time based on a level-2 backup.
     * * **RestoreByBackupSetOss**: Restores the cluster from a backup set based on a level-2 backup.
     * * **CloneFromSourceCluster**: Clones the cluster from the source cluster.
     *
     * <note>This parameter is supported only for clusters restored from a backup set or a point in time after June 1, 2024.</note>
     *
     * @example
     * RestoreByTime
     */
    restoreType?: string;
    /**
     * @remarks
     * The row compression status.
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
     * The serverless type. Valid values:
     *
     * - AgileServerless: Agile.
     * - SteadyServerless: Steady.
     *
     * @example
     * AgileServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * The ID of the source cluster.
     * <note>This parameter is supported only for clusters restored from a backup set or a point in time after June 1, 2024.</note>
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
     * - **Postpaid**: Pay-as-you-go based on capacity.
     * - **Prepaid**: Subscription based on space.
     *
     * @example
     * Prepaid
     */
    storagePayType?: string;
    /**
     * @remarks
     * The storage space. Unit: GB.
     *
     * @example
     * 50
     */
    storageSpace?: number;
    /**
     * @remarks
     * Valid values for the storage type of the Enterprise Edition:
     * - **PSL5**
     * - **PSL4**
     *
     * Valid values for the storage type of the Standard Edition:
     * - **ESSDPL0**
     * - **ESSDPL1**
     * - **ESSDPL2**
     * - **ESSDPL3**
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
     * Indicates whether strict data consistency across multiple zones is enabled for the cluster. Valid values:
     *
     * - **ON**: Strict data consistency across multiple zones is enabled. This applies to the three-zone deployment scenario of the Standard Edition.
     *
     * - **OFF**: Strict data consistency across multiple zones is disabled.
     *
     * @example
     * ON
     */
    strictConsistency?: string;
    /**
     * @remarks
     * The specification type of the compute nodes. Valid values:
     * * **Exclusive**: Dedicated.
     * * **General**: General-purpose.
     *
     * > This parameter is returned only for PolarDB for MySQL Cluster Edition clusters.
     *
     * @example
     * Exclusive
     */
    subCategory?: string;
    /**
     * @remarks
     * Indicates whether failover with hot replica compatible with In-Memory Column Index (IMCI) is supported.
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
     * The VPC ID.
     *
     * @example
     * vpc-**********
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
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

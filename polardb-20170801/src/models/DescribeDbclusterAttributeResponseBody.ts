// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyDBNodes } from "./DescribeDbclusterAttributeResponseBodyDbnodes";
import { DescribeDBClusterAttributeResponseBodyTags } from "./DescribeDbclusterAttributeResponseBodyTags";


export class DescribeDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Start time for free AI activation
   * 
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @remarks
   * Types of AI nodes. Values include:
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
   * CPU architecture. Available options are:
   * - **X86**
   * - **ARM**
   * 
   * @example
   * X86
   */
  architecture?: string;
  /**
   * @remarks
   * The minor version upgrade method.
   * 
   * *   Auto
   * *   Manual
   * 
   * @example
   * Manual
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * Maximum number of blktags in the file system.
   * 
   * @example
   * 7,864,320
   */
  blktagTotal?: number;
  /**
   * @remarks
   * Current blktag usage.
   * 
   * @example
   * 5,242,880
   */
  blktagUsed?: number;
  /**
   * @example
   * false
   */
  burstingEnabled?: string;
  /**
   * @remarks
   * [Product Series](https://help.aliyun.com/document_detail/183258.html), with values as follows:
   * * **Normal**: Cluster Edition
   * * **Basic**: Single Node
   * * **Archive**: High Compression Engine (X-Engine)
   * * **NormalMultimaster**: Multi-Master Cluster Edition
   * * **SENormal**: Standard Edition
   * 
   * > * PolarDB PostgreSQL version 11 does not support single-node.
   * >* PolarDB MySQL versions 8.0 and 5.7, and PolarDB PostgreSQL version 14 support the Standard Edition.
   * >* PolarDB MySQL version 8.0 supports High Compression Engine (X-Engine) and Multi-Master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * Whether storage compression is enabled. Values are as follows:
   * - ON: Enabled
   * - OFF: Disabled
   * 
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @remarks
   * Compressed storage data size.
   * > This parameter is supported only when the cluster\\"s storage compression feature is enabled.
   * 
   * @example
   * 15529410560
   */
  compressStorageUsed?: number;
  /**
   * @remarks
   * Cluster creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Cluster description.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Network type of the cluster.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * Cluster status. For the full list of values, refer to [Cluster Status Table](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The information about the nodes.
   */
  DBNodes?: DescribeDBClusterAttributeResponseBodyDBNodes[];
  /**
   * @remarks
   * Database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * Database engine version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The status of the minor version. Valid values:
   * 
   * *   **Stable**: The minor version is stable.
   * *   **Old**: The minor version is outdated. We recommend that you update it to the latest version.
   * *   **HighRisk**: The minor version has critical defects. We recommend that you immediately update it to the latest version.
   * *   **Beta**: The minor version is a Beta version.
   * 
   * >  For information about how to update the minor version, see [Minor version update](https://help.aliyun.com/document_detail/158572.html).
   * 
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @remarks
   * Total size of Level 1 backups (snapshots), in bytes.
   * 
   * @example
   * 74448896
   */
  dataLevel1BackupChainSize?: number;
  /**
   * @remarks
   * Data replication relationship mode. Values are as follows:
   * - **AsyncSync**: Asynchronous
   * - **SemiSync**: Semi-synchronous
   * 
   * @example
   * AsyncSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * Lock status for cluster deletion, with values as follows:
   * * **0**: Unlocked, cluster can be deleted.
   * * **1**: Locked, cluster cannot be deleted.
   * 
   * @example
   * 0
   */
  deletionLock?: number;
  /**
   * @remarks
   * Cluster engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * Cluster expiration time.
   * 
   * > Only clusters with **Prepaid** (subscription) payment methods return specific parameter values; **Postpaid** (pay-as-you-go) clusters return empty values.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Whether the cluster has expired.
   * > This parameter is only supported for clusters with **Prepaid** (Subscription) payment methods.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Whether to replenish resources for the new primary after cross-AZ switch. Values are as follows:
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @remarks
   * Whether to enable storage hot backup cluster (and Standby compute nodes). Values are as follows:
   * - **StandbyClusterON**: Enable storage hot backup/Enable storage hot backup and Standby compute nodes.
   * - **StandbyClusterOFF**: Disable storage hot backup/Disable storage hot backup and Standby compute nodes.
   * 
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * Indicates whether the automatic IMCI-based query acceleration feature is enabled. Valid values:
   * 
   * *   `ON`: enabled
   * *   `OFF`: disabled
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * Indicates whether failover with hot replica is enabled. Valid values:
   * 
   * *   `true`
   * *   `false` (default)
   */
  imperceptibleSwitch?: string;
  /**
   * @remarks
   * Maximum number of inodes in the file system.
   * 
   * @example
   * 6,291,456
   */
  inodeTotal?: number;
  /**
   * @remarks
   * Current inode usage.
   * 
   * @example
   * 4,194,304
   */
  inodeUsed?: number;
  /**
   * @remarks
   * Indicates whether it is the latest kernel version. Values are as follows:
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
   * Indicates whether it is the latest version of the database proxy, with possible values as follows:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  isProxyLatestVersion?: boolean;
  /**
   * @remarks
   * Lock mode. Possible values are as follows:
   * 
   * - **Unlock**: Unlocked.
   * - **ManualLock**: Manually triggered lock.
   * - **LockByExpiration**: Automatic cluster lock upon expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maintenance window for the cluster, formatted as `HH:mmZ-HH:mmZ` (UTC time). For example, `16:00Z-17:00Z` indicates that routine maintenance can be performed from 0:00 to 1:00 (UTC+08:00).
   * 
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * Orca function with possible values as follows:
   * 
   * - **on**: Enabled
   * 
   * - **off**: Disabled
   * 
   * @example
   * ON
   */
  orca?: string;
  /**
   * @remarks
   * Payment type. Possible values are:
   * 
   * - **Postpaid**: Pay-As-You-Go
   * - **Prepaid**: Prepaid (Subscription).
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * Describes the preconfigured read and write IOPS for ESSD AutoPL cloud disks. Possible values: 0 to min{50,000, 1000*capacity - baseline performance}.<br>Baseline performance = min{1,800 + 50*capacity, 50000}.<br>Note: This parameter is supported only when StorageType is ESSDAUTOPL.
   * 
   * @example
   * 2500
   */
  provisionedIops?: string;
  /**
   * @remarks
   * Number of CPU cores for the database proxy.
   * 
   * @example
   * 4
   */
  proxyCpuCores?: string;
  /**
   * @remarks
   * Serverless type for the database proxy. Currently, the value is fixed to AgileServerless.
   * 
   * @example
   * AgileServerless
   */
  proxyServerlessType?: string;
  /**
   * @remarks
   * Standard configuration CPU cores for the database proxy.
   * 
   * @example
   * 2
   */
  proxyStandardCpuCores?: string;
  /**
   * @remarks
   * Status of the database proxy. Possible values include:
   * 
   * - **Creating**: Creating
   * - **Running**: Running
   * - **Deleting**: Releasing
   * - **Rebooting**: Restarting
   * - **DBNodeCreating**: Adding nodes
   * - **DBNodeDeleting**: Deleting nodes
   * - **ClassChanging**: Changing node specifications
   * - **NetAddressCreating**: Creating network connections
   * - **NetAddressDeleting**: Deleting network connections
   * - **NetAddressModifying**: Modifying network connections
   * - **Deleted**: Released
   * 
   * @example
   * Running
   */
  proxyStatus?: string;
  /**
   * @remarks
   * Database proxy types, with the following values:
   * 
   * - **Exclusive**: Enterprise Exclusive Edition
   * - **General**: Enterprise General Purpose Edition
   * 
   * @example
   * Exclusive
   */
  proxyType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 074467EF-86B9-4C23-ACBF-E9B81A******
   */
  requestId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-***************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * If RestoreType is **RestoreByTime** or **RestoreByTimeOss**, this value represents the recovery time point. If RestoreType is **RestoreByBackupSet** or **RestoreByBackupSetOss**, this value indicates the ID of the backup set on which the recovery is based.
   * <note>Only clusters restored from a backup set or time point after June 1, 2024, support this parameter.</note>
   * 
   * @example
   * 2179639137
   */
  restoreDataPoint?: string;
  /**
   * @remarks
   * Cluster recovery method, with possible values:
   * * **RestoreByTime**: Restore from a time point based on primary backup. * **RestoreByBackupSet**: Restore from a backup set based on primary backup. * **RestoreByTimeOss**: Restore from a time point based on secondary backup. * **RestoreByBackupSetOss**: Restore from a backup set based on secondary backup. * **CloneFromSourceCluster**: Clone from the source cluster.
   * <note>This parameter is only supported for clusters restored from a backup set or time point after June 1, 2024.</note>
   * 
   * @example
   * RestoreByTime
   */
  restoreType?: string;
  rowCompression?: string;
  /**
   * @remarks
   * Storage amount of SQL, in bytes. If the value is -1, it indicates no data.
   * 
   * @example
   * 0
   */
  SQLSize?: number;
  /**
   * @remarks
   * Serverless type. Valid values are as follows:
   * - AgileServerless: Agile - SteadyServerless: Stable
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * Source cluster ID. <note>Clusters restored from backup sets or specific points in time after June 1, 2024, support this parameter.</note>
   * 
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * 
   * >  This parameter is returned only if the source cluster ID exists.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * Cross-AZ disaster recovery mode. Values are as follows:
   * - **ON**: Enable cross-AZ disaster recovery mode.
   * - **OFF**: Disable cross-AZ disaster recovery mode.
   * - **0**: Customer drill mode.
   * 
   * @example
   * OFF
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * The maximum storage capacity of the current cluster specification, in bytes.
   * 
   * @example
   * 10995116277760
   */
  storageMax?: number;
  /**
   * @remarks
   * Storage billing type. Valid values are as follows:
   * - **Postpaid**: Pay-as-you-go (by capacity).
   * - **Prepaid**: Subscription (by space).
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * Storage space for pay-by-space (subscription) billing. Unit: Byte.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * Storage type, with a fixed value of **HighPerformance**.
   * 
   * @example
   * HighPerformance
   */
  storageType?: string;
  /**
   * @remarks
   * Amount of used storage space, in bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether multi-AZ data strong consistency is enabled for the cluster. The value ranges are as follows:
   * - **ON**: Indicates that multi-AZ data strong consistency is enabled, applicable to the Standard 3AZ scenario.
   * - **OFF**: Indicates that multi-AZ data strong consistency is not enabled.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * Specification type of compute nodes, with possible values as follows:
   * * **Exclusive**: Dedicated specification
   * * **General**: General-purpose specification
   * 
   * > This parameter is supported only for PolarDB MySQL Edition with the product series set to Cluster Edition.
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * Indicates whether queries based on In-Memory Column Indexes (IMCIs) are supported during and after a failover with hot replica.
   * 
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  /**
   * @remarks
   * Details of tags.
   */
  tags?: DescribeDBClusterAttributeResponseBodyTags[];
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * VSwitch ID.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Availability Zone IDs.
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


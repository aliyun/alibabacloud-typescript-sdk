// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbClusterAttributeZonalResponseBodyDBNodes extends $dara.Model {
  /**
   * @example
   * 6
   */
  addedCpuCores?: string;
  /**
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @example
   * ON
   */
  hotReplicaMode?: string;
  /**
   * @example
   * ON
   */
  imciSwitch?: string;
  /**
   * @example
   * pi-bp18z52akld3*****
   */
  masterId?: string;
  /**
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @example
   * 8192
   */
  memorySize?: string;
  /**
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
   * @example
   * off
   */
  orca?: string;
  /**
   * @example
   * 3072
   */
  remoteMemorySize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ON
   */
  sccMode?: string;
  /**
   * @example
   * 1
   */
  serverWeight?: string;
  /**
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
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
   * @example
   * test
   */
  key?: string;
  /**
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
   * @example
   * 2024-03-13T01:20:28Z
   */
  aiCreatingTime?: string;
  /**
   * @example
   * DLNode
   */
  aiType?: string;
  /**
   * @example
   * x86
   */
  architecture?: string;
  /**
   * @example
   * Auto
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @example
   * 7,864,320
   */
  blktagTotal?: number;
  /**
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
   * @example
   * Normal
   */
  category?: string;
  /**
   * @example
   * ON
   */
  compressStorageMode?: string;
  /**
   * @example
   * 15529410560
   */
  compressStorageUsed?: number;
  /**
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @example
   * polar.mysql.x8.medium.c
   */
  DBClusterClass?: string;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  DBNodes?: DescribeDbClusterAttributeZonalResponseBodyDBNodes[];
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @example
   * Stable
   */
  DBVersionStatus?: string;
  /**
   * @example
   * 74448896
   */
  dataLevel1BackupChainSize?: number;
  /**
   * @example
   * AsyncSync
   */
  dataSyncMode?: string;
  /**
   * @example
   * 0
   */
  deletionLock?: number;
  /**
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: string;
  /**
   * @example
   * false
   */
  hasCompleteStandbyRes?: boolean;
  /**
   * @example
   * StandbyClusterON
   */
  hotStandbyCluster?: string;
  /**
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @example
   * False
   */
  imperceptibleSwitch?: string;
  /**
   * @example
   * 6,291,456
   */
  inodeTotal?: number;
  /**
   * @example
   * 4,194,304
   */
  inodeUsed?: number;
  /**
   * @example
   * false
   */
  isLatestVersion?: boolean;
  /**
   * @example
   * false
   */
  isProxyLatestVersion?: boolean;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * 18:00Z-19:00Z
   */
  maintainTime?: string;
  /**
   * @example
   * ON
   */
  orca?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * 1000
   */
  provisionedIops?: string;
  /**
   * @example
   * 4
   */
  proxyCpuCores?: string;
  /**
   * @example
   * SteadyServerless
   */
  proxyServerlessType?: string;
  /**
   * @example
   * 2
   */
  proxyStandardCpuCores?: string;
  /**
   * @example
   * Running
   */
  proxyStatus?: string;
  /**
   * @example
   * Exclusive
   */
  proxyType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 074467EF-86B9-4C23-ACBF-E9B81A******
   */
  requestId?: string;
  /**
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2179639137
   */
  restoreDataPoint?: string;
  /**
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
   * @example
   * 0
   */
  SQLSize?: number;
  /**
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @example
   * pc-pz51ziv48317b2880
   */
  sourceDBCluster?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @example
   * OFF
   */
  standbyHAMode?: string;
  /**
   * @example
   * 10995116277760
   */
  storageMax?: number;
  /**
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @example
   * ESSDPL0
   */
  storageType?: string;
  /**
   * @example
   * 3012558848
   */
  storageUsed?: number;
  /**
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @example
   * ON
   */
  supportInstantSwitchWithImci?: string;
  tags?: DescribeDbClusterAttributeZonalResponseBodyTags[];
  /**
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  /**
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


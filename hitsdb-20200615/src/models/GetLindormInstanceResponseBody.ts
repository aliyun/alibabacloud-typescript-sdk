// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceResponseBodyEngineList extends $dara.Model {
  /**
   * @remarks
   * The number of nodes in the arbiter zone.
   * 
   * @example
   * 2
   */
  arbiterCoreCount?: string;
  /**
   * @remarks
   * The number of engine nodes.
   * 
   * @example
   * 2
   */
  coreCount?: string;
  /**
   * @remarks
   * The number of vCPUs for the engine node.
   * 
   * @example
   * 4
   */
  cpuCount?: string;
  /**
   * @remarks
   * The type of the engine. Valid values:
   * 
   * - **lindorm**: the wide table engine.
   * 
   * - **tsdb**: the time series engine.
   * 
   * - **solr**: the search engine.
   * 
   * - **store**: the file engine.
   * 
   * - **bds**: the LTS engine.
   * 
   * - **compute**: the compute engine.
   * 
   * @example
   * lindorm
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether the engine is of the latest version. Valid values:
   * 
   * - **true**: The engine is of the latest version.
   * 
   * - **false**: The engine is not of the latest version.
   * 
   * @example
   * false
   */
  isLastVersion?: boolean;
  /**
   * @remarks
   * The latest version of the engine.
   * 
   * @example
   * 2.2.19.2
   */
  latestVersion?: string;
  /**
   * @remarks
   * The memory size of the engine node.
   * 
   * @example
   * 8GB
   */
  memorySize?: string;
  /**
   * @remarks
   * The number of nodes in the primary zone.
   * 
   * @example
   * 2
   */
  primaryCoreCount?: string;
  /**
   * @remarks
   * The specification of the engine nodes.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  specification?: string;
  /**
   * @remarks
   * The number of nodes in the secondary zone.
   * 
   * @example
   * 2
   */
  standbyCoreCount?: string;
  /**
   * @remarks
   * The version of the engine.
   * 
   * @example
   * 2.2.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterCoreCount: 'ArbiterCoreCount',
      coreCount: 'CoreCount',
      cpuCount: 'CpuCount',
      engine: 'Engine',
      isLastVersion: 'IsLastVersion',
      latestVersion: 'LatestVersion',
      memorySize: 'MemorySize',
      primaryCoreCount: 'PrimaryCoreCount',
      specification: 'Specification',
      standbyCoreCount: 'StandbyCoreCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterCoreCount: 'string',
      coreCount: 'string',
      cpuCount: 'string',
      engine: 'string',
      isLastVersion: 'boolean',
      latestVersion: 'string',
      memorySize: 'string',
      primaryCoreCount: 'string',
      specification: 'string',
      standbyCoreCount: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the arbiter zone for the multi-zone instance. The vSwitch must be deployed in the zone that is specified by `ArbiterZoneId`.
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The arbiter zone ID of the multi-zone instance.
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - **1.0**: single-zone deployment.
   * 
   * - **2.0**: multi-zone deployment.
   * 
   * @example
   * 1.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The billable storage capacity of the archive storage. Unit: GB.
   * 
   * @example
   * 0GB
   */
  archiveStorage?: number;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * > This parameter is returned only for subscription instances.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the backup instance.
   * 
   * @example
   * ld-xxxx
   */
  backupInstance?: string;
  /**
   * @remarks
   * The capacity of the cold storage.
   * 
   * @example
   * 0GB
   */
  coldStorage?: number;
  /**
   * @remarks
   * The disk type of the core nodes in a multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: Standard.
   * 
   * - **cloud_ssd**: Performance.
   * 
   * - **cloud_essd**: ESSD.
   * 
   * - **cloud_essd_pl0**: ESSD PL0.
   * 
   * @example
   * cloud_efficiency
   */
  coreDiskCategory?: string;
  /**
   * @remarks
   * The number of core nodes in the multi-zone instance.
   * 
   * @example
   * 4
   */
  coreNum?: number;
  /**
   * @remarks
   * The storage capacity of a single core node in the multi-zone instance.
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The specification of the core nodes in the multi-zone instance.
   * 
   * @example
   * lindorm.g.xlarge
   */
  coreSpec?: string;
  /**
   * @remarks
   * The time at which the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1627290664000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The time at which the instance was created. The time is displayed in the **yyyy-MM-dd HH:mm:ss** format.
   * 
   * @example
   * 2021-07-26 17:10:26
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - **cloud_efficiency**: Standard.
   * 
   * - **cloud_ssd**: Performance.
   * 
   * - **cloud_essd**: Enhanced SSD (ESSD).
   * 
   * - **cloud_essd_pl0**: ESSD PL0.
   * 
   * - **capacity_cloud_storage**: Capacity.
   * 
   * - **local_ssd_pro**: local SSD.
   * 
   * - **local_hdd_pro**: local HDD.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk space threshold.
   * 
   * @example
   * 80%
   */
  diskThreshold?: string;
  /**
   * @remarks
   * The disk usage.
   * 
   * @example
   * 0.0%
   */
  diskUsage?: string;
  /**
   * @remarks
   * Indicates whether LBlob is enabled. Valid values:
   * 
   * true: Enabled. false: Disabled.
   * 
   * @example
   * true
   */
  enableBlob?: boolean;
  /**
   * @remarks
   * Indicates whether Change Data Capture (CDC) is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableCdc?: boolean;
  /**
   * @remarks
   * Indicates whether the compute engine is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether Key Management Service (KMS) is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableKms?: boolean;
  /**
   * @remarks
   * Specifies whether the wide table engine supports the Thrift and CQL protocols. If this feature is disabled, you can call the SwitchLProxyService operation to enable it.
   * 
   * true: Supported.
   * 
   * false: Not supported.
   * 
   * @example
   * False
   */
  enableLProxy?: boolean;
  /**
   * @remarks
   * Indicates whether the LTS engine is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableLTS?: boolean;
  /**
   * @remarks
   * Indicates whether LindormSQL V3.0, which is compatible with the MySQL protocol, is supported by the wide table engine.
   * This feature is supported by default on instances created after October 24, 2023. For existing instances, contact technical support to enable this feature.
   * 
   * - true: Supported.
   * 
   * - false: Not supported.
   * 
   * @example
   * True
   */
  enableLsqlVersionV3?: boolean;
  /**
   * @remarks
   * Indicates whether the ML node is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * False
   */
  enableMLCtrl?: boolean;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Indicates whether the History Server is enabled for the compute engine.
   * 
   * @example
   * true
   */
  enableShs?: boolean;
  /**
   * @remarks
   * Indicates whether Transparent Data Encryption (TDE) is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enableStoreTDE?: boolean;
  /**
   * @remarks
   * Indicates whether the stream engine is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableStream?: boolean;
  /**
   * @remarks
   * The information about the engines.
   */
  engineList?: GetLindormInstanceResponseBodyEngineList[];
  /**
   * @remarks
   * The types of the engines that are supported by the instance. The value of this parameter is the sum of the values of all supported engine types.
   * 
   * - 1: search engine
   * 
   * - 2: time series engine
   * 
   * - 4: wide table engine
   * 
   * - 8: file engine
   * 
   * > For example, if the value of this parameter is 15, it indicates that the instance supports the search, time series, wide table, and file engines because 1 + 2 + 4 + 8 = 15. If the value of this parameter is 6, it indicates that the instance supports the time series and wide table engines because 2 + 4 = 6.
   * 
   * @example
   * 15
   */
  engineType?: number;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the **yyyy-MM-dd HH:mm:ss** format.
   * 
   * > This parameter is returned only for subscription instances.
   * 
   * @example
   * 2021-08-27 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The expiration time of the instance. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1629993600000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test0726
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **ACTIVATION**: The instance is running.
   * 
   * - **COLD_EXPANDING**: The capacity of the cold storage is being expanded.
   * 
   * - **MINOR_VERSION_TRANSITIONING**: The minor version of the instance is being changed.
   * 
   * - **RESIZING**: The number of nodes is being changed.
   * 
   * - **SHRINKING**: The number of nodes is being changed.
   * 
   * - **CLASS_CHANGING**: The specification of the instance is being changed.
   * 
   * - **SSL_SWITCHING**: SSL is being enabled or disabled.
   * 
   * - **CDC_OPENING**: The CDC feature is being enabled.
   * 
   * - **TRANSFER**: Data is being migrated.
   * 
   * - **DATABASE_TRANSFER**: Data is being migrated.
   * 
   * - **GUARD_CREATING**: A disaster recovery instance is being created.
   * 
   * - **BACKUP_RECOVERING**: Data is being restored from a backup.
   * 
   * - **DATABASE_IMPORTING**: Data is being imported.
   * 
   * - **NET_MODIFYING**: The network type is being changed.
   * 
   * - **NET_SWITCHING**: The network is being switched.
   * 
   * - **NET_CREATING**: A network connection is being created.
   * 
   * - **NET_DELETING**: A network connection is being deleted.
   * 
   * - **DELETING**: The instance is being deleted.
   * 
   * - **RESTARTING**: The instance is being restarted.
   * 
   * - **LOCKED**: The instance is locked.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 480
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The disk type of the log nodes in the multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: Standard.
   * 
   * - **cloud_ssd**: Performance.
   * 
   * @example
   * cloud_ssd
   */
  logDiskCategory?: string;
  /**
   * @remarks
   * The number of log nodes in the multi-zone instance.
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The storage capacity of a single log node in the multi-zone instance.
   * 
   * @example
   * 400GB
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The specification of the log nodes in the multi-zone instance.
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 20:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The combination of zones. For more information about the supported zone combinations, see the instance buy page.
   * 
   * - **ap-southeast-5abc-aliyun**: Indonesia (Jakarta) Zone A, B, and C.
   * 
   * - **cn-hangzhou-ehi-aliyun**: China (Hangzhou) Zone E, H, and I.
   * 
   * - **cn-beijing-acd-aliyun**: China (Beijing) Zone A, C, and D.
   * 
   * - **ap-southeast-1-abc-aliyun**: Singapore Zone A, B, and C.
   * 
   * - **cn-zhangjiakou-abc-aliyun**: China (Zhangjiakou) Zone A, B, and C.
   * 
   * - **cn-shanghai-efg-aliyun**: China (Shanghai) Zone E, F, and G.
   * 
   * - **cn-shanghai-abd-aliyun**: China (Shanghai) Zone A, B, and D.
   * 
   * - **cn-hangzhou-bef-aliyun**: China (Hangzhou) Zone B, E, and F.
   * 
   * - **cn-hangzhou-bce-aliyun**: China (Hangzhou) Zone B, C, and E.
   * 
   * - **cn-beijing-fgh-aliyun**: China (Beijing) Zone F, G, and H.
   * 
   * - **cn-shenzhen-abc-aliyun**: China (Shenzhen) Zone A, B, and C.
   * 
   * @example
   * cn-shanghai-efg-aliyun
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: subscription
   * 
   * - **POSTPAY**: pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the primary zone for the multi-zone instance. The vSwitch must be deployed in the zone that is specified by `PrimaryZoneId`.
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The primary zone ID of the multi-zone instance.
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The ID of the region.
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
   * 633F1BE4-C8DA-5744-8FDF-A3075C3FE37F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2wvd6oia****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * - **lindorm**: a single-zone instance.
   * 
   * - **lindorm_multizone**: a multi-zone instance.
   * 
   * - **serverless_lindorm**: a serverless instance.
   * 
   * - **lindorm_standalone**: a single-node instance.
   * 
   * - **lts**: a Lindorm Tunnel Service (LTS) instance.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the secondary zone for the multi-zone instance. The vSwitch must be deployed in the zone that is specified by `StandbyZoneId`.
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The secondary zone ID of the multi-zone instance.
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the instance belongs.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1vbjzmod9q3l9eo****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      archiveStorage: 'ArchiveStorage',
      autoRenew: 'AutoRenew',
      backupInstance: 'BackupInstance',
      coldStorage: 'ColdStorage',
      coreDiskCategory: 'CoreDiskCategory',
      coreNum: 'CoreNum',
      coreSingleStorage: 'CoreSingleStorage',
      coreSpec: 'CoreSpec',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      diskCategory: 'DiskCategory',
      diskThreshold: 'DiskThreshold',
      diskUsage: 'DiskUsage',
      enableBlob: 'EnableBlob',
      enableCdc: 'EnableCdc',
      enableCompute: 'EnableCompute',
      enableKms: 'EnableKms',
      enableLProxy: 'EnableLProxy',
      enableLTS: 'EnableLTS',
      enableLsqlVersionV3: 'EnableLsqlVersionV3',
      enableMLCtrl: 'EnableMLCtrl',
      enableSSL: 'EnableSSL',
      enableShs: 'EnableShs',
      enableStoreTDE: 'EnableStoreTDE',
      enableStream: 'EnableStream',
      engineList: 'EngineList',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expiredMilliseconds: 'ExpiredMilliseconds',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      logDiskCategory: 'LogDiskCategory',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      multiZoneCombination: 'MultiZoneCombination',
      networkType: 'NetworkType',
      payType: 'PayType',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      archiveStorage: 'number',
      autoRenew: 'boolean',
      backupInstance: 'string',
      coldStorage: 'number',
      coreDiskCategory: 'string',
      coreNum: 'number',
      coreSingleStorage: 'number',
      coreSpec: 'string',
      createMilliseconds: 'number',
      createTime: 'string',
      deletionProtection: 'string',
      diskCategory: 'string',
      diskThreshold: 'string',
      diskUsage: 'string',
      enableBlob: 'boolean',
      enableCdc: 'boolean',
      enableCompute: 'boolean',
      enableKms: 'boolean',
      enableLProxy: 'boolean',
      enableLTS: 'boolean',
      enableLsqlVersionV3: 'boolean',
      enableMLCtrl: 'boolean',
      enableSSL: 'boolean',
      enableShs: 'boolean',
      enableStoreTDE: 'boolean',
      enableStream: 'boolean',
      engineList: { 'type': 'array', 'itemType': GetLindormInstanceResponseBodyEngineList },
      engineType: 'number',
      expireTime: 'string',
      expiredMilliseconds: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      logDiskCategory: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      multiZoneCombination: 'string',
      networkType: 'string',
      payType: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


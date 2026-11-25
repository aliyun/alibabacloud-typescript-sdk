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
   * The number of CPUs for the engine node.
   * 
   * @example
   * 4
   */
  cpuCount?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - **lindorm**: LindormTable.
   * - **tsdb**: LindormTSDB.
   * - **solr**: search engine.
   * - **store**: file engine.
   * - **bds**: Lindorm Tunnel Service engine.
   * - **compute**: compute engine.
   * 
   * @example
   * lindorm
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether the engine is of the latest version. Valid values:
   * - **true**: latest version.
   * - **false**: not the latest version.
   * 
   * @example
   * false
   */
  isLastVersion?: boolean;
  /**
   * @remarks
   * The latest version number of the engine.
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
   * The engine node specifications.
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
   * The version number of the engine.
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

export class GetLindormInstanceResponseBodySingleZoneRiskAlert extends $dara.Model {
  /**
   * @remarks
   * The confirmation date for risk handling. The date is displayed in the yyyy-MM-dd format.
   * 
   * @example
   * 2026-09-24
   */
  confirmDate?: string;
  /**
   * @remarks
   * The risk handling type for the single-zone deployment.
   * 
   * @example
   * NO_SET
   */
  dispositionType?: string;
  /**
   * @remarks
   * Indicates whether a risk alert for the single-zone deployment is required.
   * 
   * @example
   * true
   */
  needAlert?: boolean;
  /**
   * @remarks
   * The planned completion date for risk handling. The date is displayed in the yyyy-MM-dd format.
   * 
   * @example
   * 2026-09-30
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

export class GetLindormInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The 16-character AliUid of the Alibaba Cloud account.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the arbiter zone for a multi-zone instance. The vSwitch must belong to the zone specified by ArbiterZoneId.
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the arbiter zone for a multi-zone instance.
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - **1.0**: single-zone.
   * - **2.0**: multi-zone.
   * 
   * @example
   * 1.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The billable storage capacity of the archive storage type. Unit: GB.
   * 
   * @example
   * 0
   */
  archiveStorage?: number;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * > This parameter is returned only when the billing method of the instance is subscription.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The backup instance.
   * 
   * @example
   * ld-xxxx
   */
  backupInstance?: string;
  /**
   * @remarks
   * Storage capacity of storage capacity cloud storage.
   * 
   * @example
   * 0
   */
  coldStorage?: number;
  /**
   * @remarks
   * The disk type of the core node for a multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: standard cloud storage.
   * - **cloud_ssd**: performance cloud storage.
   * - **cloud_essd**: enhanced performance cloud storage.
   * - **cloud_essd_pl0**: performance cloud storage PL0.
   * 
   * @example
   * cloud_efficiency
   */
  coreDiskCategory?: string;
  /**
   * @remarks
   * The number of core nodes for a multi-zone instance.
   * 
   * @example
   * 4
   */
  coreNum?: number;
  /**
   * @remarks
   * The disk capacity of a single core node for a multi-zone instance.
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * The core node specifications for a multi-zone instance.
   * 
   * @example
   * lindorm.g.xlarge
   */
  coreSpec?: string;
  /**
   * @remarks
   * The creation time of the instance, represented as the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1627290664000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in the **yyyy-MM-dd HH:mm:ss** format.
   * 
   * @example
   * 2021-07-26 17:10:26
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * - **cloud_efficiency**: standard cloud storage.
   * - **cloud_ssd**: performance cloud storage.
   * - **cloud_essd**: enhanced performance cloud storage.
   * - **cloud_essd_pl0**: performance cloud storage PL0.
   * - **capacity_cloud_storage**: capacity cloud storage.
   * - **local_ssd_pro**: local SSD.
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
   * The disk space usage.
   * 
   * @example
   * 0.0%
   */
  diskUsage?: string;
  /**
   * @remarks
   * Indicates whether LBlob is enabled for the instance. Valid values:
   * 
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * true
   */
  enableBlob?: boolean;
  /**
   * @remarks
   * Indicates whether the data subscription feature is enabled for the instance. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  enableCdc?: boolean;
  /**
   * @remarks
   * Indicates whether the compute engine is enabled for the instance. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether Key Management Service (KMS) is enabled. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  enableKms?: boolean;
  /**
   * @remarks
   * Indicates whether LindormTable supports the Thrift and CQL protocols. If not supported, you can call the SwitchLProxyService operation to enable or disable the support. Valid values:
   * 
   * - True: supported.
   * 
   * - False: not supported.
   * 
   * @example
   * False
   */
  enableLProxy?: boolean;
  /**
   * @remarks
   * Indicates whether Lindorm Tunnel Service is enabled for the instance. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableLTS?: boolean;
  /**
   * @remarks
   * Indicates whether LindormTable supports LindormSQL-V3, which is compatible with the MySQL protocol. Instances purchased after October 24, 2023 support this feature by default. For existing instances, contact technical support for evaluation before enabling this feature. Valid values:
   * 
   * - True: supported.
   * 
   * - False: not supported.
   * 
   * @example
   * True
   */
  enableLsqlVersionV3?: boolean;
  /**
   * @remarks
   * Indicates whether the AI control node is enabled. Valid values:
   * 
   * - True: enabled.
   * 
   * - False: disabled.
   * 
   * @example
   * False
   */
  enableMLCtrl?: boolean;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Indicates whether History Server for the compute engine is enabled.
   * 
   * @example
   * true
   */
  enableShs?: boolean;
  /**
   * @remarks
   * Indicates whether storage encryption is enabled. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * @example
   * false
   */
  enableStoreTDE?: boolean;
  /**
   * @remarks
   * Indicates whether the streaming engine is enabled for the instance. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableStream?: boolean;
  /**
   * @remarks
   * The list of engine information.
   */
  engineList?: GetLindormInstanceResponseBodyEngineList[];
  /**
   * @remarks
   * The supported engine types. The return value is the sum of the values of the following engine types:
   * 
   * - 1: search engine
   * - 2: LindormTSDB
   * - 4: LindormTable
   * - 8: file engine
   * 
   * > For example, if the value of EngineType is 15 (15 = 8 + 4 + 2 + 1), the instance supports the search engine, LindormTSDB, LindormTable, and file engine. If the value of EngineType is 6 (6 = 4 + 2), the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  engineType?: number;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in the **yyyy-MM-dd HH:mm:ss** format.
   * 
   * > This parameter is returned only when the billing method is subscription.
   * 
   * @example
   * 2021-08-27 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires, represented as the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The instance ID.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * - **ACTIVATION**: The instance is running.
   * - **COLD_EXPANDING**: Capacity cloud storage expansion in progress.
   * - **MINOR_VERSION_TRANSING**: The minor version is being upgraded.
   * - **RESIZING**: The nodes are being scaled up.
   * - **SHRINKING**: The nodes are being scaled down.
   * - **CLASS_CHANGING**: Instance specification upgrade or downgrade in progress.
   * - **SSL_SWITCHING**: The SSL certificate is being changed.
   * - **CDC_OPENING**: The data subscription feature is being enabled.
   * - **TRANSFER**: Data migration in progress.
   * - **DATABASE_TRANSFER**: Data is being migrated to the database.
   * - **GUARD_CREATING**: A disaster recovery instance is being created.
   * - **BACKUP_RECOVERING**: The backup is being restored.
   * - **DATABASE_IMPORTING**: Data import in progress.
   * - **NET_MODIFYING**: The network is being modified.
   * - **NET_SWITCHING**: The network is being switched between the internal network and the Internet.
   * - **NET_CREATING**: A network connection is being created.
   * - **NET_DELETING**: A network connection is being deleted.
   * - **DELETING**: The instance is being deleted.
   * - **RESTARTING**: The instance is being restarted.
   * - **LOCKED**: The instance has expired and is locked.
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
   * The disk type of the log node for a multi-zone instance. Valid values:
   * 
   * - **cloud_efficiency**: standard cloud storage.
   * - **cloud_ssd**: performance cloud storage.
   * 
   * @example
   * cloud_ssd
   */
  logDiskCategory?: string;
  /**
   * @remarks
   * The number of log nodes for a multi-zone instance.
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The disk capacity of a single log node for a multi-zone instance.
   * 
   * @example
   * 400GB
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * The log node specifications for a multi-zone instance.
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time is displayed in the HH:mmZ format. UTC time is used.
   * 
   * @example
   * 20:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is displayed in the HH:mmZ format. UTC time is used.
   * 
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The multi-zone combination. You can go to the buy page to view the supported zone combinations. Valid values:
   * 
   * - **ap-southeast-5abc-aliyun**: Indonesia (Jakarta) Zones A, B, and C.
   * - **cn-hangzhou-ehi-aliyun**: China (Hangzhou) Zones E, H, and I.
   * - **cn-beijing-acd-aliyun**: China (Beijing) Zones A, C, and D.
   * - **ap-southeast-1-abc-aliyun**: Singapore Zones A, B, and C.
   * - **cn-zhangjiakou-abc-aliyun**: China (Zhangjiakou) Zones A, B, and C.
   * - **cn-shanghai-efg-aliyun**: China (Shanghai) Zones E, F, and G.
   * - **cn-shanghai-abd-aliyun**: China (Shanghai) Zones A, B, and D.
   * - **cn-hangzhou-bef-aliyun**: China (Hangzhou) Zones B, E, and F.
   * - **cn-hangzhou-bce-aliyun**: China (Hangzhou) Zones B, C, and E.
   * - **cn-beijing-fgh-aliyun**: China (Beijing) Zones F, G, and H.
   * - **cn-shenzhen-abc-aliyun**: China (Shenzhen) Zones A, B, and C.
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
   * - **PREPAY**: subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the primary zone for a multi-zone instance. The vSwitch must belong to the zone specified by PrimaryZoneId.
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the primary zone for a multi-zone instance.
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
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
   * The instance type. Valid values:
   * 
   * - **lindorm**: Lindorm single-zone instance.
   * - **lindorm_multizone**: Lindorm multi-zone instance.
   * - **serverless_lindorm**: Lindorm Serverless instance.
   * - **lindorm_standalone**: Lindorm single-node instance.
   * - **lts**: Lindorm Tunnel Service.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The risk alert information for the single-zone deployment.
   */
  singleZoneRiskAlert?: GetLindormInstanceResponseBodySingleZoneRiskAlert;
  /**
   * @remarks
   * The ID of the vSwitch in the secondary zone for a multi-zone instance. The vSwitch must belong to the zone specified by StandbyZoneId.
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone for a multi-zone instance.
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
   * The zone ID.
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
      singleZoneRiskAlert: 'SingleZoneRiskAlert',
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
      singleZoneRiskAlert: GetLindormInstanceResponseBodySingleZoneRiskAlert,
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
    if(this.singleZoneRiskAlert && typeof (this.singleZoneRiskAlert as any).validate === 'function') {
      (this.singleZoneRiskAlert as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


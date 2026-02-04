// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceResponseBodyEngineList extends $dara.Model {
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
   * The number of CPU cores on the engine node.
   * 
   * @example
   * 4
   */
  cpuCount?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * *   **lindorm**: LindormTable.
   * *   **tsdb**: LindormTSDB.
   * *   **solr**: LindormSearch.
   * *   **store**: LindormDFS.
   * *   **bds**: Lindorm Tunnel Service (LTS).
   * *   **compute**: Lindorm Distributed Processing System (LDPS).
   * 
   * @example
   * lindorm
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether the version of the engine is the latest. Valid values:
   * 
   * *   **true**: The version of the engine is the latest.
   * *   **false**: The version of the engine is not the latest.
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
   * The memory size of the engine nodes.
   * 
   * @example
   * 8GB
   */
  memorySize?: string;
  primaryCoreCount?: string;
  /**
   * @remarks
   * The specification of the engine node.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  specification?: string;
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
   * 16-digit AliUid of the Alibaba Cloud primary account (main account).
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * Multi-AZ instance, coordinating Availability Zone virtual switch ID, which must be located in the Availability Zone corresponding to ArbiterZoneId.
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * Multi-zone instance, coordinating Availability Zone ID.
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **1.0**: The instance is deployed in a single zone.
   * *   **2.0**: The instance is deployed across multiple zones.
   * 
   * @example
   * 1.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The Archive storage size of the instance.
   * 
   * @example
   * 0GB
   */
  archiveStorage?: number;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled, with the following returns:
   * - **true**: Enabled. 
   * - **false**: Disabled.
   * > This parameter is returned when the instance\\"s payment type is prepaid.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  backupInstance?: string;
  /**
   * @remarks
   * The Capacity storage size of the instance.
   * 
   * @example
   * 0GB
   */
  coldStorage?: number;
  /**
   * @remarks
   * The disk type of the core nodes. This parameter is returned only for multi-zone instances. Valid values:
   * 
   * *   **cloud_efficiency**: This instance uses the Standard type of storage.
   * *   **cloud_ssd**: This instance uses the Performance type of storage.
   * *   **cloud_essd**: This instance uses ESSDs for storage.
   * *   **cloud_essd_pl0**: This instance uses PL0 ESSDs for storage.
   * 
   * @example
   * cloud_efficiency
   */
  coreDiskCategory?: string;
  /**
   * @remarks
   * Multi-zone instance, number of core nodes.
   * 
   * @example
   * 4
   */
  coreNum?: number;
  /**
   * @remarks
   * Multi-zone instance, core single-node disk capacity.
   * 
   * @example
   * 400
   */
  coreSingleStorage?: number;
  /**
   * @remarks
   * Multi-zone instance, core node specification.
   * 
   * @example
   * lindorm.g.xlarge
   */
  coreSpec?: string;
  /**
   * @remarks
   * The timestamp in milliseconds between the instance creation time and 1970-01-01 00:00:00.
   * 
   * @example
   * 1627290664000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The storage capacity of the disk of a single log node. This parameter is returned only for multi-zone instances.
   * 
   * @example
   * 2021-07-26 17:10:26
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled, returning:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_efficiency**: This instance uses the Standard type of storage.
   * *   **cloud_ssd**: This instance uses the Performance type of storage.
   * *   **cloud_essd**: This instance uses ESSDs for storage.
   * *   **cloud_essd_pl0**: This instance uses PL0 ESSDs for storage.
   * *   **capacity_cloud_storage**: This instance uses the Capacity type of storage.
   * *   **local_ssd_pro**: This instance uses local SSDs for storage.
   * *   **local_hdd_pro**: This instance uses local HDDs for storage.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The threshold for disk space.
   * 
   * @example
   * 80%
   */
  diskThreshold?: string;
  /**
   * @remarks
   * Disk space usage rate.
   * 
   * @example
   * 0.0%
   */
  diskUsage?: string;
  /**
   * @remarks
   * Indicates whether LBlob is enabled for the instance. Valid values:
   * 
   * true: LBlob is enabled for the instance. false: LBlob is not enabled for the instance.
   * 
   * @example
   * true
   */
  enableBlob?: boolean;
  /**
   * @remarks
   * Indicates whether the data subscription feature for the instance is enabled. Returns:
   * - **true**: Enabled. 
   * - **false**: Not enabled.
   * 
   * @example
   * false
   */
  enableCdc?: boolean;
  /**
   * @remarks
   * Indicates whether the instance\\"s compute engine is enabled, returning:
   * - **true**: Enabled. 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether the Key Management Service (KMS) is enabled, returning:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableKms?: boolean;
  /**
   * @remarks
   * Indicates whether LindormTable supports the Thrift and CQL protocols. If these protocols are not supported. You can call the SwitchLProxyService operation to enable or disable the support on these protocols for LindormTable.
   * 
   * True: LindormTable supports the Thrift and CQL protocols.
   * 
   * False: LindormTable does not support the Thrift and CQL protocols.
   * 
   * @example
   * False
   */
  enableLProxy?: boolean;
  /**
   * @remarks
   * Indicates whether the LTS engine is activated for the instance. Valid values:
   * 
   * *   **true**: The LTS engine is activated for the instance.
   * *   **false**: The LTS engine is not activated for the instance.
   * 
   * @example
   * true
   */
  enableLTS?: boolean;
  /**
   * @remarks
   * Indicates whether LindormTable of the instance supports LindormSQL V3 that is compatible with MySQL. By default, LindormTable of instances that are purchased after October 24, 2023 supports LindormSQL V3. If your instance is purchased before this date and want to enable LindormSQL V3, contact the technical support.
   * 
   * *   True: LindormTable supports LindormSQL V3.
   * *   False: LindormTable does not support LindormSQL V3.
   * 
   * @example
   * True
   */
  enableLsqlVersionV3?: boolean;
  /**
   * @remarks
   * Indicates whether AI control nodes are enabled for the instance.
   * 
   * *   True: AI control nodes are enabled for the instance.
   * *   False: AI control nodes are not enabled for the instance.
   * 
   * @example
   * False
   */
  enableMLCtrl?: boolean;
  /**
   * @remarks
   * Indicates whether SSL link encryption is enabled, returning:
   * - **true**: Enabled. 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Whether to enable the Compute Engine History Server.
   * 
   * @example
   * true
   */
  enableShs?: boolean;
  /**
   * @remarks
   * Indicates whether the Transparent Data Encryption (TDE) is enabled, returning:
   * - **true**: Enabled. 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableStoreTDE?: boolean;
  /**
   * @remarks
   * Indicates whether the instance has the stream engine enabled. Return values:
   * - **true**: Stream engine is enabled. 
   * - **false**: Stream engine is not enabled.
   * 
   * @example
   * true
   */
  enableStream?: boolean;
  /**
   * @remarks
   * The list of engines supported by the instance.
   */
  engineList?: GetLindormInstanceResponseBodyEngineList[];
  /**
   * @remarks
   * Supported engine types, the return value is obtained by performing addition operations on the values of the following engine types.
   * - 1: Search Engine 
   * - 2: Time Series Engine
   * - 4: Wide Table Engine
   * - 8: File Engine
   * > For example: If EngineType is 15, where 15 = 8 + 4 + 2 + 1, it indicates that the instance supports Search Engine, Time Series Engine, Wide Table Engine, and File Engine. If EngineType is 6, where 6 = 4 + 2, it signifies that the instance supports Time Series Engine and Wide Table Engine.
   * 
   * @example
   * 15
   */
  engineType?: number;
  /**
   * @remarks
   * Expiration time of the instance, format: **yyyy-MM-dd HH:mm:ss**.
   * > This parameter is only returned when the payment type is pre-paid.
   * 
   * @example
   * 2021-08-27 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The millisecond value between the instance expiration time and 1970-01-01 00:00:00.
   * 
   * @example
   * 1629993600000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test0726
   */
  instanceAlias?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **COLD_EXPANDING**: The Capacity storage of the instance is being scaled up.
   * *   **MINOR_VERSION_TRANSING**: The minor version of the instance is being updated.
   * *   **RESIZING**: The nodes in the instance are being scaled up.
   * *   **SHRINKING**: The nodes in the instance are being scaled down.
   * *   **CLASS_CHANGING**: The specification of the instance is being changed.
   * *   **SSL_SWITCHING: SSL**: The SSL configurations of the instance are being changed.
   * *   **CDC_OPENING**: Data subscription is being enabled for the instance.
   * *   **TRANSFER**: The data of the instance is being transferred.
   * *   **DATABASE_TRANSFER**: The data of the instance is being transferred to databases.
   * *   **GUARD_CREATING**: A disaster recovery instance is being created.
   * *   **BACKUP_RECOVERING**: The data of the instance is being restored from a backup.
   * *   **DATABASE_IMPORTING**: Data is being imported to the instance.
   * *   **NET_MODIFYING**: The network configurations of the instance are being changed.
   * *   **NET_SWITCHING**: The network of the instance is being switched between a virtual private cloud (VPC) and the Internet.
   * *   **NET_CREATING**: The connection to the instance is being created.
   * *   **NET_DELETING**: The connection to the instance is being deleted.
   * *   **DELETING**: The instance is being deleted.
   * *   **RESTARTING**: The instance is restarting.
   * *   **LOCKED**: The instance is locked because it expires.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Instance\\"s storage capacity.
   * 
   * @example
   * 480
   */
  instanceStorage?: string;
  /**
   * @remarks
   * Multi-zone instance, log node disk type, returns:
   * - **cloud_efficiency**: Standard cloud storage. 
   * - **cloud_ssd**: Performance cloud storage.
   * 
   * @example
   * cloud_ssd
   */
  logDiskCategory?: string;
  /**
   * @remarks
   * Multi-zone instance, number of log nodes.
   * 
   * @example
   * 4
   */
  logNum?: number;
  /**
   * @remarks
   * The storage capacity of the disk of a single log node. This parameter is returned only for multi-zone instances.
   * 
   * @example
   * 400GB
   */
  logSingleStorage?: number;
  /**
   * @remarks
   * Multi-zone instance, log node specification.
   * 
   * @example
   * lindorm.sn1.large
   */
  logSpec?: string;
  /**
   * @remarks
   * Maintainable end time.
   * 
   * @example
   * 20:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * Maintainable start time.
   * 
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * Multi-zone combinations. For support details on zone combinations, please refer to the product page.
   * - **ap-southeast-5abc-aliyun**: Indonesia (Jakarta) A+B+C. 
   * - **cn-hangzhou-ehi-aliyun**: East China 1 (Hangzhou) E+H+I.
   * - **cn-beijing-acd-aliyun**: North China 2 (Beijing) A+C+D.
   * - **ap-southeast-1-abc-aliyun**: Singapore A+B+C.
   * - **cn-zhangjiakou-abc-aliyun**: North China 3 (Zhangjiakou) A+B+C.
   * - **cn-shanghai-efg-aliyun**: East China 2 (Shanghai) E+F+G.
   * - **cn-shanghai-abd-aliyun**: East China 2 (Shanghai) A+B+D.
   * - **cn-hangzhou-bef-aliyun**: East China 1 (Hangzhou) B+E+F.
   * - **cn-hangzhou-bce-aliyun**: East China 1 (Hangzhou) B+C+E.
   * - **cn-beijing-fgh-aliyun**: North China 2 (Beijing) F+G+H.
   * - **cn-shenzhen-abc-aliyun**: South China 1 (Shenzhen) A+B+C.
   * 
   * @example
   * cn-shanghai-efg-aliyun
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * Instance\\"s network type.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * PREPAY: subscription.
   * POSTPAY: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * Multi-zone instance, the virtual switch ID of the primary availability zone, which must be in the availability zone corresponding to PrimaryZoneId.
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * Multi-zone instance, availability zone ID of the primary zone.
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
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
   * 633F1BE4-C8DA-5744-8FDF-A3075C3FE37F
   */
  requestId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aek2wvd6oia****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance type, valid values:
   * - **lindorm**: represents a Lindorm single-zone instance.
   * - **lindorm_multizone**: represents a Lindorm multi-zone instance.
   * - **serverless_lindorm**: represents a Lindorm Serverless instance.
   * - **lindorm_standalone**: represents a Lindorm standalone instance.
   * - **lts**: represents the Lindorm Data Channel Service type.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * Multi-zone instance, the virtual switch ID of the backup availability zone, which must be in the availability zone corresponding to StandbyZoneId.
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * Multi-zone instance, backup availability zone\\"s availability zone ID.
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The type of the log nodes. This parameter is returned only for multi-zone instances.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The number of the log nodes. This parameter is returned only for multi-zone instances.
   * 
   * @example
   * vsw-bp1vbjzmod9q3l9eo****
   */
  vswitchId?: string;
  /**
   * @remarks
   * Availability Zone ID.
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


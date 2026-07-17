// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceDetailsResponseBodyEngineListConnectAddressList extends $dara.Model {
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * ld-mxj9asg***-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060
   */
  address?: string;
  /**
   * @remarks
   * The port number of the database endpoint.
   * 
   * @example
   * 33060
   */
  port?: string;
  /**
   * @remarks
   * The endpoint type.
   * 
   * - INTRANET: VPC private endpoint.
   * 
   * - INTERNET: Public endpoint.
   * 
   * @example
   * INTRANET
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      port: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceDetailsResponseBodyEngineListNodeGroup extends $dara.Model {
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * caculated
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs for the node.
   * 
   * @example
   * 32
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * Indicates whether a local disk is attached to the node.
   * 
   * @example
   * false
   */
  enableAttachLocalDisk?: boolean;
  /**
   * @remarks
   * The capacity of the local disk in GB.
   * 
   * @example
   * 100
   */
  localDiskCapacity?: number;
  /**
   * @remarks
   * The type of the local cloud disk.
   * 
   * - cloud_essd: performance cloud disk
   * 
   * - cloud_efficiency: standard cloud disk
   * 
   * @example
   * cloud_essd
   */
  localDiskCategory?: string;
  /**
   * @remarks
   * The memory size of the node in GiB.
   * 
   * @example
   * 64
   */
  memorySizeGiB?: number;
  /**
   * @remarks
   * The node specifications.
   * 
   * If you select Performance cloud storage or Standard cloud storage, this parameter can be set to one of the following values:
   * 
   * - lindorm.c.2xlarge: 8 vCPUs, 16 GB memory.
   * 
   * - lindorm.g.2xlarge: 8 vCPUs, 32 GB memory.
   * 
   * - lindorm.c.4xlarge: 16 vCPUs, 32 GB memory.
   * 
   * - lindorm.g.4xlarge: 16 vCPUs, 64 GB memory.
   * 
   * - lindorm.c.8xlarge: 32 vCPUs, 64 GB memory.
   * 
   * - lindorm.g.8xlarge: 32 vCPUs, 128 GB memory.
   * 
   * - lindorm.r.2xlarge: 8 vCPUs, 64 GB memory.
   * 
   * - lindorm.r.4xlarge: 16 vCPUs, 128 GB memory.
   * 
   * - lindorm.r.8xlarge: 32 vCPUs, 256 GB memory.
   * 
   * If you select Local SSD, this parameter can be set to one of the following values:
   * 
   * - lindorm.i4.xlarge: 4 vCPUs, 32 GB memory (I4).
   * 
   * - lindorm.i4.2xlarge: 8 vCPUs, 64 GB memory (I4).
   * 
   * - lindorm.i4.4xlarge: 16 vCPUs, 128 GB memory (I4).
   * 
   * - lindorm.i4.8xlarge: 32 vCPUs, 256 GB memory (I4).
   * 
   * - lindorm.i3.xlarge: 4 vCPUs, 32 GB memory (I3).
   * 
   * - lindorm.i3.2xlarge: 8 vCPUs, 64 GB memory (I3).
   * 
   * - lindorm.i3.4xlarge: 16 vCPUs, 128 GB memory (I3).
   * 
   * - lindorm.i3.8xlarge: 32 vCPUs, 256 GB memory (I3).
   * 
   * - lindorm.i2.xlarge: 4 vCPUs, 32 GB memory (I2).
   * 
   * - lindorm.i2.2xlarge: 8 vCPUs, 64 GB memory (I2).
   * 
   * - lindorm.i2.4xlarge: 16 vCPUs, 128 GB memory (I2).
   * 
   * - lindorm.i2.8xlarge: 32 vCPUs, 256 GB memory (I2).
   * 
   * If you select Big Data, this parameter can be set to one of the following values:
   * 
   * - lindorm.sd3c.3xlarge: 14 vCPUs, 56 GB memory (D3C PRO).
   * 
   * - lindorm.sd3c.7xlarge: 28 vCPUs, 112 GB memory (D3C PRO).
   * 
   * - lindorm.sd3c.14xlarge: 56 vCPUs, 224 GB memory (D3C PRO).
   * 
   * - lindorm.d2c.6xlarge: 24 vCPUs, 88 GB memory (D2C).
   * 
   * - lindorm.d2c.12xlarge: 48 vCPUs, 176 GB memory (D2C).
   * 
   * - lindorm.d2c.24xlarge: 96 vCPUs, 352 GB memory (D2C).
   * 
   * - lindorm.d2s.5xlarge: 20 vCPUs, 88 GB memory (D2S).
   * 
   * - lindorm.d2s.10xlarge: 40 vCPUs, 176 GB memory (D2S).
   * 
   * - lindorm.d1.2xlarge: 8 vCPUs, 32 GB memory (D1NE).
   * 
   * - lindorm.d1.4xlarge: 16 vCPUs, 64 GB memory (D1NE).
   * 
   * - lindorm.d1.6xlarge: 24 vCPUs, 96 GB memory (D1NE).
   * 
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @remarks
   * The name of the node group. **Required**. This must be the same as the name used during creation.
   * 
   * @example
   * job_debug
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The unique ID that corresponds to the delivery group ID.
   * 
   * @example
   * ecs.c6.large
   */
  specId?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cpuCoreCount: 'CpuCoreCount',
      enableAttachLocalDisk: 'EnableAttachLocalDisk',
      localDiskCapacity: 'LocalDiskCapacity',
      localDiskCategory: 'LocalDiskCategory',
      memorySizeGiB: 'MemorySizeGiB',
      nodeSpec: 'NodeSpec',
      quantity: 'Quantity',
      resourceGroupName: 'ResourceGroupName',
      specId: 'SpecId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cpuCoreCount: 'number',
      enableAttachLocalDisk: 'boolean',
      localDiskCapacity: 'number',
      localDiskCategory: 'string',
      memorySizeGiB: 'number',
      nodeSpec: 'string',
      quantity: 'number',
      resourceGroupName: 'string',
      specId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceDetailsResponseBodyEngineList extends $dara.Model {
  /**
   * @remarks
   * A list of engine endpoints.
   */
  connectAddressList?: GetLindormV2InstanceDetailsResponseBodyEngineListConnectAddressList[];
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - **TABLE**: LindormTable.
   * 
   * - **TSDB**: LindormTSDB.
   * 
   * - **LSEARCH**: Search engine.
   * 
   * - **LTS**: LTS engine.
   * 
   * - **LVECTOR**: Vector engine.
   * 
   * - **LCOLUMN**: Column store.
   * 
   * @example
   * TABLE
   */
  engine?: string;
  /**
   * @remarks
   * Indicates whether the engine is the latest version. Valid values:
   * 
   * - **true**: The engine is the latest version.
   * 
   * - **false**: The engine is not the latest version.
   * 
   * @example
   * false
   */
  isLastVersion?: boolean;
  /**
   * @remarks
   * The latest version number for the engine type.
   * 
   * @example
   * 2.2.19.2
   */
  latestVersion?: string;
  /**
   * @remarks
   * A list of engine node groups.
   */
  nodeGroup?: GetLindormV2InstanceDetailsResponseBodyEngineListNodeGroup[];
  /**
   * @remarks
   * The version number of the engine type.
   * 
   * @example
   * 2.2.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      connectAddressList: 'ConnectAddressList',
      engine: 'Engine',
      isLastVersion: 'IsLastVersion',
      latestVersion: 'LatestVersion',
      nodeGroup: 'NodeGroup',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectAddressList: { 'type': 'array', 'itemType': GetLindormV2InstanceDetailsResponseBodyEngineListConnectAddressList },
      engine: 'string',
      isLastVersion: 'boolean',
      latestVersion: 'string',
      nodeGroup: { 'type': 'array', 'itemType': GetLindormV2InstanceDetailsResponseBodyEngineListNodeGroup },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectAddressList)) {
      $dara.Model.validateArray(this.connectAddressList);
    }
    if(Array.isArray(this.nodeGroup)) {
      $dara.Model.validateArray(this.nodeGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceDetailsResponseBodyStorageUsage extends $dara.Model {
  /**
   * @remarks
   * The instance storage usage.
   */
  capacityByDiskCategory?: { [key: string]: any }[];
  /**
   * @remarks
   * The storage usage of each engine.
   * 
   * @example
   * 16
   */
  engineUsage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      capacityByDiskCategory: 'CapacityByDiskCategory',
      engineUsage: 'EngineUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityByDiskCategory: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      engineUsage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.capacityByDiskCategory)) {
      $dara.Model.validateArray(this.capacityByDiskCategory);
    }
    if(this.engineUsage) {
      $dara.Model.validateMap(this.engineUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceDetailsResponseBodyWhiteIpList extends $dara.Model {
  /**
   * @remarks
   * The group name. The name can contain only letters, digits, and underscores (_).
   * 
   * @example
   * swhy
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * [\\"10.2.0.0/18\\", \\"10.0.0.0/24\\", \\"119.23.188.139/32\\"]
   */
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ipList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The 16-digit AliUid of the Alibaba Cloud account.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the virtual switch in the arbiter zone. The vSwitch must be in the zone specified by ArbiterZoneId.
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the arbiter zone.
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * > This parameter is returned only for subscription instances.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cloud storage capacity in GB.
   * 
   * @example
   * 480
   */
  cloudStorageSize?: number;
  /**
   * @remarks
   * The capacity of the storage-optimized cloud storage.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The number of milliseconds between the instance creation time and 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1627290664000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * 
   * - **StandardStorage**: Standard cloud storage.
   * 
   * - **PerformanceStorage**: Performance cloud storage.
   * 
   * @example
   * PerformanceStorage
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
   * Indicates whether the compute engine is enabled for the instance. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether the file engine is enabled.
   * 
   * @example
   * false
   */
  enableFs?: string;
  /**
   * @remarks
   * Indicates whether transparent data encryption (TDE) is enabled for storage.
   * 
   * @example
   * false
   */
  enableStoreTDE?: string;
  /**
   * @remarks
   * The list of engine information.
   */
  engineList?: GetLindormV2InstanceDetailsResponseBodyEngineList[];
  /**
   * @remarks
   * The number of milliseconds between the instance expiration time and 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1629993600000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * The default initial password.
   * 
   * @example
   * *****
   */
  initialRootPassword?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ld-bp1mq0tdzbx1m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **ACTIVATION**: The instance is running.
   * 
   * - **COLD_EXPANDING**: The storage-optimized cloud storage is being scaled out.
   * 
   * - **MINOR_VERSION_TRANSING**: The minor version is being upgraded.
   * 
   * - **RESIZING**: The nodes are being scaled out.
   * 
   * - **SHRINKING**: The nodes are being scaled in.
   * 
   * - **CLASS_CHANGING**: The instance specifications are being upgraded or downgraded.
   * 
   * - **SSL_SWITCHING**: The SSL certificate is being changed.
   * 
   * - **CDC_OPENING**: The data subscription feature is being enabled.
   * 
   * - **TRANSFER**: Data is being migrated.
   * 
   * - **DATABASE_TRANSFER**: Data is being migrated to the database.
   * 
   * - **GUARD_CREATING**: A disaster recovery instance is being created.
   * 
   * - **BACKUP_RECOVERING**: Data is being restored from a backup.
   * 
   * - **DATABASE_IMPORTING**: Data is being imported.
   * 
   * - **NET_MODIFYING**: The network is being modified.
   * 
   * - **NET_SWITCHING**: The network is being switched between the private network and the public network.
   * 
   * - **NET_CREATING**: A network connection is being created.
   * 
   * - **NET_DELETING**: A network connection is being deleted.
   * 
   * - **DELETING**: The instance is being deleted.
   * 
   * - **RESTARTING**: The instance is being restarted.
   * 
   * - **LOCKED**: The instance has expired and is locked.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type. Valid value:
   * 
   * - basic: Production.
   * 
   * @example
   * basic
   */
  instanceType?: string;
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
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the virtual switch in the primary zone. The vSwitch must be in the zone specified by PrimaryZoneId.
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the primary zone.
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
   * The request ID.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2i6weeb4nfii
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **lindorm_v2**: Lindorm V2 single-zone instance.
   * 
   * - **lindorm_v2_multizone**: Lindorm V2 Multi-zone Deployment (Basic) instance.
   * 
   * - **lindorm_v2_multizone_ha**: Lindorm V2 multi-zone High-availability Edition instance.
   * 
   * @example
   * lindorm_v2
   */
  serviceType?: string;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the virtual switch in the secondary zone. The vSwitch must be in the zone specified by StandbyZoneId.
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * For a multi-zone instance, this is the ID of the secondary zone.
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The instance storage usage.
   */
  storageUsage?: GetLindormV2InstanceDetailsResponseBodyStorageUsage;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the instance resides.
   * 
   * @example
   * vpc-bp1xxxxxxxxxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the virtual switch.
   * 
   * @example
   * vsw-bp1xxxxxxxxxxxxxxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The instance access whitelist.
   */
  whiteIpList?: GetLindormV2InstanceDetailsResponseBodyWhiteIpList[];
  /**
   * @remarks
   * The deployment details of the engine in the zone.
   * 
   * @example
   * ZoneEngineInfoMap
   */
  zoneEngineInfoMap?: { [key: string]: any };
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
      autoRenew: 'AutoRenew',
      cloudStorageSize: 'CloudStorageSize',
      coldStorage: 'ColdStorage',
      createMilliseconds: 'CreateMilliseconds',
      deletionProtection: 'DeletionProtection',
      diskCategory: 'DiskCategory',
      diskThreshold: 'DiskThreshold',
      diskUsage: 'DiskUsage',
      enableCompute: 'EnableCompute',
      enableFs: 'EnableFs',
      enableStoreTDE: 'EnableStoreTDE',
      engineList: 'EngineList',
      expiredMilliseconds: 'ExpiredMilliseconds',
      initialRootPassword: 'InitialRootPassword',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
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
      storageUsage: 'StorageUsage',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      whiteIpList: 'WhiteIpList',
      zoneEngineInfoMap: 'ZoneEngineInfoMap',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      autoRenew: 'boolean',
      cloudStorageSize: 'number',
      coldStorage: 'number',
      createMilliseconds: 'number',
      deletionProtection: 'string',
      diskCategory: 'string',
      diskThreshold: 'string',
      diskUsage: 'string',
      enableCompute: 'boolean',
      enableFs: 'string',
      enableStoreTDE: 'string',
      engineList: { 'type': 'array', 'itemType': GetLindormV2InstanceDetailsResponseBodyEngineList },
      expiredMilliseconds: 'number',
      initialRootPassword: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
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
      storageUsage: GetLindormV2InstanceDetailsResponseBodyStorageUsage,
      vpcId: 'string',
      vswitchId: 'string',
      whiteIpList: { 'type': 'array', 'itemType': GetLindormV2InstanceDetailsResponseBodyWhiteIpList },
      zoneEngineInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    if(this.storageUsage && typeof (this.storageUsage as any).validate === 'function') {
      (this.storageUsage as any).validate();
    }
    if(Array.isArray(this.whiteIpList)) {
      $dara.Model.validateArray(this.whiteIpList);
    }
    if(this.zoneEngineInfoMap) {
      $dara.Model.validateMap(this.zoneEngineInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


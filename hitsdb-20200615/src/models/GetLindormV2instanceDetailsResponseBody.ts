// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceDetailsResponseBodyEngineListConnectAddressList extends $dara.Model {
  /**
   * @example
   * ld-mxj9asg***-proxy-lindorm-vpc.lindorm.aliyuncs.com:33060
   */
  address?: string;
  /**
   * @example
   * 33060
   */
  port?: string;
  /**
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
   * @example
   * caculated
   */
  category?: string;
  /**
   * @example
   * 32
   */
  cpuCoreCount?: number;
  /**
   * @example
   * false
   */
  enableAttachLocalDisk?: boolean;
  /**
   * @example
   * 100
   */
  localDiskCapacity?: number;
  /**
   * @example
   * cloud_essd
   */
  localDiskCategory?: string;
  /**
   * @example
   * 64
   */
  memorySizeGiB?: number;
  /**
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @example
   * 10
   */
  quantity?: number;
  /**
   * @example
   * job_debug
   */
  resourceGroupName?: string;
  /**
   * @example
   * ecs.c6.large
   */
  specId?: string;
  /**
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
  connectAddressList?: GetLindormV2InstanceDetailsResponseBodyEngineListConnectAddressList[];
  /**
   * @example
   * TABLE
   */
  engine?: string;
  /**
   * @example
   * false
   */
  isLastVersion?: boolean;
  /**
   * @example
   * 2.2.19.2
   */
  latestVersion?: string;
  nodeGroup?: GetLindormV2InstanceDetailsResponseBodyEngineListNodeGroup[];
  /**
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
  capacityByDiskCategory?: { [key: string]: any }[];
  /**
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
   * @example
   * swhy
   */
  groupName?: string;
  /**
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
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * 480
   */
  cloudStorageSize?: number;
  /**
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @example
   * 1627290664000
   */
  createMilliseconds?: number;
  /**
   * @example
   * false
   */
  deletionProtection?: string;
  /**
   * @example
   * PerformanceStorage
   */
  diskCategory?: string;
  /**
   * @example
   * 80%
   */
  diskThreshold?: string;
  /**
   * @example
   * 0.0%
   */
  diskUsage?: string;
  /**
   * @example
   * true
   */
  enableCompute?: boolean;
  engineList?: GetLindormV2InstanceDetailsResponseBodyEngineList[];
  /**
   * @example
   * 1629993600000
   */
  expiredMilliseconds?: number;
  /**
   * @example
   * *****
   */
  initialRootPassword?: string;
  /**
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  instanceId?: string;
  /**
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @example
   * basic
   */
  instanceType?: string;
  /**
   * @example
   * 20:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  /**
   * @example
   * rg-aek2i6weeb4nfii
   */
  resourceGroupId?: string;
  /**
   * @example
   * lindorm_v2
   */
  serviceType?: string;
  /**
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  storageUsage?: GetLindormV2InstanceDetailsResponseBodyStorageUsage;
  /**
   * @example
   * vpc-bp1xxxxxxxxxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1xxxxxxxxxxxxxxxxxx
   */
  vswitchId?: string;
  whiteIpList?: GetLindormV2InstanceDetailsResponseBodyWhiteIpList[];
  /**
   * @example
   * ZoneEngineInfoMap
   */
  zoneEngineInfoMap?: { [key: string]: any };
  /**
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


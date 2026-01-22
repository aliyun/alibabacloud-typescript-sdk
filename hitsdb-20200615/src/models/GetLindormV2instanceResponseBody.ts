// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceResponseBodyEngineListConnectAddressList extends $dara.Model {
  address?: string;
  port?: string;
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

export class GetLindormV2InstanceResponseBodyEngineListNodeGroup extends $dara.Model {
  category?: string;
  cpuCoreCount?: number;
  enableAttachLocalDisk?: boolean;
  isScaleSpecGroup?: boolean;
  localDiskCapacity?: number;
  localDiskCategory?: string;
  memorySizeGiB?: number;
  nodeSpec?: string;
  quantity?: number;
  resourceGroupName?: string;
  specId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cpuCoreCount: 'CpuCoreCount',
      enableAttachLocalDisk: 'EnableAttachLocalDisk',
      isScaleSpecGroup: 'IsScaleSpecGroup',
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
      isScaleSpecGroup: 'boolean',
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

export class GetLindormV2InstanceResponseBodyEngineList extends $dara.Model {
  connectAddressList?: GetLindormV2InstanceResponseBodyEngineListConnectAddressList[];
  enableBackup?: string;
  enableCDC?: string;
  engine?: string;
  isLastVersion?: boolean;
  latestVersion?: string;
  nodeGroup?: GetLindormV2InstanceResponseBodyEngineListNodeGroup[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      connectAddressList: 'ConnectAddressList',
      enableBackup: 'EnableBackup',
      enableCDC: 'EnableCDC',
      engine: 'Engine',
      isLastVersion: 'IsLastVersion',
      latestVersion: 'LatestVersion',
      nodeGroup: 'NodeGroup',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectAddressList: { 'type': 'array', 'itemType': GetLindormV2InstanceResponseBodyEngineListConnectAddressList },
      enableBackup: 'string',
      enableCDC: 'string',
      engine: 'string',
      isLastVersion: 'boolean',
      latestVersion: 'string',
      nodeGroup: { 'type': 'array', 'itemType': GetLindormV2InstanceResponseBodyEngineListNodeGroup },
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

export class GetLindormV2InstanceResponseBodyStorageUsage extends $dara.Model {
  capacityByDiskCategory?: { [key: string]: any }[];
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

export class GetLindormV2InstanceResponseBodyWhiteIpList extends $dara.Model {
  groupName?: string;
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

export class GetLindormV2InstanceResponseBody extends $dara.Model {
  aliUid?: number;
  arbiterVSwitchId?: string;
  arbiterZoneId?: string;
  autoRenew?: boolean;
  cloudStorageSize?: number;
  coldStorage?: number;
  createMilliseconds?: number;
  deletionProtection?: string;
  diskCategory?: string;
  diskThreshold?: string;
  diskUsage?: string;
  enableCompute?: boolean;
  enableFS?: boolean;
  enableStoreTDE?: boolean;
  engineList?: GetLindormV2InstanceResponseBodyEngineList[];
  expiredMilliseconds?: number;
  initialRootPassword?: string;
  instanceAlias?: string;
  instanceId?: string;
  instanceStatus?: string;
  instanceType?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  networkType?: string;
  payType?: string;
  primaryVSwitchId?: string;
  primaryZoneId?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  serviceType?: string;
  standbyVSwitchId?: string;
  standbyZoneId?: string;
  storageUsage?: GetLindormV2InstanceResponseBodyStorageUsage;
  vpcId?: string;
  vswitchId?: string;
  whiteIpList?: GetLindormV2InstanceResponseBodyWhiteIpList[];
  zoneEngineInfoMap?: { [key: string]: any };
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
      enableFS: 'EnableFS',
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
      enableFS: 'boolean',
      enableStoreTDE: 'boolean',
      engineList: { 'type': 'array', 'itemType': GetLindormV2InstanceResponseBodyEngineList },
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
      storageUsage: GetLindormV2InstanceResponseBodyStorageUsage,
      vpcId: 'string',
      vswitchId: 'string',
      whiteIpList: { 'type': 'array', 'itemType': GetLindormV2InstanceResponseBodyWhiteIpList },
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


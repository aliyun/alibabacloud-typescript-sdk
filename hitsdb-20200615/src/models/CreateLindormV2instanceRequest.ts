// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormV2InstanceRequestEngineListNodeGroupList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  nodeCount?: number;
  /**
   * @example
   * 100
   */
  nodeDiskSize?: number;
  /**
   * @example
   * cloud_essd
   */
  nodeDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @example
   * group_name_01
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      nodeDiskSize: 'NodeDiskSize',
      nodeDiskType: 'NodeDiskType',
      nodeSpec: 'NodeSpec',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: 'number',
      nodeDiskSize: 'number',
      nodeDiskType: 'string',
      nodeSpec: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormV2InstanceRequestEngineList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  engineType?: string;
  nodeGroupList?: CreateLindormV2InstanceRequestEngineListNodeGroupList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      nodeGroupList: 'NodeGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': CreateLindormV2InstanceRequestEngineListNodeGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupList)) {
      $dara.Model.validateArray(this.nodeGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormV2InstanceRequest extends $dara.Model {
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
   * 2.0
   */
  archVersion?: string;
  /**
   * @example
   * 1
   */
  autoRenewDuration?: string;
  /**
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @example
   * 10000
   */
  capacityStorageSize?: number;
  /**
   * @example
   * 320
   */
  cloudStorageSize?: number;
  /**
   * @example
   * PerformanceStorage
   */
  cloudStorageType?: string;
  /**
   * @example
   * BASIC
   */
  clusterMode?: string;
  /**
   * @example
   * basic
   */
  clusterPattern?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * false
   */
  enableCapacityStorage?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  engineList?: CreateLindormV2InstanceRequestEngineList[];
  /**
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
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
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @example
   * rg-aek2i6weeb4nfii
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-wz9ydz3vg93s1ozsd****
   */
  VPCId?: string;
  /**
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewal: 'AutoRenewal',
      capacityStorageSize: 'CapacityStorageSize',
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      clusterMode: 'ClusterMode',
      clusterPattern: 'ClusterPattern',
      duration: 'Duration',
      enableCapacityStorage: 'EnableCapacityStorage',
      engineList: 'EngineList',
      instanceAlias: 'InstanceAlias',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewDuration: 'string',
      autoRenewal: 'boolean',
      capacityStorageSize: 'number',
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      clusterMode: 'string',
      clusterPattern: 'string',
      duration: 'number',
      enableCapacityStorage: 'boolean',
      engineList: { 'type': 'array', 'itemType': CreateLindormV2InstanceRequestEngineList },
      instanceAlias: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
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


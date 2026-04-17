// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckCreateLindormV2InstanceRequestEngineListNodeGroupList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeCount?: number;
  nodeDiskSize?: number;
  nodeDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeSpec?: string;
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

export class CheckCreateLindormV2InstanceRequestEngineList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  engineType?: string;
  nodeGroupList?: CheckCreateLindormV2InstanceRequestEngineListNodeGroupList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      nodeGroupList: 'NodeGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': CheckCreateLindormV2InstanceRequestEngineListNodeGroupList },
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

export class CheckCreateLindormV2InstanceRequest extends $dara.Model {
  arbiterVSwitchId?: string;
  arbiterZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  archVersion?: string;
  cloudStorageSize?: number;
  cloudStorageType?: string;
  clusterPattern?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engineList?: CheckCreateLindormV2InstanceRequestEngineList[];
  instanceAlias?: string;
  ownerAccount?: string;
  ownerId?: number;
  primaryVSwitchId?: string;
  primaryZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  standbyVSwitchId?: string;
  standbyZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  VPCId?: string;
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      clusterPattern: 'ClusterPattern',
      engineList: 'EngineList',
      instanceAlias: 'InstanceAlias',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
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
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      clusterPattern: 'string',
      engineList: { 'type': 'array', 'itemType': CheckCreateLindormV2InstanceRequestEngineList },
      instanceAlias: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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


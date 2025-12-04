// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLindormV2InstanceRequestEngineListNodeGroupList extends $dara.Model {
  /**
   * @example
   * ix90Yes
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6
   */
  nodeCount?: number;
  /**
   * @example
   * 0
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
   * groupName
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      nodeCount: 'NodeCount',
      nodeDiskSize: 'NodeDiskSize',
      nodeDiskType: 'NodeDiskType',
      nodeSpec: 'NodeSpec',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

export class UpdateLindormV2InstanceRequestEngineList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  engineType?: string;
  nodeGroupList?: UpdateLindormV2InstanceRequestEngineListNodeGroupList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      nodeGroupList: 'NodeGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': UpdateLindormV2InstanceRequestEngineListNodeGroupList },
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

export class UpdateLindormV2InstanceRequest extends $dara.Model {
  /**
   * @example
   * 10000
   */
  capacityStorageSize?: number;
  /**
   * @example
   * 480
   */
  cloudStorageSize?: number;
  /**
   * @example
   * PerformanceStorage
   */
  cloudStorageType?: string;
  /**
   * @example
   * false
   */
  enableCapacityStorage?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  engineList?: UpdateLindormV2InstanceRequestEngineList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-bp1o3y0yme2i2****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      capacityStorageSize: 'CapacityStorageSize',
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      enableCapacityStorage: 'EnableCapacityStorage',
      engineList: 'EngineList',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityStorageSize: 'number',
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      enableCapacityStorage: 'boolean',
      engineList: { 'type': 'array', 'itemType': UpdateLindormV2InstanceRequestEngineList },
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLindormV2InstanceRequestNodeGroupList extends $dara.Model {
  groupId?: string;
  nodeCount?: string;
  nodeDiskSize?: number;
  nodeDiskType?: string;
  nodeSpec?: string;
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
      nodeCount: 'string',
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

export class ModifyLindormV2InstanceRequest extends $dara.Model {
  cloudStorageSize?: number;
  cloudStorageType?: string;
  engineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  nodeGroupList?: ModifyLindormV2InstanceRequestNodeGroupList[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      nodeGroupList: 'NodeGroupList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      engineType: 'string',
      instanceId: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': ModifyLindormV2InstanceRequestNodeGroupList },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      upgradeType: 'string',
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


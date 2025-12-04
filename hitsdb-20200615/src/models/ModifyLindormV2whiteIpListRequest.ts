// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLindormV2WhiteIpListRequest extends $dara.Model {
  deleteGroup?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  groupName?: string;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  whiteIpList?: string;
  static names(): { [key: string]: string } {
    return {
      deleteGroup: 'DeleteGroup',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      whiteIpList: 'WhiteIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteGroup: 'boolean',
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      whiteIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


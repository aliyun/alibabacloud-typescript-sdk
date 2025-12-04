// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLdpsComputeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  properties?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      properties: 'Properties',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      properties: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


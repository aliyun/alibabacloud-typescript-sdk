// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageShareGroupPermissionRequest extends $dara.Model {
  addGroup?: string[];
  removeGroup?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  imageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addGroup: 'AddGroup',
      removeGroup: 'RemoveGroup',
      imageId: 'ImageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addGroup: { 'type': 'array', 'itemType': 'string' },
      removeGroup: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addGroup)) {
      $dara.Model.validateArray(this.addGroup);
    }
    if(Array.isArray(this.removeGroup)) {
      $dara.Model.validateArray(this.removeGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


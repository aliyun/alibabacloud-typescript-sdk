// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageShareGroupPermissionRequest extends $dara.Model {
  addGroup?: string[];
  removeGroup?: string[];
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp1a2b3c4d5e6f7g
   */
  imageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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


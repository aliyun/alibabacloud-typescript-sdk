// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVRouterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the virtual router. The description must be 2 to 256 characters long and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the virtual router is deployed. You can call the `DescribeRegions` operation to obtain the most recent list of regions.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VRouter to modify.
   * 
   * This parameter is required.
   */
  VRouterId?: string;
  /**
   * @remarks
   * The name of the virtual router. The name must be 2 to 128 characters long and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   */
  VRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VRouterId: 'VRouterId',
      VRouterName: 'VRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VRouterId: 'string',
      VRouterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


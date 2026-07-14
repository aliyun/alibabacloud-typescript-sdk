// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionByCodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * cams-isj23ljd912
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The permissions.
   */
  permissionsShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      permissionsShrink: 'Permissions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      permissionsShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


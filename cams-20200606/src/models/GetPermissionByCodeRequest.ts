// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionByCodeRequest extends $dara.Model {
  /**
   * @remarks
   * Authorize code information.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 393847477
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The permissions.
   */
  permissions?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


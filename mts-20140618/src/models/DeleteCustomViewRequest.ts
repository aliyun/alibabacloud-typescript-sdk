// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomViewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customEntityId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customViewId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      customViewId: 'CustomViewId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
      customViewId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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


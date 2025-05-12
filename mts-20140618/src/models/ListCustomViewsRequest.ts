// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewsRequest extends $dara.Model {
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customEntityId: 'CustomEntityId',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customEntityId: 'string',
      customGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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


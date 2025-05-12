// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The custom type of the image library. Valid values:
   * 
   * *   landmark: custom landmarks.
   * *   object: custom objects.
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the custom image library.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  customGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      customGroupId: 'CustomGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      customGroupId: 'string',
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


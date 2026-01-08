// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveContactByIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3456456346**
   */
  contactId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 46546546546**
   */
  groupId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      groupId: 'string',
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


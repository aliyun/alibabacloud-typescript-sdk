// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappSyncPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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


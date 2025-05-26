// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReceiverDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The single recipient to be deleted from the recipient list
   * 
   * @example
   * test@example.com
   */
  email?: string;
  ownerId?: number;
  /**
   * @remarks
   * Recipient list ID
   * 
   * This parameter is required.
   * 
   * @example
   * 53228b7d80c36257927ecd029ccd3c9a
   */
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      ownerId: 'number',
      receiverId: 'string',
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


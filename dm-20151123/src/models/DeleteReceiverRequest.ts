// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReceiverRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * Receiver list ID
   * 
   * This parameter is required.
   * 
   * @example
   * 144adfa772cfe47631de7e86d7da13ae
   */
  receiverId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      receiverId: 'ReceiverId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


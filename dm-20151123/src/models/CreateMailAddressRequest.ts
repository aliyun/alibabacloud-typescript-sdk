// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMailAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Sender\\"s email address
   * 
   * This parameter is required.
   * 
   * @example
   * test1@example.com
   */
  accountName?: string;
  ownerId?: number;
  /**
   * @remarks
   * Reply-to address
   * 
   * @example
   * test2@example.com
   */
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Type of sending. Values:
   * 
   * - batch: Bulk emails
   * 
   * - trigger: Triggered emails
   * 
   * This parameter is required.
   * 
   * @example
   * batch
   */
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      ownerId: 'OwnerId',
      replyAddress: 'ReplyAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      ownerId: 'number',
      replyAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendtype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMailAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address.
   * 
   * This parameter is required.
   * 
   * @example
   * Account+@+domain
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the address to create. Valid values:
   * EXTERNAL: The domain name of the address to create has not been created in this system.
   * INTERNAL: The domain name of the address to create has already been created in this system.
   */
  addressType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The reply-to address.
   * 
   * @example
   * test1***@example.net
   */
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of email. Valid values:
   * 
   * - batch: batch email
   * 
   * - trigger: triggered email
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
      addressType: 'AddressType',
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
      addressType: 'string',
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


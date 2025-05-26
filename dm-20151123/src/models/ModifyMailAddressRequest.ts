// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMailAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Sending address ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1344565
   */
  mailAddressId?: number;
  ownerId?: number;
  /**
   * @remarks
   * - Length should be 10 to 20 characters, and must include numbers, uppercase letters, and lowercase letters.
   * 
   * - Must contain at least 2 digits, 2 uppercase letters, and 2 lowercase letters, and neither the digits nor the letters can consist of a single character repeated.
   * 
   * - Cannot be the same as the last set password.
   * 
   * @example
   * DM1mail1234
   */
  password?: string;
  /**
   * @remarks
   * Reply address
   * 
   * @example
   * a***@example.net
   */
  replyAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      password: 'Password',
      replyAddress: 'ReplyAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'number',
      ownerId: 'number',
      password: 'string',
      replyAddress: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The new password of the account. The new password must meet the following requirements:
   * 
   * *   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   It must be 8 to 32 characters in length.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  newAccountPassword?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password type.
   * 
   * @example
   * Tair
   */
  passwordType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      newAccountPassword: 'NewAccountPassword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordType: 'PasswordType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      newAccountPassword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      passwordType: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPasswordZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * A client-generated, case-sensitive token that you can use to ensure the idempotence of the request. The token must be unique among different requests and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The new password for the account. The password must meet the following requirements:
   * 
   * - Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Be 8 to 32 characters in length.
   * 
   * - The special characters are `!@#$%^&*()_+-=`.
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
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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


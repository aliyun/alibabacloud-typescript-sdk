// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSQLAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * - It cannot start with http\\:// or https\\://.
   * 
   * - It can be 0 to 256 characters in length.
   * 
   * @example
   * For testing
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * - The name must be unique.
   * 
   * - It must consist of lowercase letters, digits, or underscores (_).
   * 
   * - It must start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - It must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The password for the database account.
   * 
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - The following characters are special characters: !@#$%^&\\*()_+-=
   * 
   * - It must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1234
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * - **Super**: a privileged account.
   * 
   * - **Normal**: a standard account.
   * 
   * This parameter is required.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1p816075e21****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
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


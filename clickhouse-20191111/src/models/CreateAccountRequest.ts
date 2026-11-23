// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database account.
   * >- It cannot start with http:// or https://.
   * - It must be 0 to 256 characters in length.
   * 
   * @example
   * ceshi
   */
  accountDescription?: string;
  /**
   * @remarks
   * The database account name.
   * >- The name must be unique.
   * - It can contain lowercase letters, digits, and underscores (_).
   * - It must start with a lowercase letter and end with a lowercase letter or digit.
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
   * The password of the database account.
   * >- The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=
   * - It must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 123789Ff!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp108z124a8o7****
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


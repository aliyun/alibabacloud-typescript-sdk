// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountRequestRoles extends $dara.Model {
  /**
   * @remarks
   * The authorized database.
   * 
   * @example
   * admin
   */
  DBName?: string;
  /**
   * @remarks
   * The granted permissions.
   * 
   * @example
   * read
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The account name. The name must be 4 to 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a lowercase letter. The account has read-only permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * admin1
   */
  accountName?: string;
  /**
   * @remarks
   * The account password. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! @ # $ % ^ & * ( ) _ + - =
   * 
   * > For information about how to handle special characters, see [What do I do if a connection fails because the username or password in the connection string contains special characters?](https://help.aliyun.com/document_detail/471568.html)
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the account to be created. Valid values:
   * - **db**: shard account. This is the default value.
   * - **cs**: Configserver account.
   * - **normal**: replica set account.
   * 
   * > Currently, only **db** accounts are supported.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6e9433e955xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database to which the account belongs. This is the database where the account is created or on which the account operates. Default value: admin. The name must be 1 to 63 characters in length and cannot contain /, \\, ., spaces, double quotation marks ("), or $. The name cannot be local.
   * 
   * @example
   * admin
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of authorized roles for the account.
   */
  roles?: CreateAccountRequestRoles[];
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roles: { 'type': 'array', 'itemType': CreateAccountRequestRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


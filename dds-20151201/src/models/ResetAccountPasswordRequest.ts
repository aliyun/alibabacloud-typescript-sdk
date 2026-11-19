// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account whose password you want to reset. Set the value to **root**.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The new password.
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `!@#$%^&*()_+-=`.
   * - The password must be 8 to 32 characters in length.
   * 
   * > For more information about how to handle special characters, see [What do I do if the connection fails because the username or password in the connection string contains special characters?](https://help.aliyun.com/document_detail/471568.html)
   * 
   * This parameter is required.
   * 
   * @example
   * Ali!123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The role type of the instance.
   * - If the instance is a sharded cluster instance, this parameter is required. Valid values: db and cs.
   * - If the instance is a replica set instance, this parameter can be left empty or set to normal.
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
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database to which the account belongs.
   * 
   * - The name cannot contain the following characters: \\0, /, \\, ., space, ", and $.
   * - The name cannot be local.
   * 
   * @example
   * admin
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
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


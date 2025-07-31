// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account. The name must be 4 to 16 characters in length. It can contain lowercase letters, digits, and underscores (_). It must start with a lowercase letter. The account is granted read-only permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * admin1
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must be 8 to 32 characters in length. It can contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! # $ % ^ & \\* ( ) _ + - =
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the account that you want to create. Valid values:
   * 
   * *   **db** (default): shard account (available)
   * *   **cs**: ConfigServer account
   * *   **normal**: replica set account
   * 
   * >  You can set this parameter only to **db**.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6e9433e955xxxx
   */
  DBInstanceId?: string;
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


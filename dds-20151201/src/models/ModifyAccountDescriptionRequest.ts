// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * - It cannot start with http:// or https://.
   * - It must start with a letter or a Chinese character.
   * - It can contain letters, Chinese characters, underscores (_), hyphens (-), and digits, and must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * superadmin
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account whose description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the account whose description you want to modify. Valid values:
   * - **db**: shard account
   * - **cs**: config server account
   * - **normal**: replica set account (default)
   * 
   * @example
   * normal
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2356****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database to which the account belongs.
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
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
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
      accountDescription: 'string',
      accountName: 'string',
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


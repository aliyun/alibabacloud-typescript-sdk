// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * *   The description must start with a letter and cannot start with http:// or https://.
   * *   The description must be 2 to 256 characters in length, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * superadmin
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account whose description is to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the account whose description you can modify. Valid values:
   * 
   * *   **db**: shard account
   * *   **cs**: ConfigServer account
   * *   **normal** (default): replica set account (available)
   * 
   * >  You can set this parameter only to **normal**.
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


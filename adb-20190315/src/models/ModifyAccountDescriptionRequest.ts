// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * 
   * *   The description must start with a letter.
   * *   The description can contain letters, digits, underscores (_), and hyphens (-).
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * AccDesc
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
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
   * am-bp1xxxxxxxx47
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


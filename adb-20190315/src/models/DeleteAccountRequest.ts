// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The database account name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * - Normal: a standard account.
   * 
   * - Super: a privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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
      accountName: 'string',
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


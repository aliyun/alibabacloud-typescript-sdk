// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * > You can reset only the permissions of a privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * 
   * *   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   The password must be 8 to 32 characters in length.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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


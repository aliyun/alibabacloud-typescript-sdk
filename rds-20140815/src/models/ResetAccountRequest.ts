// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The new password of the privileged account.
   * 
   * > 
   * 
   * *   The password must be 8 to 32 characters in length.
   * 
   * *   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * *   It can contain the following special characters: `! @ # $ & ; % ^ * () _ + - =`.
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
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


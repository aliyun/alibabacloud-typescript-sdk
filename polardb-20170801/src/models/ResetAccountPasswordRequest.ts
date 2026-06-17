// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * your_account_name
   */
  accountName?: string;
  /**
   * @remarks
   * The new password for the database account. The password must meet the following requirements:
   * 
   * - Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Be 8 to 32 characters in length.
   * 
   * - The special characters are `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  accountPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view information about all clusters in the destination region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***
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


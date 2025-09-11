// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
   * The description of the database account.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description can be up to 256 characters in length.
   * 
   * @example
   * Test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must be 2 to 16 characters in length.
   * *   Reserved account names such as root, admin, and opsadmin cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account. Up to 256 standard accounts can be created for a cluster.
   * *   **Super** (default): privileged account. Only a single privileged account can be created for a cluster.
   * 
   * >  If a cluster does not have accounts, you can specify this parameter to create a privileged account or standard account. If a cluster has a privileged account, you must set this parameter to Normal to create a standard account. Otherwise, the operation fails. After an account is created, the privileged account has permissions on all databases of the cluster. The standard account does not have permissions and must be granted permissions on specific databases by the privileged account. For more information, see GRANT.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: CreateAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateAccountRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


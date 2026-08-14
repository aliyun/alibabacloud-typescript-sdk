// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag \\`N\\`. You can specify up to 20 tags. \\`N\\` is the serial number of the tag and must be a unique integer that starts from 1.
   * 
   * > The tag key can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag \\`N\\`. \\`N\\` corresponds to the \\`N\\` in \\`Tag.N.Key\\`.
   * 
   * > The tag value can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * testvalue1
   */
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
   * The description of the account.
   * 
   * - Cannot start with `http://` or `https://`.
   * 
   * - Be up to 256 characters in length.
   * 
   * @example
   * Database test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account. The name must meet the following requirements:
   * 
   * - Start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - Contain only lowercase letters, digits, and underscores (_).
   * 
   * - Be 2 to 16 characters in length.
   * 
   * - Cannot be a reserved name, such as root, admin, or opsadmin.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * 
   * - Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - The special characters are `!@#$%^&*()_+-=`.
   * 
   * - Be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - **Normal**: A standard account. A cluster can have a maximum of 256 standard accounts.
   * 
   * - **Super** (default): A privileged account. Only one privileged account can be created for a cluster.
   * 
   * > * If a cluster has no accounts, you can create a privileged account or a standard account. If a privileged account already exists in the cluster, you must set this parameter to Normal to create a standard account.
   * >
   * > * After an account is created, the privileged account has permissions on all databases in the cluster. A standard account has no permissions by default. A privileged account must be used to grant permissions on specific databases to the standard account. For more information, see [Grant permissions to a user](https://help.aliyun.com/document_detail/123662.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the Data Warehouse Edition (V3.0) cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster ID.
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
  /**
   * @remarks
   * The list of tags.
   */
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


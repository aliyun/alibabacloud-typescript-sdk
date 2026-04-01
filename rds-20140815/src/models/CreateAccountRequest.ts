// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The value must be 2 to 256 characters in length. The value can contain letters, digits, underscores (_), and hyphens (-), and must start with a letter.
   * 
   * > : The name cannot start with http:// or https://.
   * 
   * @example
   * Test Account A
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * 
   * *   The name must be unique.
   * 
   * *   The name can contain lowercase letters, digits, and underscores (_). For MySQL databases, the name can contain uppercase letters.
   * 
   * *   The name must start with a letter and end with a letter or digit.
   * 
   * *   For MySQL databases, the name of the privileged account cannot be the same as that of the standard account. For example, if the name of the privileged account is `Test1`, the name of the standard account cannot be `test1`.
   * 
   * *   The length of the value must meet the following requirements:
   * 
   *     *   If the instance runs MySQL 5.7 or MySQL 8.0, the value must be 2 to 32 characters in length.
   *     *   If the instance runs MySQL 5.6, the value must be 2 to 16 characters in length.
   *     *   If the instance runs SQL Server, the value must be 2 to 64 characters in length.
   *     *   If the instance runs PostgreSQL with cloud disks, the value must be 2 to 63 characters in length.
   *     *   If the instance runs PostgreSQL with local disks, the value must be 2 to 16 characters in length.
   *     *   If the instance runs MariaDB, the value must be 2 to 16 characters in length.
   * 
   * *   For more information about invalid characters, see [Forbidden keywords](https://help.aliyun.com/document_detail/26317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account.
   *  
   * 
   * *   The value must be 8 to 32 characters in length.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   **Normal** (default): standard account.
   * *   **Super**: privileged account.
   * *   **Sysadmin**: system admin account. The account type is available only for ApsaraDB RDS for SQL Server instances.
   * 
   * Before you create a system admin account, check whether the instance meets all prerequisites. For more information, see [Create a system admin account](https://help.aliyun.com/document_detail/170736.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * Specifies whether to use a password policy.
   * 
   * > 
   * 
   * *   This parameter is available only for ApsaraDB RDS for SQL Server instances that do not belong to the shared instance family and do not run SQL Server 2008 R2.
   * 
   * *   Before you call this operation, you must configure a password policy for the account of your instance. For more information, see [Configure a password policy for the account of an ApsaraDB RDS for SQL Server instance](https://help.aliyun.com/document_detail/2848317.html).
   * 
   * @example
   * true
   */
  checkPolicy?: boolean;
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
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      checkPolicy: 'CheckPolicy',
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
      accountPassword: 'string',
      accountType: 'string',
      checkPolicy: 'boolean',
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


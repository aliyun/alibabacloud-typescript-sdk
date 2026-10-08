// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must be 2 to 256 characters in length. It must start with a letter or a Chinese character and can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
   * >The description cannot start with `http://` or `https://`.
   * 
   * @example
   * testuser
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * > The name must be unique and can contain uppercase letters (supported only by MySQL), lowercase letters, digits, or underscores. For specific naming conventions, refer to the tutorials for each engine: [Create a MySQL account](https://help.aliyun.com/document_detail/96089.html), [Create a PostgreSQL account](https://help.aliyun.com/document_detail/96753.html), [Create a SQL Server account](https://help.aliyun.com/document_detail/95810.html), [Create a MariaDB account](https://help.aliyun.com/document_detail/97132.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * > * The password must be 8 to 32 characters in length.
   * > * The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (`!@#$%^&*()_+-=`).
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * - **Normal** (default): standard account.
   * - **Super**: privileged account. You can create at most one privileged account per instance.
   * - **Sysadmin** (SQL Server instances only): database account with SA permissions. Before you create this account, check whether the instance meets the [prerequisites](https://help.aliyun.com/document_detail/170736.html).
   * - **GlobalRO** (SQL Server instances only): global read-only account. You can create at most two global read-only accounts per instance. The database engine version of the instance must be SQL Server 2016 or later, and the instance type must be dedicated or general-purpose.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The [account password policy](https://help.aliyun.com/document_detail/2845728.html) for the SQL Server instance. Valid values:
   * - **true**: The policy is applied.
   * - **false**: The policy is not applied.
   * > - If you set this parameter to true, you must first [configure the SQL Server account password policy](https://help.aliyun.com/document_detail/2848317.html).
   * > - This parameter does not support SQL Server instances of the [shared instance type](https://help.aliyun.com/document_detail/57184.html), [2008 R2 edition](https://help.aliyun.com/document_detail/145468.html), or [serverless type](https://help.aliyun.com/document_detail/603466.html).
   * 
   * @example
   * true
   */
  checkPolicy?: boolean;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
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


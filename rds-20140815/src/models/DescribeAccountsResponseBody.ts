// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege extends $dara.Model {
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   **ReadWrite**: read and write permissions.
   * *   **ReadOnly**: read-only permissions.
   * *   **DDLOnly**: DDL-only permissions.
   * *   **DMLOnly**: DML-only permissions.
   * *   **Custom**: custom permissions. You can modify the permissions of the account by using SQL commands.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The permissions that are granted to the account. For more information, see [Account permissions](https://help.aliyun.com/document_detail/146395.html).
   * 
   * @example
   * SELECT,INSERT
   */
  accountPrivilegeDetail?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test1
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges extends $dara.Model {
  databasePrivilege?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege[];
  static names(): { [key: string]: string } {
    return {
      databasePrivilege: 'DatabasePrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege },
    };
  }

  validate() {
    if(Array.isArray(this.databasePrivilege)) {
      $dara.Model.validateArray(this.databasePrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   **Normal**: standard account
   * *   **Super**: privileged account
   * *   **Sysadmin**: system admin account, which is supported only for instances running SQL Server
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * Indicates whether the account has the row-level security (RLS) permissions. Valid values:
   * 
   * *   **t**: The account has the RLS permissions.
   * *   **f**: The account does not have the RLS permissions.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * f
   */
  bypassRLS?: string;
  /**
   * @remarks
   * Indicates whether the password policy is applied.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * true
   */
  checkPolicy?: boolean;
  /**
   * @remarks
   * Indicates whether the account has the permissions to create databases. Valid values:
   * 
   * *   **t**: The account has the permissions to create databases.
   * *   **f**: The account does not have the permissions to create databases.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * t
   */
  createDB?: string;
  /**
   * @remarks
   * Indicates whether the account has the permissions to create roles. Valid values:
   * 
   * *   **t**: The account has the permissions to create roles.
   * *   **f**: The account does not have the permissions to create roles.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * t
   */
  createRole?: string;
  /**
   * @remarks
   * The ID of the instance to which the account belongs.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details about the permissions that are granted to the account.
   */
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges;
  /**
   * @remarks
   * The expiration time of the password.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 2024-10-21
   */
  passwordExpireTime?: string;
  /**
   * @remarks
   * Indicates whether the number of databases that are managed by the account exceeds the upper limit. Valid values:
   * 
   * *   **1**: The number of databases that are managed by the account exceeds the upper limit.
   * *   **0**: The number of databases that are managed by the account does not exceed the upper limit.
   * 
   * @example
   * 0
   */
  privExceeded?: string;
  /**
   * @remarks
   * Indicates whether the account has the replication permissions. Valid values:
   * 
   * *   **t**: The account has the replication permissions.
   * *   **f**: The account does not have the replication permissions.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * t
   */
  replication?: string;
  /**
   * @remarks
   * The expiration time of the password. Valid values:
   * 
   * *   **infinity**: The password never expires.
   * *   **Empty**: The expiration time is not specified.
   * *   **Actual expiration time**: in the format of *yyyy-MM-dd*T*HH:mm:ss*Z in UTC. Example: 2022-10-01T00:00:00Z.
   * 
   * >  This parameter is returned only for instances that run PostgreSQL.
   * 
   * @example
   * 2022-10-01T00:00:00Z
   */
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      bypassRLS: 'BypassRLS',
      checkPolicy: 'CheckPolicy',
      createDB: 'CreateDB',
      createRole: 'CreateRole',
      DBInstanceId: 'DBInstanceId',
      databasePrivileges: 'DatabasePrivileges',
      passwordExpireTime: 'PasswordExpireTime',
      privExceeded: 'PrivExceeded',
      replication: 'Replication',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      bypassRLS: 'string',
      checkPolicy: 'boolean',
      createDB: 'string',
      createRole: 'string',
      DBInstanceId: 'string',
      databasePrivileges: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges,
      passwordExpireTime: 'string',
      privExceeded: 'string',
      replication: 'string',
      validUntil: 'string',
    };
  }

  validate() {
    if(this.databasePrivileges && typeof (this.databasePrivileges as any).validate === 'function') {
      (this.databasePrivileges as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $dara.Model {
  DBInstanceAccount?: DescribeAccountsResponseBodyAccountsDBInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAccount: 'DBInstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccount },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAccount)) {
      $dara.Model.validateArray(this.DBInstanceAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the account.
   */
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2E94301-D07F-4457-9B49-6AA2BB388C85
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The first time when the system admin account was enabled. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  This parameter is returned only for instances that run SQL Server.
   * 
   * @example
   * 2020-02-06T11:00:00Z
   */
  systemAdminAccountFirstActivationTime?: string;
  /**
   * @remarks
   * Indicates whether the system admin account was enabled. Valid values:
   * 
   * *   **true**: The system admin account was enabled.
   * *   **false**: The system admin account was disabled.
   * 
   * >  The [system admin account](https://help.aliyun.com/document_detail/170736.html) is supported only for the instances that run SQL Server. If the instance runs SQL Server, a value is returned for this parameter. If the instance runs a different database engine, no value is returned for this parameter.
   * 
   * @example
   * True
   */
  systemAdminAccountStatus?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      systemAdminAccountFirstActivationTime: 'SystemAdminAccountFirstActivationTime',
      systemAdminAccountStatus: 'SystemAdminAccountStatus',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      pageNumber: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      systemAdminAccountFirstActivationTime: 'string',
      systemAdminAccountStatus: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.accounts && typeof (this.accounts as any).validate === 'function') {
      (this.accounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


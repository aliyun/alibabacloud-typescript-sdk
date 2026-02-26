// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege extends $dara.Model {
  accountPrivilege?: string;
  accountPrivilegeDetail?: string;
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
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  accountType?: string;
  bypassRLS?: string;
  checkPolicy?: boolean;
  createDB?: string;
  createRole?: string;
  DBInstanceId?: string;
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges;
  passwordExpireTime?: string;
  privExceeded?: string;
  replication?: string;
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


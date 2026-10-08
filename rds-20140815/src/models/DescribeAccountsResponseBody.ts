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
   * 17F2EA6C-3CA2-528D-A263-DC29707AD652
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
   * The time when the super administrator (SA) account was first activated. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * > This parameter is returned only for ApsaraDB RDS for SQL Server instances.
   * 
   * @example
   * 2023-10-17T07:51:22Z
   */
  systemAdminAccountFirstActivationTime?: string;
  /**
   * @remarks
   * Indicates whether the super administrator (SA) account is activated. Valid values:
   * 
   * - **True**: Activated.
   * - **False**: Not activated.
   * 
   * 
   * > Only ApsaraDB RDS for SQL Server instances support the [super administrator (SA) account](https://help.aliyun.com/document_detail/170736.html), and this parameter has a return value. For instances of other engines, the return value is empty.
   * 
   * @example
   * True
   */
  systemAdminAccountStatus?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
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


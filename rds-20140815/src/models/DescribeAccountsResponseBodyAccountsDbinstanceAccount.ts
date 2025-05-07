// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges } from "./DescribeAccountsResponseBodyAccountsDbinstanceAccountDatabasePrivileges";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a database.
   * 
   * @example
   * test_rds3
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the permissions that an account is granted on the database. Valid values:
   * 
   * *   **R**: The account is granted the permissions that are required to read the data of the database.
   * *   **W**: The account is granted the permissions that are required to write data to the database.
   * *   **DDL**: The account is granted the permissions that are required to perform DDL operations on the database.
   * *   **DML**: The account is granted the permissions that are required to perform DML operations on the database.
   * 
   * @example
   * R
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges extends $dara.Model {
  dbPrivilege?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege[];
  static names(): { [key: string]: string } {
    return {
      dbPrivilege: 'DbPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPrivilege: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege },
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount extends $dara.Model {
  /**
   * @remarks
   * Indicates the username of an instance account.
   * 
   * @example
   * test_rds3
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates the type of an instance account. Valid values:
   * 
   * *   **0**: The instance account is a privileged account.
   * *   **1**: The instance account is a standard account.
   * 
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * Indicates the information about the permissions of an account on a database.
   */
  dbPrivileges?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges;
  /**
   * @remarks
   * Indicates the description of an account. By default, if 0 is the value of the AccountType parameter, **Created by DRDS** is returned as the value of the Description parameter. If 1 is the value of the AccountType parameter, an empty string is returned as the value of the Description parameter. You can modify the description of an account on the Accounts page in the PolarDB-X console.
   * 
   * @example
   * Created by DRDS
   */
  description?: string;
  /**
   * @remarks
   * Indicates an IP address that is allowed to access the database. The value **%** indicates that each IP address is allowed to access the database. \\</note>
   * 
   * @example
   * %
   */
  host?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      dbPrivileges: 'DbPrivileges',
      description: 'Description',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      dbPrivileges: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges,
      description: 'string',
      host: 'string',
    };
  }

  validate() {
    if(this.dbPrivileges && typeof (this.dbPrivileges as any).validate === 'function') {
      (this.dbPrivileges as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccounts extends $dara.Model {
  instanceAccount?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      instanceAccount: 'InstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccount: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount },
    };
  }

  validate() {
    if(Array.isArray(this.instanceAccount)) {
      $dara.Model.validateArray(this.instanceAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about the instance accounts.
   */
  instanceAccounts?: DescribeInstanceAccountsResponseBodyInstanceAccounts;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2E4056D-57EB-4353-8355-2E6284******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceAccounts: 'InstanceAccounts',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccounts: DescribeInstanceAccountsResponseBodyInstanceAccounts,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceAccounts && typeof (this.instanceAccounts as any).validate === 'function') {
      (this.instanceAccounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


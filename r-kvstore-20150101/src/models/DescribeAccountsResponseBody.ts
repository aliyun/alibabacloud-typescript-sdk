// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege extends $dara.Model {
  /**
   * @remarks
   * The permission of the account. Default value: RoleReadWrite. Valid values:
   * 
   * *   **RoleReadOnly**: The account has the read-only permissions.
   * *   **RoleReadWrite**: The account has the read and write permissions.
   * 
   * @example
   * RoleReadWrite
   */
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges extends $dara.Model {
  databasePrivilege?: DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege[];
  static names(): { [key: string]: string } {
    return {
      databasePrivilege: 'DatabasePrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege },
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

export class DescribeAccountsResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * testdec
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * demoaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The state of the account. Valid values:
   * 
   * *   **Unavailable**: The account is unavailable.
   * *   **Available**: The account is available.
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
   * *   **Super**: super account
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * Details about account permissions.
   */
  databasePrivileges?: DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp10noxlhcoim2****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      databasePrivileges: 'DatabasePrivileges',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      databasePrivileges: DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges,
      instanceId: 'string',
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
  account?: DescribeAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccount },
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
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
   * Details about returned accounts of the instance.
   */
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C9E114C-217C-4118-83C0-B4070222****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      requestId: 'string',
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


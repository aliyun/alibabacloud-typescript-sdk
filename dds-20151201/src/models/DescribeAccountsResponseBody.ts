// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsAccountRolesRole extends $dara.Model {
  /**
   * @example
   * admin
   */
  DBName?: string;
  /**
   * @example
   * read
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccountRoles extends $dara.Model {
  role?: DescribeAccountsResponseBodyAccountsAccountRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccountRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $dara.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  characterType?: string;
  DBInstanceId?: string;
  /**
   * @example
   * admin
   */
  DBName?: string;
  roles?: DescribeAccountsResponseBodyAccountsAccountRoles;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      roles: DescribeAccountsResponseBodyAccountsAccountRoles,
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
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
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B562A65B-39AB-4EE8-8635-5A222054FB35
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


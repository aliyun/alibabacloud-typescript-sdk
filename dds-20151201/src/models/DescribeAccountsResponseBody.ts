// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Admin
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * root
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
   * The role of the account. Valid values:
   * 
   * *   **db**: shard node
   * *   **cs**: Configserver node
   * *   **mongos**: mongos node
   * *   **logic**: sharded cluster instance
   * *   **normal**: replica set instance
   * 
   * @example
   * mongos
   */
  characterType?: string;
  /**
   * @remarks
   * The ID of the instance to which the account belongs.
   * 
   * @example
   * dds-bp1fd530f271****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
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
   * The details of the account.
   */
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


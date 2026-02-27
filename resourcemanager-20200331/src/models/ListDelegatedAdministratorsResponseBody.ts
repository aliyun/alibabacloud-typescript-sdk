// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDelegatedAdministratorsResponseBodyAccountsAccount extends $dara.Model {
  accountId?: string;
  delegationEnabledTime?: string;
  displayName?: string;
  joinMethod?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delegationEnabledTime: 'DelegationEnabledTime',
      displayName: 'DisplayName',
      joinMethod: 'JoinMethod',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delegationEnabledTime: 'string',
      displayName: 'string',
      joinMethod: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBodyAccounts extends $dara.Model {
  account?: ListDelegatedAdministratorsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListDelegatedAdministratorsResponseBodyAccountsAccount },
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

export class ListDelegatedAdministratorsResponseBody extends $dara.Model {
  accounts?: ListDelegatedAdministratorsResponseBodyAccounts;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 009C3A02-7D4B-416C-9CE7-548C91508F1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListDelegatedAdministratorsResponseBodyAccounts,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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


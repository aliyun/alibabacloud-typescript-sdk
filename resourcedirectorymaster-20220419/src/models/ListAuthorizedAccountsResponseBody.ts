// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAccountsResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 184311716100****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * someone@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * admin
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  folderId?: string;
  /**
   * @remarks
   * The way in which the member joins the resource directory. Valid values:
   * 
   * *   invited: The member is invited to join the resource directory.
   * *   created: The member is directly created in the resource directory.
   * 
   * @example
   * created
   */
  joinMethod?: string;
  /**
   * @remarks
   * The time when the member joined the resource directory. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The time when the member was modified. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-k4****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The RDPath of the member.
   */
  resourceDirectoryPath?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   CreateSuccess: The member is created.
   * *   PromoteVerifying: The upgrade of the member is under confirmation.
   * *   PromoteFailed: The upgrade of the member fails.
   * *   PromoteExpired: The upgrade of the member expires.
   * *   PromoteCancelled: The upgrade of the member is canceled.
   * *   PromoteSuccess: The member is upgraded.
   * *   InviteSuccess: The member accepts the invitation.
   * 
   * @example
   * CreateSuccess
   */
  status?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * *   CloudAccount: cloud account
   * *   ResourceAccount: resource account
   * 
   * @example
   * ResourceAccount
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedAccountsResponseBodyAccounts extends $dara.Model {
  account?: ListAuthorizedAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAuthorizedAccountsResponseBodyAccountsAccount },
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

export class ListAuthorizedAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the member.
   */
  accounts?: ListAuthorizedAccountsResponseBodyAccounts;
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
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
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
      accounts: ListAuthorizedAccountsResponseBodyAccounts,
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


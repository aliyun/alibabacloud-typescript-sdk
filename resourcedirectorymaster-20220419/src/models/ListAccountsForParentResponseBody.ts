// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsForParentResponseBodyAccountsAccountTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * tag_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccountsAccountTags extends $dara.Model {
  tag?: ListAccountsForParentResponseBodyAccountsAccountTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListAccountsForParentResponseBodyAccountsAccountTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccountsAccount extends $dara.Model {
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
   * The Alibaba Cloud account name of the member.
   * 
   * @example
   * hdd01429358@alibaba-inc.com
   */
  accountName?: string;
  /**
   * @remarks
   * The deletion status of the member. Valid values:
   * 
   * *   Checking: A deletion check is being performed for the member.
   * *   Deleting: The member is being deleted.
   * *   CheckFailed: The deletion check for the member fails.
   * *   DeleteFailed: The member fails to be deleted.
   * 
   * >  If deletion is not performed for the member, the value of this parameter is empty.
   * 
   * @example
   * Checking
   */
  deletionStatus?: string;
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
   * The way in which the member joins the resource directory.
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
   * The tags that are added to the member.
   */
  tags?: ListAccountsForParentResponseBodyAccountsAccountTags;
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
      deletionStatus: 'DeletionStatus',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      deletionStatus: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      tags: ListAccountsForParentResponseBodyAccountsAccountTags,
      type: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccounts extends $dara.Model {
  account?: ListAccountsForParentResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsForParentResponseBodyAccountsAccount },
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

export class ListAccountsForParentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the members.
   */
  accounts?: ListAccountsForParentResponseBodyAccounts;
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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
      accounts: ListAccountsForParentResponseBodyAccounts,
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


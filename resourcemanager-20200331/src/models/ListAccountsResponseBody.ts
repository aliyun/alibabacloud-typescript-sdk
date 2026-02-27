// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsResponseBodyAccountsAccountTagsTag extends $dara.Model {
  key?: string;
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

export class ListAccountsResponseBodyAccountsAccountTags extends $dara.Model {
  tag?: ListAccountsResponseBodyAccountsAccountTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListAccountsResponseBodyAccountsAccountTagsTag },
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

export class ListAccountsResponseBodyAccountsAccount extends $dara.Model {
  accountId?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  resourceDirectoryPath?: string;
  status?: string;
  tags?: ListAccountsResponseBodyAccountsAccountTags;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      status: 'string',
      tags: ListAccountsResponseBodyAccountsAccountTags,
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

export class ListAccountsResponseBodyAccounts extends $dara.Model {
  account?: ListAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsResponseBodyAccountsAccount },
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

export class ListAccountsResponseBody extends $dara.Model {
  accounts?: ListAccountsResponseBodyAccounts;
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
      accounts: ListAccountsResponseBodyAccounts,
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


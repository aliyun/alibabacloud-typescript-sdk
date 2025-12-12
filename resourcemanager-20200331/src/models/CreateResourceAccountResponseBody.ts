// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 112730938585****
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * alice@rd-3g****.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * Dev
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-r23M55****
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
   * 2020-12-31T03:37:39.456Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The time when the member was modified. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-31T03:37:39.456Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-3G****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the member. The value CreateSuccess indicates that the member is created.
   * 
   * @example
   * CreateSuccess
   */
  status?: string;
  /**
   * @remarks
   * The type of the member. The value ResourceAccount indicates that the member is a resource account.
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

export class CreateResourceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the member.
   */
  account?: CreateResourceAccountResponseBodyAccount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B356A415-D860-43E5-865A-E2193D62BBD6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: CreateResourceAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


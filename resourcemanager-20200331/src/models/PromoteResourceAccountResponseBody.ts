// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromoteResourceAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * someone@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * admin
   */
  displayName?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * fd-bVaRIG****
   */
  folderId?: string;
  /**
   * @remarks
   * The method used by the member to join the resource directory. Valid values:
   * 
   * - invited: Invited.
   * - created: Created.
   * 
   * @example
   * created
   */
  joinMethod?: string;
  /**
   * @remarks
   * The time when the member joined the resource directory. The time is displayed in UTC in RFC 3339 format, indicated by Z.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The time when the member was last modified. The time is displayed in UTC in RFC 3339 format, indicated by Z.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The account record ID.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  /**
   * @remarks
   * The resource directory ID.
   * 
   * @example
   * rd-k3****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * - CreateSuccess: Created.
   * - CreateVerifying: Pending creation confirmation.
   * - CreateFailed: Creation failed.
   * - CreateExpired: Creation expired.
   * - CreateCancelled: Creation canceled.
   * - PromoteVerifying: Pending upgrade confirmation.
   * - PromoteFailed: Upgrade failed.
   * - PromoteExpired: Upgrade expired.
   * - PromoteCancelled: Upgrade canceled.
   * - PromoteSuccess: Upgraded.
   * - InviteSuccess: Invited.
   * - Removed: Removed.
   * 
   * @example
   * PromoteVerifying
   */
  status?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * - CloudAccount: Alibaba Cloud account.
   * - ResourceAccount: Resource account.
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
      recordId: 'RecordId',
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
      recordId: 'string',
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

export class PromoteResourceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The member account information.
   */
  account?: PromoteResourceAccountResponseBodyAccount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
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
      account: PromoteResourceAccountResponseBodyAccount,
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


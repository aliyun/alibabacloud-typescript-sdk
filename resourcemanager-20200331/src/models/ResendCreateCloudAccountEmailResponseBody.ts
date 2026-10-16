// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResendCreateCloudAccountEmailResponseBodyAccount extends $dara.Model {
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
   * The display name of the member account.
   * 
   * @example
   * admin
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  folderId?: string;
  /**
   * @remarks
   * The method used by the member account to join the resource directory. Valid values:
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
   * The time when the member account joined the resource directory. The time is displayed in UTC, as specified by RFC 3339, with Z indicating UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The time when the member account was last modified. The time is displayed in UTC, as specified by RFC 3339, with Z indicating UTC.
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
   * 16950264-3f0d-4ca9-82dd-6ee7a3d3****
   */
  recordId?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-k3****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The join status of the member account. Valid values:
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
   * CreateVerifying
   */
  status?: string;
  /**
   * @remarks
   * The type of the member account. The value CloudAccount indicates a cloud account.
   * 
   * @example
   * CloudAccount
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

export class ResendCreateCloudAccountEmailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The member account information.
   */
  account?: ResendCreateCloudAccountEmailResponseBodyAccount;
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
      account: ResendCreateCloudAccountEmailResponseBodyAccount,
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


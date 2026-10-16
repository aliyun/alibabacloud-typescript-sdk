// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountResponseBodyAccount extends $dara.Model {
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
   * admin-****
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
   * - invited: The member is invited to join.
   * - created: The member is created in the resource directory.
   * 
   * @example
   * created
   */
  joinMethod?: string;
  /**
   * @remarks
   * The time when the member was last modified. The time is displayed in UTC, as specified by RFC 3339, with Z indicating UTC.
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
   * 06950264-3f0d-4ca9-82dd-6ee7a3d3****
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
   * - CreateSuccess: The member is created.
   * - CreateVerifying: The creation is being confirmed.
   * - CreateFailed: The member failed to be created.
   * - CreateExpired: The creation has expired.
   * - CreateCancelled: The creation is canceled.
   * - PromoteVerifying: The upgrade is being confirmed.
   * - PromoteFailed: The member failed to be upgraded.
   * - PromoteExpired: The upgrade has expired.
   * - PromoteCancelled: The upgrade is canceled.
   * - PromoteSuccess: The member is upgraded.
   * - InviteSuccess: The member is invited.
   * - Removed: The member is removed.
   * 
   * @example
   * CreateVerifying
   */
  status?: string;
  /**
   * @remarks
   * The member type. The value CloudAccount indicates a cloud account.
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

export class CreateCloudAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The member information.
   */
  account?: CreateCloudAccountResponseBodyAccount;
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
      account: CreateCloudAccountResponseBodyAccount,
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


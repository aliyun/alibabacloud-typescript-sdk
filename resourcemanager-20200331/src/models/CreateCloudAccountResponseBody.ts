// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member account.
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
   * admin-****
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
   * The way in which the member account joined the resource directory. Valid values:
   * 
   * *   invited: The member account is invited to join the resource directory.
   * *   created: The member account is directly created in the resource directory.
   * 
   * @example
   * created
   */
  joinMethod?: string;
  /**
   * @remarks
   * The time when the member account was modified.
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
   * The ID of the resource directory.
   * 
   * @example
   * rd-k3****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the member account. Valid values:
   * 
   * *   CreateSuccess: The member account is created.
   * *   CreateVerifying: The creation of the member account is under confirmation.
   * *   CreateFailed: The member account failed to be created.
   * *   CreateExpired: The creation of the member account expired.
   * *   CreateCancelled: The creation of the member account is canceled.
   * *   PromoteVerifying: The upgrade of the member account is under confirmation.
   * *   PromoteFailed: The member account failed to be upgraded.
   * *   PromoteExpired: The upgrade of the member account expired.
   * *   PromoteCancelled: The upgrade of the member account is canceled.
   * *   PromoteSuccess: The member account is upgraded.
   * *   InviteSuccess: The owner of the member account accepted the invitation.
   * *   Removed: The member account is removed from the resource directory.
   * 
   * @example
   * CreateVerifying
   */
  status?: string;
  /**
   * @remarks
   * The type of the member account. The value CloudAccount indicates that the member account is a cloud account.
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
   * The information of the member account.
   */
  account?: CreateCloudAccountResponseBodyAccount;
  /**
   * @remarks
   * The ID of the request.
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


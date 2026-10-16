// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountResponseBodyAccountTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The member account ID.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the account.
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
   * The email status. Valid values:
   * 
   * - Empty: No email modification record exists.
   * - WAIT_MODIFY: The modification is in progress.
   * - CANCELLED: The modification is canceled.
   * - EXPIRED: The modification has expired.
   * 
   * @example
   * WAIT_MODIFY
   */
  emailStatus?: string;
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
   * The real-name verification information.
   * 
   * @example
   * aliyun-admin
   */
  identityInformation?: string;
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
   * The location of the member account in the resource directory.
   */
  location?: string;
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
   * The ID of the resource directory.
   * 
   * @example
   * rd-k3****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The path ID (RDPath) of the member account in the resource directory.
   */
  resourceDirectoryPath?: string;
  /**
   * @remarks
   * The join status of the member account. Valid values:
   * 
   * - CreateSuccess: Created.
   * - PromoteVerifying: Upgrade is being confirmed.
   * - PromoteFailed: Upgrade failed.
   * - PromoteExpired: Upgrade expired.
   * - PromoteCancelled: Upgrade canceled.
   * - PromoteSuccess: Upgrade succeeded.
   * - InviteSuccess: Invitation succeeded.
   * 
   * @example
   * CreateSuccess
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetAccountResponseBodyAccountTags[];
  /**
   * @remarks
   * The type of the member account. Valid values:
   * 
   * - CloudAccount: Cloud account.
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
      emailStatus: 'EmailStatus',
      folderId: 'FolderId',
      identityInformation: 'IdentityInformation',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      location: 'Location',
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
      accountName: 'string',
      displayName: 'string',
      emailStatus: 'string',
      folderId: 'string',
      identityInformation: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      location: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAccountResponseBodyAccountTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The member account information.
   */
  account?: GetAccountResponseBodyAccount;
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
      account: GetAccountResponseBodyAccount,
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


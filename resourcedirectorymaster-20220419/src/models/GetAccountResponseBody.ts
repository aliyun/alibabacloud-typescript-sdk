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
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the member.
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
   * The status of the modification for the email address bound to the member. Valid values:
   * 
   * *   If the value of this parameter is empty, no modification is performed for the email address.
   * *   WAIT_MODIFY: The modification is being performed.
   * *   CANCELLED: The modification is canceled.
   * *   EXPIRED: The modification expires.
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
   * Indicates whether a mobile phone number is bound to the member for security purposes. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasSecureMobilePhone?: boolean;
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
   * The time when the member joined the resource directory.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The location of the member in the resource directory.
   */
  location?: string;
  /**
   * @remarks
   * The time when the member was modified.
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
   * The path of the member in the resource directory.
   */
  resourceDirectoryPath?: string;
  secureMobilePhone?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   CreateSuccess: The member is created.
   * *   PromoteVerifying: The upgrade of the member is being confirmed.
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
   * The tags of the member.
   */
  tags?: GetAccountResponseBodyAccountTags[];
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
      emailStatus: 'EmailStatus',
      folderId: 'FolderId',
      hasSecureMobilePhone: 'HasSecureMobilePhone',
      identityInformation: 'IdentityInformation',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      location: 'Location',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      secureMobilePhone: 'SecureMobilePhone',
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
      hasSecureMobilePhone: 'boolean',
      identityInformation: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      location: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      secureMobilePhone: 'string',
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
   * The information about the member.
   */
  account?: GetAccountResponseBodyAccount;
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


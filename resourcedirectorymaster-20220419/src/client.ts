// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AcceptHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-06T02:15:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-20T02:15:40Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-Ih8IuPfvV0t0****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * CompanyA
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-06T02:16:40Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
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
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Accepted
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited Alibaba Cloud account.
   * 
   * @example
   * 177242285274****
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited Alibaba Cloud account. Valid values:
   * 
   * *   Account: indicates the ID of the Alibaba Cloud account.
   * *   Email: indicates the logon email address of the Alibaba Cloud account.
   * 
   * @example
   * Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageContactResponseBodyContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The time when the contact was created.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      createDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The ID of the object. Valid values:
   * 
   * - ID of the resource directory
   * - ID of the folder
   * - ID of the member
   * 
   * @example
   * fd-ZDNPiT****
   */
  memberId?: string;
  /**
   * @remarks
   * The time when the contact was bound to the object.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  modifyDate?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      memberId: 'MemberId',
      modifyDate: 'ModifyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      memberId: 'string',
      modifyDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-24T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * Alice
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * h-ycm4rp****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Cancelled
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class CreateControlPolicyResponseBodyControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times that the access control policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 2021-03-18T09:24:19Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy.
   * 
   * The value RAM indicates that the access control policy takes effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the access control policy was updated.
   * 
   * @example
   * 2021-03-18T09:24:19Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class CreateFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2019-02-19T09:34:50.757Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-u8B321****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * rdFolder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
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

export class CreateResourceAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 112730938585****
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the member.
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

export class DeclineHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * Alice
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-abcdef****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Declined
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The ID of the object. Valid values:
   * 
   * - ID of the resource directory
   * - ID of the folder
   * - ID of the member
   * 
   * @example
   * fd-ZDNPiT****
   */
  memberId?: string;
  /**
   * @remarks
   * The time when the contact was unbound from the object.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  modifyDate?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      memberId: 'MemberId',
      modifyDate: 'ModifyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      memberId: 'string',
      modifyDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2021-12-08T02:15:31.744Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 507408460615****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account.
   * 
   * @example
   * alice@example.com
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-54****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the Root folder.
   * 
   * @example
   * r-G9****
   */
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * NON_SP_cs
   */
  checkId?: string;
  /**
   * @remarks
   * The name of the cloud service to which the check item belongs.
   * 
   * @example
   * Container Service for Kubernetes
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * An instance of a cloud service is running within the member. Submit a ticket to contact Alibaba Cloud technical support.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * NON_SP_efc
   */
  checkId?: string;
  /**
   * @remarks
   * The name of the cloud service to which the check item belongs.
   * 
   * @example
   * Enterprise finance
   */
  checkName?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * This account is an Enterprise Finance associated account. Please remove the financial association of this account before deleting it.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo extends $dara.Model {
  /**
   * @remarks
   * The check items that you can choose to ignore for the member deletion.
   * 
   * > This parameter may be returned if the value of AllowDelete is true.
   */
  abandonableChecks?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks[];
  /**
   * @remarks
   * Indicates whether the member can be deleted. Valid values:
   * 
   * *   true: The member can be deleted.
   * *   false: The member cannot be deleted.
   * 
   * @example
   * false
   */
  allowDelete?: string;
  /**
   * @remarks
   * The reasons why the member cannot be deleted.
   * 
   * > This parameter is returned only if the value of AllowDelete is false.
   */
  notAllowReason?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason[];
  /**
   * @remarks
   * The status of the check. Valid values:
   * 
   * *   PreCheckComplete: The check is complete.
   * *   PreChecking: The check is in progress.
   * 
   * @example
   * PreCheckComplete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableChecks: 'AbandonableChecks',
      allowDelete: 'AllowDelete',
      notAllowReason: 'NotAllowReason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableChecks: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoAbandonableChecks },
      allowDelete: 'string',
      notAllowReason: { 'type': 'array', 'itemType': GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfoNotAllowReason },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abandonableChecks)) {
      $dara.Model.validateArray(this.abandonableChecks);
    }
    if(Array.isArray(this.notAllowReason)) {
      $dara.Model.validateArray(this.notAllowReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList extends $dara.Model {
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * This account has a payer account. Please release the financial relationship of this account first.
   */
  description?: string;
  /**
   * @remarks
   * The name of the cloud service to which the check item belongs.
   * 
   * @example
   * Others
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  /**
   * @remarks
   * The start time of the deletion.
   * 
   * @example
   * 2022-08-23T17:05:30+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the deletion.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-23T17:06:01+08:00
   */
  deletionTime?: string;
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period of 45 days. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The reasons why the member fails to be deleted.
   */
  failReasonList?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList[];
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   Success: The member is deleted.
   * *   Checking: A deletion check is being performed for the member.
   * *   Deleting: The member is being deleted.
   * *   CheckFailed: The deletion check for the member fails.
   * *   DeleteFailed: The member fails to be deleted.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createTime: 'CreateTime',
      deletionTime: 'DeletionTime',
      deletionType: 'DeletionType',
      failReasonList: 'FailReasonList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      deletionTime: 'string',
      deletionType: 'string',
      failReasonList: { 'type': 'array', 'itemType': GetAccountDeletionStatusResponseBodyRdAccountDeletionStatusFailReasonList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failReasonList)) {
      $dara.Model.validateArray(this.failReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponseBodyControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times that the access control policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 2021-03-18T08:51:33Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy. Valid values:
   * 
   * *   All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * *   RAM: The access control policy is in effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The document of the access control policy.
   * 
   * @example
   * {\\"Version\\":\\"1\\",\\"Statement\\":[{\\"Effect\\":\\"Deny\\",\\"Action\\":[\\"ram:UpdateRole\\",\\"ram:DeleteRole\\",\\"ram:AttachPolicyToRole\\",\\"ram:DetachPolicyFromRole\\"],\\"Resource\\":\\"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole\\"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the access control policy was updated.
   * 
   * @example
   * 2021-03-18T08:51:33Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2021-06-15T06:39:08.521Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-Jyl5U7****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * Applications
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-Wm****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The path of the folder in the resource directory.
   */
  resourceDirectoryPath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
      resourceDirectoryPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-24T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The real-name verification information of the invitee.
   * 
   * > This parameter is available only when an invitee calls this operation.
   * 
   * @example
   * Alice
   */
  invitedAccountRealName?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * company@example.com
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The real-name verification information of the management account of the resource directory.
   * 
   * > This parameter is available only when an invitee calls this operation.
   * 
   * @example
   * company
   */
  masterAccountRealName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-abcdef****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      invitedAccountRealName: 'InvitedAccountRealName',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      masterAccountRealName: 'MasterAccountRealName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      invitedAccountRealName: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      masterAccountRealName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactResponseBodyContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The time when the contact was created.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  createDate?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The IDs of objects to which the contact is bound.
   */
  members?: string[];
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * tom
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The status of the contact. Valid values:
   * 
   * *   Verifying
   * *   Active
   * *   Deleting
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      createDate: 'CreateDate',
      emailAddress: 'EmailAddress',
      members: 'Members',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      createDate: 'string',
      emailAddress: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 199796839435****
   */
  accountId?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      messageTypes: 'MessageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponseBodyContactDeletionStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  failReasonList?: GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList[];
  /**
   * @remarks
   * The deletion status of the contact. Valid values:
   * 
   * *   Deleting
   * *   Failed
   * 
   * @example
   * Deleting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      failReasonList: 'FailReasonList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      failReasonList: { 'type': 'array', 'itemType': GetMessageContactDeletionStatusResponseBodyContactDeletionStatusFailReasonList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failReasonList)) {
      $dara.Model.validateArray(this.failReasonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @example
   * Enabled
   */
  controlPolicyStatus?: string;
  /**
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  identityInformation?: string;
  /**
   * @example
   * 172845045600****
   */
  masterAccountId?: string;
  /**
   * @example
   * aliyun-admin
   */
  masterAccountName?: string;
  /**
   * @example
   * Enabled
   */
  memberDeletionStatus?: string;
  /**
   * @example
   * rd-St****
   */
  resourceDirectoryId?: string;
  /**
   * @example
   * r-Zo****
   */
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyStatus: 'ControlPolicyStatus',
      createTime: 'CreateTime',
      identityInformation: 'IdentityInformation',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      memberDeletionStatus: 'MemberDeletionStatus',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyStatus: 'string',
      createTime: 'string',
      identityInformation: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      memberDeletionStatus: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class InviteAccountToResourceDirectoryResponseBodyHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-24T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * Alice
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-abcdef****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending
   * *   Accepted
   * *   Cancelled
   * *   Declined
   * *   Expired
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequestTag extends $dara.Model {
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

export class ListAccountsResponseBodyAccountsAccountTagsTag extends $dara.Model {
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
   * oxy01414357@alibaba-inc.com
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
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-QRzuim****
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
   * 2021-01-18T08:01:50.522Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The time when the member was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-01-18T08:04:37.668Z
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
   * The tags that are added to the member.
   */
  tags?: ListAccountsResponseBodyAccountsAccountTags;
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
      deletionStatus: 'string',
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

export class ListAccountsForParentRequestTag extends $dara.Model {
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

export class ListAncestorsResponseBodyFoldersFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2019-01-18T10:03:35.217Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * r-b1****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * root
   */
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFolders extends $dara.Model {
  folder?: ListAncestorsResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAncestorsResponseBodyFoldersFolder },
    };
  }

  validate() {
    if(Array.isArray(this.folder)) {
      $dara.Model.validateArray(this.folder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBodyControlPoliciesControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times that the access control policy is referenced.
   * 
   * @example
   * 44
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 2020-08-05T06:32:24Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * System access control policy available for all operations on the cloud
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy. Valid values:
   * 
   * *   All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * *   RAM: The access control policy is in effect only for RAM users and RAM roles.
   * 
   * @example
   * All
   */
  effectScope?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-FullAliyunAccess
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * FullAliyunAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the access control policy was updated.
   * 
   * @example
   * 2020-08-05T06:32:24Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBodyControlPolicies extends $dara.Model {
  controlPolicy?: ListControlPoliciesResponseBodyControlPoliciesControlPolicy[];
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: { 'type': 'array', 'itemType': ListControlPoliciesResponseBodyControlPoliciesControlPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.controlPolicy)) {
      $dara.Model.validateArray(this.controlPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the access control policy was attached.
   * 
   * @example
   * 2021-03-19T02:56:24Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy. Valid values:
   * 
   * *   All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * *   RAM: The access control policy is in effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments extends $dara.Model {
  controlPolicyAttachment?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachment: 'ControlPolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachment: { 'type': 'array', 'itemType': ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.controlPolicyAttachment)) {
      $dara.Model.validateArray(this.controlPolicyAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the member was specified as a delegated administrator account.
   * 
   * @example
   * 1616652684164
   */
  delegationEnabledTime?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * abc
   */
  displayName?: string;
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
   * The identifier of the trusted service.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      delegationEnabledTime: 'DelegationEnabledTime',
      displayName: 'DisplayName',
      joinMethod: 'JoinMethod',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      delegationEnabledTime: 'string',
      displayName: 'string',
      joinMethod: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBodyAccounts extends $dara.Model {
  account?: ListDelegatedAdministratorsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListDelegatedAdministratorsResponseBodyAccountsAccount },
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

export class ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService extends $dara.Model {
  /**
   * @remarks
   * The time when the member was specified as a delegated administrator account.
   * 
   * @example
   * 1616652684164
   */
  delegationEnabledTime?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  /**
   * @remarks
   * The status of the trusted service. Valid values:
   * 
   * *   ENABLED: enabled
   * *   DISABLED: disabled
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delegationEnabledTime: 'DelegationEnabledTime',
      servicePrincipal: 'ServicePrincipal',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegationEnabledTime: 'string',
      servicePrincipal: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBodyDelegatedServices extends $dara.Model {
  delegatedService?: ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService[];
  static names(): { [key: string]: string } {
    return {
      delegatedService: 'DelegatedService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedService: { 'type': 'array', 'itemType': ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService },
    };
  }

  validate() {
    if(Array.isArray(this.delegatedService)) {
      $dara.Model.validateArray(this.delegatedService);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
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

export class ListFoldersForParentResponseBodyFoldersFolderTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
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

export class ListFoldersForParentResponseBodyFoldersFolderTags extends $dara.Model {
  tag?: ListFoldersForParentResponseBodyFoldersFolderTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListFoldersForParentResponseBodyFoldersFolderTagsTag },
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

export class ListFoldersForParentResponseBodyFoldersFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * rd-evic31****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * project-1
   */
  folderName?: string;
  /**
   * @remarks
   * The tags added to the folder.
   */
  tags?: ListFoldersForParentResponseBodyFoldersFolderTags;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      tags: ListFoldersForParentResponseBodyFoldersFolderTags,
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

export class ListFoldersForParentResponseBodyFolders extends $dara.Model {
  folder?: ListFoldersForParentResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListFoldersForParentResponseBodyFoldersFolder },
    };
  }

  validate() {
    if(Array.isArray(this.folder)) {
      $dara.Model.validateArray(this.folder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakesHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-24T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-4N57QZzCTtES****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * CompanyA
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-abcdef****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited Alibaba Cloud account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited Alibaba Cloud account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakes extends $dara.Model {
  handshake?: ListHandshakesForAccountResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForAccountResponseBodyHandshakesHandshake },
    };
  }

  validate() {
    if(Array.isArray(this.handshake)) {
      $dara.Model.validateArray(this.handshake);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake extends $dara.Model {
  /**
   * @remarks
   * The time when the invitation was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the invitation expires. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-24T09:55:41Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account of the resource directory.
   * 
   * @example
   * Alice
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The time when the invitation was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-10T09:55:41Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the invitation.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-abcdef****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the invitation. Valid values:
   * 
   * *   Pending: The invitation is waiting for confirmation.
   * *   Accepted: The invitation is accepted.
   * *   Cancelled: The invitation is canceled.
   * *   Declined: The invitation is rejected.
   * *   Expired: The invitation expires.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ID or logon email address of the invited account.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      handshakeId: 'HandshakeId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      note: 'Note',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      handshakeId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      note: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      targetEntity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakes extends $dara.Model {
  handshake?: ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake },
    };
  }

  validate() {
    if(Array.isArray(this.handshake)) {
      $dara.Model.validateArray(this.handshake);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactVerificationsResponseBodyContactVerifications extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The object that is used for verification. Valid values:
   * 
   * - Mobile phone number
   * - Email address
   * 
   * @example
   * someone***@example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactsResponseBodyContacts extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was bound to the objects.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  associatedDate?: string;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The time when the contact was added.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  createDate?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The IDs of objects to which the contact is bound.
   */
  members?: string[];
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * tom
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The status of the contact. Valid values:
   * 
   * - Verifying
   * - Active
   * - Deleting
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      associatedDate: 'AssociatedDate',
      contactId: 'ContactId',
      createDate: 'CreateDate',
      emailAddress: 'EmailAddress',
      members: 'Members',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedDate: 'string',
      contactId: 'string',
      createDate: 'string',
      emailAddress: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * team
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * v1
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 1098***
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the object whose tags are queried. Valid values:
   * 
   * *   Account: member
   * 
   * @example
   * Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * k1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the access control policy was attached to the object.
   * 
   * @example
   * 2021-03-19T02:56:24Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * Dev_Department
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   Root: Root folder
   * *   Folder: subfolder of the Root folder
   * *   Account: member
   * 
   * @example
   * Folder
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments extends $dara.Model {
  targetAttachment?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment[];
  static names(): { [key: string]: string } {
    return {
      targetAttachment: 'TargetAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAttachment: { 'type': 'array', 'itemType': ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.targetAttachment)) {
      $dara.Model.validateArray(this.targetAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal extends $dara.Model {
  /**
   * @remarks
   * The time when the trusted service was enabled.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  enableTime?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * @example
   * config.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      enableTime: 'EnableTime',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTime: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipals extends $dara.Model {
  enabledServicePrincipal?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal[];
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipal: 'EnabledServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipal: { 'type': 'array', 'itemType': ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal },
    };
  }

  validate() {
    if(Array.isArray(this.enabledServicePrincipal)) {
      $dara.Model.validateArray(this.enabledServicePrincipal);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckForConsolidatedBillingAccountResponseBodyReasons extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * PaymentAccountEnterpriseInvoiceError
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * No enterprise invoice header information is set for the payment account.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * A tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * A tag value can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:`.
   * 
   * @example
   * v1
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

export class UpdateAccountResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the member.
   * 
   * @example
   * ecs-manager@aliyun.com
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
   * rd-k3****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   CreateSuccess: The member is created.
   * *   InviteSuccess: The member accepts the invitation.
   * *   Removed: The member is removed.
   * *   SwitchSuccess: The type of the member is switched.
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

export class UpdateControlPolicyResponseBodyControlPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times that the access control policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: string;
  /**
   * @remarks
   * The time when the access control policy was created.
   * 
   * @example
   * 2021-03-18T09:24:19Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy. Valid values:
   * 
   * *   All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * *   RAM: The access control policy is in effect only for RAM users and RAM roles.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * NewControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access control policy. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the access control policy was updated.
   * 
   * @example
   * 2021-03-18T10:04:55Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'string',
      createDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2019-02-19T09:34:50.757Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-u8B321****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * rdFolder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * You can call the [ListHandshakesForAccount](~~ListHandshakesForAccount~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * h-Ih8IuPfvV0t0****
   */
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: AcceptHandshakeResponseBodyHandshake;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5828C836-3286-49A6-9006-15231BB19342
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: AcceptHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AcceptHandshakeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * After you specify an email address, you need to call [SendEmailVerificationForMessageContact](~~SendEmailVerificationForMessageContact~~) to send verification information to the email address. After the verification is passed, the email address takes effect.
   * 
   * This parameter is required.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   * 
   * This parameter is required.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * The name must be unique in your resource directory.
   * 
   * The name must be 2 to 12 characters in length and can contain only letters.
   * 
   * This parameter is required.
   * 
   * @example
   * tom
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * > Only mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are supported.
   * 
   * After you specify a mobile phone number, you need to call [SendPhoneVerificationForMessageContact](~~SendPhoneVerificationForMessageContact~~) to send verification information to the mobile phone number. After the verification is passed, the mobile phone number takes effect.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * Valid values:
   * 
   * *   FinanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   TechnicalDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MaintenanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CEO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ProjectDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Other
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      emailAddress: 'EmailAddress',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailAddress: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  contact?: AddMessageContactResponseBodyContact;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DFCE4C9-04A9-4C83-BB14-FE791275EC53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: AddMessageContactResponseBodyContact,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The IDs of objects to which you want to bind the contact.
   */
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was bound to the object.
   */
  members?: AssociateMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AssociateMembersResponseBodyMembers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the object to which you want to attach the access control policy. Access control policies can be attached to the following objects:
   * 
   * *   Root folder
   * *   Subfolders of the Root folder
   * *   Members
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone number that you want to bind to the member for security purposes.
   * 
   * The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the \\<Country code>-\\<Mobile phone number> format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xx-13900001234
   */
  secureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call the [SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~) operation to obtain the verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSecureMobilePhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0217AFEB-5318-56D4-B167-1933D83EDF3F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSecureMobilePhoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindSecureMobilePhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindSecureMobilePhoneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelChangeAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelChangeAccountEmailResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelChangeAccountEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelChangeAccountEmailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: CancelHandshakeResponseBodyHandshake;
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
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: CancelHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelHandshakeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelMessageContactUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelMessageContactUpdateResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelMessageContactUpdateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelMessageContactUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelMessageContactUpdateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The email address to be bound to the member.
   * 
   * > The system automatically sends a verification email to the email address. After the verification is passed, the email address takes effect, and the system changes both the logon email address and secure email address of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountEmailResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeAccountEmailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 179855839641****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountDeleteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CDDDCEF-CDFD-0825-B7D7-217BE0897B22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountDeleteResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccountDeleteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccountDeleteResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the access control policy.
   * 
   * The description must be 1 to 1,024 characters in length. The description can contain letters, digits, underscores (_), and hyphens (-) and must start with a letter.
   * 
   * @example
   * ExampleControlPolicy
   */
  description?: string;
  /**
   * @remarks
   * The effective scope of the access control policy.
   * 
   * The value RAM indicates that the access control policy takes effect only for RAM users and RAM roles.
   * 
   * This parameter is required.
   * 
   * @example
   * RAM
   */
  effectScope?: string;
  /**
   * @remarks
   * The document of the access control policy.
   * 
   * The document can be a maximum of 4,096 characters in length.
   * 
   * For more information about the languages of access control policies, see [Languages of access control policies](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For more information about the examples of access control policies, see [Examples of custom access control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * The name must be 1 to 128 characters in length. The name can contain letters, digits, and hyphens (-) and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * ExampleControlPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The tag to add to the access control policy.
   */
  tag?: CreateControlPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyName: 'string',
      tag: { 'type': 'array', 'itemType': CreateControlPolicyRequestTag },
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

export class CreateControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: CreateControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 776B05B3-A0B0-464B-A191-F4E1119A94B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: CreateControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicy && typeof (this.controlPolicy as any).validate === 'function') {
      (this.controlPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the folder.
   * 
   * The name must be 1 to 24 characters in length and can contain letters, digits, underscores (_), periods (.),and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rdFolder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The tag to add to the folder.
   */
  tag?: CreateFolderRequestTag[];
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      parentFolderId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFolderRequestTag },
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

export class CreateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the folder.
   */
  folder?: CreateFolderResponseBodyFolder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CBCA30-C8DD-423E-B4AD-4FB694C9180C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: CreateFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folder && typeof (this.folder as any).validate === 'function') {
      (this.folder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFolderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix for the Alibaba Cloud account name of the member. If you leave this parameter empty, the system randomly generates a prefix.
   * 
   * The prefix must be 2 to 37 characters in length.
   * 
   * The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start with a letter or digit and end with a letter or digit. Valid special characters include underscores (`_`), periods (.), and hyphens (`-`).
   * 
   * The complete Alibaba Cloud account name of a member in a resource directory is in the @.aliyunid.com format, such as `alice@rd-3G****.aliyunid.com`.
   * 
   * Each name must be unique in the resource directory.
   * 
   * @example
   * alice
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * The name must be 2 to 50 characters in length.
   * 
   * The name can contain letters, digits, underscores (_), periods (.), hyphens (-), and spaces.
   * 
   * The name must be unique in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Dev
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks whether an identity type can be specified for the member. If the request does not pass the dry run, an error code is returned.
   * *   false (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-r23M55****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The ID of the billing account. If you leave this parameter empty, the newly created member is used as its billing account.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * *   resell: The member is an account for a reseller. This is the default value. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * > This parameter is available only for resellers at the international site (alibabacloud.com).
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tag of the member.
   */
  tag?: CreateResourceAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      displayName: 'DisplayName',
      dryRun: 'DryRun',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
      resellAccountType: 'ResellAccountType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      displayName: 'string',
      dryRun: 'boolean',
      parentFolderId: 'string',
      payerAccountId: 'string',
      resellAccountType: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceAccountRequestTag },
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

export class CreateResourceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the member.
   */
  account?: CreateResourceAccountResponseBodyAccount;
  /**
   * @remarks
   * The ID of the request.
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

export class CreateResourceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: DeclineHandshakeResponseBodyHandshake;
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
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: DeclineHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeclineHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeclineHandshakeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items that you can choose to ignore for the member deletion.
   * 
   * You can obtain the IDs from the response of the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation.
   */
  abandonableCheckId?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckId: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckId: { 'type': 'array', 'itemType': 'string' },
      accountId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abandonableCheckId)) {
      $dara.Model.validateArray(this.abandonableCheckId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items that you can choose to ignore for the member deletion.
   * 
   * You can obtain the IDs from the response of the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation.
   */
  abandonableCheckIdShrink?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      abandonableCheckIdShrink: 'AbandonableCheckId',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abandonableCheckIdShrink: 'string',
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
   * 
   * @example
   * 0
   */
  deletionType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 009429F8-C1C0-5872-B674-A6C2333B9647
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionType: 'DeletionType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C8541E06-B207-46BF-92C9-DC8DE4609D75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ae1in7****
   */
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFolderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * Specifies whether to retain the contact for members. Valid values:
   * 
   * *   true (default): retains the contact for members. In this case, the contact can still receive messages for the members.
   * *   false: does not retain the contact for members. In this case, the contact can no longer receive messages for the members. If you set this parameter to false, the response is asynchronously returned. You can call [GetMessageContactDeletionStatus](~~GetMessageContactDeletionStatus~~) to obtain the deletion result.
   * 
   * @example
   * true
   */
  retainContactInMembers?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      retainContactInMembers: 'RetainContactInMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      retainContactInMembers: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The deletion status of the contact. Valid values:
   * 
   * *   Deleting
   * *   Deleted
   * 
   * @example
   * Deleting
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterDelegatedAdministratorRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * This parameter is required.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterDelegatedAdministratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DF5D5C52-7BD0-40E7-94C6-23A1505038A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterDelegatedAdministratorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterDelegatedAdministratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeregisterDelegatedAdministratorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DestroyResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DestroyResourceDirectoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the object from which you want to detach the access control policy. Access control policies can be attached to the following objects:
   * 
   * *   Root folder
   * *   Subfolders of the Root folder
   * *   Members
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EA4F962-1A2E-4AFE-BE0C-B14736FC46CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   PendingEnable: The feature is being enabled.
   * *   Disabled: The feature is disabled.
   * *   PendingDisable: The feature is being disabled.
   * 
   * @example
   * PendingDisable
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C709979-451D-4C92-835D-7DDCCAA562E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The IDs of objects from which you want to unbind the contact.
   * 
   * This parameter is required.
   */
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was unbound from the object.
   */
  members?: DisassociateMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DisassociateMembersResponseBodyMembers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisassociateMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   PendingEnable: The feature is being enabled.
   * *   Disabled: The feature is disabled.
   * *   PendingDisable: The feature is being disabled.
   * 
   * @example
   * PendingEnable
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE7BD95-EFFA-4911-A1E0-BD4412697FEB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The mode in which you enable a resource directory. Valid values:
   * 
   * *   CurrentAccount: The current account is used to enable a resource directory.
   * *   NewManagementAccount: A newly created account is used to enable a resource directory. If you select this mode, you must configure the `MAName`, `MASecureMobilePhone`, and `VerificationCode` parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * CurrentAccount
   */
  enableMode?: string;
  /**
   * @remarks
   * The name of the newly created account.
   * 
   * Specify the name in the `<Prefix>@rdadmin.aliyunid.com` format. The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start and end with a letter or digit. Valid special characters include underscores (`_`), periods (.), and hyphens (-). The prefix must be 2 to 50 characters in length.
   * 
   * @example
   * user01@rdadmin.aliyunid.com
   */
  MAName?: string;
  /**
   * @remarks
   * The mobile phone number that is bound to the newly created account.
   * 
   * If you leave this parameter empty, the mobile phone number that is bound to the current account is used. The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * @example
   * xx-13900001234
   */
  MASecureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call the [SendVerificationCodeForEnableRD](~~SendVerificationCodeForEnableRD~~) operation to obtain the verification code.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      enableMode: 'EnableMode',
      MAName: 'MAName',
      MASecureMobilePhone: 'MASecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      enableMode: 'string',
      MAName: 'string',
      MASecureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC2FE94D-A4A2-51A1-A493-5C273A36C46A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource directory.
   */
  resourceDirectory?: EnableResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: EnableResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  validate() {
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableResourceDirectoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      includeTags: 'IncludeTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      includeTags: 'boolean',
    };
  }

  validate() {
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

export class GetAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 179855839641****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the deletion check for the member.
   */
  accountDeletionCheckResultInfo?: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54AC391D-4F7F-5F08-B8D3-0AECDE6EC5BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDeletionCheckResultInfo: 'AccountDeletionCheckResultInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDeletionCheckResultInfo: GetAccountDeletionCheckResultResponseBodyAccountDeletionCheckResultInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountDeletionCheckResultInfo && typeof (this.accountDeletionCheckResultInfo as any).validate === 'function') {
      (this.accountDeletionCheckResultInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionCheckResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountDeletionCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountDeletionCheckResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 169946124551****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion status of the member.
   */
  rdAccountDeletionStatus?: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AA43293-7C8F-5730-8F2D-7F864EC092C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rdAccountDeletionStatus: 'RdAccountDeletionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdAccountDeletionStatus: GetAccountDeletionStatusResponseBodyRdAccountDeletionStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.rdAccountDeletionStatus && typeof (this.rdAccountDeletionStatus as any).validate === 'function') {
      (this.rdAccountDeletionStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountDeletionStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountDeletionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountDeletionStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the description of the access control policy. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-SImPt8GCEwiq****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: GetControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AB769936-CDFA-4D52-8CE2-A3581800044A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: GetControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicy && typeof (this.controlPolicy as any).validate === 'function') {
      (this.controlPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyEnablementStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   PendingEnable: The feature is being enabled.
   * *   Disabled: The feature is disabled.
   * *   PendingDisable: The feature is being disabled.
   * 
   * @example
   * Disabled
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DC39A4E-3B52-4EFE-9F93-4897D7FFA0C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlPolicyEnablementStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetControlPolicyEnablementStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetControlPolicyEnablementStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-Jyl5U7****
   */
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the folder.
   */
  folder?: GetFolderResponseBodyFolder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CBCA30-C8DD-423E-B4AD-4FB694C9180C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: GetFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folder && typeof (this.folder as any).validate === 'function') {
      (this.folder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFolderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * h-ycm4rp****
   */
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitation.
   */
  handshake?: GetHandshakeResponseBodyHandshake;
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
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: GetHandshakeResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHandshakeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  contact?: GetMessageContactResponseBodyContact;
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
      contact: 'Contact',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: GetMessageContactResponseBodyContact,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion information of the contact.
   */
  contactDeletionStatus?: GetMessageContactDeletionStatusResponseBodyContactDeletionStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactDeletionStatus: 'ContactDeletionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactDeletionStatus: GetMessageContactDeletionStatusResponseBodyContactDeletionStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contactDeletionStatus && typeof (this.contactDeletionStatus as any).validate === 'function') {
      (this.contactDeletionStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactDeletionStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageContactDeletionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageContactDeletionStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * @example
   * 172841235500****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The name of the billing account.
   * 
   * @example
   * Alice
   */
  payerAccountName?: string;
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
      payerAccountId: 'PayerAccountId',
      payerAccountName: 'PayerAccountName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerAccountId: 'string',
      payerAccountName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPayerForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPayerForAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  resourceDirectory?: GetResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: GetResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  validate() {
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceDirectoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the invitation.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: InviteAccountToResourceDirectoryRequestTag[];
  /**
   * @remarks
   * The ID or logon email address of the account that you want to invite.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  targetEntity?: string;
  /**
   * @remarks
   * The type of the invited account. Valid values:
   * 
   * *   Account: indicates the ID of the account.
   * *   Email: indicates the logon email address of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * Email
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      parentFolderId: 'ParentFolderId',
      tag: 'Tag',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      parentFolderId: 'string',
      tag: { 'type': 'array', 'itemType': InviteAccountToResourceDirectoryRequestTag },
      targetEntity: 'string',
      targetType: 'string',
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

export class InviteAccountToResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the invitation.
   */
  handshake?: InviteAccountToResourceDirectoryResponseBodyHandshake;
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
      handshake: 'Handshake',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: InviteAccountToResourceDirectoryResponseBodyHandshake,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handshake && typeof (this.handshake as any).validate === 'function') {
      (this.handshake as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InviteAccountToResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InviteAccountToResourceDirectoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return information about tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used for the query, such as the display name of a member.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * Advance
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The tags. This parameter specifies a filter condition.
   */
  tag?: ListAccountsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsRequestTag },
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

export class ListAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the members.
   */
  accounts?: ListAccountsResponseBodyAccounts;
  nextToken?: string;
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
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListAccountsResponseBodyAccounts,
      nextToken: 'string',
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

export class ListAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return information about tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The keyword used for the query, such as the display name of a member.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * admin
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The tags. This parameter specifies a filter condition.
   */
  tag?: ListAccountsForParentRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsForParentRequestTag },
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

export class ListAccountsForParentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountsForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsForParentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subfolder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-i1c9nr****
   */
  childId?: string;
  static names(): { [key: string]: string } {
    return {
      childId: 'ChildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the folders.
   */
  folders?: ListAncestorsResponseBodyFolders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 83AFBEB6-DC03-406E-9686-867461FF6698
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListAncestorsResponseBodyFolders,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folders && typeof (this.folders as any).validate === 'function') {
      (this.folders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAncestorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAncestorsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the descriptions of the access control policies. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is available only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the access control policies. Valid values:
   * 
   * *   System: system access control policy
   * *   Custom: custom access control policy
   * 
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the access control policies.
   */
  controlPolicies?: ListControlPoliciesResponseBodyControlPolicies;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9424A34C-3471-45AD-B6AB-924BBDFE42F9
   */
  requestId?: string;
  /**
   * @remarks
   * The number of access control policies.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      controlPolicies: 'ControlPolicies',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicies: ListControlPoliciesResponseBodyControlPolicies,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.controlPolicies && typeof (this.controlPolicies as any).validate === 'function') {
      (this.controlPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListControlPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListControlPoliciesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the descriptions of the access control policies. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the object whose access control policies you want to query. Access control policies can be attached to the following objects:
   * 
   * *   Root folder
   * *   Subfolders of the Root folder
   * *   Members
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the attached access control policies.
   */
  controlPolicyAttachments?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C276B600-7B7A-49E8-938C-E16CFA955A82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachments: 'ControlPolicyAttachments',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachments: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicyAttachments && typeof (this.controlPolicyAttachments as any).validate === 'function') {
      (this.controlPolicyAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListControlPolicyAttachmentsForTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListControlPolicyAttachmentsForTargetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * For more information, see the `Trusted service identifier` column in [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedAdministratorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the delegated administrator accounts.
   */
  accounts?: ListDelegatedAdministratorsResponseBodyAccounts;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 009C3A02-7D4B-416C-9CE7-548C91508F1E
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
      accounts: ListDelegatedAdministratorsResponseBodyAccounts,
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

export class ListDelegatedAdministratorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDelegatedAdministratorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDelegatedAdministratorsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the trusted services.
   * 
   * > If the value of this parameter is empty, the member is not specified as a delegated administrator account.
   */
  delegatedServices?: ListDelegatedServicesForAccountResponseBodyDelegatedServices;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D9C03B94-9396-4794-A74B-13DC437556A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      delegatedServices: 'DelegatedServices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedServices: ListDelegatedServicesForAccountResponseBodyDelegatedServices,
      requestId: 'string',
    };
  }

  validate() {
    if(this.delegatedServices && typeof (this.delegatedServices as any).validate === 'function') {
      (this.delegatedServices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDelegatedServicesForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDelegatedServicesForAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * If you leave this parameter empty, the information of the first-level subfolders of the Root folder is queried.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The keyword used for the query, such as a folder name.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * rdFolder
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The tags. This parameter specifies a filter condition.
   */
  tag?: ListFoldersForParentRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListFoldersForParentRequestTag },
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

export class ListFoldersForParentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The folders.
   */
  folders?: ListFoldersForParentResponseBodyFolders;
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
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListFoldersForParentResponseBodyFolders,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.folders && typeof (this.folders as any).validate === 'function') {
      (this.folders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFoldersForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoldersForParentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitations.
   */
  handshakes?: ListHandshakesForAccountResponseBodyHandshakes;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of invitations.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      handshakes: 'Handshakes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakes: ListHandshakesForAccountResponseBodyHandshakes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.handshakes && typeof (this.handshakes as any).validate === 'function') {
      (this.handshakes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHandshakesForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHandshakesForAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the invitations.
   */
  handshakes?: ListHandshakesForResourceDirectoryResponseBodyHandshakes;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
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
      handshakes: 'Handshakes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakes: ListHandshakesForResourceDirectoryResponseBodyHandshakes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.handshakes && typeof (this.handshakes as any).validate === 'function') {
      (this.handshakes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHandshakesForResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListHandshakesForResourceDirectoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactVerificationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
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
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactVerificationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The record for the contact to be verified.
   */
  contactVerifications?: ListMessageContactVerificationsResponseBodyContactVerifications[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contactVerifications: 'ContactVerifications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactVerifications: { 'type': 'array', 'itemType': ListMessageContactVerificationsResponseBodyContactVerifications },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactVerifications)) {
      $dara.Model.validateArray(this.contactVerifications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactVerificationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMessageContactVerificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMessageContactVerificationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The ID of the object to which the contact is bound. Valid values:
   * 
   * *   ID of the resource directory
   * *   ID of the folder
   * *   ID of the member
   * 
   * @example
   * fd-ZDNPiT****
   */
  member?: string;
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
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      member: 'Member',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      member: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was bound to the objects.
   */
  contacts?: ListMessageContactsResponseBodyContacts[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': ListMessageContactsResponseBodyContacts },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageContactsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMessageContactsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMessageContactsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key for a fuzzy query.
   * 
   * @example
   * team
   */
  keyFilter?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * The value Account indicates the members of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      keyFilter: 'KeyFilter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyFilter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tag keys.
   */
  tags?: ListTagKeysResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTags },
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

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The Alibaba Cloud account IDs of the members. This parameter specifies a filter condition for the query.
   * 
   * > If you want to query the tags that are added to the members in a resource directory, you must configure both the `ResourceId` and `ResourceType` parameters and set the `ResourceType` parameter to `Account` in your request.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects whose tags you want to query. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   Account: member
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags. This parameter specifies a filter condition for the query.
   * 
   * You can specify a maximum of 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.```` Valid values:
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.````
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8054B059-6B36-53BF-AA45-B8C9A0ED05AB
   */
  requestId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * The value Account indicates the members of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key. This parameter specifies a filter condition for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value for a fuzzy query.
   * 
   * @example
   * v1
   */
  valueFilter?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      valueFilter: 'ValueFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
      tagKey: 'string',
      valueFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tag values.
   */
  tags?: ListTagValuesResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagValuesResponseBodyTags },
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

export class ListTagValuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagValuesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponseBody extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B32BD3D6-1089-41F3-8E70-E0079BC7D760
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the objects to which the access control policy is attached.
   */
  targetAttachments?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments;
  /**
   * @remarks
   * The total number of objects to which the access control policy is attached.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      targetAttachments: 'TargetAttachments',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      targetAttachments: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.targetAttachments && typeof (this.targetAttachments as any).validate === 'function') {
      (this.targetAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTargetAttachmentsForControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTargetAttachmentsForControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or delegated administrator account.
   * 
   * *   If you set this parameter to the ID of a management account, the trusted services that are enabled within the management account are queried. The default value of this parameter is the ID of an management account.
   * *   If you set this parameter to the ID of a delegated administrator account, the trusted services that are enabled within the delegated administrator account are queried.
   * 
   * For more information about trusted services and delegated administrator accounts, see [Overview of trusted services](https://help.aliyun.com/document_detail/208133.html) and [Delegated administrator accounts](https://help.aliyun.com/document_detail/208117.html).
   * 
   * @example
   * 177242285274****
   */
  adminAccountId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      adminAccountId: 'AdminAccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminAccountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the trusted services that are enabled.
   */
  enabledServicePrincipals?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
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
      enabledServicePrincipals: 'EnabledServicePrincipals',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipals: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.enabledServicePrincipals && typeof (this.enabledServicePrincipals as any).validate === 'function') {
      (this.enabledServicePrincipals as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrustedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrustedServiceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member that you want to move.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the destination folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-bVaRIG****
   */
  destinationFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      destinationFolderId: 'DestinationFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      destinationFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckForConsolidatedBillingAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member to be used as a main financial account.
   * 
   * This parameter is required.
   * 
   * @example
   * 111***089
   */
  billingAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      billingAccountId: 'BillingAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckForConsolidatedBillingAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cause of the check failure.
   */
  reasons?: PrecheckForConsolidatedBillingAccountResponseBodyReasons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E6B6CA8-9E7A-521F-A743-AA582714727E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the check was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      reasons: 'Reasons',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasons: { 'type': 'array', 'itemType': PrecheckForConsolidatedBillingAccountResponseBodyReasons },
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckForConsolidatedBillingAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PrecheckForConsolidatedBillingAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PrecheckForConsolidatedBillingAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDelegatedAdministratorRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * For more information, see the `Trusted service identifier` column in [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      servicePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDelegatedAdministratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A45FC8F-54D2-4A65-8338-25E5DEBDA304
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDelegatedAdministratorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterDelegatedAdministratorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterDelegatedAdministratorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveCloudAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeAccountEmailResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryChangeAccountEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryChangeAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryChangeAccountEmailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendEmailVerificationForMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-5gsZAGt***PGduDF
   */
  contactId?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * The specified email address must be the one you specify when you call [AddMessageContact](~~AddMessageContact~~).
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendEmailVerificationForMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendEmailVerificationForMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendEmailVerificationForMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendEmailVerificationForMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPhoneVerificationForMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * The value must be in the `<Country code>-<Mobile phone number>` format.
   * 
   * The specified mobile phone number must be the one you specify when you call the [AddMessageContact](~~AddMessageContact~~) operation.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPhoneVerificationForMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendPhoneVerificationForMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendPhoneVerificationForMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendPhoneVerificationForMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone number that you want to bind to the member for security purposes.
   * 
   * Specify the mobile phone number in the \\<Country code>-\\<Mobile phone number> format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xx-13900001234
   */
  secureMobilePhone?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the verification code expires.
   * 
   * @example
   * 2021-12-17T07:38:41.747Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DCD43660-75DD-5D15-B342-1B83FCA5B913
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expirationDate: 'ExpirationDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDate: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForBindSecureMobilePhoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerificationCodeForBindSecureMobilePhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerificationCodeForBindSecureMobilePhoneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForEnableRDRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number that is bound to the newly created account. If you leave this parameter empty, the mobile phone number that is bound to the current account is used.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * @example
   * xx-13900001234
   */
  secureMobilePhone?: string;
  static names(): { [key: string]: string } {
    return {
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureMobilePhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForEnableRDResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC2FE94D-A4A2-51A1-A493-5C273A36C46A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerificationCodeForEnableRDResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendVerificationCodeForEnableRDResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendVerificationCodeForEnableRDResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the member deletion feature. Valid values:
   * 
   * *   Enabled: enables the member deletion feature.
   * *   Disabled: disables the member deletion feature.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 151266687691****
   */
  managementAccountId?: string;
  /**
   * @remarks
   * The status of the member deletion feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   Disabled: The feature is disabled.
   * 
   * @example
   * Enabled
   */
  memberDeletionStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C55A4CAA-9039-1DDF-91CE-FCC134513D29
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-3G****
   */
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      managementAccountId: 'ManagementAccountId',
      memberDeletionStatus: 'MemberDeletionStatus',
      requestId: 'RequestId',
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managementAccountId: 'string',
      memberDeletionStatus: 'string',
      requestId: 'string',
      resourceDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMemberDeletionPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetMemberDeletionPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetMemberDeletionPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account IDs of the members.
   * 
   * You can specify a maximum of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects to which you want to add tags. Valid values:
   * 
   * *   Account: member
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can specify a maximum of 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified members. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account IDs of the members.
   * 
   * You can specify a maximum of 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects from which you want to remove tags. Valid values:
   * 
   * *   Account: member
   * 
   * This parameter is required.
   * 
   * @example
   * Account
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys.
   * 
   * You can specify a maximum of 20 tag keys.
   * 
   * > If you set the `All` parameter to `true`, you do not need to specify tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks items such as whether the member status can be modified and whether security information is configured for the member. If the request does not pass the dry run, an error code is returned.
   * *   false (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new type of the member. Valid values:
   * 
   * *   ResourceAccount: resource account
   * *   CloudAccount: cloud account
   * 
   * > You can specify either `NewDisplayName` or `NewAccountType`.
   * 
   * @example
   * ResourceAccount
   */
  newAccountType?: string;
  /**
   * @remarks
   * The new display name of the member.
   * 
   * > You can specify either `NewDisplayName` or `NewAccountType`.
   * 
   * @example
   * admin
   */
  newDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dryRun: 'DryRun',
      newAccountType: 'NewAccountType',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dryRun: 'boolean',
      newAccountType: 'string',
      newDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the member.
   */
  account?: UpdateAccountResponseBodyAccount;
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
      account: UpdateAccountResponseBodyAccount,
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

export class UpdateAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the access control policy.
   * 
   * The description must be 1 to 1,024 characters in length. The description can contain letters, digits, underscores (_), and hyphens (-) and must start with a letter.
   * 
   * @example
   * ExampleControlPolicy
   */
  newDescription?: string;
  /**
   * @remarks
   * The new document of the access control policy.
   * 
   * The document can be a maximum of 4,096 characters in length.
   * 
   * For more information about the languages of access control policies, see [Languages of access control policies](https://help.aliyun.com/document_detail/179096.html).
   * 
   * For more information about the examples of access control policies, see [Examples of custom access control policies](https://help.aliyun.com/document_detail/181474.html).
   * 
   * @example
   * {"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}
   */
  newPolicyDocument?: string;
  /**
   * @remarks
   * The new name of the access control policy.
   * 
   * The name must be 1 to 128 characters in length. The name can contain letters, digits, and hyphens (-) and must start with a letter.
   * 
   * @example
   * NewControlPolicy
   */
  newPolicyName?: string;
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cp-jExXAqIYkwHN****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      newPolicyDocument: 'NewPolicyDocument',
      newPolicyName: 'NewPolicyName',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
      newPolicyDocument: 'string',
      newPolicyName: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access control policy.
   */
  controlPolicy?: UpdateControlPolicyResponseBodyControlPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2DFCE4C9-04A9-4C83-BB14-FE791275EC53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicy: 'ControlPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicy: UpdateControlPolicyResponseBodyControlPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicy && typeof (this.controlPolicy as any).validate === 'function') {
      (this.controlPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateControlPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateControlPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateControlPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-u8B321****
   */
  folderId?: string;
  /**
   * @remarks
   * The new name of the folder.
   * 
   * The name must be 1 to 24 characters in length and can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rdFolder
   */
  newFolderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      newFolderName: 'NewFolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      newFolderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the folder.
   */
  folder?: UpdateFolderResponseBodyFolder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CBCA30-C8DD-423E-B4AD-4FB694C9180C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: UpdateFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folder && typeof (this.folder as any).validate === 'function') {
      (this.folder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFolderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * After you specify an email address, you need to call [SendEmailVerificationForMessageContact](~~SendEmailVerificationForMessageContact~~) to send verification information to the email address. After the verification is passed, the email address takes effect.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * tom
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * After you specify a mobile phone number, you need to call [SendPhoneVerificationForMessageContact](~~SendPhoneVerificationForMessageContact~~) to send verification information to the mobile phone number. After the verification is passed, the mobile phone number takes effect.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * Valid values:
   * 
   * *   FinanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   TechnicalDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MaintenanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CEO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ProjectDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Other
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageContactResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMessageContactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMessageContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateMessageContactResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcedirectorymaster", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Accepts an invitation.
   * 
   * @remarks
   * After an invited Alibaba Cloud account joins a resource directory, it becomes a member of the resource directory. By default, the name of the invited Alibaba Cloud account is used as the display name of the account in the resource directory.
   * 
   * @param request - AcceptHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshakeWithOptions(request: AcceptHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<AcceptHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AcceptHandshakeResponse>(await this.callApi(params, req, runtime), new AcceptHandshakeResponse({}));
  }

  /**
   * Accepts an invitation.
   * 
   * @remarks
   * After an invited Alibaba Cloud account joins a resource directory, it becomes a member of the resource directory. By default, the name of the invited Alibaba Cloud account is used as the display name of the account in the resource directory.
   * 
   * @param request - AcceptHandshakeRequest
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshake(request: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  /**
   * Adds a contact.
   * 
   * @param request - AddMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMessageContactResponse
   */
  async addMessageContactWithOptions(request: AddMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<AddMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.messageTypes)) {
      query["MessageTypes"] = request.messageTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddMessageContactResponse>(await this.callApi(params, req, runtime), new AddMessageContactResponse({}));
  }

  /**
   * Adds a contact.
   * 
   * @param request - AddMessageContactRequest
   * @returns AddMessageContactResponse
   */
  async addMessageContact(request: AddMessageContactRequest): Promise<AddMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMessageContactWithOptions(request, runtime);
  }

  /**
   * Binds a contact to a resource directory, folder, or member.
   * 
   * @param request - AssociateMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateMembersResponse
   */
  async associateMembersWithOptions(request: AssociateMembersRequest, runtime: $dara.RuntimeOptions): Promise<AssociateMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateMembers",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AssociateMembersResponse>(await this.callApi(params, req, runtime), new AssociateMembersResponse({}));
  }

  /**
   * Binds a contact to a resource directory, folder, or member.
   * 
   * @param request - AssociateMembersRequest
   * @returns AssociateMembersResponse
   */
  async associateMembers(request: AssociateMembersRequest): Promise<AssociateMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateMembersWithOptions(request, runtime);
  }

  /**
   * Attaches an access control policy.
   * 
   * @remarks
   * After you attach a custom access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * 
   * @param request - AttachControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicyWithOptions(request: AttachControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<AttachControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachControlPolicyResponse>(await this.callApi(params, req, runtime), new AttachControlPolicyResponse({}));
  }

  /**
   * Attaches an access control policy.
   * 
   * @remarks
   * After you attach a custom access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * 
   * @param request - AttachControlPolicyRequest
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicy(request: AttachControlPolicyRequest): Promise<AttachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Binds a mobile phone number to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhoneWithOptions(request: BindSecureMobilePhoneRequest, runtime: $dara.RuntimeOptions): Promise<BindSecureMobilePhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSecureMobilePhone",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<BindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new BindSecureMobilePhoneResponse({}));
  }

  /**
   * Binds a mobile phone number to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhone(request: BindSecureMobilePhoneRequest): Promise<BindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Cancels the email address change of a member.
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmailWithOptions(request: CancelChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<CancelChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new CancelChangeAccountEmailResponse({}));
  }

  /**
   * Cancels the email address change of a member.
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmail(request: CancelChangeAccountEmailRequest): Promise<CancelChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Cancels an invitation.
   * 
   * @param request - CancelHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelHandshakeResponse
   */
  async cancelHandshakeWithOptions(request: CancelHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<CancelHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelHandshakeResponse>(await this.callApi(params, req, runtime), new CancelHandshakeResponse({}));
  }

  /**
   * Cancels an invitation.
   * 
   * @param request - CancelHandshakeRequest
   * @returns CancelHandshakeResponse
   */
  async cancelHandshake(request: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  /**
   * Cancels the update of the mobile phone number or email address of a contact.
   * 
   * @param request - CancelMessageContactUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelMessageContactUpdateResponse
   */
  async cancelMessageContactUpdateWithOptions(request: CancelMessageContactUpdateRequest, runtime: $dara.RuntimeOptions): Promise<CancelMessageContactUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelMessageContactUpdate",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CancelMessageContactUpdateResponse>(await this.callApi(params, req, runtime), new CancelMessageContactUpdateResponse({}));
  }

  /**
   * Cancels the update of the mobile phone number or email address of a contact.
   * 
   * @param request - CancelMessageContactUpdateRequest
   * @returns CancelMessageContactUpdateResponse
   */
  async cancelMessageContactUpdate(request: CancelMessageContactUpdateRequest): Promise<CancelMessageContactUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelMessageContactUpdateWithOptions(request, runtime);
  }

  /**
   * Changes the email address that is bound to a member.
   * 
   * @param request - ChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAccountEmailResponse
   */
  async changeAccountEmailWithOptions(request: ChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<ChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new ChangeAccountEmailResponse({}));
  }

  /**
   * Changes the email address that is bound to a member.
   * 
   * @param request - ChangeAccountEmailRequest
   * @returns ChangeAccountEmailResponse
   */
  async changeAccountEmail(request: ChangeAccountEmailRequest): Promise<ChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Performs a member deletion check.
   * 
   * @remarks
   * Before you delete a member, you must call this API operation to check whether the member can be deleted.
   * 
   * @param request - CheckAccountDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDeleteWithOptions(request: CheckAccountDeleteRequest, runtime: $dara.RuntimeOptions): Promise<CheckAccountDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccountDelete",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckAccountDeleteResponse>(await this.callApi(params, req, runtime), new CheckAccountDeleteResponse({}));
  }

  /**
   * Performs a member deletion check.
   * 
   * @remarks
   * Before you delete a member, you must call this API operation to check whether the member can be deleted.
   * 
   * @param request - CheckAccountDeleteRequest
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDelete(request: CheckAccountDeleteRequest): Promise<CheckAccountDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  /**
   * Creates a custom access control policy.
   * 
   * @param request - CreateControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicyWithOptions(request: CreateControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.effectScope)) {
      query["EffectScope"] = request.effectScope;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateControlPolicyResponse({}));
  }

  /**
   * Creates a custom access control policy.
   * 
   * @param request - CreateControlPolicyRequest
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicy(request: CreateControlPolicyRequest): Promise<CreateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a folder.
   * 
   * @remarks
   * A maximum of five levels of folders can be created under the Root folder.
   * 
   * @param request - CreateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(request: CreateFolderRequest, runtime: $dara.RuntimeOptions): Promise<CreateFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderName)) {
      query["FolderName"] = request.folderName;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  /**
   * Creates a folder.
   * 
   * @remarks
   * A maximum of five levels of folders can be created under the Root folder.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * This topic provides an example on how to call the API operation to create a member in the `fd-r23M55****` folder. The display name of the member is `Dev`, and the prefix for the Alibaba Cloud account name of the member is `alice`.
   * 
   * @param request - CreateResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccountWithOptions(request: CreateResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<CreateResourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    if (!$dara.isNull(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateResourceAccountResponse>(await this.callApi(params, req, runtime), new CreateResourceAccountResponse({}));
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * This topic provides an example on how to call the API operation to create a member in the `fd-r23M55****` folder. The display name of the member is `Dev`, and the prefix for the Alibaba Cloud account name of the member is `alice`.
   * 
   * @param request - CreateResourceAccountRequest
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  /**
   * Rejects an invitation.
   * 
   * @param request - DeclineHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeclineHandshakeResponse
   */
  async declineHandshakeWithOptions(request: DeclineHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<DeclineHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeclineHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeclineHandshakeResponse>(await this.callApi(params, req, runtime), new DeclineHandshakeResponse({}));
  }

  /**
   * Rejects an invitation.
   * 
   * @param request - DeclineHandshakeRequest
   * @returns DeclineHandshakeResponse
   */
  async declineHandshake(request: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  /**
   * Deletes a member of the resource account type.
   * 
   * @remarks
   * Before you delete a member, we recommend that you call the [CheckAccountDelete](~~CheckAccountDelete~~) and [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operations to check whether the member meets deletion requirements. You can call the DeleteAccount operation to delete only members that meet the deletion requirements.
   * After you submit a deletion request for a member, you can call the [GetAccountDeletionStatus](~~GetAccountDeletionStatus~~) operation to query the deletion status of the member. After a member is deleted, the resources and data within the member are deleted, and you can no longer use the member to log on to the Alibaba Cloud Management Console. In addition, the member cannot be recovered. Proceed with caution. For more information about how to delete a member, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
   * 
   * @param tmpReq - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(tmpReq: DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAccountResponse> {
    tmpReq.validate();
    let request = new DeleteAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.abandonableCheckId)) {
      request.abandonableCheckIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.abandonableCheckId, "AbandonableCheckId", "json");
    }

    let query = { };
    if (!$dara.isNull(request.abandonableCheckIdShrink)) {
      query["AbandonableCheckId"] = request.abandonableCheckIdShrink;
    }

    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  /**
   * Deletes a member of the resource account type.
   * 
   * @remarks
   * Before you delete a member, we recommend that you call the [CheckAccountDelete](~~CheckAccountDelete~~) and [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operations to check whether the member meets deletion requirements. You can call the DeleteAccount operation to delete only members that meet the deletion requirements.
   * After you submit a deletion request for a member, you can call the [GetAccountDeletionStatus](~~GetAccountDeletionStatus~~) operation to query the deletion status of the member. After a member is deleted, the resources and data within the member are deleted, and you can no longer use the member to log on to the Alibaba Cloud Management Console. In addition, the member cannot be recovered. Proceed with caution. For more information about how to delete a member, see [Delete a member of the resource account type](https://help.aliyun.com/document_detail/446078.html).
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a custom access control policy.
   * 
   * @remarks
   * If you want to delete a custom access control policy that is attached to folders or members, you must call the [DetachControlPolicy](~~DetachControlPolicy~~) operation to detach the policy before you delete it.
   * 
   * @param request - DeleteControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicyWithOptions(request: DeleteControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeleteControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyResponse({}));
  }

  /**
   * Deletes a custom access control policy.
   * 
   * @remarks
   * If you want to delete a custom access control policy that is attached to folders or members, you must call the [DetachControlPolicy](~~DetachControlPolicy~~) operation to detach the policy before you delete it.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a folder.
   * 
   * @remarks
   * Before you delete a folder, you must make sure that the folder does not contain members or subfolders.
   * 
   * @param request - DeleteFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  /**
   * Deletes a folder.
   * 
   * @remarks
   * Before you delete a folder, you must make sure that the folder does not contain members or subfolders.
   * 
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageContactResponse
   */
  async deleteMessageContactWithOptions(request: DeleteMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<DeleteMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.retainContactInMembers)) {
      query["RetainContactInMembers"] = request.retainContactInMembers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteMessageContactResponse>(await this.callApi(params, req, runtime), new DeleteMessageContactResponse({}));
  }

  /**
   * Deletes a contact.
   * 
   * @param request - DeleteMessageContactRequest
   * @returns DeleteMessageContactResponse
   */
  async deleteMessageContact(request: DeleteMessageContactRequest): Promise<DeleteMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageContactWithOptions(request, runtime);
  }

  /**
   * Removes a delegated administrator account for a trusted service.
   * 
   * @remarks
   * If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministratorWithOptions(request: DeregisterDelegatedAdministratorRequest, runtime: $dara.RuntimeOptions): Promise<DeregisterDelegatedAdministratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeregisterDelegatedAdministrator",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeregisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new DeregisterDelegatedAdministratorResponse({}));
  }

  /**
   * Removes a delegated administrator account for a trusted service.
   * 
   * @remarks
   * If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministrator(request: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Disables a resource directory. This operation cannot be undone. Therefore, proceed with caution.
   * 
   * @remarks
   * Before you disable a resource directory, you must make sure that the following requirements are met:
   * *   All members of the cloud account type in the resource directory are removed. You can call the [RemoveCloudAccount](~~RemoveCloudAccount~~) operation to remove a member of the cloud account type.
   * *   All folders except the Root folder are deleted from the resource directory. You can call the [DeleteFolder](~~DeleteFolder~~) operation to delete a folder.
   * 
   * @param request - DestroyResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DestroyResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DestroyResourceDirectoryResponse>(await this.callApi(params, req, runtime), new DestroyResourceDirectoryResponse({}));
  }

  /**
   * Disables a resource directory. This operation cannot be undone. Therefore, proceed with caution.
   * 
   * @remarks
   * Before you disable a resource directory, you must make sure that the following requirements are met:
   * *   All members of the cloud account type in the resource directory are removed. You can call the [RemoveCloudAccount](~~RemoveCloudAccount~~) operation to remove a member of the cloud account type.
   * *   All folders except the Root folder are deleted from the resource directory. You can call the [DeleteFolder](~~DeleteFolder~~) operation to delete a folder.
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectory(): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  /**
   * Detaches an access control policy.
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * 
   * @param request - DetachControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicyWithOptions(request: DetachControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DetachControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DetachControlPolicyResponse>(await this.callApi(params, req, runtime), new DetachControlPolicyResponse({}));
  }

  /**
   * Detaches an access control policy.
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * 
   * @param request - DetachControlPolicyRequest
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicy(request: DetachControlPolicyRequest): Promise<DetachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  /**
   * Disables the Control Policy feature.
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all access control policies that are attached to folders and members. The system does not delete these access control policies, but you cannot attach them to folders or members again.
   * > If you disable the Control Policy feature, the permissions of all folders and members in your resource directory are affected. Therefore, proceed with caution.
   * 
   * @param request - DisableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<DisableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableControlPolicyResponse>(await this.callApi(params, req, runtime), new DisableControlPolicyResponse({}));
  }

  /**
   * Disables the Control Policy feature.
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all access control policies that are attached to folders and members. The system does not delete these access control policies, but you cannot attach them to folders or members again.
   * > If you disable the Control Policy feature, the permissions of all folders and members in your resource directory are affected. Therefore, proceed with caution.
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicy(): Promise<DisableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  /**
   * Unbinds a contact from a resource directory, folder, or member.
   * 
   * @param request - DisassociateMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateMembersResponse
   */
  async disassociateMembersWithOptions(request: DisassociateMembersRequest, runtime: $dara.RuntimeOptions): Promise<DisassociateMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.members)) {
      query["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateMembers",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisassociateMembersResponse>(await this.callApi(params, req, runtime), new DisassociateMembersResponse({}));
  }

  /**
   * Unbinds a contact from a resource directory, folder, or member.
   * 
   * @param request - DisassociateMembersRequest
   * @returns DisassociateMembersResponse
   */
  async disassociateMembers(request: DisassociateMembersRequest): Promise<DisassociateMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateMembersWithOptions(request, runtime);
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature provided by the Resource Directory service allows you to manage the permission boundaries of the folders or members in your resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * 
   * @param request - EnableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<EnableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableControlPolicyResponse>(await this.callApi(params, req, runtime), new EnableControlPolicyResponse({}));
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature provided by the Resource Directory service allows you to manage the permission boundaries of the folders or members in your resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicy(): Promise<EnableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableControlPolicyWithOptions(runtime);
  }

  /**
   * Enables a resource directory.
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * 
   * @param request - EnableResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectoryWithOptions(request: EnableResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<EnableResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableMode)) {
      query["EnableMode"] = request.enableMode;
    }

    if (!$dara.isNull(request.MAName)) {
      query["MAName"] = request.MAName;
    }

    if (!$dara.isNull(request.MASecureMobilePhone)) {
      query["MASecureMobilePhone"] = request.MASecureMobilePhone;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableResourceDirectoryResponse>(await this.callApi(params, req, runtime), new EnableResourceDirectoryResponse({}));
  }

  /**
   * Enables a resource directory.
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * 
   * @param request - EnableResourceDirectoryRequest
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectory(request: EnableResourceDirectoryRequest): Promise<EnableResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries the information of a member.
   * 
   * @param request - GetAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountResponse
   */
  async getAccountWithOptions(request: GetAccountRequest, runtime: $dara.RuntimeOptions): Promise<GetAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAccountResponse>(await this.callApi(params, req, runtime), new GetAccountResponse({}));
  }

  /**
   * Queries the information of a member.
   * 
   * @param request - GetAccountRequest
   * @returns GetAccountResponse
   */
  async getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  /**
   * Queries the result of a member deletion check.
   * 
   * @remarks
   * After you call the [CheckAccountDelete](~~CheckAccountDelete~~) operation to perform a member deletion check, you can call the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResultWithOptions(request: GetAccountDeletionCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<GetAccountDeletionCheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountDeletionCheckResult",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAccountDeletionCheckResultResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionCheckResultResponse({}));
  }

  /**
   * Queries the result of a member deletion check.
   * 
   * @remarks
   * After you call the [CheckAccountDelete](~~CheckAccountDelete~~) operation to perform a member deletion check, you can call the [GetAccountDeletionCheckResult](~~GetAccountDeletionCheckResult~~) operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResult(request: GetAccountDeletionCheckResultRequest): Promise<GetAccountDeletionCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  /**
   * Queries the deletion status of a member.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatusWithOptions(request: GetAccountDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetAccountDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountDeletionStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetAccountDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionStatusResponse({}));
  }

  /**
   * Queries the deletion status of a member.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatus(request: GetAccountDeletionStatusRequest): Promise<GetAccountDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access control policy.
   * 
   * @param request - GetControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetControlPolicyResponse
   */
  async getControlPolicyWithOptions(request: GetControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetControlPolicyResponse>(await this.callApi(params, req, runtime), new GetControlPolicyResponse({}));
  }

  /**
   * Queries the details of an access control policy.
   * 
   * @param request - GetControlPolicyRequest
   * @returns GetControlPolicyResponse
   */
  async getControlPolicy(request: GetControlPolicyRequest): Promise<GetControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Control Policy feature.
   * 
   * @param request - GetControlPolicyEnablementStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetControlPolicyEnablementStatusResponse
   */
  async getControlPolicyEnablementStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<GetControlPolicyEnablementStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetControlPolicyEnablementStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetControlPolicyEnablementStatusResponse>(await this.callApi(params, req, runtime), new GetControlPolicyEnablementStatusResponse({}));
  }

  /**
   * Queries the status of the Control Policy feature.
   * @returns GetControlPolicyEnablementStatusResponse
   */
  async getControlPolicyEnablementStatus(): Promise<GetControlPolicyEnablementStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getControlPolicyEnablementStatusWithOptions(runtime);
  }

  /**
   * Queries the information about a folder.
   * 
   * @param request - GetFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(request: GetFolderRequest, runtime: $dara.RuntimeOptions): Promise<GetFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
  }

  /**
   * Queries the information about a folder.
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  /**
   * Queries the information of an invitation.
   * 
   * @param request - GetHandshakeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHandshakeResponse
   */
  async getHandshakeWithOptions(request: GetHandshakeRequest, runtime: $dara.RuntimeOptions): Promise<GetHandshakeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.handshakeId)) {
      query["HandshakeId"] = request.handshakeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHandshake",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetHandshakeResponse>(await this.callApi(params, req, runtime), new GetHandshakeResponse({}));
  }

  /**
   * Queries the information of an invitation.
   * 
   * @param request - GetHandshakeRequest
   * @returns GetHandshakeResponse
   */
  async getHandshake(request: GetHandshakeRequest): Promise<GetHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  /**
   * Queries the information about a contact.
   * 
   * @param request - GetMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageContactResponse
   */
  async getMessageContactWithOptions(request: GetMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<GetMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetMessageContactResponse>(await this.callApi(params, req, runtime), new GetMessageContactResponse({}));
  }

  /**
   * Queries the information about a contact.
   * 
   * @param request - GetMessageContactRequest
   * @returns GetMessageContactResponse
   */
  async getMessageContact(request: GetMessageContactRequest): Promise<GetMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageContactWithOptions(request, runtime);
  }

  /**
   * Queries the deletion status of a contact.
   * 
   * @param request - GetMessageContactDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageContactDeletionStatusResponse
   */
  async getMessageContactDeletionStatusWithOptions(request: GetMessageContactDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetMessageContactDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageContactDeletionStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetMessageContactDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetMessageContactDeletionStatusResponse({}));
  }

  /**
   * Queries the deletion status of a contact.
   * 
   * @param request - GetMessageContactDeletionStatusRequest
   * @returns GetMessageContactDeletionStatusResponse
   */
  async getMessageContactDeletionStatus(request: GetMessageContactDeletionStatusRequest): Promise<GetMessageContactDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageContactDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information of a billing account.
   * 
   * @param request - GetPayerForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccountWithOptions(request: GetPayerForAccountRequest, runtime: $dara.RuntimeOptions): Promise<GetPayerForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPayerForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPayerForAccountResponse>(await this.callApi(params, req, runtime), new GetPayerForAccountResponse({}));
  }

  /**
   * Queries the information of a billing account.
   * 
   * @param request - GetPayerForAccountRequest
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccount(request: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  /**
   * \\*\\*\\* Co., Ltd.
   * 
   * @param request - GetResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetResourceDirectoryResponse>(await this.callApi(params, req, runtime), new GetResourceDirectoryResponse({}));
  }

  /**
   * \\*\\*\\* Co., Ltd.
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectory(): Promise<GetResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @param request - InviteAccountToResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectoryWithOptions(request: InviteAccountToResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<InviteAccountToResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetEntity)) {
      query["TargetEntity"] = request.targetEntity;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InviteAccountToResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InviteAccountToResourceDirectoryResponse>(await this.callApi(params, req, runtime), new InviteAccountToResourceDirectoryResponse({}));
  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @param request - InviteAccountToResourceDirectoryRequest
   * @returns InviteAccountToResourceDirectoryResponse
   */
  async inviteAccountToResourceDirectory(request: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries all the members in a resource directory.
   * 
   * @remarks
   * You can use only the management account of a resource directory or a delegated administrator account of a trusted service to call this operation.
   * 
   * @param request - ListAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsResponse
   */
  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $dara.RuntimeOptions): Promise<ListAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccounts",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
  }

  /**
   * Queries all the members in a resource directory.
   * 
   * @remarks
   * You can use only the management account of a resource directory or a delegated administrator account of a trusted service to call this operation.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the information of members in a folder.
   * 
   * @param request - ListAccountsForParentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsForParentResponse
   */
  async listAccountsForParentWithOptions(request: ListAccountsForParentRequest, runtime: $dara.RuntimeOptions): Promise<ListAccountsForParentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountsForParent",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAccountsForParentResponse>(await this.callApi(params, req, runtime), new ListAccountsForParentResponse({}));
  }

  /**
   * Queries the information of members in a folder.
   * 
   * @param request - ListAccountsForParentRequest
   * @returns ListAccountsForParentResponse
   */
  async listAccountsForParent(request: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  /**
   * Queries the information of all the parent folders of a specified folder.
   * 
   * @param request - ListAncestorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAncestorsResponse
   */
  async listAncestorsWithOptions(request: ListAncestorsRequest, runtime: $dara.RuntimeOptions): Promise<ListAncestorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.childId)) {
      query["ChildId"] = request.childId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAncestors",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListAncestorsResponse>(await this.callApi(params, req, runtime), new ListAncestorsResponse({}));
  }

  /**
   * Queries the information of all the parent folders of a specified folder.
   * 
   * @param request - ListAncestorsRequest
   * @returns ListAncestorsResponse
   */
  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  /**
   * Queries access control policies.
   * 
   * @param request - ListControlPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListControlPoliciesResponse
   */
  async listControlPoliciesWithOptions(request: ListControlPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListControlPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListControlPolicies",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListControlPoliciesResponse>(await this.callApi(params, req, runtime), new ListControlPoliciesResponse({}));
  }

  /**
   * Queries access control policies.
   * 
   * @param request - ListControlPoliciesRequest
   * @returns ListControlPoliciesResponse
   */
  async listControlPolicies(request: ListControlPoliciesRequest): Promise<ListControlPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the access control policies that are attached to a folder or member.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTargetWithOptions(request: ListControlPolicyAttachmentsForTargetRequest, runtime: $dara.RuntimeOptions): Promise<ListControlPolicyAttachmentsForTargetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListControlPolicyAttachmentsForTarget",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListControlPolicyAttachmentsForTargetResponse>(await this.callApi(params, req, runtime), new ListControlPolicyAttachmentsForTargetResponse({}));
  }

  /**
   * Queries the access control policies that are attached to a folder or member.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTarget(request: ListControlPolicyAttachmentsForTargetRequest): Promise<ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  /**
   * Queries delegated administrator accounts.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministratorsWithOptions(request: ListDelegatedAdministratorsRequest, runtime: $dara.RuntimeOptions): Promise<ListDelegatedAdministratorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelegatedAdministrators",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDelegatedAdministratorsResponse>(await this.callApi(params, req, runtime), new ListDelegatedAdministratorsResponse({}));
  }

  /**
   * Queries delegated administrator accounts.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministrators(request: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  /**
   * Queries the trusted services for which a member is specified as a delegated administrator account.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccountWithOptions(request: ListDelegatedServicesForAccountRequest, runtime: $dara.RuntimeOptions): Promise<ListDelegatedServicesForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelegatedServicesForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDelegatedServicesForAccountResponse>(await this.callApi(params, req, runtime), new ListDelegatedServicesForAccountResponse({}));
  }

  /**
   * Queries the trusted services for which a member is specified as a delegated administrator account.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccount(request: ListDelegatedServicesForAccountRequest): Promise<ListDelegatedServicesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the information of all subfolders of a folder.
   * 
   * @remarks
   * You can call this API operation to view the information of only the first-level subfolders of a folder.
   * 
   * @param request - ListFoldersForParentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoldersForParentResponse
   */
  async listFoldersForParentWithOptions(request: ListFoldersForParentRequest, runtime: $dara.RuntimeOptions): Promise<ListFoldersForParentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFoldersForParent",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListFoldersForParentResponse>(await this.callApi(params, req, runtime), new ListFoldersForParentResponse({}));
  }

  /**
   * Queries the information of all subfolders of a folder.
   * 
   * @remarks
   * You can call this API operation to view the information of only the first-level subfolders of a folder.
   * 
   * @param request - ListFoldersForParentRequest
   * @returns ListFoldersForParentResponse
   */
  async listFoldersForParent(request: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  /**
   * Queries the invitations that are associated with an account.
   * 
   * @param request - ListHandshakesForAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHandshakesForAccountResponse
   */
  async listHandshakesForAccountWithOptions(request: ListHandshakesForAccountRequest, runtime: $dara.RuntimeOptions): Promise<ListHandshakesForAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHandshakesForAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListHandshakesForAccountResponse>(await this.callApi(params, req, runtime), new ListHandshakesForAccountResponse({}));
  }

  /**
   * Queries the invitations that are associated with an account.
   * 
   * @param request - ListHandshakesForAccountRequest
   * @returns ListHandshakesForAccountResponse
   */
  async listHandshakesForAccount(request: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  /**
   * Queries invitations in a resource directory.
   * 
   * @param request - ListHandshakesForResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHandshakesForResourceDirectoryResponse
   */
  async listHandshakesForResourceDirectoryWithOptions(request: ListHandshakesForResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<ListHandshakesForResourceDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHandshakesForResourceDirectory",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListHandshakesForResourceDirectoryResponse>(await this.callApi(params, req, runtime), new ListHandshakesForResourceDirectoryResponse({}));
  }

  /**
   * Queries invitations in a resource directory.
   * 
   * @param request - ListHandshakesForResourceDirectoryRequest
   * @returns ListHandshakesForResourceDirectoryResponse
   */
  async listHandshakesForResourceDirectory(request: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries the mobile phone number or email address to be verified for a contact.
   * 
   * @param request - ListMessageContactVerificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageContactVerificationsResponse
   */
  async listMessageContactVerificationsWithOptions(request: ListMessageContactVerificationsRequest, runtime: $dara.RuntimeOptions): Promise<ListMessageContactVerificationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessageContactVerifications",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListMessageContactVerificationsResponse>(await this.callApi(params, req, runtime), new ListMessageContactVerificationsResponse({}));
  }

  /**
   * Queries the mobile phone number or email address to be verified for a contact.
   * 
   * @param request - ListMessageContactVerificationsRequest
   * @returns ListMessageContactVerificationsResponse
   */
  async listMessageContactVerifications(request: ListMessageContactVerificationsRequest): Promise<ListMessageContactVerificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessageContactVerificationsWithOptions(request, runtime);
  }

  /**
   * Queries contacts.
   * 
   * @param request - ListMessageContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageContactsResponse
   */
  async listMessageContactsWithOptions(request: ListMessageContactsRequest, runtime: $dara.RuntimeOptions): Promise<ListMessageContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.member)) {
      query["Member"] = request.member;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessageContacts",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListMessageContactsResponse>(await this.callApi(params, req, runtime), new ListMessageContactsResponse({}));
  }

  /**
   * Queries contacts.
   * 
   * @param request - ListMessageContactsRequest
   * @returns ListMessageContactsResponse
   */
  async listMessageContacts(request: ListMessageContactsRequest): Promise<ListMessageContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessageContactsWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyFilter)) {
      query["KeyFilter"] = request.keyFilter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * Queries tag keys.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to the members in a resource directory.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to the members in a resource directory.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.valueFilter)) {
      query["ValueFilter"] = request.valueFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * Queries the tag values of a tag key.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which an access control policy is attached.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicyWithOptions(request: ListTargetAttachmentsForControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListTargetAttachmentsForControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTargetAttachmentsForControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTargetAttachmentsForControlPolicyResponse>(await this.callApi(params, req, runtime), new ListTargetAttachmentsForControlPolicyResponse({}));
  }

  /**
   * Queries the objects to which an access control policy is attached.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicy(request: ListTargetAttachmentsForControlPolicyRequest): Promise<ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the trusted services that are enabled within a management account or delegated administrator account.
   * 
   * @remarks
   * Only a management account or delegated administrator account can be used to call this operation.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatusWithOptions(request: ListTrustedServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<ListTrustedServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminAccountId)) {
      query["AdminAccountId"] = request.adminAccountId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrustedServiceStatus",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTrustedServiceStatusResponse>(await this.callApi(params, req, runtime), new ListTrustedServiceStatusResponse({}));
  }

  /**
   * Queries the trusted services that are enabled within a management account or delegated administrator account.
   * 
   * @remarks
   * Only a management account or delegated administrator account can be used to call this operation.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  /**
   * Moves a member from a folder to another.
   * 
   * @param request - MoveAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveAccountResponse
   */
  async moveAccountWithOptions(request: MoveAccountRequest, runtime: $dara.RuntimeOptions): Promise<MoveAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.destinationFolderId)) {
      query["DestinationFolderId"] = request.destinationFolderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<MoveAccountResponse>(await this.callApi(params, req, runtime), new MoveAccountResponse({}));
  }

  /**
   * Moves a member from a folder to another.
   * 
   * @param request - MoveAccountRequest
   * @returns MoveAccountResponse
   */
  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  /**
   * Checks whether a management account or member can be used as a main financial account.
   * 
   * @param request - PrecheckForConsolidatedBillingAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckForConsolidatedBillingAccountResponse
   */
  async precheckForConsolidatedBillingAccountWithOptions(request: PrecheckForConsolidatedBillingAccountRequest, runtime: $dara.RuntimeOptions): Promise<PrecheckForConsolidatedBillingAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.billingAccountId)) {
      query["BillingAccountId"] = request.billingAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrecheckForConsolidatedBillingAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<PrecheckForConsolidatedBillingAccountResponse>(await this.callApi(params, req, runtime), new PrecheckForConsolidatedBillingAccountResponse({}));
  }

  /**
   * Checks whether a management account or member can be used as a main financial account.
   * 
   * @param request - PrecheckForConsolidatedBillingAccountRequest
   * @returns PrecheckForConsolidatedBillingAccountResponse
   */
  async precheckForConsolidatedBillingAccount(request: PrecheckForConsolidatedBillingAccountRequest): Promise<PrecheckForConsolidatedBillingAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckForConsolidatedBillingAccountWithOptions(request, runtime);
  }

  /**
   * Specifies a member in a resource directory as a delegated administrator account of a trusted service.
   * 
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory. When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministratorWithOptions(request: RegisterDelegatedAdministratorRequest, runtime: $dara.RuntimeOptions): Promise<RegisterDelegatedAdministratorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.servicePrincipal)) {
      query["ServicePrincipal"] = request.servicePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDelegatedAdministrator",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RegisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new RegisterDelegatedAdministratorResponse({}));
  }

  /**
   * Specifies a member in a resource directory as a delegated administrator account of a trusted service.
   * 
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory. When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministrator(request: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * Removes a member of the cloud account type.
   * 
   * @param request - RemoveCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccountWithOptions(request: RemoveCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<RemoveCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCloudAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveCloudAccountResponse>(await this.callApi(params, req, runtime), new RemoveCloudAccountResponse({}));
  }

  /**
   * Removes a member of the cloud account type.
   * 
   * @param request - RemoveCloudAccountRequest
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  /**
   * Resends a verification email for the email address change of a member.
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmailWithOptions(request: RetryChangeAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<RetryChangeAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryChangeAccountEmail",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RetryChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new RetryChangeAccountEmailResponse({}));
  }

  /**
   * Resends a verification email for the email address change of a member.
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmail(request: RetryChangeAccountEmailRequest): Promise<RetryChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * Sends verification information to the email address of a contact.
   * 
   * @param request - SendEmailVerificationForMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendEmailVerificationForMessageContactResponse
   */
  async sendEmailVerificationForMessageContactWithOptions(request: SendEmailVerificationForMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<SendEmailVerificationForMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendEmailVerificationForMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendEmailVerificationForMessageContactResponse>(await this.callApi(params, req, runtime), new SendEmailVerificationForMessageContactResponse({}));
  }

  /**
   * Sends verification information to the email address of a contact.
   * 
   * @param request - SendEmailVerificationForMessageContactRequest
   * @returns SendEmailVerificationForMessageContactResponse
   */
  async sendEmailVerificationForMessageContact(request: SendEmailVerificationForMessageContactRequest): Promise<SendEmailVerificationForMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendEmailVerificationForMessageContactWithOptions(request, runtime);
  }

  /**
   * Sends verification information to the mobile phone number of a contact.
   * 
   * @param request - SendPhoneVerificationForMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendPhoneVerificationForMessageContactResponse
   */
  async sendPhoneVerificationForMessageContactWithOptions(request: SendPhoneVerificationForMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<SendPhoneVerificationForMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendPhoneVerificationForMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendPhoneVerificationForMessageContactResponse>(await this.callApi(params, req, runtime), new SendPhoneVerificationForMessageContactResponse({}));
  }

  /**
   * Sends verification information to the mobile phone number of a contact.
   * 
   * @param request - SendPhoneVerificationForMessageContactRequest
   * @returns SendPhoneVerificationForMessageContactResponse
   */
  async sendPhoneVerificationForMessageContact(request: SendPhoneVerificationForMessageContactRequest): Promise<SendPhoneVerificationForMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendPhoneVerificationForMessageContactWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to the mobile phone number that you want to bind to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhoneWithOptions(request: SendVerificationCodeForBindSecureMobilePhoneRequest, runtime: $dara.RuntimeOptions): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerificationCodeForBindSecureMobilePhone",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendVerificationCodeForBindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForBindSecureMobilePhoneResponse({}));
  }

  /**
   * Sends a verification code to the mobile phone number that you want to bind to a member of the resource account type in a resource directory for security purposes.
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhone(request: SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * Sends a verification code to the mobile phone number bound to a newly created account when you use the account to enable a resource directory.
   * 
   * @remarks
   * Each Alibaba Cloud account can be used to send a maximum of 100 verification codes per day.
   * 
   * @param request - SendVerificationCodeForEnableRDRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationCodeForEnableRDResponse
   */
  async sendVerificationCodeForEnableRDWithOptions(request: SendVerificationCodeForEnableRDRequest, runtime: $dara.RuntimeOptions): Promise<SendVerificationCodeForEnableRDResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secureMobilePhone)) {
      query["SecureMobilePhone"] = request.secureMobilePhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerificationCodeForEnableRD",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendVerificationCodeForEnableRDResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForEnableRDResponse({}));
  }

  /**
   * Sends a verification code to the mobile phone number bound to a newly created account when you use the account to enable a resource directory.
   * 
   * @remarks
   * Each Alibaba Cloud account can be used to send a maximum of 100 verification codes per day.
   * 
   * @param request - SendVerificationCodeForEnableRDRequest
   * @returns SendVerificationCodeForEnableRDResponse
   */
  async sendVerificationCodeForEnableRD(request: SendVerificationCodeForEnableRDRequest): Promise<SendVerificationCodeForEnableRDResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForEnableRDWithOptions(request, runtime);
  }

  /**
   * Enables or disables the member deletion feature.
   * 
   * @remarks
   * Members of the resource account type can be deleted only after the member deletion feature is enabled.
   * 
   * @param request - SetMemberDeletionPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMemberDeletionPermissionResponse
   */
  async setMemberDeletionPermissionWithOptions(request: SetMemberDeletionPermissionRequest, runtime: $dara.RuntimeOptions): Promise<SetMemberDeletionPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetMemberDeletionPermission",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetMemberDeletionPermissionResponse>(await this.callApi(params, req, runtime), new SetMemberDeletionPermissionResponse({}));
  }

  /**
   * Enables or disables the member deletion feature.
   * 
   * @remarks
   * Members of the resource account type can be deleted only after the member deletion feature is enabled.
   * 
   * @param request - SetMemberDeletionPermissionRequest
   * @returns SetMemberDeletionPermissionResponse
   */
  async setMemberDeletionPermission(request: SetMemberDeletionPermissionRequest): Promise<SetMemberDeletionPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setMemberDeletionPermissionWithOptions(request, runtime);
  }

  /**
   * Adds tags to the members in a resource directory.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to the members in a resource directory.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from the members in a resource directory.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from the members in a resource directory.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the display name of a member, or switches the type of a member.
   * 
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * 
   * @param request - UpdateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountResponse
   */
  async updateAccountWithOptions(request: UpdateAccountRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.newAccountType)) {
      query["NewAccountType"] = request.newAccountType;
    }

    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccount",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateAccountResponse>(await this.callApi(params, req, runtime), new UpdateAccountResponse({}));
  }

  /**
   * Changes the display name of a member, or switches the type of a member.
   * 
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * 
   * @param request - UpdateAccountRequest
   * @returns UpdateAccountResponse
   */
  async updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  /**
   * Updates a custom access control policy.
   * 
   * @param request - UpdateControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicyWithOptions(request: UpdateControlPolicyRequest, runtime: $dara.RuntimeOptions): Promise<UpdateControlPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newPolicyDocument)) {
      query["NewPolicyDocument"] = request.newPolicyDocument;
    }

    if (!$dara.isNull(request.newPolicyName)) {
      query["NewPolicyName"] = request.newPolicyName;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateControlPolicy",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateControlPolicyResponse>(await this.callApi(params, req, runtime), new UpdateControlPolicyResponse({}));
  }

  /**
   * Updates a custom access control policy.
   * 
   * @param request - UpdateControlPolicyRequest
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicy(request: UpdateControlPolicyRequest): Promise<UpdateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the name of a folder.
   * 
   * @param request - UpdateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $dara.RuntimeOptions): Promise<UpdateFolderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.newFolderName)) {
      query["NewFolderName"] = request.newFolderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
  }

  /**
   * Changes the name of a folder.
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateMessageContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageContactResponse
   */
  async updateMessageContactWithOptions(request: UpdateMessageContactRequest, runtime: $dara.RuntimeOptions): Promise<UpdateMessageContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.emailAddress)) {
      query["EmailAddress"] = request.emailAddress;
    }

    if (!$dara.isNull(request.messageTypes)) {
      query["MessageTypes"] = request.messageTypes;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMessageContact",
      version: "2022-04-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateMessageContactResponse>(await this.callApi(params, req, runtime), new UpdateMessageContactResponse({}));
  }

  /**
   * Updates a contact.
   * 
   * @param request - UpdateMessageContactRequest
   * @returns UpdateMessageContactResponse
   */
  async updateMessageContact(request: UpdateMessageContactRequest): Promise<UpdateMessageContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMessageContactWithOptions(request, runtime);
  }

}

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
   * The comment on the invitation.
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
   * The comment on the invitation.
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

export class CreateAutoGroupingRuleRequestRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources to be automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
      targetResourceGroupCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreatePolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The version number of the policy. Default value: v1.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
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

export class CreatePolicyVersionResponseBodyPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the policy version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      versionId: 'string',
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

export class CreateResourceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. 
   * 
   * The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. 
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
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

export class CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class CreateResourceGroupResponseBodyResourceGroupRegionStatuses extends $dara.Model {
  regionStatus?: CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.regionStatus)) {
      $dara.Model.validateArray(this.regionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBodyResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-05T14:39:13+08:00
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group in all regions.
   */
  regionStatuses?: CreateResourceGroupResponseBodyResourceGroupRegionStatuses;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: CreateResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
    };
  }

  validate() {
    if(this.regionStatuses && typeof (this.regionStatuses as any).validate === 'function') {
      (this.regionStatuses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The document of the policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { \\"Statement\\": [ { \\"Action\\": \\"sts:AssumeRole\\", \\"Effect\\": \\"Allow\\", \\"Principal\\": { \\"RAM\\": \\"acs:ram::12345678901234****:root\\" } } ], \\"Version\\": \\"1\\" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 90123456789****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the RAM role after authorization.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::177242285274****:role/aliyunserviceroleforpolardb
   */
  arn?: string;
  /**
   * @remarks
   * The document of the trust policy for the role.
   * 
   * @example
   * {\\"Statement\\":[{\\"Action\\":\\"sts:AssumeRole\\",\\"Effect\\":\\"Allow\\",\\"Principal\\":{\\"Service\\":[\\"polardb.aliyuncs.com\\"]}}],\\"Version\\":\\"1\\"}
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the role was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-30T08:14:16Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the role.
   * 
   * @example
   * Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the role is a service-linked role. Valid values:
   * 
   * *   true: The role is a service-linked role.
   * *   false: The role is not a service-linked role.
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * 32833240981067****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunServiceRoleForPolarDB
   */
  roleName?: string;
  /**
   * @remarks
   * The role name that uses a domain name as the suffix.
   * 
   * @example
   * AliyunServiceRoleForPolarDB@role.test.onaliyunservice.com
   */
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
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
   * The ID of the enterprise management account of the resource directory.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the enterprise management account of the resource directory.
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
   * The invitation note.
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
   * *   Expired: The invitation expired.
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

export class DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * *   Deleting: The resource group is being deleted.
   * 
   * @example
   * PendingDelete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class DeleteResourceGroupResponseBodyResourceGroupRegionStatuses extends $dara.Model {
  regionStatus?: DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.regionStatus)) {
      $dara.Model.validateArray(this.regionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBodyResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group in all regions.
   */
  regionStatuses?: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * PendingDelete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
    };
  }

  validate() {
    if(this.regionStatuses && typeof (this.regionStatuses as any).validate === 'function') {
      (this.regionStatuses as any).validate();
    }
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
   * A tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * *   WAIT_MODIFY: in progress
   * *   CANCELLED: canceled
   * *   EXPIRED: expired
   * 
   * If the value of this parameter is empty, no modification is performed for the email address.
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
   * The tags that are added to the member.
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
   * >  This parameter may be returned if the value of AllowDelete is true.
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
   * >  This parameter is returned only if the value of AllowDelete is false.
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
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
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

export class GetAutoGroupingRuleResponseBodyRuleRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources that are automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The ID of the content record.
   * 
   * @example
   * grc-acfo******fwybpq
   */
  ruleContentId?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      ruleContentId: 'RuleContentId',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
      ruleContentId: 'string',
      targetResourceGroupCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoGroupingRuleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The IDs of excluded regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resources. Multiple IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The IDs of regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Multiple IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   */
  ruleContents?: GetAutoGroupingRuleResponseBodyRuleRuleContents[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Transfer resources to which the {"env": "online"} and {"project": "A"} tags are added to the resource group rg-aek2********qcy.
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * @example
   * associated_transfer
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      modifyTime: 'ModifyTime',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      modifyTime: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': GetAutoGroupingRuleResponseBodyRuleRuleContents },
      ruleDesc: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleContents)) {
      $dara.Model.validateArray(this.ruleContents);
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
   * >  This parameter is available only when an invitee calls this operation.
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
   * >  This parameter is available only when an invitee calls this operation.
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
   * The comment on the invitation.
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

export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times the policy is referenced.
   * 
   * @example
   * 0
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The document of the policy.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was updated.
   * 
   * @example
   * 2016-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyDocument: 'string',
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

export class GetPolicyVersionResponseBodyPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the policy version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The document of the policy.
   * 
   * @example
   * { \\"Statement\\": [{ \\"Action\\": [\\"oss:*\\"], \\"Effect\\": \\"Allow\\", \\"Resource\\": [\\"acs:oss:*:*:*\\"]}], \\"Version\\": \\"1\\"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      policyDocument: 'PolicyDocument',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      policyDocument: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
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
   * Enabled
   */
  controlPolicyStatus?: string;
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  /**
   * @remarks
   * The real-name verification information.
   * 
   * @example
   * \\*\\*\\* Co., Ltd.
   */
  identityInformation?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 172845045600****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the management account.
   * 
   * @example
   * aliyun-admin
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The status of the member deletion feature. Valid values:
   * 
   * *   Enabled: The feature is enabled. You can call the [DeleteAccount](https://help.aliyun.com/document_detail/311546.html) operation to delete members of the resource account type.
   * *   Disabled: The feature is disabled. You cannot delete members of the resource account type.
   * 
   * @example
   * Enabled
   */
  memberDeletionStatus?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-St****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the Root folder.
   * 
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

export class GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class GetResourceGroupResponseBodyResourceGroupRegionStatuses extends $dara.Model {
  regionStatus?: GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.regionStatus)) {
      $dara.Model.validateArray(this.regionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @example
   * v1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetResourceGroupResponseBodyResourceGroupTags extends $dara.Model {
  tag?: GetResourceGroupResponseBodyResourceGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyResourceGroupTagsTag },
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

export class GetResourceGroupResponseBodyResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The identifier of the resource group.
   * 
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The tags that are added to the resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * *   Deleting: The resource group is being deleted.
   */
  regionStatuses?: GetResourceGroupResponseBodyResourceGroupRegionStatuses;
  /**
   * @remarks
   * The status of the resource group in all regions.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tag key.
   */
  tags?: GetResourceGroupResponseBodyResourceGroupTags;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: GetResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
      tags: GetResourceGroupResponseBodyResourceGroupTags,
    };
  }

  validate() {
    if(this.regionStatuses && typeof (this.regionStatuses as any).validate === 'function') {
      (this.regionStatuses as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRoleLatestDeletionTask extends $dara.Model {
  /**
   * @remarks
   * The time when the deletion task was created.
   * 
   * @example
   * 2018-10-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * ECSAdmin/cc61514b-26eb-4453-ab53-b142eb702a3d
   */
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The document of the policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { \\"Statement\\": [ { \\"Action\\": \\"sts:AssumeRole\\", \\"Effect\\": \\"Allow\\", \\"Principal\\": { \\"RAM\\": \\"acs:ram::12345678901234****:root\\" } } ], \\"Version\\": \\"1\\" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the RAM role is a service linked role.
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The information of the most recent deletion task.
   */
  latestDeletionTask?: GetRoleResponseBodyRoleLatestDeletionTask;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 90123456789****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the RAM role after authorization.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  /**
   * @remarks
   * The time when the RAM role was updated.
   * 
   * @example
   * 2016-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: GetRoleResponseBodyRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.latestDeletionTask && typeof (this.latestDeletionTask as any).validate === 'function') {
      (this.latestDeletionTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources extends $dara.Model {
  resource?: string[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage extends $dara.Model {
  /**
   * @remarks
   * The IDs of the regions in which the resources are to be queried.
   * 
   * @example
   * global
   */
  region?: string;
  /**
   * @remarks
   * The returned resources.
   */
  resources?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources,
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages extends $dara.Model {
  roleUsage?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage[];
  static names(): { [key: string]: string } {
    return {
      roleUsage: 'RoleUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleUsage: { 'type': 'array', 'itemType': GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage },
    };
  }

  validate() {
    if(Array.isArray(this.roleUsage)) {
      $dara.Model.validateArray(this.roleUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReason extends $dara.Model {
  /**
   * @remarks
   * Failure information.
   * 
   * @example
   * Service-Linked Role acs:ram::196813227629****:role/aliyunserviceroleforhdr cannot be deleted as it is in use by hdr.aliyuncs.com.
   */
  message?: string;
  /**
   * @remarks
   * Use resource information of the service linked role.
   */
  roleUsages?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      roleUsages: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages,
    };
  }

  validate() {
    if(this.roleUsages && typeof (this.roleUsages as any).validate === 'function') {
      (this.roleUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponseBodyResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The time when the resource directory was enabled.
   * 
   * @example
   * 2019-02-18T15:32:10.473Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the enterprise management account.
   * 
   * @example
   * 172841235500****
   */
  masterAccountId?: string;
  /**
   * @remarks
   * The name of the enterprise management account.
   * 
   * @example
   * aliyun-****
   */
  masterAccountName?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-Ss****
   */
  resourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the root folder.
   * 
   * @example
   * r-Zo****
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

export class InviteAccountToResourceDirectoryRequestTag extends $dara.Model {
  /**
   * @remarks
   * A tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * The comment on the invitation.
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
   * The status of the invitation.
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

export class ListAccountsRequestTag extends $dara.Model {
  /**
   * @remarks
   * A tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * A tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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

export class ListAccountsForParentRequestTag extends $dara.Model {
  /**
   * @remarks
   * A tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * A tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * The tags that are added to the member.
   */
  tags?: ListAccountsForParentResponseBodyAccountsAccountTags;
  /**
   * @remarks
   * The type of the member.
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

export class ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * disk
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The service code of the associated resource.
   * 
   * @example
   * ecs
   */
  associatedService?: string;
  /**
   * @remarks
   * The type of the primary resource.
   * 
   * @example
   * instance
   */
  masterResourceType?: string;
  /**
   * @remarks
   * The service code of the primary resource.
   * 
   * @example
   * ecs
   */
  masterService?: string;
  /**
   * @remarks
   * The status of the Transfer Associated Resources feature. Valid values:
   * 
   * *   Enable: enabled
   * *   Disable: disabled
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associatedResourceType: 'AssociatedResourceType',
      associatedService: 'AssociatedService',
      masterResourceType: 'MasterResourceType',
      masterService: 'MasterService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedResourceType: 'string',
      associatedService: 'string',
      masterResourceType: 'string',
      masterService: 'string',
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

export class ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 121998723923****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether the Transfer Existing Associated Resources feature is enabled. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  enableExistingResourcesTransfer?: string;
  /**
   * @remarks
   * The settings of transfer rules.
   */
  ruleSettings?: ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings[];
  /**
   * @remarks
   * The status of the Transfer Associated Resources feature. Valid values:
   * 
   * *   Enable: enabled
   * *   Disable: disabled
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
      ruleSettings: 'RuleSettings',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      enableExistingResourcesTransfer: 'string',
      ruleSettings: { 'type': 'array', 'itemType': ListAssociatedTransferSettingResponseBodyAssociatedTransferSettingRuleSettings },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleSettings)) {
      $dara.Model.validateArray(this.ruleSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponseBodyRulesRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources that are automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The ID of the content record.
   * 
   * @example
   * grc-acfo******fwybpq
   */
  ruleContentId?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      ruleContentId: 'RuleContentId',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
      ruleContentId: 'string',
      targetResourceGroupCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The IDs of excluded regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz****ql4b5ea,rg-aek2****akfxykq
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of excluded resources. Multiple IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The time when the rule was updated.
   * 
   * @example
   * 2025-01-01T10:00:00+08:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The IDs of regions. Multiple IDs are separated by commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Multiple IDs are separated by commas (,).
   * 
   * @example
   * rg-aekz****ql4b5ea,rg-aek2****akfxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Multiple IDs are separated by commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ecs.instance,vpc.vpc
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   */
  ruleContents?: ListAutoGroupingRulesResponseBodyRulesRuleContents[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Transfer resources to which the {"env": "online"} and {"project": "A"} tags are added to the resource group rg-aek2********qcy.
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      modifyTime: 'ModifyTime',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      modifyTime: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': ListAutoGroupingRulesResponseBodyRulesRuleContents },
      ruleDesc: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleContents)) {
      $dara.Model.validateArray(this.ruleContents);
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
   * - All: The access control policy is in effect for Alibaba Cloud accounts, RAM users, and RAM roles.
   * - RAM: The access control policy is in effect only for RAM users and RAM roles.
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
   * - System: system access control policy
   * - Custom: custom access control policy
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
   * The ID of the member.
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
   * The time when the member was specified as a delegated administrator account of the trusted service.
   * 
   * @example
   * 1616652684164
   */
  delegationEnabledTime?: string;
  /**
   * @remarks
   * The identification of the trusted service.
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
   * The comment on the invitation.
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
   * The comment on the invitation.
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

export class ListPoliciesResponseBodyPoliciesPolicy extends $dara.Model {
  /**
   * @remarks
   * The number of times the policy is referenced.
   * 
   * @example
   * 1
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was updated.
   * 
   * @example
   * 2016-02-11T18:39:12Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
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

export class ListPoliciesResponseBodyPolicies extends $dara.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.policy)) {
      $dara.Model.validateArray(this.policy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was attached.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * The description of the policy.
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which the policy is attached.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which the policy is attached. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBodyPolicyAttachments extends $dara.Model {
  policyAttachment?: ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      policyAttachment: 'PolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachment: { 'type': 'array', 'itemType': ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.policyAttachment)) {
      $dara.Model.validateArray(this.policyAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion extends $dara.Model {
  /**
   * @remarks
   * The time when the policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the policy version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersions extends $dara.Model {
  policyVersion?: ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: { 'type': 'array', 'itemType': ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.policyVersion)) {
      $dara.Model.validateArray(this.policyVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequestTag extends $dara.Model {
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

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags extends $dara.Model {
  tag?: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupsResourceGroupTagsTag },
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

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the resource group.
   */
  tags?: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      tags: ListResourceGroupsResponseBodyResourceGroupsResourceGroupTags,
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

export class ListResourceGroupsResponseBodyResourceGroups extends $dara.Model {
  resourceGroup?: ListResourceGroupsResponseBodyResourceGroupsResourceGroup[];
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupsResourceGroup },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroup)) {
      $dara.Model.validateArray(this.resourceGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values of N: 1 to 50.
   * 
   * For more information about the supported resource types, see the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * >  You must configure both `Service` and `ResourceType` in `ResourceTypes`. Otherwise, the two parameters do not take effect.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * Valid values of N: 1 to 50.
   * 
   * You can obtain the ID from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * >  You must configure both `Service` and `ResourceType` in `ResourceTypes`. Otherwise, the two parameters do not take effect.
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uPJpP****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResources extends $dara.Model {
  resource?: ListResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRoleLatestDeletionTask extends $dara.Model {
  /**
   * @remarks
   * The time when the deletion task was created.
   * 
   * @example
   * 2018-10-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * ECSAdmin/cc61514b-26eb-4453-ab53-b142eb70****
   */
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the RAM role is a service linked role.
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The information of the most recent deletion task.
   */
  latestDeletionTask?: ListRolesResponseBodyRolesRoleLatestDeletionTask;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 90123456789****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the RAM role after authorization.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  /**
   * @remarks
   * The time when the RAM role was updated.
   * 
   * @example
   * 2016-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: ListRolesResponseBodyRolesRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.latestDeletionTask && typeof (this.latestDeletionTask as any).validate === 'function') {
      (this.latestDeletionTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRoles extends $dara.Model {
  role?: ListRolesResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
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
   * A tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * The ID of the resource group or member.
   * 
   * @example
   * rg-aekz6bre2uq****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the object whose tags are queried. Valid values:
   * 
   * *   resourcegroup: resource group
   * *   Account: member
   * 
   * @example
   * resourcegroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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
   * The time when the control policy was attached to the object.
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
   * *   Folder: child folder of the Root folder
   * *   Account: member account
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
   * The identification of the trusted service.
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

export class MoveResourcesRequestResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-bp1sig0mjktx5ewx1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vpc
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the resource belongs.
   * 
   * @example
   * vpc
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourcesResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * >  This parameter is returned if the resource failed to be moved.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * >  This parameter is returned if the resource failed to be moved.
   * 
   * @example
   * No permissions
   */
  errorMsg?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-bp1sig0mjktx5ewx1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vpc
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * @example
   * vpc
   */
  service?: string;
  /**
   * @remarks
   * The status of the move task. Valid values:
   * 
   * *   SUCCESS
   * *   FAIL
   * 
   * @example
   * FAIL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
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

export class PromoteResourceAccountResponseBodyAccount extends $dara.Model {
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
   * The time when the member account joined the resource directory.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
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
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
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
   * PromoteVerifying
   */
  status?: string;
  /**
   * @remarks
   * The type of the member account. Valid values:
   * 
   * *   CloudAccount
   * *   ResourceAccount
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

export class ResendCreateCloudAccountEmailResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 12323344****
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
   * The time when the member account joined the resource directory.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
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
   * 16950264-3f0d-4ca9-82dd-6ee7a3d33d6b
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

export class ResendPromoteResourceAccountEmailResponseBodyAccount extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 12323344****
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
   * The time when the member account joined the resource directory.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinTime?: string;
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
   * 16950264-3f0d-4ca9-82dd-6ee7a3d33d6b
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
   * PromoteVerifying
   */
  status?: string;
  /**
   * @remarks
   * The type of the member account. Valid values:
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

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * A tag key.
   * 
   * A tag key can be a maximum of 128 characters in length. It cannot contain `http://` or `https://` and cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * A tag value.
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
   * The ID of the Alibaba Cloud account that corresponds to the member.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member.
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

export class UpdateAssociatedTransferSettingRequestRuleSettings extends $dara.Model {
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * disk
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * The service code of the associated resource.
   * 
   * You can obtain the service code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  associatedService?: string;
  /**
   * @remarks
   * The type of the primary resource.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  masterResourceType?: string;
  /**
   * @remarks
   * The service code of the primary resource.
   * 
   * You can obtain the service code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  masterService?: string;
  /**
   * @remarks
   * The status of the Transfer Associated Resources feature. Valid values:
   * 
   * *   Enable: enabled
   * *   Disable: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      associatedResourceType: 'AssociatedResourceType',
      associatedService: 'AssociatedService',
      masterResourceType: 'MasterResourceType',
      masterService: 'MasterService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedResourceType: 'string',
      associatedService: 'string',
      masterResourceType: 'string',
      masterService: 'string',
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

export class UpdateAutoGroupingRuleRequestRuleContents extends $dara.Model {
  /**
   * @remarks
   * The condition for the range of resources that are automatically transferred.
   * 
   * @example
   * {"children":[{"desired":"{\\"env\\":\\"online\\", \\"project\\":\\"A\\"}","featurePath":"$.tags","featureSource":"RESOURCE","operator":"TagMatchAll"}],"operator":"and"}
   */
  autoGroupingScopeCondition?: string;
  /**
   * @remarks
   * The ID of the content record.
   * 
   * @example
   * grc-acfo******fwybpq
   */
  ruleContentId?: string;
  /**
   * @remarks
   * The condition for the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * {"children":[{"desired":"rg-aek2********qcy","featurePath":"$.resourceGroupId","featureSource":"RESOURCE","operator":"StringEquals"}],"operator":"and"}
   */
  targetResourceGroupCondition?: string;
  static names(): { [key: string]: string } {
    return {
      autoGroupingScopeCondition: 'AutoGroupingScopeCondition',
      ruleContentId: 'RuleContentId',
      targetResourceGroupCondition: 'TargetResourceGroupCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoGroupingScopeCondition: 'string',
      ruleContentId: 'string',
      targetResourceGroupCondition: 'string',
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

export class UpdateResourceGroupResponseBodyResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * @example
   * 123456789****
   */
  accountId?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18+08:00
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * @example
   * project
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-9gLOoK****
   */
  id?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * @example
   * my-project
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
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

export class UpdateRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The document of the policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { \\"Statement\\": [ { \\"Action\\": \\"sts:AssumeRole\\", \\"Effect\\": \\"Allow\\", \\"Principal\\": { \\"RAM\\": \\"acs:ram::12345678901234****:root\\" } } ], \\"Version\\": \\"1\\" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 90123456789****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the RAM role after authorization.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  /**
   * @remarks
   * The time when the RAM role was updated.
   * 
   * @example
   * 2016-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
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

export class AcceptHandshakeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the invitation.
   * 
   * You can call the [ListHandshakesForAccount](https://help.aliyun.com/document_detail/160006.html) operation to obtain the ID.
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

export class AttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * This parameter is required.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which you want to attach the policy.
   * 
   * *   If you want to attach the policy to a RAM user, specify the name in the \\<UserName>@\\<AccountAlias>.onaliyun.com format. \\<UserName> indicates the name of the RAM user, and \\<AccountAlias> indicates the alias of the Alibaba Cloud account to which the RAM user belongs.
   * *   If you want to attach the policy to a RAM user group, specify the name in the \\<GroupName>@group.\\<AccountAlias>.onaliyun.com format. \\<GroupName> indicates the name of the RAM user group, and \\<AccountAlias> indicates the alias of the Alibaba Cloud account to which the RAM user group belongs.
   * *   If you want to attach the policy to a RAM role, specify the name in the \\<RoleName>@role.\\<AccountAlias>.onaliyun.com format. \\<RoleName> indicates the name of the RAM role, and \\<AccountAlias> indicates the alias of the Alibaba Cloud account to which the RAM role belongs.
   * 
   * >  The alias of an Alibaba Cloud account is a part of the default domain name. You can call the [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html) operation to obtain the alias of an Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which you want to attach the policy. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * This parameter is required.
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The effective scope of the policy. You can set this parameter to one of the following items:
   * 
   * *   ID of a resource group: indicates that the policy takes effect for the resources in the resource group.
   * *   ID of the Alibaba Cloud account to which the authorized object belongs: indicates that the policy takes effect for the resources within the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class AttachPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicyResponseBody;
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
      body: AttachPolicyResponseBody,
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
   * The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the \\<Country code>-\\<Mobile phone number> format.
   * 
   * >  Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
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
   * You can call the [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) operation to obtain the verification code.
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

export class CancelCreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCreateCloudAccountResponseBody extends $dara.Model {
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

export class CancelCreateCloudAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCreateCloudAccountResponseBody;
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
      body: CancelCreateCloudAccountResponseBody,
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

export class CancelPromoteResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPromoteResourceAccountResponseBody extends $dara.Model {
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

export class CancelPromoteResourceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelPromoteResourceAccountResponseBody;
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
      body: CancelPromoteResourceAccountResponseBody,
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
   * >  The system automatically sends a verification email to the email address. After the verification is passed, the email address takes effect, and the system changes both the logon email address and secure email address of the member.
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
   * The ID of the member that you want to delete.
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

export class CreateAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of regions to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-beijing,cn-guangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******zj2oi,rg-aekz******r62ua
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * pc-uf6p******4h784y,rmq-cn-******ny0y
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The resource types to be excluded. Separate multiple resource types with commas (,).
   * 
   * @example
   * mse.cluster,slb.loadbalancer
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The IDs of regions. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Separate multiple IDs with commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * rds.dbinstance,oss.bucket
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   * 
   * This parameter is required.
   */
  ruleContents?: CreateAutoGroupingRuleRequestRuleContents[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Transfer resources to which the {"env": "online"} and {"project": "A"} tags are added to the resource group rg-aek2********qcy.
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * This parameter is required.
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': CreateAutoGroupingRuleRequestRuleContents },
      ruleDesc: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleContents)) {
      $dara.Model.validateArray(this.ruleContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoGroupingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7701451-340B-5CB3-AEA7-7D831F7F38C0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoGroupingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutoGroupingRuleResponseBody;
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
      body: CreateAutoGroupingRuleResponseBody,
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

export class CreateCloudAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the member account.
   * 
   * The name must be 2 to 50 characters in length and can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * The name must be unique in the current resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * admin-****
   */
  displayName?: string;
  /**
   * @remarks
   * The email address used to log on to the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The ID of the settlement account. If you do not specify this parameter, the current account is used for settlement.
   * 
   * @example
   * 12323344****
   */
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      parentFolderId: 'string',
      payerAccountId: 'string',
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

export class CreateCloudAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCloudAccountResponseBody;
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
      body: CreateCloudAccountResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectScope: 'EffectScope',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectScope: 'string',
      policyDocument: 'string',
      policyName: 'string',
    };
  }

  validate() {
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
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the folder.
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

export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The document of the policy.
   * 
   * The document must be 1 to 2,048 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the policy.
   */
  policy?: CreatePolicyResponseBodyPolicy;
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
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
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
      body: CreatePolicyResponseBody,
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

export class CreatePolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The document of the policy.
   * 
   * The document must be 1 to 2,048 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * Specifies whether to set the policy version as the default version. Valid values:
   * 
   * *   false: The policy version is not set as the default version.
   * *   true: The policy version is set as the default version.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  setAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      setAsDefault: 'SetAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      policyName: 'string',
      setAsDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the policy version.
   */
  policyVersion?: CreatePolicyVersionResponseBodyPolicyVersion;
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
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: CreatePolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersion && typeof (this.policyVersion as any).validate === 'function') {
      (this.policyVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyVersionResponseBody;
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
      body: CreatePolicyVersionResponseBody,
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
   * The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start with a letter or digit and end with a letter or digit. Valid special characters include underscores (`_`), periods (`.`), and hyphens (-).
   * 
   * The complete Alibaba Cloud account name of a member is in the @.aliyunid.com format, such as `alice@rd-3G****.aliyunid.com`.
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
   * *   resell (default): The member is an account for a reseller. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * >  This parameter is available only for resellers at the international site (alibabacloud.com).
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

export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the resource group.
   * 
   * The identifier must be 3 to 50 characters in length and can contain letters, digits, and hyphens (-). The identifier must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateResourceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceGroupRequestTag },
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

export class CreateResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource group.
   */
  resourceGroup?: CreateResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: CreateResourceGroupResponseBodyResourceGroup,
    };
  }

  validate() {
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceGroupResponseBody;
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
      body: CreateResourceGroupResponseBody,
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

export class CreateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The document of the policy that specifies one or more trusted entities to assume the RAM role. The trusted entities can be Alibaba Cloud accounts, Alibaba Cloud services, or identity providers (IdPs).
   * 
   * >  RAM users cannot assume the RAM roles of trusted Alibaba Cloud services.
   * 
   * This parameter is required.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Unit: seconds. Valid values: 3600 to 43200. Default value: 3600.
   * 
   * If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
  role?: CreateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRoleResponseBody;
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
      body: CreateRoleResponseBody,
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

export class CreateServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The suffix of the role name.
   * 
   * The role name (including its suffix) must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * For example, if the suffix is `Example`, the role name is `ServiceLinkedRoleName_Example`.
   * 
   * @example
   * Example
   */
  customSuffix?: string;
  /**
   * @remarks
   * The description of the service-linked role.
   * 
   * You must configure this parameter for service-linked roles that support custom suffixes. Otherwise, the preset value is used and cannot be modified.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * Service Linked Role for PolarDB. PolarDB will use this role to access your resources in other services.
   */
  description?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * For more information about the service name, see [Alibaba Cloud services that support service-linked roles](https://help.aliyun.com/document_detail/461722.html).
   * 
   * This parameter is required.
   * 
   * @example
   * polardb.aliyuncs.com
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      customSuffix: 'CustomSuffix',
      description: 'Description',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSuffix: 'string',
      description: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE58D7CF-03BC-432A-B42D-BC3390C8C2E1
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the role.
   */
  role?: CreateServiceLinkedRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateServiceLinkedRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
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
      body: CreateServiceLinkedRoleResponseBody,
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
  abandonableCheckId?: string[];
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period of 45 days. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
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
  abandonableCheckIdShrink?: string;
  /**
   * @remarks
   * The type of the deletion. Valid values:
   * 
   * *   0: direct deletion. If the member does not have pay-as-you-go resources that are purchased within the previous 30 days, the system directly deletes the member.
   * *   1: deletion with a silence period. If the member has pay-as-you-go resources that are purchased within the previous 30 days, the member enters a silence period of 45 days. The system starts to delete the member until the silence period ends. For more information about the silence period, see [What is the silence period for member deletion?](https://help.aliyun.com/document_detail/446079.html)
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
   * @example
   * 0
   */
  deletionType?: string;
  /**
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

export class DeleteAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoGroupingRuleResponseBody extends $dara.Model {
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

export class DeleteAutoGroupingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoGroupingRuleResponseBody;
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
      body: DeleteAutoGroupingRuleResponseBody,
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
   * The ID of the control policy.
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

export class DeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 898FAB24-7509-43EE-A287-086FE4C44394
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

export class DeletePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
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
      body: DeletePolicyResponseBody,
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

export class DeletePolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * You can call the [ListPolicyVersions](https://help.aliyun.com/document_detail/159982.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyVersionResponseBody extends $dara.Model {
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

export class DeletePolicyVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyVersionResponseBody;
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
      body: DeletePolicyVersionResponseBody,
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

export class DeleteResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C488B66-B819-4D14-8711-C4EAAA13AC01
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource group.
   */
  resourceGroup?: DeleteResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: DeleteResourceGroupResponseBodyResourceGroup,
    };
  }

  validate() {
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceGroupResponseBody;
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
      body: DeleteResourceGroupResponseBody,
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

export class DeleteRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 898FAB24-7509-43EE-A287-086FE4C44394
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

export class DeleteRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRoleResponseBody;
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
      body: DeleteRoleResponseBody,
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

export class DeleteServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the role.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForPolarDB
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * task/acs-service-role/polardb.aliyuncs.com/AliyunServiceRoleForPolarDB/64c4f9cc-fac2-4692-ae1b-804ae4b9****
   */
  deletionTaskId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B595E5BF-FF5F-4E7F-B95A-B90FE242FEB6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
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

export class DeleteServiceLinkedRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceLinkedRoleResponseBody;
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
      body: DeleteServiceLinkedRoleResponseBody,
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
   * The ID of the member in the resource directory.
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

export class DetachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which the policy is attached.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which the policy is attached. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * This parameter is required.
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
   * 
   * This parameter specifies the resource group or Alibaba Cloud account for which you want to revoke permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class DetachPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicyResponseBody;
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
      body: DetachPolicyResponseBody,
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

export class DisableAssociatedTransferResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7CE0AE54-6F27-5522-A429-4C5EE8FD40C8
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

export class DisableAssociatedTransferResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAssociatedTransferResponseBody;
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
      body: DisableAssociatedTransferResponseBody,
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

export class DisableAutoGroupingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 898FAB24-7509-43EE-A287-086FE4C44394
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

export class DisableAutoGroupingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableAutoGroupingResponseBody;
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
      body: DisableAutoGroupingResponseBody,
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
   * *   Enabled: The Control Policy feature is enabled.
   * *   PendingEnable: The Control Policy feature is being enabled.
   * *   Disabled: The Control Policy feature is disabled.
   * *   PendingDisable: The Control Policy feature is being disabled.
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

export class EnableAssociatedTransferResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF5189484114
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

export class EnableAssociatedTransferResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAssociatedTransferResponseBody;
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
      body: EnableAssociatedTransferResponseBody,
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

export class EnableAutoGroupingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
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

export class EnableAutoGroupingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableAutoGroupingResponseBody;
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
      body: EnableAutoGroupingResponseBody,
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
   * *   Enabled: The Control Policy feature is enabled.
   * *   PendingEnable: The Control Policy feature is being enabled.
   * *   Disabled: The Control Policy feature is disabled.
   * *   PendingDisable: The Control Policy feature is being disabled.
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
   * The mode in which you enable a resource directory. Valid values:
   * 
   * *   CurrentAccount: indicates that the current account is used to enable a resource directory.
   * *   NewManagementAccount: indicates that a newly created account is used to enable a resource directory. If you select this mode, you must configure the `MAName`, `MASecureMobilePhone`, and `VerificationCode` parameters.
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
   * Specify the name in the `<Prefix>@rdadmin.aliyunid.com` format. The prefix can contain letters, digits, and special characters but cannot contain consecutive special characters. The prefix must start with a letter or digit and end with a letter or digit. Valid special characters include underscores (_), periods (.), and hyphens (-). The prefix must be 2 to 50 characters in length.
   * 
   * @example
   * user01@rdadmin.aliyunid.com
   */
  MAName?: string;
  /**
   * @remarks
   * The mobile phone number that is bound to the newly created account.
   * 
   * If you leave this parameter empty, the mobile phone number that is bound to the current account is used. The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForEnableRD](https://help.aliyun.com/document_detail/364248.html) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * >  Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * @example
   * xx-13900001234
   */
  MASecureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call the [SendVerificationCodeForEnableRD](https://help.aliyun.com/document_detail/364248.html) operation to obtain the verification code.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      enableMode: 'EnableMode',
      MAName: 'MAName',
      MASecureMobilePhone: 'MASecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The information of the resource directory.
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
   * The information of the member.
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
   * The ID of the member that you want to delete.
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

export class GetAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoGroupingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9EA4F962-1A2E-4AFE-BE0C-B14736FC46CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the rule.
   */
  rule?: GetAutoGroupingRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: GetAutoGroupingRuleResponseBodyRule,
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoGroupingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoGroupingRuleResponseBody;
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
      body: GetAutoGroupingRuleResponseBody,
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

export class GetAutoGroupingStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Transfer Existing Associated Resources feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableExistedResourcesTransfer?: boolean;
  /**
   * @remarks
   * The status of the Automatic Resource Transfer feature. Valid values:
   * 
   * *   Enabling: The feature is being enabled.
   * *   Enable: The feature is enabled.
   * *   Partial_Enable: The transfer of associated resources is enabled, but custom transfer rule-based resource transfer is disabled. You can call the [EnableAutoGrouping](https://help.aliyun.com/document_detail/2870380.html) operation to enable custom transfer rule-based resource transfer.
   * *   Disable: The feature is disabled.
   * 
   * @example
   * Enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0217AFEB-5318-56D4-B167-1933D83EDF3F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableExistedResourcesTransfer: 'EnableExistedResourcesTransfer',
      enableStatus: 'EnableStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistedResourcesTransfer: 'boolean',
      enableStatus: 'string',
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

export class GetAutoGroupingStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoGroupingStatusResponseBody;
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
      body: GetAutoGroupingStatusResponseBody,
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
   * >  This parameter is valid only for system access control policies.
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
   * *   Enabled: The Control Policy feature is enabled.
   * *   PendingEnable: The Control Policy feature is being enabled.
   * *   Disabled: The Control Policy feature is disabled.
   * *   PendingDisable: The Control Policy feature is being disabled.
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
   * The information of the folder.
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

export class GetPayerForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
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
   * The ID of the settlement account.
   * 
   * @example
   * 172841235500****
   */
  payerAccountId?: string;
  /**
   * @remarks
   * The name of the settlement account.
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

export class GetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

export class GetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyResponseBody;
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
      body: GetPolicyResponseBody,
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

export class GetPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * This parameter is required.
   * 
   * @example
   * v3
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the policy version.
   */
  policyVersion?: GetPolicyVersionResponseBodyPolicyVersion;
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
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: GetPolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersion && typeof (this.policyVersion as any).validate === 'function') {
      (this.policyVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyVersionResponseBody;
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
      body: GetPolicyVersionResponseBody,
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD76D376-2517-4924-92C5-DBC52262F93A
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource directory.
   */
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

export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the resource group.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF5189484043
   */
  requestId?: string;
  /**
   * @remarks
   * The display name of the resource group.
   */
  resourceGroup?: GetResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: GetResourceGroupResponseBodyResourceGroup,
    };
  }

  validate() {
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupResponseBody;
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
      body: GetResourceGroupResponseBody,
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

export class GetRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the description of the RAM role. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
  role?: GetRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: GetRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleResponseBody;
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
      body: GetRoleResponseBody,
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

export class GetServiceLinkedRoleDeletionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * task/acs-service-role/hdr.aliyuncs.com/AliyunServiceRoleForHdr/c4d22c52-247f-4ee1-83a2-6c0460bd****
   */
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reason why the deletion task failed.
   */
  reason?: GetServiceLinkedRoleDeletionStatusResponseBodyReason;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 07194EB1-DB50-4513-A51D-99B30D635AEF
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * - SUCCEEDED
   * - IN_PROGRESS
   * - FAILED
   * - NOT_STARTED
   * - INTERNAL_ERROR
   * 
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: GetServiceLinkedRoleDeletionStatusResponseBodyReason,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceLinkedRoleDeletionStatusResponseBody;
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
      body: GetServiceLinkedRoleDeletionStatusResponseBody,
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

export class InitResourceDirectoryResponseBody extends $dara.Model {
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
   * The information of the resource directory.
   */
  resourceDirectory?: InitResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: InitResourceDirectoryResponseBodyResourceDirectory,
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

export class InitResourceDirectoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitResourceDirectoryResponseBody;
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
      body: InitResourceDirectoryResponseBody,
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
   * The comment on the invitation.
   * 
   * The comment can be up to 1,024 characters in length.
   * 
   * @example
   * Welcome
   */
  note?: string;
  /**
   * @remarks
   * The tag key and value.
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
   * The type of the account. Valid values:
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
      tag: 'Tag',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
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
   * The information of the invitation.
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
   * Specifies whether to return the information of tags. Valid values:
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
   * The tag key and value.
   */
  tag?: ListAccountsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
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
   * The members returned.
   */
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
   * Specifies whether to return the information of tags. Valid values:
   * 
   * false (default value)
   * 
   * true
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
   * The tag key and value.
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
   * The information of the members.
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
   * The ID of the child folder.
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

export class ListAssociatedTransferSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of the Transfer Associated Resources feature.
   */
  associatedTransferSetting?: ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7556FD65-45D2-5C45-9FC9-A7DE831C775C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associatedTransferSetting: 'AssociatedTransferSetting',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedTransferSetting: ListAssociatedTransferSettingResponseBodyAssociatedTransferSetting,
      requestId: 'string',
    };
  }

  validate() {
    if(this.associatedTransferSetting && typeof (this.associatedTransferSetting as any).validate === 'function') {
      (this.associatedTransferSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedTransferSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAssociatedTransferSettingResponseBody;
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
      body: ListAssociatedTransferSettingResponseBody,
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

export class ListAutoGroupingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   custom_condition: custom transfer rule
   * *   associated_transfer: transfer rule for associated resources
   * 
   * @example
   * custom_condition
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned for a single request. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  /**
   * @remarks
   * The queried rules.
   */
  rules?: ListAutoGroupingRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListAutoGroupingRulesResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoGroupingRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutoGroupingRulesResponseBody;
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
      body: ListAutoGroupingRulesResponseBody,
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
   * - zh-CN (default value): Chinese
   * - en: English
   * - ja: Japanese
   * 
   * >  This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The number of the page to return. 
   * 
   * Page start from page 1. Default value: 1.
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
   * The type of the access control policy. Valid values:
   * 
   * - System: system access control policy
   * - Custom: custom access control policy
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
   * The access control policies.
   */
  controlPolicies?: ListControlPoliciesResponseBodyControlPolicies;
  /**
   * @remarks
   * The number of the returned page.
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
   * >  This parameter is valid only for system access control policies.
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
   * The attached access control policies.
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
   * The information of the delegated administrator accounts.
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
   * The ID of the member.
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
   * The trusted services.
   * 
   * >  If the value of this parameter is empty, the member is not specified as a delegated administrator account.
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
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the folders.
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

export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
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
   * The type of the policy. If you do not specify this parameter, the system lists all types of policies. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
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

export class ListPoliciesResponseBody extends $dara.Model {
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
   * The information of the policies.
   */
  policies?: ListPoliciesResponseBodyPolicies;
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
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
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
      body: ListPoliciesResponseBody,
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

export class ListPolicyAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the description of the system policy. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
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
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * AdministratorAccess
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. If you do not specify this parameter, the system lists all types of policies. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the object to which the policy is attached.
   * 
   * @example
   * alice@demo.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the object to which the policy is attached. If you do not specify this parameter, the system lists all types of objects. Valid values:
   * 
   * *   IMSUser: RAM user
   * *   IMSGroup: RAM user group
   * *   ServiceRole: RAM role
   * 
   * @example
   * IMSUser
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. If you do not specify this parameter, the system lists all policy attachment records under the current account.
   * 
   * @example
   * rg-001
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBody extends $dara.Model {
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
   * The policy attachment records.
   */
  policyAttachments?: ListPolicyAttachmentsResponseBodyPolicyAttachments;
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
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyAttachments: ListPolicyAttachmentsResponseBodyPolicyAttachments,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.policyAttachments && typeof (this.policyAttachments as any).validate === 'function') {
      (this.policyAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyAttachmentsResponseBody;
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
      body: ListPolicyAttachmentsResponseBody,
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

export class ListPolicyVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListPolicyVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the policy versions.
   */
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersions: 'PolicyVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersions: ListPolicyVersionsResponseBodyPolicyVersions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policyVersions && typeof (this.policyVersions as any).validate === 'function') {
      (this.policyVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyVersionsResponseBody;
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
      body: ListPolicyVersionsResponseBody,
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

export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.
   * 
   * The display name can be a maximum of 50 characters in length.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * >  If you configure the Tag parameter, the system returns the information of tags regardless of the setting of the `IncludeTags` parameter.
   * 
   * @example
   * false
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.
   * 
   * The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * my-project
   */
  name?: string;
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
   * The ID of the resource group. This parameter specifies a filter condition for the query.
   * 
   * The ID can be a maximum of 18 characters in length and must start with `rg-`.
   * 
   * >  This parameter is incorporated into the `ResourceGroupIds` parameter. If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the resource groups. This parameter specifies a filter condition for the query.
   * 
   * You can specify a maximum of 100 resource group IDs.
   * 
   * >  If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The status of the resource group. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tag. This parameter specifies a filter condition for the query.
   */
  tag?: ListResourceGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      includeTags: 'IncludeTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIds: 'ResourceGroupIds',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      includeTags: 'boolean',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
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

export class ListResourceGroupsResponseBody extends $dara.Model {
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
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource groups.
   */
  resourceGroups?: ListResourceGroupsResponseBodyResourceGroups;
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceGroups: ListResourceGroupsResponseBodyResourceGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.resourceGroups && typeof (this.resourceGroups as any).validate === 'function') {
      (this.resourceGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceGroupsResponseBody;
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
      body: ListResourceGroupsResponseBody,
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

export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uPJpP****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-23v38****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For more information about the supported resource types, see the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource types. A maximum of 50 resource types are supported.
   * 
   * >  If you configure `ResourceTypes`, you must configure both `Service` and `ResourceType`. Otherwise, the configured Service or ResourceType does not take effect.
   */
  resourceTypes?: ListResourcesRequestResourceTypes[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud service.
   * 
   * You can obtain the ID from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceTypes: 'ResourceTypes',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourcesRequestResourceTypes },
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: ListResourcesResponseBodyResources;
  /**
   * @remarks
   * The total number of entries returned.
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
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: ListResourcesResponseBodyResources,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
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

export class ListRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The language that is used to return the descriptions of the RAM roles. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
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
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

export class ListRolesResponseBody extends $dara.Model {
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
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM roles.
   */
  roles?: ListRolesResponseBodyRoles;
  /**
   * @remarks
   * The total number of RAM roles.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      roles: 'Roles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      roles: ListRolesResponseBodyRoles,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
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
      body: ListRolesResponseBody,
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
   * The token that is used to start the next query.
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
   * The ID of the request.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag keys.
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
   * The resource ID.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects whose tags you want to query. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   ResourceGroup: resource group. This is the default value.
   * *   Account: member.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key and value.
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
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
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
   * The token that is used to start the next query.
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
   * The ID of the request.
   * 
   * @example
   * DC09A6AA-2713-4E10-A2E9-E6C5C43A8842
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag values.
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
   * The ID of the control policy.
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
   * The list of objects to which the control policy is attached.
   */
  targetAttachments?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments;
  /**
   * @remarks
   * The total number of objects to which the control policy is attached.
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
   * The ID of the enterprise management account or delegated administrator account.
   * 
   * *   If you set this parameter to the ID of an enterprise management account, the trusted services that are enabled within the enterprise management account are queried. The default value of this parameter is the ID of an enterprise management account.
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
   * The trusted services that are enabled.
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
   * The ID of the account you want to move.
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

export class MoveResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzmeobk5w****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources that you want to move.
   * 
   * >  You can move a maximum of 10 resources at a time. If you want to move more than 10 resources, move them in batches.
   * 
   * This parameter is required.
   */
  resources?: MoveResourcesRequestResources[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': MoveResourcesRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C00B89D3-3247-11DE-95D8-A7C01FB0AB4F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  responses?: MoveResourcesResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': MoveResourcesResponseBodyResponses },
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourcesResponseBody;
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
      body: MoveResourcesResponseBody,
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

export class PromoteResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource account you want to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The email address used to log on to the cloud account after the upgrade.
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

export class PromoteResourceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the member account.
   */
  account?: PromoteResourceAccountResponseBodyAccount;
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

export class PromoteResourceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PromoteResourceAccountResponseBody;
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
      body: PromoteResourceAccountResponseBody,
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
   * The ID of the member in the resource directory.
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
   * The ID of the member.
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

export class ResendCreateCloudAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The account record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
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
   * The information of the member account.
   */
  account?: ResendCreateCloudAccountEmailResponseBodyAccount;
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

export class ResendCreateCloudAccountEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResendCreateCloudAccountEmailResponseBody;
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
      body: ResendCreateCloudAccountEmailResponseBody,
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

export class ResendPromoteResourceAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The account record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the member account.
   */
  account?: ResendPromoteResourceAccountEmailResponseBodyAccount;
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
      account: ResendPromoteResourceAccountEmailResponseBodyAccount,
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

export class ResendPromoteResourceAccountEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResendPromoteResourceAccountEmailResponseBody;
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
      body: ResendPromoteResourceAccountEmailResponseBody,
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

export class SendVerificationCodeForBindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource account.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone number that you want to bind to the resource account.
   * 
   * Specify the mobile phone number in the \\<Country code>-\\<Mobile phone number> format.
   * 
   * >  Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
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
   * >  Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
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

export class SetDefaultPolicyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * This parameter is required.
   * 
   * @example
   * v2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultPolicyVersionResponseBody extends $dara.Model {
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

export class SetDefaultPolicyVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultPolicyVersionResponseBody;
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
      body: SetDefaultPolicyVersionResponseBody,
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
   * *   Enabled: enables the member deletion feature
   * *   Disabled: disables the member deletion feature
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
   * The ID of a resource group or member.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the objects to which you want to add tags. Valid values:
   * 
   * *   ResourceGroup : resource group. This is the default value.
   * *   Account: member.
   * 
   * >  This parameter is required if you add tags to members in a resource directory.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
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
   * Specifies whether to remove all tags from the specified resource groups or members. Valid values:
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
   * The ID of a resource group or member.
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
   * *   ResourceGroup: resource group. This is the default value.
   * *   Account: member.
   * 
   * >  This parameter is required if you remove tags from members in a resource directory.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * A tag key.
   * 
   * You can specify a maximum of 20 tag keys.
   * 
   * >  If you set the `All` parameter to `true`, you do not need to configure this parameter.
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
   * The ID of the Alibaba Cloud account that corresponds to the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The new type of the member. Valid values:
   * 
   * *   ResourceAccount: resource account
   * *   CloudAccount: cloud account
   * 
   * >  You can configure either the `NewDisplayName` or `NewAccountType` parameter.
   * 
   * @example
   * ResourceAccount
   */
  newAccountType?: string;
  /**
   * @remarks
   * The new display name of the member.
   * 
   * >  You can configure either the `NewDisplayName` or `NewAccountType` parameter.
   * 
   * @example
   * admin
   */
  newDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      newAccountType: 'NewAccountType',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

export class UpdateAssociatedTransferSettingRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Transfer Existing Associated Resources feature. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  enableExistingResourcesTransfer?: string;
  /**
   * @remarks
   * The settings of transfer rules.
   */
  ruleSettings?: UpdateAssociatedTransferSettingRequestRuleSettings[];
  static names(): { [key: string]: string } {
    return {
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
      ruleSettings: 'RuleSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistingResourcesTransfer: 'string',
      ruleSettings: { 'type': 'array', 'itemType': UpdateAssociatedTransferSettingRequestRuleSettings },
    };
  }

  validate() {
    if(Array.isArray(this.ruleSettings)) {
      $dara.Model.validateArray(this.ruleSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssociatedTransferSettingResponseBody extends $dara.Model {
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

export class UpdateAssociatedTransferSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAssociatedTransferSettingResponseBody;
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
      body: UpdateAssociatedTransferSettingResponseBody,
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

export class UpdateAutoGroupingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Transfer Existing Associated Resources feature. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  enableExistingResourcesTransfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistingResourcesTransfer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoGroupingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2CBCA30-C8DD-423E-B4AD-4FB694C9180C
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

export class UpdateAutoGroupingConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAutoGroupingConfigResponseBody;
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
      body: UpdateAutoGroupingConfigResponseBody,
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

export class UpdateAutoGroupingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of regions to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-beijing,cn-guangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******zj2oi,rg-aekz******r62ua
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources to be excluded. Separate multiple IDs with commas (,).
   * 
   * @example
   * pc-uf6p******4h784y,rmq-cn-******ny0y
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The resource types to be excluded. Separate multiple resource types with commas (,).
   * 
   * @example
   * mse.cluster,slb.loadbalancer
   */
  excludeResourceTypesScope?: string;
  /**
   * @remarks
   * The IDs of regions. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-hangzhou,cn-shanghai
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of resource groups. Separate multiple IDs with commas (,).
   * 
   * @example
   * rg-aekz******4b5ea,rg-aek2******fxykq
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of resources. Separate multiple IDs with commas (,).
   * 
   * @example
   * i-2zee******ym49kfmwis,vpc-5ts6******fnw493g849a
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The resource types. Separate multiple resource types with commas (,).
   * 
   * @example
   * rds.dbinstance,oss.bucket
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The content records of the rule.
   * 
   * This parameter is required.
   */
  ruleContents?: UpdateAutoGroupingRuleRequestRuleContents[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Transfer resources to which the {"env": "online"} and {"project": "A"} tags are added to the resource group rg-aek2********qcy.
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * gr-acfo******hy6a
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom Transfer Rule for Online Resources of Project A
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeResourceTypesScope: 'ExcludeResourceTypesScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      ruleContents: 'RuleContents',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeResourceTypesScope: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      ruleContents: { 'type': 'array', 'itemType': UpdateAutoGroupingRuleRequestRuleContents },
      ruleDesc: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleContents)) {
      $dara.Model.validateArray(this.ruleContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoGroupingRuleResponseBody extends $dara.Model {
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

export class UpdateAutoGroupingRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAutoGroupingRuleResponseBody;
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
      body: UpdateAutoGroupingRuleResponseBody,
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
   * The information of the folder.
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

export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newDisplayName: 'NewDisplayName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDisplayName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource group.
   */
  resourceGroup?: UpdateResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: UpdateResourceGroupResponseBodyResourceGroup,
    };
  }

  validate() {
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceGroupResponseBody;
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
      body: UpdateResourceGroupResponseBody,
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

export class UpdateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The document of the policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }
   */
  newAssumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * ECS administrator
   */
  newDescription?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Unit: seconds. Valid values: 3600 to 43200. Default value: 3600.
   * 
   * If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 3600
   */
  newMaxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.),and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      newAssumeRolePolicyDocument: 'NewAssumeRolePolicyDocument',
      newDescription: 'NewDescription',
      newMaxSessionDuration: 'NewMaxSessionDuration',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newAssumeRolePolicyDocument: 'string',
      newDescription: 'string',
      newMaxSessionDuration: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
  role?: UpdateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: UpdateRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleResponseBody;
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
      body: UpdateRoleResponseBody,
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcemanager", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * This topic provides an example on how to call the API operation to accept the invitation `h-Ih8IuPfvV0t0****` that is initiated to invite the Alibaba Cloud account `177242285274****` to join the resource directory `rd-3G****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AcceptHandshakeResponse>(await this.callApi(params, req, runtime), new AcceptHandshakeResponse({}));
    } else {
      return $dara.cast<AcceptHandshakeResponse>(await this.execute(params, req, runtime), new AcceptHandshakeResponse({}));
    }

  }

  /**
   * Accepts an invitation.
   * 
   * @remarks
   * After an invited Alibaba Cloud account joins a resource directory, it becomes a member of the resource directory. By default, the name of the invited Alibaba Cloud account is used as the display name of the account in the resource directory.
   * This topic provides an example on how to call the API operation to accept the invitation `h-Ih8IuPfvV0t0****` that is initiated to invite the Alibaba Cloud account `177242285274****` to join the resource directory `rd-3G****`.
   * 
   * @param request - AcceptHandshakeRequest
   * @returns AcceptHandshakeResponse
   */
  async acceptHandshake(request: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  /**
   * @remarks
   * After you attach an access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * This topic provides an example on how to call the API operation to attach the custom access control policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachControlPolicyResponse>(await this.callApi(params, req, runtime), new AttachControlPolicyResponse({}));
    } else {
      return $dara.cast<AttachControlPolicyResponse>(await this.execute(params, req, runtime), new AttachControlPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * After you attach an access control policy, the operations performed on resources by using members are limited by the policy. Make sure that the attached policy meets your expectations. Otherwise, your business may be affected.
   * By default, the system access control policy FullAliyunAccess is attached to each folder and member.
   * The access control policy that is attached to a folder also applies to all its subfolders and all members in the subfolders.
   * A maximum of 10 access control policies can be attached to a folder or member.
   * This topic provides an example on how to call the API operation to attach the custom access control policy `cp-jExXAqIYkwHN****` to the folder `fd-ZDNPiT****`.
   * 
   * @param request - AttachControlPolicyRequest
   * @returns AttachControlPolicyResponse
   */
  async attachControlPolicy(request: AttachControlPolicyRequest): Promise<AttachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachControlPolicyWithOptions(request, runtime);
  }

  /**
   * 为RAM身份授权
   * 
   * @remarks
   * In this example, the policy `AdministratorAccess` is attached to the RAM user `alice@demo.onaliyun.com` and takes effect only for resources in the `rg-9gLOoK****` resource group.
   * 
   * @param request - AttachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyResponse
   */
  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<AttachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachPolicyResponse>(await this.callApi(params, req, runtime), new AttachPolicyResponse({}));
    } else {
      return $dara.cast<AttachPolicyResponse>(await this.execute(params, req, runtime), new AttachPolicyResponse({}));
    }

  }

  /**
   * 为RAM身份授权
   * 
   * @remarks
   * In this example, the policy `AdministratorAccess` is attached to the RAM user `alice@demo.onaliyun.com` and takes effect only for resources in the `rg-9gLOoK****` resource group.
   * 
   * @param request - AttachPolicyRequest
   * @returns AttachPolicyResponse
   */
  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  /**
   * 设置安全手机号
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * This topic provides an example on how to call the API operation to bind a mobile phone number to the member `138660628348****` for security purposes.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new BindSecureMobilePhoneResponse({}));
    } else {
      return $dara.cast<BindSecureMobilePhoneResponse>(await this.execute(params, req, runtime), new BindSecureMobilePhoneResponse({}));
    }

  }

  /**
   * 设置安全手机号
   * 
   * @remarks
   * You can call this API operation only to bind a mobile phone number to a member of the resource account type. You cannot call this API operation to change the mobile phone number that is bound to a member of the resource account type.
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this API operation.
   * This topic provides an example on how to call the API operation to bind a mobile phone number to the member `138660628348****` for security purposes.
   * 
   * @param request - BindSecureMobilePhoneRequest
   * @returns BindSecureMobilePhoneResponse
   */
  async bindSecureMobilePhone(request: BindSecureMobilePhoneRequest): Promise<BindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * 取消修改邮箱
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new CancelChangeAccountEmailResponse({}));
    } else {
      return $dara.cast<CancelChangeAccountEmailResponse>(await this.execute(params, req, runtime), new CancelChangeAccountEmailResponse({}));
    }

  }

  /**
   * 取消修改邮箱
   * 
   * @param request - CancelChangeAccountEmailRequest
   * @returns CancelChangeAccountEmailResponse
   */
  async cancelChangeAccountEmail(request: CancelChangeAccountEmailRequest): Promise<CancelChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * 取消创建云账号类型的成员
   * 
   * @param request - CancelCreateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCreateCloudAccountResponse
   */
  async cancelCreateCloudAccountWithOptions(request: CancelCreateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<CancelCreateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCreateCloudAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelCreateCloudAccountResponse>(await this.callApi(params, req, runtime), new CancelCreateCloudAccountResponse({}));
    } else {
      return $dara.cast<CancelCreateCloudAccountResponse>(await this.execute(params, req, runtime), new CancelCreateCloudAccountResponse({}));
    }

  }

  /**
   * 取消创建云账号类型的成员
   * 
   * @param request - CancelCreateCloudAccountRequest
   * @returns CancelCreateCloudAccountResponse
   */
  async cancelCreateCloudAccount(request: CancelCreateCloudAccountRequest): Promise<CancelCreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCreateCloudAccountWithOptions(request, runtime);
  }

  /**
   * Cancels an invitation.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to cancel the invitation whose ID is `h-ycm4rp****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelHandshakeResponse>(await this.callApi(params, req, runtime), new CancelHandshakeResponse({}));
    } else {
      return $dara.cast<CancelHandshakeResponse>(await this.execute(params, req, runtime), new CancelHandshakeResponse({}));
    }

  }

  /**
   * Cancels an invitation.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to cancel the invitation whose ID is `h-ycm4rp****`.
   * 
   * @param request - CancelHandshakeRequest
   * @returns CancelHandshakeResponse
   */
  async cancelHandshake(request: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  /**
   * 取消升级资源账号
   * 
   * @param request - CancelPromoteResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPromoteResourceAccountResponse
   */
  async cancelPromoteResourceAccountWithOptions(request: CancelPromoteResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<CancelPromoteResourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPromoteResourceAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelPromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new CancelPromoteResourceAccountResponse({}));
    } else {
      return $dara.cast<CancelPromoteResourceAccountResponse>(await this.execute(params, req, runtime), new CancelPromoteResourceAccountResponse({}));
    }

  }

  /**
   * 取消升级资源账号
   * 
   * @param request - CancelPromoteResourceAccountRequest
   * @returns CancelPromoteResourceAccountResponse
   */
  async cancelPromoteResourceAccount(request: CancelPromoteResourceAccountRequest): Promise<CancelPromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * 成员账号设置安全邮箱
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new ChangeAccountEmailResponse({}));
    } else {
      return $dara.cast<ChangeAccountEmailResponse>(await this.execute(params, req, runtime), new ChangeAccountEmailResponse({}));
    }

  }

  /**
   * 成员账号设置安全邮箱
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
   * This topic provides an example on how to call the API operation to perform a deletion check on the member whose ID is `179855839641****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckAccountDeleteResponse>(await this.callApi(params, req, runtime), new CheckAccountDeleteResponse({}));
    } else {
      return $dara.cast<CheckAccountDeleteResponse>(await this.execute(params, req, runtime), new CheckAccountDeleteResponse({}));
    }

  }

  /**
   * Performs a member deletion check.
   * 
   * @remarks
   * Before you delete a member, you must call this API operation to check whether the member can be deleted.
   * This topic provides an example on how to call the API operation to perform a deletion check on the member whose ID is `179855839641****`.
   * 
   * @param request - CheckAccountDeleteRequest
   * @returns CheckAccountDeleteResponse
   */
  async checkAccountDelete(request: CheckAccountDeleteRequest): Promise<CheckAccountDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountDeleteWithOptions(request, runtime);
  }

  /**
   * Creates a transfer rule. Custom transfer rules and transfer rules for associated resources are supported.
   * 
   * @remarks
   * You can create up to 10 custom transfer rules. Each custom transfer rule can contain up to 10 content records.
   * 
   * @param request - CreateAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoGroupingRuleResponse
   */
  async createAutoGroupingRuleWithOptions(request: CreateAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceTypesScope)) {
      query["ExcludeResourceTypesScope"] = request.excludeResourceTypesScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceTypesScope)) {
      query["ResourceTypesScope"] = request.resourceTypesScope;
    }

    if (!$dara.isNull(request.ruleContents)) {
      query["RuleContents"] = request.ruleContents;
    }

    if (!$dara.isNull(request.ruleDesc)) {
      query["RuleDesc"] = request.ruleDesc;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new CreateAutoGroupingRuleResponse({}));
    } else {
      return $dara.cast<CreateAutoGroupingRuleResponse>(await this.execute(params, req, runtime), new CreateAutoGroupingRuleResponse({}));
    }

  }

  /**
   * Creates a transfer rule. Custom transfer rules and transfer rules for associated resources are supported.
   * 
   * @remarks
   * You can create up to 10 custom transfer rules. Each custom transfer rule can contain up to 10 content records.
   * 
   * @param request - CreateAutoGroupingRuleRequest
   * @returns CreateAutoGroupingRuleResponse
   */
  async createAutoGroupingRule(request: CreateAutoGroupingRuleRequest): Promise<CreateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * 创建云账号
   * 
   * @remarks
   * A resource directory supports two types of member accounts: resource accounts and cloud accounts.
   * *   Resource account (recommended): A resource account is only used as a resource container and fully depends on a resource directory. Such member accounts are secure and easy-to-create. For more information about how to create a resource account, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html).
   * >  A resource account can be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html) .
   * *   Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root permissions.
   * 
   * @param request - CreateCloudAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccountWithOptions(request: CreateCloudAccountRequest, runtime: $dara.RuntimeOptions): Promise<CreateCloudAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!$dara.isNull(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCloudAccountResponse>(await this.callApi(params, req, runtime), new CreateCloudAccountResponse({}));
    } else {
      return $dara.cast<CreateCloudAccountResponse>(await this.execute(params, req, runtime), new CreateCloudAccountResponse({}));
    }

  }

  /**
   * 创建云账号
   * 
   * @remarks
   * A resource directory supports two types of member accounts: resource accounts and cloud accounts.
   * *   Resource account (recommended): A resource account is only used as a resource container and fully depends on a resource directory. Such member accounts are secure and easy-to-create. For more information about how to create a resource account, see [CreateResourceAccount](https://help.aliyun.com/document_detail/159392.html).
   * >  A resource account can be upgraded to a cloud account. For more information, see [PromoteResourceAccount](https://help.aliyun.com/document_detail/159395.html) .
   * *   Cloud account: A cloud account has all the features of an Alibaba Cloud account, including root permissions.
   * 
   * @param request - CreateCloudAccountRequest
   * @returns CreateCloudAccountResponse
   */
  async createCloudAccount(request: CreateCloudAccountRequest): Promise<CreateCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to create a custom access control policy named `ExampleControlPolicy`. This access control policy is used to prohibit modifications to the ResourceDirectoryAccountAccessRole role and the permissions of the role.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateControlPolicyResponse>(await this.callApi(params, req, runtime), new CreateControlPolicyResponse({}));
    } else {
      return $dara.cast<CreateControlPolicyResponse>(await this.execute(params, req, runtime), new CreateControlPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to create a custom access control policy named `ExampleControlPolicy`. This access control policy is used to prohibit modifications to the ResourceDirectoryAccountAccessRole role and the permissions of the role.
   * 
   * @param request - CreateControlPolicyRequest
   * @returns CreateControlPolicyResponse
   */
  async createControlPolicy(request: CreateControlPolicyRequest): Promise<CreateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  A maximum of five levels of folders can be created under the root folder.
   * In this example, a folder named `rdFolder` is created under the root folder.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
    } else {
      return $dara.cast<CreateFolderResponse>(await this.execute(params, req, runtime), new CreateFolderResponse({}));
    }

  }

  /**
   * @remarks
   * >  A maximum of five levels of folders can be created under the root folder.
   * In this example, a folder named `rdFolder` is created under the root folder.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
    } else {
      return $dara.cast<CreatePolicyResponse>(await this.execute(params, req, runtime), new CreatePolicyResponse({}));
    }

  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * 创建权限策略版本
   * 
   * @param request - CreatePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersionWithOptions(request: CreatePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.setAsDefault)) {
      query["SetAsDefault"] = request.setAsDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePolicyVersionResponse>(await this.callApi(params, req, runtime), new CreatePolicyVersionResponse({}));
    } else {
      return $dara.cast<CreatePolicyVersionResponse>(await this.execute(params, req, runtime), new CreatePolicyVersionResponse({}));
    }

  }

  /**
   * 创建权限策略版本
   * 
   * @param request - CreatePolicyVersionRequest
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceAccountResponse>(await this.callApi(params, req, runtime), new CreateResourceAccountResponse({}));
    } else {
      return $dara.cast<CreateResourceAccountResponse>(await this.execute(params, req, runtime), new CreateResourceAccountResponse({}));
    }

  }

  /**
   * Creates a member of the resource account type.
   * 
   * @remarks
   * A member serves as a container for resources and is also an organizational unit in a resource directory. A member indicates a project or application. The resources of different members are isolated.
   * 
   * @param request - CreateResourceAccountRequest
   * @returns CreateResourceAccountResponse
   */
  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * >  A maximum of 30 resource groups can be created within an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateResourceGroupResponse({}));
    } else {
      return $dara.cast<CreateResourceGroupResponse>(await this.execute(params, req, runtime), new CreateResourceGroupResponse({}));
    }

  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * >  A maximum of 30 resource groups can be created within an Alibaba Cloud account.
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a RAM role.
   * 
   * @param request - CreateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(request: CreateRoleRequest, runtime: $dara.RuntimeOptions): Promise<CreateRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assumeRolePolicyDocument)) {
      query["AssumeRolePolicyDocument"] = request.assumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.maxSessionDuration)) {
      query["MaxSessionDuration"] = request.maxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRoleResponse>(await this.callApi(params, req, runtime), new CreateRoleResponse({}));
    } else {
      return $dara.cast<CreateRoleResponse>(await this.execute(params, req, runtime), new CreateRoleResponse({}));
    }

  }

  /**
   * Creates a RAM role.
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  /**
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customSuffix)) {
      query["CustomSuffix"] = request.customSuffix;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
    } else {
      return $dara.cast<CreateServiceLinkedRoleResponse>(await this.execute(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
    }

  }

  /**
   * 创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeclineHandshakeResponse>(await this.callApi(params, req, runtime), new DeclineHandshakeResponse({}));
    } else {
      return $dara.cast<DeclineHandshakeResponse>(await this.execute(params, req, runtime), new DeclineHandshakeResponse({}));
    }

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
   * 账号一键删除
   * 
   * @remarks
   * The ID of the member that you want to delete.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
    } else {
      return $dara.cast<DeleteAccountResponse>(await this.execute(params, req, runtime), new DeleteAccountResponse({}));
    }

  }

  /**
   * 账号一键删除
   * 
   * @remarks
   * The ID of the member that you want to delete.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a transfer rule.
   * 
   * @param request - DeleteAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoGroupingRuleResponse
   */
  async deleteAutoGroupingRuleWithOptions(request: DeleteAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new DeleteAutoGroupingRuleResponse({}));
    } else {
      return $dara.cast<DeleteAutoGroupingRuleResponse>(await this.execute(params, req, runtime), new DeleteAutoGroupingRuleResponse({}));
    }

  }

  /**
   * Deletes a transfer rule.
   * 
   * @param request - DeleteAutoGroupingRuleRequest
   * @returns DeleteAutoGroupingRuleResponse
   */
  async deleteAutoGroupingRule(request: DeleteAutoGroupingRuleRequest): Promise<DeleteAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * 删除管控策略
   * 
   * @remarks
   * If you want to delete a custom control policy that is attached to folders or member accounts, you must call the [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) operation to detach the policy before you delete it.
   * In this example, the custom control policy `cp-SImPt8GCEwiq****` is deleted.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteControlPolicyResponse>(await this.callApi(params, req, runtime), new DeleteControlPolicyResponse({}));
    } else {
      return $dara.cast<DeleteControlPolicyResponse>(await this.execute(params, req, runtime), new DeleteControlPolicyResponse({}));
    }

  }

  /**
   * 删除管控策略
   * 
   * @remarks
   * If you want to delete a custom control policy that is attached to folders or member accounts, you must call the [DetachControlPolicy](https://help.aliyun.com/document_detail/208331.html) operation to detach the policy before you delete it.
   * In this example, the custom control policy `cp-SImPt8GCEwiq****` is deleted.
   * 
   * @param request - DeleteControlPolicyRequest
   * @returns DeleteControlPolicyResponse
   */
  async deleteControlPolicy(request: DeleteControlPolicyRequest): Promise<DeleteControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  Before you delete a folder, make sure that the folder does not contain any member accounts or child folders.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
    } else {
      return $dara.cast<DeleteFolderResponse>(await this.execute(params, req, runtime), new DeleteFolderResponse({}));
    }

  }

  /**
   * @remarks
   * >  Before you delete a folder, make sure that the folder does not contain any member accounts or child folders.
   * 
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * 删除权限策略
   * 
   * @remarks
   * > 
   * *   Before you delete a policy, you must delete all non-default versions of the policy. For more information about how to delete a policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * *   Before you delete a policy, make sure that the policy is not referenced. This means that the policy is not attached to RAM users, RAM user groups, or RAM roles. For more information about how to detach a policy, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
    } else {
      return $dara.cast<DeletePolicyResponse>(await this.execute(params, req, runtime), new DeletePolicyResponse({}));
    }

  }

  /**
   * 删除权限策略
   * 
   * @remarks
   * > 
   * *   Before you delete a policy, you must delete all non-default versions of the policy. For more information about how to delete a policy version, see [DeletePolicyVersion](https://help.aliyun.com/document_detail/159041.html).
   * *   Before you delete a policy, make sure that the policy is not referenced. This means that the policy is not attached to RAM users, RAM user groups, or RAM roles. For more information about how to detach a policy, see [DetachPolicy](https://help.aliyun.com/document_detail/159168.html).
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * 删除权限策略版本
   * 
   * @remarks
   * >  The default version of a permission policy cannot be deleted.
   * 
   * @param request - DeletePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersionWithOptions(request: DeletePolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePolicyVersionResponse>(await this.callApi(params, req, runtime), new DeletePolicyVersionResponse({}));
    } else {
      return $dara.cast<DeletePolicyVersionResponse>(await this.execute(params, req, runtime), new DeletePolicyVersionResponse({}));
    }

  }

  /**
   * 删除权限策略版本
   * 
   * @remarks
   * >  The default version of a permission policy cannot be deleted.
   * 
   * @param request - DeletePolicyVersionRequest
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group.
   * 
   * @remarks
   * >  Before you delete a resource group, you must delete all the resources in it.
   * In this example, the resource group whose ID is `rg-9gLOoK****` is deleted.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupResponse({}));
    } else {
      return $dara.cast<DeleteResourceGroupResponse>(await this.execute(params, req, runtime), new DeleteResourceGroupResponse({}));
    }

  }

  /**
   * Deletes a resource group.
   * 
   * @remarks
   * >  Before you delete a resource group, you must delete all the resources in it.
   * In this example, the resource group whose ID is `rg-9gLOoK****` is deleted.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: DeleteRoleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRoleResponse>(await this.callApi(params, req, runtime), new DeleteRoleResponse({}));
    } else {
      return $dara.cast<DeleteRoleResponse>(await this.execute(params, req, runtime), new DeleteRoleResponse({}));
    }

  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  /**
   * 删除服务关联角色
   * 
   * @param request - DeleteServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceLinkedRoleResponse
   */
  async deleteServiceLinkedRoleWithOptions(request: DeleteServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceLinkedRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new DeleteServiceLinkedRoleResponse({}));
    } else {
      return $dara.cast<DeleteServiceLinkedRoleResponse>(await this.execute(params, req, runtime), new DeleteServiceLinkedRoleResponse({}));
    }

  }

  /**
   * 删除服务关联角色
   * 
   * @param request - DeleteServiceLinkedRoleRequest
   * @returns DeleteServiceLinkedRoleResponse
   */
  async deleteServiceLinkedRole(request: DeleteServiceLinkedRoleRequest): Promise<DeleteServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 注销代理管理员
   * 
   * @remarks
   * >  If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * This topic provides an example on how to call the API operation to remove the delegated administrator account `181761095690****` for Cloud Firewall.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeregisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new DeregisterDelegatedAdministratorResponse({}));
    } else {
      return $dara.cast<DeregisterDelegatedAdministratorResponse>(await this.execute(params, req, runtime), new DeregisterDelegatedAdministratorResponse({}));
    }

  }

  /**
   * 注销代理管理员
   * 
   * @remarks
   * >  If the delegated administrator account that you want to remove has historical management tasks in the related trusted service, the trusted service may be affected after the delegated administrator account is removed. Therefore, proceed with caution.
   * This topic provides an example on how to call the API operation to remove the delegated administrator account `181761095690****` for Cloud Firewall.
   * 
   * @param request - DeregisterDelegatedAdministratorRequest
   * @returns DeregisterDelegatedAdministratorResponse
   */
  async deregisterDelegatedAdministrator(request: DeregisterDelegatedAdministratorRequest): Promise<DeregisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you disable a resource directory, make sure that the following requirements are met:
   * *   All member accounts must be removed from the resource directory. For more information about how to remove a member account, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * *   All folders except the root folder must be deleted from the resource directory. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * 
   * @param request - DestroyResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DestroyResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DestroyResourceDirectoryResponse>(await this.callApi(params, req, runtime), new DestroyResourceDirectoryResponse({}));
    } else {
      return $dara.cast<DestroyResourceDirectoryResponse>(await this.execute(params, req, runtime), new DestroyResourceDirectoryResponse({}));
    }

  }

  /**
   * @remarks
   * Before you disable a resource directory, make sure that the following requirements are met:
   * *   All member accounts must be removed from the resource directory. For more information about how to remove a member account, see [RemoveCloudAccount](https://help.aliyun.com/document_detail/159431.html).
   * *   All folders except the root folder must be deleted from the resource directory. For more information about how to delete a folder, see [DeleteFolder](https://help.aliyun.com/document_detail/159432.html).
   * @returns DestroyResourceDirectoryResponse
   */
  async destroyResourceDirectory(): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  /**
   * 解绑管控策略
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * This topic provides an example on how to call the API operation to detach the custom control policy `cp-jExXAqIYkwHN****` from the folder `fd-ZDNPiT****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachControlPolicyResponse>(await this.callApi(params, req, runtime), new DetachControlPolicyResponse({}));
    } else {
      return $dara.cast<DetachControlPolicyResponse>(await this.execute(params, req, runtime), new DetachControlPolicyResponse({}));
    }

  }

  /**
   * 解绑管控策略
   * 
   * @remarks
   * After you detach an access control policy, the operations performed on resources by using members are not limited by the policy. Make sure that the detached policy meets your expectations. Otherwise, your business may be affected.
   * Both the system and custom access control policies can be detached. If an object has only one access control policy attached, the policy cannot be detached.
   * This topic provides an example on how to call the API operation to detach the custom control policy `cp-jExXAqIYkwHN****` from the folder `fd-ZDNPiT****`.
   * 
   * @param request - DetachControlPolicyRequest
   * @returns DetachControlPolicyResponse
   */
  async detachControlPolicy(request: DetachControlPolicyRequest): Promise<DetachControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachControlPolicyWithOptions(request, runtime);
  }

  /**
   * 为RAM身份移除权限
   * 
   * @param request - DetachPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyResponse
   */
  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DetachPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachPolicyResponse>(await this.callApi(params, req, runtime), new DetachPolicyResponse({}));
    } else {
      return $dara.cast<DetachPolicyResponse>(await this.execute(params, req, runtime), new DetachPolicyResponse({}));
    }

  }

  /**
   * 为RAM身份移除权限
   * 
   * @param request - DetachPolicyRequest
   * @returns DetachPolicyResponse
   */
  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  /**
   * Disables the Transfer Associated Resources feature.
   * 
   * @param request - DisableAssociatedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAssociatedTransferResponse
   */
  async disableAssociatedTransferWithOptions(runtime: $dara.RuntimeOptions): Promise<DisableAssociatedTransferResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableAssociatedTransfer",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableAssociatedTransferResponse>(await this.callApi(params, req, runtime), new DisableAssociatedTransferResponse({}));
    } else {
      return $dara.cast<DisableAssociatedTransferResponse>(await this.execute(params, req, runtime), new DisableAssociatedTransferResponse({}));
    }

  }

  /**
   * Disables the Transfer Associated Resources feature.
   * @returns DisableAssociatedTransferResponse
   */
  async disableAssociatedTransfer(): Promise<DisableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Disables the Automatic Resource Transfer feature. After the feature is disabled, existing custom transfer rules and existing transfer rules for associated resources are deleted. However, existing relationships between resources and resource groups are not affected. If you still want to use this feature, you can enable it again 1 minute later.
   * 
   * @param request - DisableAutoGroupingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAutoGroupingResponse
   */
  async disableAutoGroupingWithOptions(runtime: $dara.RuntimeOptions): Promise<DisableAutoGroupingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableAutoGrouping",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableAutoGroupingResponse>(await this.callApi(params, req, runtime), new DisableAutoGroupingResponse({}));
    } else {
      return $dara.cast<DisableAutoGroupingResponse>(await this.execute(params, req, runtime), new DisableAutoGroupingResponse({}));
    }

  }

  /**
   * Disables the Automatic Resource Transfer feature. After the feature is disabled, existing custom transfer rules and existing transfer rules for associated resources are deleted. However, existing relationships between resources and resource groups are not affected. If you still want to use this feature, you can enable it again 1 minute later.
   * @returns DisableAutoGroupingResponse
   */
  async disableAutoGrouping(): Promise<DisableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAutoGroupingWithOptions(runtime);
  }

  /**
   * 禁用管控策略
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all control policies that are attached to folders and member accounts. The system does not delete these control policies, but you cannot attach them to folders or member accounts again.
   * >  If you disable the Control Policy feature, the permissions of all folders and member accounts in a resource directory are affected. You must proceed with caution.
   * 
   * @param request - DisableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<DisableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableControlPolicyResponse>(await this.callApi(params, req, runtime), new DisableControlPolicyResponse({}));
    } else {
      return $dara.cast<DisableControlPolicyResponse>(await this.execute(params, req, runtime), new DisableControlPolicyResponse({}));
    }

  }

  /**
   * 禁用管控策略
   * 
   * @remarks
   * After you disable the Control Policy feature, the system automatically detaches all control policies that are attached to folders and member accounts. The system does not delete these control policies, but you cannot attach them to folders or member accounts again.
   * >  If you disable the Control Policy feature, the permissions of all folders and member accounts in a resource directory are affected. You must proceed with caution.
   * @returns DisableControlPolicyResponse
   */
  async disableControlPolicy(): Promise<DisableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableControlPolicyWithOptions(runtime);
  }

  /**
   * Enables the Transfer Associated Resources feature.
   * 
   * @param request - EnableAssociatedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAssociatedTransferResponse
   */
  async enableAssociatedTransferWithOptions(runtime: $dara.RuntimeOptions): Promise<EnableAssociatedTransferResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableAssociatedTransfer",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableAssociatedTransferResponse>(await this.callApi(params, req, runtime), new EnableAssociatedTransferResponse({}));
    } else {
      return $dara.cast<EnableAssociatedTransferResponse>(await this.execute(params, req, runtime), new EnableAssociatedTransferResponse({}));
    }

  }

  /**
   * Enables the Transfer Associated Resources feature.
   * @returns EnableAssociatedTransferResponse
   */
  async enableAssociatedTransfer(): Promise<EnableAssociatedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAssociatedTransferWithOptions(runtime);
  }

  /**
   * Enables the Automatic Resource Transfer feature. After the feature is enabled, you can create, update, delete, and query transfer rules.
   * 
   * @param request - EnableAutoGroupingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoGroupingResponse
   */
  async enableAutoGroupingWithOptions(runtime: $dara.RuntimeOptions): Promise<EnableAutoGroupingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoGrouping",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableAutoGroupingResponse>(await this.callApi(params, req, runtime), new EnableAutoGroupingResponse({}));
    } else {
      return $dara.cast<EnableAutoGroupingResponse>(await this.execute(params, req, runtime), new EnableAutoGroupingResponse({}));
    }

  }

  /**
   * Enables the Automatic Resource Transfer feature. After the feature is enabled, you can create, update, delete, and query transfer rules.
   * @returns EnableAutoGroupingResponse
   */
  async enableAutoGrouping(): Promise<EnableAutoGroupingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoGroupingWithOptions(runtime);
  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature allows you to manage the permission boundaries of the folders or member accounts in a resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member account in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * 
   * @param request - EnableControlPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicyWithOptions(runtime: $dara.RuntimeOptions): Promise<EnableControlPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableControlPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableControlPolicyResponse>(await this.callApi(params, req, runtime), new EnableControlPolicyResponse({}));
    } else {
      return $dara.cast<EnableControlPolicyResponse>(await this.execute(params, req, runtime), new EnableControlPolicyResponse({}));
    }

  }

  /**
   * Enables the Control Policy feature.
   * 
   * @remarks
   * The Control Policy feature allows you to manage the permission boundaries of the folders or member accounts in a resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. A member account in a resource directory can be used to access resources only after it is granted the required permissions by using the Resource Access Management (RAM) service. For more information, see [Overview of the Control Policy feature](https://help.aliyun.com/document_detail/178671.html).
   * @returns EnableControlPolicyResponse
   */
  async enableControlPolicy(): Promise<EnableControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableControlPolicyWithOptions(runtime);
  }

  /**
   * 开启RD
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * In this example, the current account is used to enable a resource directory.
   * 
   * @param request - EnableResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectoryWithOptions(request: EnableResourceDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<EnableResourceDirectoryResponse> {
    request.validate();
    let query = { };
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableResourceDirectoryResponse>(await this.callApi(params, req, runtime), new EnableResourceDirectoryResponse({}));
    } else {
      return $dara.cast<EnableResourceDirectoryResponse>(await this.execute(params, req, runtime), new EnableResourceDirectoryResponse({}));
    }

  }

  /**
   * 开启RD
   * 
   * @remarks
   * You can use the current account or a newly created account to enable a resource directory. For more information, see [Enable a resource directory](https://help.aliyun.com/document_detail/111215.html).
   * In this example, the current account is used to enable a resource directory.
   * 
   * @param request - EnableResourceDirectoryRequest
   * @returns EnableResourceDirectoryResponse
   */
  async enableResourceDirectory(request: EnableResourceDirectoryRequest): Promise<EnableResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceDirectoryWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the information of the member whose Alibaba Cloud account ID is `181761095690****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAccountResponse>(await this.callApi(params, req, runtime), new GetAccountResponse({}));
    } else {
      return $dara.cast<GetAccountResponse>(await this.execute(params, req, runtime), new GetAccountResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the information of the member whose Alibaba Cloud account ID is `181761095690****`.
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
   * After you call the [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) operation to perform a member deletion check, you can call the GetAccountDeletionCheckResult operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * This topic provides an example on how to call the API operation to query the result of the deletion check for the member whose ID is `179855839641****`. The response shows that the member does not meet deletion requirements.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAccountDeletionCheckResultResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionCheckResultResponse({}));
    } else {
      return $dara.cast<GetAccountDeletionCheckResultResponse>(await this.execute(params, req, runtime), new GetAccountDeletionCheckResultResponse({}));
    }

  }

  /**
   * Queries the result of a member deletion check.
   * 
   * @remarks
   * After you call the [CheckAccountDelete](https://help.aliyun.com/document_detail/448542.html) operation to perform a member deletion check, you can call the GetAccountDeletionCheckResult operation to query the check result. If the check result shows that the member meets deletion requirements, you can delete the member. Otherwise, you need to first modify the items that do not meet requirements.
   * This topic provides an example on how to call the API operation to query the result of the deletion check for the member whose ID is `179855839641****`. The response shows that the member does not meet deletion requirements.
   * 
   * @param request - GetAccountDeletionCheckResultRequest
   * @returns GetAccountDeletionCheckResultResponse
   */
  async getAccountDeletionCheckResult(request: GetAccountDeletionCheckResultRequest): Promise<GetAccountDeletionCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionCheckResultWithOptions(request, runtime);
  }

  /**
   * 获取账号删除状态
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the deletion status of the member whose Alibaba Cloud account ID is `169946124551****`. The response shows that the member is deleted.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAccountDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetAccountDeletionStatusResponse({}));
    } else {
      return $dara.cast<GetAccountDeletionStatusResponse>(await this.execute(params, req, runtime), new GetAccountDeletionStatusResponse({}));
    }

  }

  /**
   * 获取账号删除状态
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the deletion status of the member whose Alibaba Cloud account ID is `169946124551****`. The response shows that the member is deleted.
   * 
   * @param request - GetAccountDeletionStatusRequest
   * @returns GetAccountDeletionStatusResponse
   */
  async getAccountDeletionStatus(request: GetAccountDeletionStatusRequest): Promise<GetAccountDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a transfer rule.
   * 
   * @param request - GetAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoGroupingRuleResponse
   */
  async getAutoGroupingRuleWithOptions(request: GetAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new GetAutoGroupingRuleResponse({}));
    } else {
      return $dara.cast<GetAutoGroupingRuleResponse>(await this.execute(params, req, runtime), new GetAutoGroupingRuleResponse({}));
    }

  }

  /**
   * Queries the information about a transfer rule.
   * 
   * @param request - GetAutoGroupingRuleRequest
   * @returns GetAutoGroupingRuleResponse
   */
  async getAutoGroupingRule(request: GetAutoGroupingRuleRequest): Promise<GetAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Automatic Resource Transfer feature.
   * 
   * @param request - GetAutoGroupingStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoGroupingStatusResponse
   */
  async getAutoGroupingStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<GetAutoGroupingStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoGroupingStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAutoGroupingStatusResponse>(await this.callApi(params, req, runtime), new GetAutoGroupingStatusResponse({}));
    } else {
      return $dara.cast<GetAutoGroupingStatusResponse>(await this.execute(params, req, runtime), new GetAutoGroupingStatusResponse({}));
    }

  }

  /**
   * Queries the status of the Automatic Resource Transfer feature.
   * @returns GetAutoGroupingStatusResponse
   */
  async getAutoGroupingStatus(): Promise<GetAutoGroupingStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGroupingStatusWithOptions(runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the access control policy whose ID is `cp-SImPt8GCEwiq****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetControlPolicyResponse>(await this.callApi(params, req, runtime), new GetControlPolicyResponse({}));
    } else {
      return $dara.cast<GetControlPolicyResponse>(await this.execute(params, req, runtime), new GetControlPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the details of the access control policy whose ID is `cp-SImPt8GCEwiq****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetControlPolicyEnablementStatusResponse>(await this.callApi(params, req, runtime), new GetControlPolicyEnablementStatusResponse({}));
    } else {
      return $dara.cast<GetControlPolicyEnablementStatusResponse>(await this.execute(params, req, runtime), new GetControlPolicyEnablementStatusResponse({}));
    }

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
   * @remarks
   * In this example, the information of the folder `fd-Jyl5U7****` is queried.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
    } else {
      return $dara.cast<GetFolderResponse>(await this.execute(params, req, runtime), new GetFolderResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the information of the folder `fd-Jyl5U7****` is queried.
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
   * @remarks
   * In this example, the information of the invitation whose ID is `h-ycm4rp****` is queried.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHandshakeResponse>(await this.callApi(params, req, runtime), new GetHandshakeResponse({}));
    } else {
      return $dara.cast<GetHandshakeResponse>(await this.execute(params, req, runtime), new GetHandshakeResponse({}));
    }

  }

  /**
   * Queries the information of an invitation.
   * 
   * @remarks
   * In this example, the information of the invitation whose ID is `h-ycm4rp****` is queried.
   * 
   * @param request - GetHandshakeRequest
   * @returns GetHandshakeResponse
   */
  async getHandshake(request: GetHandshakeRequest): Promise<GetHandshakeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  /**
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPayerForAccountResponse>(await this.callApi(params, req, runtime), new GetPayerForAccountResponse({}));
    } else {
      return $dara.cast<GetPayerForAccountResponse>(await this.execute(params, req, runtime), new GetPayerForAccountResponse({}));
    }

  }

  /**
   * @param request - GetPayerForAccountRequest
   * @returns GetPayerForAccountResponse
   */
  async getPayerForAccount(request: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  /**
   * Queries the information of a policy.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $dara.RuntimeOptions): Promise<GetPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
    } else {
      return $dara.cast<GetPolicyResponse>(await this.execute(params, req, runtime), new GetPolicyResponse({}));
    }

  }

  /**
   * Queries the information of a policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * 获取权限策略的指定版本
   * 
   * @param request - GetPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersionWithOptions(request: GetPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<GetPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPolicyVersionResponse>(await this.callApi(params, req, runtime), new GetPolicyVersionResponse({}));
    } else {
      return $dara.cast<GetPolicyVersionResponse>(await this.execute(params, req, runtime), new GetPolicyVersionResponse({}));
    }

  }

  /**
   * 获取权限策略的指定版本
   * 
   * @param request - GetPolicyVersionRequest
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of
   * 
   * @remarks
   * This topic provides an example on how to use a management account to call the API operation to query the information of the resource directory that is enabled by using the management account.
   * 
   * @param request - GetResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResourceDirectoryResponse>(await this.callApi(params, req, runtime), new GetResourceDirectoryResponse({}));
    } else {
      return $dara.cast<GetResourceDirectoryResponse>(await this.execute(params, req, runtime), new GetResourceDirectoryResponse({}));
    }

  }

  /**
   * Queries the information of a resource directory. If you use a management account to call this API operation, the system returns the information of the resource directory that is enabled by using the management account. If you use a member to call this operation, the system returns the information of
   * 
   * @remarks
   * This topic provides an example on how to use a management account to call the API operation to query the information of the resource directory that is enabled by using the management account.
   * @returns GetResourceDirectoryResponse
   */
  async getResourceDirectory(): Promise<GetResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  /**
   * In this example, the information of the resource group whose ID is `rg-9gLOoK****` is queried.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/159973.html).
   * 
   * @param request - GetResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(request: GetResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResourceGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupResponse({}));
    } else {
      return $dara.cast<GetResourceGroupResponse>(await this.execute(params, req, runtime), new GetResourceGroupResponse({}));
    }

  }

  /**
   * In this example, the information of the resource group whose ID is `rg-9gLOoK****` is queried.
   * 
   * @remarks
   * For more information about common request parameters, see [Common parameters](https://help.aliyun.com/document_detail/159973.html).
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information of a RAM role.
   * 
   * @param request - GetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: GetRoleRequest, runtime: $dara.RuntimeOptions): Promise<GetRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRoleResponse>(await this.callApi(params, req, runtime), new GetRoleResponse({}));
    } else {
      return $dara.cast<GetRoleResponse>(await this.execute(params, req, runtime), new GetRoleResponse({}));
    }

  }

  /**
   * Queries the information of a RAM role.
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * Query the status of the deletion task for a service linked role.
   * 
   * @param request - GetServiceLinkedRoleDeletionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLinkedRoleDeletionStatusResponse
   */
  async getServiceLinkedRoleDeletionStatusWithOptions(request: GetServiceLinkedRoleDeletionStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceLinkedRoleDeletionStatus",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceLinkedRoleDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetServiceLinkedRoleDeletionStatusResponse({}));
    } else {
      return $dara.cast<GetServiceLinkedRoleDeletionStatusResponse>(await this.execute(params, req, runtime), new GetServiceLinkedRoleDeletionStatusResponse({}));
    }

  }

  /**
   * Query the status of the deletion task for a service linked role.
   * 
   * @param request - GetServiceLinkedRoleDeletionStatusRequest
   * @returns GetServiceLinkedRoleDeletionStatusResponse
   */
  async getServiceLinkedRoleDeletionStatus(request: GetServiceLinkedRoleDeletionStatusRequest): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  /**
   * Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc
   * 
   * @remarks
   * > 
   * *   An account can be used to enable a resource directory only after it passes enterprise real-name verification. An account that only passed individual real-name verification cannot be used to enable a resource directory.
   * *   We recommend that you only use the enterprise management account as the administrator of the resource directory. Do not use the enterprise management account to purchase cloud resources.
   * 
   * @param request - InitResourceDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitResourceDirectoryResponse
   */
  async initResourceDirectoryWithOptions(runtime: $dara.RuntimeOptions): Promise<InitResourceDirectoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "InitResourceDirectory",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InitResourceDirectoryResponse>(await this.callApi(params, req, runtime), new InitResourceDirectoryResponse({}));
    } else {
      return $dara.cast<InitResourceDirectoryResponse>(await this.execute(params, req, runtime), new InitResourceDirectoryResponse({}));
    }

  }

  /**
   * Enables a resource directory. After you enable a resource directory, the system automatically creates a root folder and sets the current account as the enterprise management account of the resource directory. The enterprise management account has all administrative permissions on this resource direc
   * 
   * @remarks
   * > 
   * *   An account can be used to enable a resource directory only after it passes enterprise real-name verification. An account that only passed individual real-name verification cannot be used to enable a resource directory.
   * *   We recommend that you only use the enterprise management account as the administrator of the resource directory. Do not use the enterprise management account to purchase cloud resources.
   * @returns InitResourceDirectoryResponse
   */
  async initResourceDirectory(): Promise<InitResourceDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(runtime);
  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to invite the account `someone@example.com` to join a resource directory.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InviteAccountToResourceDirectoryResponse>(await this.callApi(params, req, runtime), new InviteAccountToResourceDirectoryResponse({}));
    } else {
      return $dara.cast<InviteAccountToResourceDirectoryResponse>(await this.execute(params, req, runtime), new InviteAccountToResourceDirectoryResponse({}));
    }

  }

  /**
   * Invites an account to join a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to invite the account `someone@example.com` to join a resource directory.
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

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccounts",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
    } else {
      return $dara.cast<ListAccountsResponse>(await this.execute(params, req, runtime), new ListAccountsResponse({}));
    }

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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAccountsForParentResponse>(await this.callApi(params, req, runtime), new ListAccountsForParentResponse({}));
    } else {
      return $dara.cast<ListAccountsForParentResponse>(await this.execute(params, req, runtime), new ListAccountsForParentResponse({}));
    }

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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAncestorsResponse>(await this.callApi(params, req, runtime), new ListAncestorsResponse({}));
    } else {
      return $dara.cast<ListAncestorsResponse>(await this.execute(params, req, runtime), new ListAncestorsResponse({}));
    }

  }

  /**
   * @param request - ListAncestorsRequest
   * @returns ListAncestorsResponse
   */
  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  /**
   * Queries the settings of the Transfer Associated Resources feature.
   * 
   * @param request - ListAssociatedTransferSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssociatedTransferSettingResponse
   */
  async listAssociatedTransferSettingWithOptions(runtime: $dara.RuntimeOptions): Promise<ListAssociatedTransferSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListAssociatedTransferSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAssociatedTransferSettingResponse>(await this.callApi(params, req, runtime), new ListAssociatedTransferSettingResponse({}));
    } else {
      return $dara.cast<ListAssociatedTransferSettingResponse>(await this.execute(params, req, runtime), new ListAssociatedTransferSettingResponse({}));
    }

  }

  /**
   * Queries the settings of the Transfer Associated Resources feature.
   * @returns ListAssociatedTransferSettingResponse
   */
  async listAssociatedTransferSetting(): Promise<ListAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssociatedTransferSettingWithOptions(runtime);
  }

  /**
   * Queries a list of transfer rules.
   * 
   * @param request - ListAutoGroupingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoGroupingRulesResponse
   */
  async listAutoGroupingRulesWithOptions(request: ListAutoGroupingRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListAutoGroupingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoGroupingRules",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAutoGroupingRulesResponse>(await this.callApi(params, req, runtime), new ListAutoGroupingRulesResponse({}));
    } else {
      return $dara.cast<ListAutoGroupingRulesResponse>(await this.execute(params, req, runtime), new ListAutoGroupingRulesResponse({}));
    }

  }

  /**
   * Queries a list of transfer rules.
   * 
   * @param request - ListAutoGroupingRulesRequest
   * @returns ListAutoGroupingRulesResponse
   */
  async listAutoGroupingRules(request: ListAutoGroupingRulesRequest): Promise<ListAutoGroupingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoGroupingRulesWithOptions(request, runtime);
  }

  /**
   * Queries access control policies.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the system access control policies within a resource directory. The response shows that the resource directory has only one system access control policy. The policy is named `FullAliyunAccess`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListControlPoliciesResponse>(await this.callApi(params, req, runtime), new ListControlPoliciesResponse({}));
    } else {
      return $dara.cast<ListControlPoliciesResponse>(await this.execute(params, req, runtime), new ListControlPoliciesResponse({}));
    }

  }

  /**
   * Queries access control policies.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the system access control policies within a resource directory. The response shows that the resource directory has only one system access control policy. The policy is named `FullAliyunAccess`.
   * 
   * @param request - ListControlPoliciesRequest
   * @returns ListControlPoliciesResponse
   */
  async listControlPolicies(request: ListControlPoliciesRequest): Promise<ListControlPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPoliciesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the access control policies that are attached to the folder `fd-ZDNPiT****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListControlPolicyAttachmentsForTargetResponse>(await this.callApi(params, req, runtime), new ListControlPolicyAttachmentsForTargetResponse({}));
    } else {
      return $dara.cast<ListControlPolicyAttachmentsForTargetResponse>(await this.execute(params, req, runtime), new ListControlPolicyAttachmentsForTargetResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to query the access control policies that are attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListControlPolicyAttachmentsForTargetRequest
   * @returns ListControlPolicyAttachmentsForTargetResponse
   */
  async listControlPolicyAttachmentsForTarget(request: ListControlPolicyAttachmentsForTargetRequest): Promise<ListControlPolicyAttachmentsForTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listControlPolicyAttachmentsForTargetWithOptions(request, runtime);
  }

  /**
   * 列出所有的代理管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query all delegated administrator accounts in a resource directory. The response shows that two delegated administrator accounts for Cloud Firewall exist in the resource directory.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDelegatedAdministratorsResponse>(await this.callApi(params, req, runtime), new ListDelegatedAdministratorsResponse({}));
    } else {
      return $dara.cast<ListDelegatedAdministratorsResponse>(await this.execute(params, req, runtime), new ListDelegatedAdministratorsResponse({}));
    }

  }

  /**
   * 列出所有的代理管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query all delegated administrator accounts in a resource directory. The response shows that two delegated administrator accounts for Cloud Firewall exist in the resource directory.
   * 
   * @param request - ListDelegatedAdministratorsRequest
   * @returns ListDelegatedAdministratorsResponse
   */
  async listDelegatedAdministrators(request: ListDelegatedAdministratorsRequest): Promise<ListDelegatedAdministratorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedAdministratorsWithOptions(request, runtime);
  }

  /**
   * 查看指定账号被设置为哪些可信服务的委派管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the trusted services for which the member `138660628348****` is specified as a delegated administrator account. The response shows that the member is specified as a delegated administrator account of Cloud Firewall.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDelegatedServicesForAccountResponse>(await this.callApi(params, req, runtime), new ListDelegatedServicesForAccountResponse({}));
    } else {
      return $dara.cast<ListDelegatedServicesForAccountResponse>(await this.execute(params, req, runtime), new ListDelegatedServicesForAccountResponse({}));
    }

  }

  /**
   * 查看指定账号被设置为哪些可信服务的委派管理员
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the trusted services for which the member `138660628348****` is specified as a delegated administrator account. The response shows that the member is specified as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - ListDelegatedServicesForAccountRequest
   * @returns ListDelegatedServicesForAccountResponse
   */
  async listDelegatedServicesForAccount(request: ListDelegatedServicesForAccountRequest): Promise<ListDelegatedServicesForAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDelegatedServicesForAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  You can view the information of only the first-level subfolders of a folder.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFoldersForParent",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFoldersForParentResponse>(await this.callApi(params, req, runtime), new ListFoldersForParentResponse({}));
    } else {
      return $dara.cast<ListFoldersForParentResponse>(await this.execute(params, req, runtime), new ListFoldersForParentResponse({}));
    }

  }

  /**
   * @remarks
   * >  You can view the information of only the first-level subfolders of a folder.
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
   * @remarks
   * This topic provides an example on how to call the API operation to query the invitations that are associated with the management account `172841235500****`. The response shows that two invitations are associated with the management account.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHandshakesForAccountResponse>(await this.callApi(params, req, runtime), new ListHandshakesForAccountResponse({}));
    } else {
      return $dara.cast<ListHandshakesForAccountResponse>(await this.execute(params, req, runtime), new ListHandshakesForAccountResponse({}));
    }

  }

  /**
   * Queries the invitations that are associated with an account.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the invitations that are associated with the management account `172841235500****`. The response shows that two invitations are associated with the management account.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListHandshakesForResourceDirectoryResponse>(await this.callApi(params, req, runtime), new ListHandshakesForResourceDirectoryResponse({}));
    } else {
      return $dara.cast<ListHandshakesForResourceDirectoryResponse>(await this.execute(params, req, runtime), new ListHandshakesForResourceDirectoryResponse({}));
    }

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
   * Queries policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<ListPoliciesResponse> {
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
      action: "ListPolicies",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
    } else {
      return $dara.cast<ListPoliciesResponse>(await this.execute(params, req, runtime), new ListPoliciesResponse({}));
    }

  }

  /**
   * Queries policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries policy attachment records.
   * 
   * @remarks
   * You can view the following information:
   * *   Policy attachment records under an Alibaba Cloud account or a resource group
   * *   Policies attached to RAM users, RAM user groups, or RAM roles
   * *   RAM users, RAM user groups, or RAM roles to which policies are attached under an Alibaba Cloud account or a resource group
   * 
   * @param request - ListPolicyAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyAttachmentsResponse
   */
  async listPolicyAttachmentsWithOptions(request: ListPolicyAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicyAttachmentsResponse> {
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

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!$dara.isNull(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyAttachments",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicyAttachmentsResponse>(await this.callApi(params, req, runtime), new ListPolicyAttachmentsResponse({}));
    } else {
      return $dara.cast<ListPolicyAttachmentsResponse>(await this.execute(params, req, runtime), new ListPolicyAttachmentsResponse({}));
    }

  }

  /**
   * Queries policy attachment records.
   * 
   * @remarks
   * You can view the following information:
   * *   Policy attachment records under an Alibaba Cloud account or a resource group
   * *   Policies attached to RAM users, RAM user groups, or RAM roles
   * *   RAM users, RAM user groups, or RAM roles to which policies are attached under an Alibaba Cloud account or a resource group
   * 
   * @param request - ListPolicyAttachmentsRequest
   * @returns ListPolicyAttachmentsResponse
   */
  async listPolicyAttachments(request: ListPolicyAttachmentsRequest): Promise<ListPolicyAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  /**
   * 查看权限策略版本列表
   * 
   * @param request - ListPolicyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersionsWithOptions(request: ListPolicyVersionsRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicyVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyVersions",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPolicyVersionsResponse>(await this.callApi(params, req, runtime), new ListPolicyVersionsResponse({}));
    } else {
      return $dara.cast<ListPolicyVersionsResponse>(await this.execute(params, req, runtime), new ListPolicyVersionsResponse({}));
    }

  }

  /**
   * 查看权限策略版本列表
   * 
   * @param request - ListPolicyVersionsRequest
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call this API operation to query all resource groups within the current account. You can also call this API operation to query a specific resource group based on the status, ID, identifier, or display name of the resource group.
   * This topic provides an example on how to call the API operation to query the basic information about the resource groups `rg-1hSBH2****` and `rg-9gLOoK****` within the current account.
   * 
   * @param request - ListResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
    } else {
      return $dara.cast<ListResourceGroupsResponse>(await this.execute(params, req, runtime), new ListResourceGroupsResponse({}));
    }

  }

  /**
   * @remarks
   * You can call this API operation to query all resource groups within the current account. You can also call this API operation to query a specific resource group based on the status, ID, identifier, or display name of the resource group.
   * This topic provides an example on how to call the API operation to query the basic information about the resource groups `rg-1hSBH2****` and `rg-9gLOoK****` within the current account.
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries resources that can be accessed by the current account in resource groups.
   * 
   * @remarks
   * >  You can use a RAM role that is not associated with a session policy to call this API operation.
   * This topic provides an example on how to call the API operation to query resources that can be accessed by the current account in resource groups. The response shows that the current account can access only the Elastic Compute Service (ECS) instance `i-23v38****` in the resource group `rg-uPJpP****`.
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
    } else {
      return $dara.cast<ListResourcesResponse>(await this.execute(params, req, runtime), new ListResourcesResponse({}));
    }

  }

  /**
   * Queries resources that can be accessed by the current account in resource groups.
   * 
   * @remarks
   * >  You can use a RAM role that is not associated with a session policy to call this API operation.
   * This topic provides an example on how to call the API operation to query resources that can be accessed by the current account in resource groups. The response shows that the current account can access only the Elastic Compute Service (ECS) instance `i-23v38****` in the resource group `rg-uPJpP****`.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * Queries RAM roles.
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<ListRolesResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
    } else {
      return $dara.cast<ListRolesResponse>(await this.execute(params, req, runtime), new ListRolesResponse({}));
    }

  }

  /**
   * Queries RAM roles.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * 列出所有的Tag key
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query tag keys. The response shows that the custom tag key team exists.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
    } else {
      return $dara.cast<ListTagKeysResponse>(await this.execute(params, req, runtime), new ListTagKeysResponse({}));
    }

  }

  /**
   * 列出所有的Tag key
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query tag keys. The response shows that the custom tag key team exists.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tags that are added to the resource group with an ID of `rg-aekz6bre2uq****`. The response shows that only the `k1:v1` tag is added to the resource group.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tags that are added to the resource group with an ID of `rg-aekz6bre2uq****`. The response shows that only the `k1:v1` tag is added to the resource group.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 列出所有的Tag values
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag values of the tag key k1. The response shows that the tag value of the tag key k1 is v1.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
    } else {
      return $dara.cast<ListTagValuesResponse>(await this.execute(params, req, runtime), new ListTagValuesResponse({}));
    }

  }

  /**
   * 列出所有的Tag values
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to query the tag values of the tag key k1. The response shows that the tag value of the tag key k1 is v1.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries the objects to which a specific control policy is attached.
   * 
   * @remarks
   * In this example, the folders or member accounts to which the control policy `cp-jExXAqIYkwHN****` is attached are queried. The returned result shows that the control policy is attached to the folder `fd-ZDNPiT****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTargetAttachmentsForControlPolicyResponse>(await this.callApi(params, req, runtime), new ListTargetAttachmentsForControlPolicyResponse({}));
    } else {
      return $dara.cast<ListTargetAttachmentsForControlPolicyResponse>(await this.execute(params, req, runtime), new ListTargetAttachmentsForControlPolicyResponse({}));
    }

  }

  /**
   * Queries the objects to which a specific control policy is attached.
   * 
   * @remarks
   * In this example, the folders or member accounts to which the control policy `cp-jExXAqIYkwHN****` is attached are queried. The returned result shows that the control policy is attached to the folder `fd-ZDNPiT****`.
   * 
   * @param request - ListTargetAttachmentsForControlPolicyRequest
   * @returns ListTargetAttachmentsForControlPolicyResponse
   */
  async listTargetAttachmentsForControlPolicy(request: ListTargetAttachmentsForControlPolicyRequest): Promise<ListTargetAttachmentsForControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTargetAttachmentsForControlPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  Only an enterprise management account or delegated administrator account can be used to call this operation.
   * In this example, the trusted services that are enabled within an enterprise management account are queried. The returned result shows that the trusted services Cloud Config and ActionTrail are enabled within the enterprise management account.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTrustedServiceStatusResponse>(await this.callApi(params, req, runtime), new ListTrustedServiceStatusResponse({}));
    } else {
      return $dara.cast<ListTrustedServiceStatusResponse>(await this.execute(params, req, runtime), new ListTrustedServiceStatusResponse({}));
    }

  }

  /**
   * @remarks
   * >  Only an enterprise management account or delegated administrator account can be used to call this operation.
   * In this example, the trusted services that are enabled within an enterprise management account are queried. The returned result shows that the trusted services Cloud Config and ActionTrail are enabled within the enterprise management account.
   * 
   * @param request - ListTrustedServiceStatusRequest
   * @returns ListTrustedServiceStatusResponse
   */
  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  /**
   * 移动账号
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MoveAccountResponse>(await this.callApi(params, req, runtime), new MoveAccountResponse({}));
    } else {
      return $dara.cast<MoveAccountResponse>(await this.execute(params, req, runtime), new MoveAccountResponse({}));
    }

  }

  /**
   * 移动账号
   * 
   * @param request - MoveAccountRequest
   * @returns MoveAccountResponse
   */
  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  /**
   * Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.
   * 
   * @remarks
   * For more information about Alibaba Cloud services whose resources can be moved between resource groups, see the **Supported by the API** column in [Alibaba Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * In this example, two virtual private clouds (VPCs) `vpc-bp1sig0mjktx5ewx1****` and `vpc-bp1visxm225pv49dz****` that reside in different regions and belong to different resource groups are moved to the resource group `rg-aekzmeobk5w****`.
   * 
   * @param request - MoveResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourcesResponse
   */
  async moveResourcesWithOptions(request: MoveResourcesRequest, runtime: $dara.RuntimeOptions): Promise<MoveResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResources",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MoveResourcesResponse>(await this.callApi(params, req, runtime), new MoveResourcesResponse({}));
    } else {
      return $dara.cast<MoveResourcesResponse>(await this.execute(params, req, runtime), new MoveResourcesResponse({}));
    }

  }

  /**
   * Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.
   * 
   * @remarks
   * For more information about Alibaba Cloud services whose resources can be moved between resource groups, see the **Supported by the API** column in [Alibaba Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * In this example, two virtual private clouds (VPCs) `vpc-bp1sig0mjktx5ewx1****` and `vpc-bp1visxm225pv49dz****` that reside in different regions and belong to different resource groups are moved to the resource group `rg-aekzmeobk5w****`.
   * 
   * @param request - MoveResourcesRequest
   * @returns MoveResourcesResponse
   */
  async moveResources(request: MoveResourcesRequest): Promise<MoveResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourcesWithOptions(request, runtime);
  }

  /**
   * 升级资源账号
   * 
   * @param request - PromoteResourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromoteResourceAccountResponse
   */
  async promoteResourceAccountWithOptions(request: PromoteResourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<PromoteResourceAccountResponse> {
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
      action: "PromoteResourceAccount",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new PromoteResourceAccountResponse({}));
    } else {
      return $dara.cast<PromoteResourceAccountResponse>(await this.execute(params, req, runtime), new PromoteResourceAccountResponse({}));
    }

  }

  /**
   * 升级资源账号
   * 
   * @param request - PromoteResourceAccountRequest
   * @returns PromoteResourceAccountResponse
   */
  async promoteResourceAccount(request: PromoteResourceAccountRequest): Promise<PromoteResourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  /**
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory.
   * When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * This topic provides an example on how to call the API operation to specify the member `181761095690****` as a delegated administrator account of Cloud Firewall.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RegisterDelegatedAdministratorResponse>(await this.callApi(params, req, runtime), new RegisterDelegatedAdministratorResponse({}));
    } else {
      return $dara.cast<RegisterDelegatedAdministratorResponse>(await this.execute(params, req, runtime), new RegisterDelegatedAdministratorResponse({}));
    }

  }

  /**
   * @remarks
   * The delegated administrator account can be used to access the information of the resource directory and view the structure and members of the resource directory. The delegated administrator account can also be used to perform service-related management operations in the trusted service on behalf of the management account of the resource directory.
   * When you call this operation, you must take note of the following limits:
   * *   Only some trusted services support delegated administrator accounts. For more information, see [Supported trusted services](https://help.aliyun.com/document_detail/208133.html).
   * *   Only the management account of a resource directory or an authorized RAM user or RAM role of the management account can be used to call this operation.
   * *   The number of delegated administrator accounts that are allowed for a trusted service is defined by the trusted service.
   * This topic provides an example on how to call the API operation to specify the member `181761095690****` as a delegated administrator account of Cloud Firewall.
   * 
   * @param request - RegisterDelegatedAdministratorRequest
   * @returns RegisterDelegatedAdministratorResponse
   */
  async registerDelegatedAdministrator(request: RegisterDelegatedAdministratorRequest): Promise<RegisterDelegatedAdministratorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDelegatedAdministratorWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to remove the member `177242285274****` from a resource directory.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveCloudAccountResponse>(await this.callApi(params, req, runtime), new RemoveCloudAccountResponse({}));
    } else {
      return $dara.cast<RemoveCloudAccountResponse>(await this.execute(params, req, runtime), new RemoveCloudAccountResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to call the API operation to remove the member `177242285274****` from a resource directory.
   * 
   * @param request - RemoveCloudAccountRequest
   * @returns RemoveCloudAccountResponse
   */
  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  /**
   * 重新发送创建云账号的邮箱验证
   * 
   * @param request - ResendCreateCloudAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendCreateCloudAccountEmailResponse
   */
  async resendCreateCloudAccountEmailWithOptions(request: ResendCreateCloudAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<ResendCreateCloudAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendCreateCloudAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResendCreateCloudAccountEmailResponse>(await this.callApi(params, req, runtime), new ResendCreateCloudAccountEmailResponse({}));
    } else {
      return $dara.cast<ResendCreateCloudAccountEmailResponse>(await this.execute(params, req, runtime), new ResendCreateCloudAccountEmailResponse({}));
    }

  }

  /**
   * 重新发送创建云账号的邮箱验证
   * 
   * @param request - ResendCreateCloudAccountEmailRequest
   * @returns ResendCreateCloudAccountEmailResponse
   */
  async resendCreateCloudAccountEmail(request: ResendCreateCloudAccountEmailRequest): Promise<ResendCreateCloudAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  /**
   * 重新发送升级资源账号的邮箱验证
   * 
   * @param request - ResendPromoteResourceAccountEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResendPromoteResourceAccountEmailResponse
   */
  async resendPromoteResourceAccountEmailWithOptions(request: ResendPromoteResourceAccountEmailRequest, runtime: $dara.RuntimeOptions): Promise<ResendPromoteResourceAccountEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResendPromoteResourceAccountEmail",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResendPromoteResourceAccountEmailResponse>(await this.callApi(params, req, runtime), new ResendPromoteResourceAccountEmailResponse({}));
    } else {
      return $dara.cast<ResendPromoteResourceAccountEmailResponse>(await this.execute(params, req, runtime), new ResendPromoteResourceAccountEmailResponse({}));
    }

  }

  /**
   * 重新发送升级资源账号的邮箱验证
   * 
   * @param request - ResendPromoteResourceAccountEmailRequest
   * @returns ResendPromoteResourceAccountEmailResponse
   */
  async resendPromoteResourceAccountEmail(request: ResendPromoteResourceAccountEmailRequest): Promise<ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  /**
   * 重新发送确认邮件
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RetryChangeAccountEmailResponse>(await this.callApi(params, req, runtime), new RetryChangeAccountEmailResponse({}));
    } else {
      return $dara.cast<RetryChangeAccountEmailResponse>(await this.execute(params, req, runtime), new RetryChangeAccountEmailResponse({}));
    }

  }

  /**
   * 重新发送确认邮件
   * 
   * @param request - RetryChangeAccountEmailRequest
   * @returns RetryChangeAccountEmailResponse
   */
  async retryChangeAccountEmail(request: RetryChangeAccountEmailRequest): Promise<RetryChangeAccountEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retryChangeAccountEmailWithOptions(request, runtime);
  }

  /**
   * 发送绑定安全手机验证码
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * In this example, a verification code is sent to the mobile phone number that you want to bind to the resource account `138660628348****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendVerificationCodeForBindSecureMobilePhoneResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForBindSecureMobilePhoneResponse({}));
    } else {
      return $dara.cast<SendVerificationCodeForBindSecureMobilePhoneResponse>(await this.execute(params, req, runtime), new SendVerificationCodeForBindSecureMobilePhoneResponse({}));
    }

  }

  /**
   * 发送绑定安全手机验证码
   * 
   * @remarks
   * To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * In this example, a verification code is sent to the mobile phone number that you want to bind to the resource account `138660628348****`.
   * 
   * @param request - SendVerificationCodeForBindSecureMobilePhoneRequest
   * @returns SendVerificationCodeForBindSecureMobilePhoneResponse
   */
  async sendVerificationCodeForBindSecureMobilePhone(request: SendVerificationCodeForBindSecureMobilePhoneRequest): Promise<SendVerificationCodeForBindSecureMobilePhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationCodeForBindSecureMobilePhoneWithOptions(request, runtime);
  }

  /**
   * 发送开启资源目录短信
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SendVerificationCodeForEnableRDResponse>(await this.callApi(params, req, runtime), new SendVerificationCodeForEnableRDResponse({}));
    } else {
      return $dara.cast<SendVerificationCodeForEnableRDResponse>(await this.execute(params, req, runtime), new SendVerificationCodeForEnableRDResponse({}));
    }

  }

  /**
   * 发送开启资源目录短信
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
   * 设置权限策略默认版本
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersionWithOptions(request: SetDefaultPolicyVersionRequest, runtime: $dara.RuntimeOptions): Promise<SetDefaultPolicyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultPolicyVersion",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetDefaultPolicyVersionResponse>(await this.callApi(params, req, runtime), new SetDefaultPolicyVersionResponse({}));
    } else {
      return $dara.cast<SetDefaultPolicyVersionResponse>(await this.execute(params, req, runtime), new SetDefaultPolicyVersionResponse({}));
    }

  }

  /**
   * 设置权限策略默认版本
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  /**
   * 开启或关闭成员删除许可
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetMemberDeletionPermissionResponse>(await this.callApi(params, req, runtime), new SetMemberDeletionPermissionResponse({}));
    } else {
      return $dara.cast<SetMemberDeletionPermissionResponse>(await this.execute(params, req, runtime), new SetMemberDeletionPermissionResponse({}));
    }

  }

  /**
   * 开启或关闭成员删除许可
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
   * Adds tags to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to add the tag `k1:v1` to the resource group with an ID of `rg-aekz6bre2uq****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to add the tag `k1:v1` to the resource group with an ID of `rg-aekz6bre2uq****`.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the resource group whose ID is `rg-aek2dpwyrfr****`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from resource groups or the members in a resource directory.
   * 
   * @remarks
   * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the resource group whose ID is `rg-aek2dpwyrfr****`.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * This example provides an example on how to call the API operation to change the display name of the member `12323344****` to `admin`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAccountResponse>(await this.callApi(params, req, runtime), new UpdateAccountResponse({}));
    } else {
      return $dara.cast<UpdateAccountResponse>(await this.execute(params, req, runtime), new UpdateAccountResponse({}));
    }

  }

  /**
   * @remarks
   *   To ensure that the system can record the operators of management operations, you must use a RAM user or RAM role to which the AliyunResourceDirectoryFullAccess policy is attached within the management account of your resource directory to call this operation.
   * *   Before you switch the type of a member from resource account to cloud account, make sure that specific conditions are met. For more information about the conditions, see [Switch a resource account to a cloud account](https://help.aliyun.com/document_detail/111233.html).
   * *   Before you switch the type of a member from cloud account to resource account, make sure that specific conditions are met. For more information about the conditions, see [Switch a cloud account to a resource account](https://help.aliyun.com/document_detail/209980.html).
   * This example provides an example on how to call the API operation to change the display name of the member `12323344****` to `admin`.
   * 
   * @param request - UpdateAccountRequest
   * @returns UpdateAccountResponse
   */
  async updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  /**
   * Updates the settings of the Transfer Associated Resources feature.
   * 
   * @remarks
   * For information about the resources that support the Transfer Associated Resources feature, see [Use the Transfer Associated Resources feature](https://help.aliyun.com/document_detail/606232.html).
   * 
   * @param request - UpdateAssociatedTransferSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssociatedTransferSettingResponse
   */
  async updateAssociatedTransferSettingWithOptions(request: UpdateAssociatedTransferSettingRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAssociatedTransferSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableExistingResourcesTransfer)) {
      query["EnableExistingResourcesTransfer"] = request.enableExistingResourcesTransfer;
    }

    if (!$dara.isNull(request.ruleSettings)) {
      query["RuleSettings"] = request.ruleSettings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssociatedTransferSetting",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAssociatedTransferSettingResponse>(await this.callApi(params, req, runtime), new UpdateAssociatedTransferSettingResponse({}));
    } else {
      return $dara.cast<UpdateAssociatedTransferSettingResponse>(await this.execute(params, req, runtime), new UpdateAssociatedTransferSettingResponse({}));
    }

  }

  /**
   * Updates the settings of the Transfer Associated Resources feature.
   * 
   * @remarks
   * For information about the resources that support the Transfer Associated Resources feature, see [Use the Transfer Associated Resources feature](https://help.aliyun.com/document_detail/606232.html).
   * 
   * @param request - UpdateAssociatedTransferSettingRequest
   * @returns UpdateAssociatedTransferSettingResponse
   */
  async updateAssociatedTransferSetting(request: UpdateAssociatedTransferSettingRequest): Promise<UpdateAssociatedTransferSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssociatedTransferSettingWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of the Automatic Resource Transfer feature. You can update only the configuration of the Transfer Existing Associated Resources feature.
   * 
   * @param request - UpdateAutoGroupingConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoGroupingConfigResponse
   */
  async updateAutoGroupingConfigWithOptions(request: UpdateAutoGroupingConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAutoGroupingConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableExistingResourcesTransfer)) {
      query["EnableExistingResourcesTransfer"] = request.enableExistingResourcesTransfer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoGroupingConfig",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAutoGroupingConfigResponse>(await this.callApi(params, req, runtime), new UpdateAutoGroupingConfigResponse({}));
    } else {
      return $dara.cast<UpdateAutoGroupingConfigResponse>(await this.execute(params, req, runtime), new UpdateAutoGroupingConfigResponse({}));
    }

  }

  /**
   * Updates the configuration of the Automatic Resource Transfer feature. You can update only the configuration of the Transfer Existing Associated Resources feature.
   * 
   * @param request - UpdateAutoGroupingConfigRequest
   * @returns UpdateAutoGroupingConfigResponse
   */
  async updateAutoGroupingConfig(request: UpdateAutoGroupingConfigRequest): Promise<UpdateAutoGroupingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingConfigWithOptions(request, runtime);
  }

  /**
   * Updates a transfer rule.
   * 
   * @param request - UpdateAutoGroupingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoGroupingRuleResponse
   */
  async updateAutoGroupingRuleWithOptions(request: UpdateAutoGroupingRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAutoGroupingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeRegionIdsScope)) {
      query["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceGroupIdsScope)) {
      query["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceIdsScope)) {
      query["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    if (!$dara.isNull(request.excludeResourceTypesScope)) {
      query["ExcludeResourceTypesScope"] = request.excludeResourceTypesScope;
    }

    if (!$dara.isNull(request.regionIdsScope)) {
      query["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!$dara.isNull(request.resourceGroupIdsScope)) {
      query["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!$dara.isNull(request.resourceIdsScope)) {
      query["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!$dara.isNull(request.resourceTypesScope)) {
      query["ResourceTypesScope"] = request.resourceTypesScope;
    }

    if (!$dara.isNull(request.ruleContents)) {
      query["RuleContents"] = request.ruleContents;
    }

    if (!$dara.isNull(request.ruleDesc)) {
      query["RuleDesc"] = request.ruleDesc;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoGroupingRule",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAutoGroupingRuleResponse>(await this.callApi(params, req, runtime), new UpdateAutoGroupingRuleResponse({}));
    } else {
      return $dara.cast<UpdateAutoGroupingRuleResponse>(await this.execute(params, req, runtime), new UpdateAutoGroupingRuleResponse({}));
    }

  }

  /**
   * Updates a transfer rule.
   * 
   * @param request - UpdateAutoGroupingRuleRequest
   * @returns UpdateAutoGroupingRuleResponse
   */
  async updateAutoGroupingRule(request: UpdateAutoGroupingRuleRequest): Promise<UpdateAutoGroupingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutoGroupingRuleWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the name of the access control policy whose ID is `cp-jExXAqIYkwHN****` is changed to `NewControlPolicy`.
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateControlPolicyResponse>(await this.callApi(params, req, runtime), new UpdateControlPolicyResponse({}));
    } else {
      return $dara.cast<UpdateControlPolicyResponse>(await this.execute(params, req, runtime), new UpdateControlPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the name of the access control policy whose ID is `cp-jExXAqIYkwHN****` is changed to `NewControlPolicy`.
   * 
   * @param request - UpdateControlPolicyRequest
   * @returns UpdateControlPolicyResponse
   */
  async updateControlPolicy(request: UpdateControlPolicyRequest): Promise<UpdateControlPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPolicyWithOptions(request, runtime);
  }

  /**
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
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
    } else {
      return $dara.cast<UpdateFolderResponse>(await this.execute(params, req, runtime), new UpdateFolderResponse({}));
    }

  }

  /**
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the display name of the resource group `rg-9gLOoK****` is changed to `project`.
   * 
   * @param request - UpdateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(request: UpdateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroup",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupResponse({}));
    } else {
      return $dara.cast<UpdateResourceGroupResponse>(await this.execute(params, req, runtime), new UpdateResourceGroupResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the display name of the resource group `rg-9gLOoK****` is changed to `project`.
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  /**
   * Updates the information of a Resource Access Management (RAM) role.
   * 
   * @remarks
   * In this example, the description of the RAM role `ECSAdmin` is updated to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newAssumeRolePolicyDocument)) {
      query["NewAssumeRolePolicyDocument"] = request.newAssumeRolePolicyDocument;
    }

    if (!$dara.isNull(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!$dara.isNull(request.newMaxSessionDuration)) {
      query["NewMaxSessionDuration"] = request.newMaxSessionDuration;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2020-03-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRoleResponse>(await this.callApi(params, req, runtime), new UpdateRoleResponse({}));
    } else {
      return $dara.cast<UpdateRoleResponse>(await this.execute(params, req, runtime), new UpdateRoleResponse({}));
    }

  }

  /**
   * Updates the information of a Resource Access Management (RAM) role.
   * 
   * @remarks
   * In this example, the description of the RAM role `ECSAdmin` is updated to `ECS administrator`.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

}

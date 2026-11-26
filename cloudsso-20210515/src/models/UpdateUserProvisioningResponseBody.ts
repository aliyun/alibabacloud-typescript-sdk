// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserProvisioningResponseBodyUserProvisioning extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. This policy specifies how to handle synchronized Resource Access Management (RAM) users when the Resource Access Management (RAM) user synchronization is deleted. Valid values:
   * 
   * - Delete: Delete the users. When the Resource Access Management (RAM) user synchronization is deleted, the system deletes the Resource Access Management (RAM) users that have been synchronized from CloudSSO to Resource Access Management (RAM).
   * - Keep: Keep the users. When the Resource Access Management (RAM) user synchronization is deleted, the system retains the Resource Access Management (RAM) users that have been synchronized from CloudSSO to Resource Access Management (RAM).
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description of the Resource Access Management (RAM) user synchronization.
   * 
   * @example
   * This is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The duplication strategy. This strategy specifies how to handle name conflicts when a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists. Valid values:
   * 
   * - KeepBoth: Keep both users. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system appends the `_sso` suffix to the CloudSSO username and attempts to create a RAM user with the new username.
   * - TakeOver: Replace the existing user. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system directly replaces the existing RAM user with the synchronized CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the directory belongs.
   * 
   * @example
   * 164987310*****
   */
  ownerPk?: string;
  /**
   * @remarks
   * The ID of the principal for the Resource Access Management (RAM) user synchronization. Valid values:
   * 
   * - If `PrincipalType` is set to `Group`, the value is the ID of the CloudSSO group (g-********).
   * - If `PrincipalType` is set to `User`, the value is the ID of the CloudSSO user (u-********).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the principal for the Resource Access Management (RAM) user synchronization. Valid values:
   * 
   * - If `PrincipalType` is set to `Group`, the value is the name of the CloudSSO group.
   * - If `PrincipalType` is set to `User`, the value is the CloudSSO username.
   * 
   * @example
   * testUserName
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the principal for the Resource Access Management (RAM) user synchronization. Valid values:
   * - User: The principal is a CloudSSO user.
   * - Group: The principal is a CloudSSO group.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the Resource Access Management (RAM) user synchronization. Valid values:
   * - Enabled: The Resource Access Management (RAM) user synchronization is enabled.
   * - Disabled: The Resource Access Management (RAM) user synchronization is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the target for the Resource Access Management (RAM) user synchronization. Currently, the value is the ID of the account in a resource directory.
   * 
   * @example
   * u-02ha881d*****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the target for the Resource Access Management (RAM) user synchronization. Currently, the value is the name of the account in a resource directory.
   * 
   * @example
   * testMemberName
   */
  targetName?: string;
  /**
   * @remarks
   * The resource directory path of the target for the Resource Access Management (RAM) user synchronization.
   */
  targetPath?: string;
  /**
   * @remarks
   * The type of the target for the Resource Access Management (RAM) user synchronization. Currently, the value is `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The update time. The time is displayed in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user synchronization.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      ownerPk: 'OwnerPk',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      ownerPk: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user synchronization information.
   */
  userProvisioning?: UpdateUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: UpdateUserProvisioningResponseBodyUserProvisioning,
    };
  }

  validate() {
    if(this.userProvisioning && typeof (this.userProvisioning as any).validate === 'function') {
      (this.userProvisioning as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


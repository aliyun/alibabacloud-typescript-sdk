// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserProvisioningResponseBodyUserProvisioning extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. Specifies the action to take for synchronized Resource Access Management (RAM) users when a Resource Access Management (RAM) user synchronization is deleted. Valid values:
   * 
   * - Delete: Delete. When a Resource Access Management (RAM) user synchronization is deleted, the system deletes the Resource Access Management (RAM) users that have been synchronized from CloudSSO to RAM.
   * - Keep: Keep. When a Resource Access Management (RAM) user synchronization is deleted, the system retains the Resource Access Management (RAM) users that have been synchronized from CloudSSO to RAM.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict resolution policy. Specifies the action to take when a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists. Valid values:
   * 
   * - KeepBoth: Keep both. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system adds the `_sso` suffix to the username of the CloudSSO user and attempts to create a RAM user with the suffixed username.
   * - TakeOver: Take over. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system replaces the existing RAM user with the synchronized CloudSSO user.
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
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The ID of the identity for the Resource Access Management (RAM) user synchronization. Valid values:
   * 
   * - When `PrincipalType` is set to `Group`, the value is the ID of the CloudSSO group (g-********).
   * - When `PrincipalType` is set to `User`, the value is the ID of the CloudSSO user (u-********).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the identity for the Resource Access Management (RAM) user synchronization. Valid values:
   * 
   * - When `PrincipalType` is set to `Group`, the value is the name of the CloudSSO group.
   * - When `PrincipalType` is set to `User`, the value is the CloudSSO username.
   * 
   * @example
   * testGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the Resource Access Management (RAM) user synchronization. Valid values:
   * - User: The Resource Access Management (RAM) user synchronization is a CloudSSO user.
   * - Group: The Resource Access Management (RAM) user synchronization is a CloudSSO group.
   * 
   * @example
   * Group
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
   * The ID of the destination for the Resource Access Management (RAM) user synchronization. Currently, the value is the ID of the account in a resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the destination for the Resource Access Management (RAM) user synchronization. Currently, the value is the name of the account in a resource directory.
   * 
   * @example
   * testTargetName
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the destination account in a resource directory for the Resource Access Management (RAM) user synchronization.
   */
  targetPath?: string;
  /**
   * @remarks
   * The type of the destination for the Resource Access Management (RAM) user synchronization. Currently, the only valid value is `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The update time. The time is displayed in UTC.
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

export class CreateUserProvisioningResponseBody extends $dara.Model {
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
  userProvisioning?: CreateUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: CreateUserProvisioningResponseBodyUserProvisioning,
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


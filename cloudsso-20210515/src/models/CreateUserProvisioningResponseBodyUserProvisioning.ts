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
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
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
   * this is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * testGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the RAM user provisioning. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning. The value is fixed as the name of the member in the resource directory.
   * 
   * @example
   * testTargetName
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the member.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
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


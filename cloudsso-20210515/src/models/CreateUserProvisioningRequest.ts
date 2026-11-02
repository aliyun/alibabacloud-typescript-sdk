// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserProvisioningRequest extends $dara.Model {
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
   * The ID of the destination for the Resource Access Management (RAM) user synchronization. Currently, the value is the ID of the account in a resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the destination for the Resource Access Management (RAM) user synchronization. Currently, the only valid value is `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
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


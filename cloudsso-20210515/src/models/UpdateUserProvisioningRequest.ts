// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserProvisioningRequest extends $dara.Model {
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
   * The new deletion policy. This policy specifies how to handle synchronized Resource Access Management (RAM) users when the Resource Access Management (RAM) user synchronization is deleted. Valid values:
   * 
   * - Delete: Delete the users. When the Resource Access Management (RAM) user synchronization is deleted, the system deletes the Resource Access Management (RAM) users that have been synchronized from CloudSSO to Resource Access Management (RAM).
   * - Keep: Keep the users. When the Resource Access Management (RAM) user synchronization is deleted, the system retains the Resource Access Management (RAM) users that have been synchronized from CloudSSO to Resource Access Management (RAM).
   * 
   * @example
   * Delete
   */
  newDeletionStrategy?: string;
  /**
   * @remarks
   * The new description of the Resource Access Management (RAM) user synchronization.
   * 
   * @example
   * description*****
   */
  newDescription?: string;
  /**
   * @remarks
   * The new duplication strategy. This strategy specifies how to handle name conflicts when a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists. Valid values:
   * 
   * - KeepBoth: Keep both users. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system appends the `_sso` suffix to the CloudSSO username and attempts to create a RAM user with the new username.
   * - TakeOver: Replace the existing user. When a CloudSSO user is synchronized to Resource Access Management (RAM) user with the same name already exists, the system directly replaces the existing RAM user with the synchronized CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  newDuplicationStrategy?: string;
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
      directoryId: 'DirectoryId',
      newDeletionStrategy: 'NewDeletionStrategy',
      newDescription: 'NewDescription',
      newDuplicationStrategy: 'NewDuplicationStrategy',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDeletionStrategy: 'string',
      newDescription: 'string',
      newDuplicationStrategy: 'string',
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


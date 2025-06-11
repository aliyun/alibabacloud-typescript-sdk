// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserProvisioningRequest extends $dara.Model {
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * >  If you do not specify this parameter, the deletion policy that is configured when you create the RAM user provisioning is used.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
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
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionStrategy: 'DeletionStrategy',
      directoryId: 'DirectoryId',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionStrategy: 'string',
      directoryId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserProvisioningRequest extends $dara.Model {
  /**
   * @remarks
   * The deletion strategy. The processing strategy for synchronized RAM users when a RAM user synchronization is deleted. Valid values:
   * 
   * - Delete: Deletes the RAM users that have been synchronized from CloudSSO to Resource Access Management (RAM) user synchronization is deleted.
   * - Keep: Retains the RAM users that have been synchronized from CloudSSO to Resource Access Management (RAM) user synchronization is deleted.
   * 
   * > If this parameter is left empty, the deletion strategy specified when the RAM user synchronization was created is used.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
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
   * The ID of the Resource Access Management (RAM) user synchronization.
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


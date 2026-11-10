// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * Specifies whether to automatically revoke cloud desktop authorization before deleting convenience users. Valid values:
   * 
   * - true: Asynchronously revokes cloud desktop authorization and deletes convenience users. The API returns the task acceptance result.
   * - false (default): Synchronously deletes convenience users without automatically revoking cloud desktop authorization. If associated resources prevent deletion, a deletion failure is returned.
   * 
   * When this parameter is set to true, the caller must also have the ecd:ModifyUserEntitlement permission. Task acceptance does not mean that the convenience users have been deleted.
   */
  unbindDesktops?: boolean;
  /**
   * @remarks
   * The list of usernames of the convenience users to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      unbindDesktops: 'UnbindDesktops',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      unbindDesktops: 'boolean',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


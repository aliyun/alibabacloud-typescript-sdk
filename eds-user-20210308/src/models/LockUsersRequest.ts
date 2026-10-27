// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockUsersRequest extends $dara.Model {
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
   * Specifies whether to log off the current session of the convenience account when the account is locked.
   */
  logoutSession?: boolean;
  /**
   * @remarks
   * The usernames of the convenience accounts to lock.
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
      logoutSession: 'LogoutSession',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      logoutSession: 'boolean',
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


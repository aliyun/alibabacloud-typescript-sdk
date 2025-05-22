// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockUsersRequest extends $dara.Model {
  logoutSession?: boolean;
  /**
   * @remarks
   * The usernames of the convenience users that you want to lock.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      logoutSession: 'LogoutSession',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


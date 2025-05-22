// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the convenience users are automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The usernames of the convenience users that you want to unlock.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the convenience user is automatically locked. The format is YYYY-MM-DD.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of usernames of the convenience users to unlock.
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
      businessChannel: 'BusinessChannel',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      businessChannel: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForGroupResponseBodyUsersUser extends $dara.Model {
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the RAM user joined the RAM user group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinDate?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangqiang
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      joinDate: 'JoinDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      joinDate: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the user was first added.
   * 
   * @example
   * 2014-08-22T17:46:47
   */
  addTime?: string;
  /**
   * @remarks
   * The user group. Valid values:
   * 
   * - users: ordinary permission group. This group is suitable for regular users who only need to commit and debug jobs.
   * 
   * - wheel: sudo permission group. This group is suitable for administrators who need cluster management. In addition to committing and debugging jobs, members of this group can execute sudo commands to install software, restart nodes, and perform other operations.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 100
   */
  groupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      groupId: 'GroupId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      groupId: 'string',
      userId: 'string',
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

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The user details.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


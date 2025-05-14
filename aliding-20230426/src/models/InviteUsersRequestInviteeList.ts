// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteUsersRequestInviteeList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试用户
   */
  nick?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


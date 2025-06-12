// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingChatsResponseBodyDataUserList extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * c361765f-******-4e07-b81c-4b5d9183fac6
   */
  userId?: string;
  userName?: string;
  /**
   * @example
   * CUSTOMER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


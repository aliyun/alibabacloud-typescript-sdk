// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatRequestUserList extends $dara.Model {
  /**
   * @example
   * http://xxx.com/image
   */
  avatarUrl?: string;
  nickname?: string;
  /**
   * @example
   * fcd020fe-d8e4-40e5-8c77-1a272a174a7d
   */
  userId?: string;
  /**
   * @example
   * CUSTOMER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      nickname: 'Nickname',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      nickname: 'string',
      userId: 'string',
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


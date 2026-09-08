// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartChatRequestUserList extends $dara.Model {
  /**
   * @remarks
   * The URL of the member\\"s profile picture.
   * 
   * @example
   * http://xxx.com/image
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The nickname of the member.
   * 
   * @example
   * 访客-1a272a174a7d
   */
  nickname?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * fcd020fe-d8e4-40e5-8c77-1a272a174a7d
   */
  userId?: string;
  /**
   * @remarks
   * The type of the member.
   * 
   * - AGENT: An agent.
   * 
   * - CUSTOMER: A visitor.
   * 
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

export class StartChatRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the web service channel.
   * 
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The channel token for the web service.
   * 
   * @example
   * 9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=
   */
  token?: string;
  /**
   * @remarks
   * The information about chat members.
   * 
   * This parameter is required.
   */
  userList?: StartChatRequestUserList[];
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      instanceId: 'InstanceId',
      token: 'Token',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      instanceId: 'string',
      token: 'string',
      userList: { 'type': 'array', 'itemType': StartChatRequestUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


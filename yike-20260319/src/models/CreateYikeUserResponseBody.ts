// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeUserResponseBodyUserInfo extends $dara.Model {
  /**
   * @example
   * nick
   */
  nickname?: string;
  /**
   * @example
   * id
   */
  userId?: string;
  /**
   * @example
   * name
   */
  userName?: string;
  /**
   * @example
   * spaceId
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nickname: 'Nickname',
      userId: 'UserId',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickname: 'string',
      userId: 'string',
      userName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateYikeUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  userInfo?: CreateYikeUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: CreateYikeUserResponseBodyUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


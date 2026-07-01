// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeUserResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The user\\"s nickname.
   * 
   * @example
   * nick
   */
  nickname?: string;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * name
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * spaceId
   */
  workspaceId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * id
   */
  yikeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      nickname: 'Nickname',
      userName: 'UserName',
      workspaceId: 'WorkspaceId',
      yikeUserId: 'YikeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickname: 'string',
      userName: 'string',
      workspaceId: 'string',
      yikeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The user information.
   */
  userInfo?: GetYikeUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: GetYikeUserResponseBodyUserInfo,
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


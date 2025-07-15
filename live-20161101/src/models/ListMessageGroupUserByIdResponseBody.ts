// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupUserByIdResponseBodyResultUserList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is muted. Valid values:
   * 
   * *   true: The user is muted.
   * *   false: The user is not muted.
   * 
   * @example
   * true
   */
  isMute?: boolean;
  /**
   * @remarks
   * The type of the mute. Valid values:
   * 
   * *   group: All members in the message group are muted.
   * *   user: Specific members in the message group are muted.
   */
  muteBy?: string[];
  /**
   * @remarks
   * The URL of the profile picture of the user.
   * 
   * @example
   * "http://www.aliyundoc.com/xxyy.png"
   */
  userAvatar?: string;
  /**
   * @remarks
   * The custom information about the user.
   * 
   * @example
   * 12e
   */
  userExtension?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * ad***
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * xxyy
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      isMute: 'IsMute',
      muteBy: 'MuteBy',
      userAvatar: 'UserAvatar',
      userExtension: 'UserExtension',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMute: 'boolean',
      muteBy: { 'type': 'array', 'itemType': 'string' },
      userAvatar: 'string',
      userExtension: 'string',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.muteBy)) {
      $dara.Model.validateArray(this.muteBy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageGroupUserByIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current page is followed by another page. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The total number of users returned.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The list of users.
   */
  userList?: ListMessageGroupUserByIdResponseBodyResultUserList[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      total: 'Total',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      total: 'number',
      userList: { 'type': 'array', 'itemType': ListMessageGroupUserByIdResponseBodyResultUserList },
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

export class ListMessageGroupUserByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListMessageGroupUserByIdResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMessageGroupUserByIdResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


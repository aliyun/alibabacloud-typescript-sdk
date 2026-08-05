// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupUserByIdResponseBodyResultUserList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is muted. Valid values:
   * 
   * - true: Muted.
   * 
   * - false: Not muted.
   * 
   * @example
   * true
   */
  isMute?: boolean;
  /**
   * @remarks
   * Mute type. Valid values:
   * 
   * - group: All members in the message group are muted.
   * 
   * - user: Individual user is muted.
   */
  muteBy?: string[];
  /**
   * @remarks
   * Profile picture URL.
   * 
   * @example
   * "http://www.aliyundoc.com/xxyy.png"
   */
  userAvatar?: string;
  /**
   * @remarks
   * Custom user information content.
   * 
   * @example
   * 12e
   */
  userExtension?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * ad***
   */
  userId?: string;
  /**
   * @remarks
   * User nickname.
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
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * 
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Total number of users queried.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * User list information.
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
   * Request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
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


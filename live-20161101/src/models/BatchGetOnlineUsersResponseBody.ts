// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetOnlineUsersResponseBodyResultOnlineUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the group. The value is a UTC timestamp. Unit: milliseconds.
   * 
   * @example
   * 12**45
   */
  joinTime?: number;
  /**
   * @remarks
   * Indicates whether the user is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * de1**a0
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      online: 'Online',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'number',
      online: 'boolean',
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

export class BatchGetOnlineUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about users.
   */
  onlineUsers?: BatchGetOnlineUsersResponseBodyResultOnlineUsers[];
  static names(): { [key: string]: string } {
    return {
      onlineUsers: 'OnlineUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineUsers: { 'type': 'array', 'itemType': BatchGetOnlineUsersResponseBodyResultOnlineUsers },
    };
  }

  validate() {
    if(Array.isArray(this.onlineUsers)) {
      $dara.Model.validateArray(this.onlineUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetOnlineUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: BatchGetOnlineUsersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: BatchGetOnlineUsersResponseBodyResult,
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


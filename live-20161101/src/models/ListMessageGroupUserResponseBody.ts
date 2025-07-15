// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupUserResponseBodyResultUserList extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the message group. The value is a UTC timestamp.
   * 
   * @example
   * 12**45
   */
  joinTime?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * de1**a0,hu**9
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'number',
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

export class ListMessageGroupUserResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current page is followed by another page. Valid values:
   * 
   * *   true: The current page is followed by another page.
   * *   false: The current page is not followed by another page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The total number of users in the message group.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Details about the users.
   */
  userList?: ListMessageGroupUserResponseBodyResultUserList[];
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
      userList: { 'type': 'array', 'itemType': ListMessageGroupUserResponseBodyResultUserList },
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

export class ListMessageGroupUserResponseBody extends $dara.Model {
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
   * The returned result.
   */
  result?: ListMessageGroupUserResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMessageGroupUserResponseBodyResult,
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


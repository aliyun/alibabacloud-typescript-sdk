// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageGroupUserResponseBodyResultUserList extends $dara.Model {
  /**
   * @remarks
   * UTC timestamp when the user joined the message group.
   * 
   * @example
   * 12**45
   */
  joinTime?: number;
  /**
   * @remarks
   * User ID.
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
   * Indicates whether there is a next page. Valid values:
   * 
   * - true: There is a next page.
   * - false: There is no next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * Total number of message group users.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * User list.
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
   * Request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * Return results.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMuteGroupUserResponseBodyResultUserList extends $dara.Model {
  /**
   * @remarks
   * The ID of the muted user.
   * 
   * @example
   * 1sd***,yu***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListMuteGroupUserResponseBodyResult extends $dara.Model {
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
   * The total number of muted members.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * The list of muted users.
   */
  userList?: ListMuteGroupUserResponseBodyResultUserList[];
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
      userList: { 'type': 'array', 'itemType': ListMuteGroupUserResponseBodyResultUserList },
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

export class ListMuteGroupUserResponseBody extends $dara.Model {
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
   * The returned result.
   */
  result?: ListMuteGroupUserResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListMuteGroupUserResponseBodyResult,
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


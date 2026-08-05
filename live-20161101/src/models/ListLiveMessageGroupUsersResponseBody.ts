// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupUsersResponseBodyUserList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * uid1
   */
  userId?: string;
  /**
   * @remarks
   * The extended information of the user.
   * 
   * @example
   * info1
   */
  userInfo?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveMessageGroupUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID of the group to query.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * false
   */
  hasmore?: boolean;
  /**
   * @remarks
   * The start position of the next page. A value of 0 indicates that there is no next page.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1D75BEA-1329-116F-B29C-76F3F200****
   */
  requestId?: string;
  /**
   * @remarks
   * The array of objects.
   */
  userList?: ListLiveMessageGroupUsersResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hasmore: 'Hasmore',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hasmore: 'boolean',
      nextPageToken: 'number',
      requestId: 'string',
      userList: { 'type': 'array', 'itemType': ListLiveMessageGroupUsersResponseBodyUserList },
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


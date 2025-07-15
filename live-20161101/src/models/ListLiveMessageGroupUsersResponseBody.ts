// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupUsersResponseBodyUserList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * uid1
   */
  userId?: string;
  /**
   * @remarks
   * The additional information about the user.
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
   * The ID of the group queried.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the current page is followed by another page.
   * 
   * @example
   * false
   */
  hasmore?: boolean;
  /**
   * @remarks
   * The starting page number for the next query. A value of 0 indicates that no further pages can be queried.
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
   * Details about the users.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLiveMessageUsersOnlineResponseBodyUserList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is online.
   * 
   * @example
   * false
   */
  online?: boolean;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * uid1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      online: 'Online',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CheckLiveMessageUsersOnlineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 178F572F-AECF-100B-937A-B8047B4D****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of users queried.
   */
  userList?: CheckLiveMessageUsersOnlineResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userList: { 'type': 'array', 'itemType': CheckLiveMessageUsersOnlineResponseBodyUserList },
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


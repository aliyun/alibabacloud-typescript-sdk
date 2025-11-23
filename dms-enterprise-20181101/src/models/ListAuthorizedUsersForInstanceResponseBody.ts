// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForInstanceResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The UID of the user\\"s Alibaba Cloud account.
   * 
   * @example
   * 164882191****
   */
  uid?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51***
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user_test
   */
  userNickName?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * user01
   */
  userRealName?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userId: 'UserId',
      userNickName: 'UserNickName',
      userRealName: 'UserRealName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userId: 'string',
      userNickName: 'string',
      userRealName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUsersForInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * The list of users that have permissions on the specified instance.
   */
  users?: ListAuthorizedUsersForInstanceResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListAuthorizedUsersForInstanceResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


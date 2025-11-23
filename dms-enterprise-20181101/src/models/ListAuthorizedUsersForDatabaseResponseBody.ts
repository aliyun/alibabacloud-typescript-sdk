// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForDatabaseResponseBodyUsers extends $dara.Model {
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
   * The user IDs.
   * 
   * @example
   * 51****
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
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userId: 'string',
      userNickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUsersForDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
   */
  requestId?: string;
  /**
   * @remarks
   * The list of users that have permissions on the specified instance.
   */
  users?: ListAuthorizedUsersForDatabaseResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListAuthorizedUsersForDatabaseResponseBodyUsers },
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


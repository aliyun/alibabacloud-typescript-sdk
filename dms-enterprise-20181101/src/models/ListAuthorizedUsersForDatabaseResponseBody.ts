// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForDatabaseResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 164882191****
   */
  uid?: string;
  /**
   * @example
   * 51****
   */
  userId?: string;
  /**
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
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
   */
  requestId?: string;
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


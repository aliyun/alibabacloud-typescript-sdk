// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForInstanceResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 164882191****
   */
  uid?: string;
  /**
   * @example
   * 51***
   */
  userId?: string;
  /**
   * @example
   * user_test
   */
  userNickName?: string;
  /**
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


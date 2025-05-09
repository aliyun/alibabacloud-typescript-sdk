// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedUsersForInstanceResponseBodyUsers } from "./ListAuthorizedUsersForInstanceResponseBodyUsers";


export class ListAuthorizedUsersForInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
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


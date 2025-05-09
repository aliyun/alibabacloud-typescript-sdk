// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedUsersForDatabaseResponseBodyUsers } from "./ListAuthorizedUsersForDatabaseResponseBodyUsers";


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


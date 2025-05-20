// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { User } from "./User";


export class ListRoleUsersResponseBody extends $dara.Model {
  /**
   * @example
   * token!
   */
  nextPageToken?: string;
  users?: User[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      users: { 'type': 'array', 'itemType': User },
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


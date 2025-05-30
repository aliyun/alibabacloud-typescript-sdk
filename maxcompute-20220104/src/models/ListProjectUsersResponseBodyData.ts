// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectUsersResponseBodyDataUsers } from "./ListProjectUsersResponseBodyDataUsers";


export class ListProjectUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * An array that contains users.
   */
  users?: ListProjectUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListProjectUsersResponseBodyDataUsers },
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


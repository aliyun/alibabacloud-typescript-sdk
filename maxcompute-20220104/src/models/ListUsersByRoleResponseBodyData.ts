// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersByRoleResponseBodyDataUsers } from "./ListUsersByRoleResponseBodyDataUsers";


export class ListUsersByRoleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The users.
   */
  users?: ListUsersByRoleResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListUsersByRoleResponseBodyDataUsers },
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


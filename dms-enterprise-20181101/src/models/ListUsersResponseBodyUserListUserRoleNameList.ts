// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUserListUserRoleNameList extends $dara.Model {
  roleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roleNames)) {
      $dara.Model.validateArray(this.roleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLevelPermissionWhiteListResponseBodyResultUsersModel extends $dara.Model {
  /**
   * @remarks
   * UserGroups.
   */
  userGroups?: string[];
  /**
   * @remarks
   * Users.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroups: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


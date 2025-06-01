// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicesForUserGroupResponseBodyUserGroupsPolices } from "./ListPolicesForUserGroupResponseBodyUserGroupsPolices";


export class ListPolicesForUserGroupResponseBodyUserGroups extends $dara.Model {
  polices?: ListPolicesForUserGroupResponseBodyUserGroupsPolices[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroupsPolices },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


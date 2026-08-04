// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group. You can get this value from:
   * 
   * - [ListUserGroups](~~ListUserGroups~~): Query user groups.
   * 
   * - [CreateUserGroup](~~CreateUserGroup~~): Create a user group.
   * 
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The number of users in the user group.
   * 
   * @example
   * 5
   */
  memberCount?: number;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * TestGroup01
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      memberCount: 'MemberCount',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      memberCount: 'number',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


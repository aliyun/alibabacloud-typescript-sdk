// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsForUserResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The remarks of the user group.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the project to which the user group belongs.
   * 
   * @example
   * 2
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project to which the user group belongs.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 2
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * group
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      projectId: 'string',
      projectName: 'string',
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

export class ListUserGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of user groups returned.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user groups.
   */
  userGroups?: ListUserGroupsForUserResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForUserResponseBodyUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


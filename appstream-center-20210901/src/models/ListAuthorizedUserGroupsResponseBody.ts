// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUserGroupsResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The authorization mode.
   * 
   * Valid values:
   * 
   * *   App: authorizes access to apps.
   * *   AppInstanceGroup: authorizes access to delivery groups.
   * *   Session: authorizes access to sessions.
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-00001
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      authMode: 'AuthMode',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      authMode: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUserGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the user groups.
   */
  userGroups?: ListAuthorizedUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userGroups: { 'type': 'array', 'itemType': ListAuthorizedUserGroupsResponseBodyUserGroups },
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


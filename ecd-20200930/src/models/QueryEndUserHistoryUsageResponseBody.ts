// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEndUserHistoryUsageResponseBodyUserUsageInfoListDesktopUsageList extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-abc123
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoDesktop
   */
  desktopName?: string;
  /**
   * @remarks
   * The usage duration of the user on the cloud desktop, in seconds.
   * 
   * @example
   * 1800
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndUserHistoryUsageResponseBodyUserUsageInfoListUserGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-12345678
   */
  userGroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Default user group
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class QueryEndUserHistoryUsageResponseBodyUserUsageInfoList extends $dara.Model {
  /**
   * @remarks
   * The description of the user. This parameter has a value only for convenience users.
   * 
   * @example
   * Test user
   */
  description?: string;
  /**
   * @remarks
   * The list of usage duration details for each cloud desktop.
   */
  desktopUsageList?: QueryEndUserHistoryUsageResponseBodyUserUsageInfoListDesktopUsageList[];
  /**
   * @remarks
   * The display name of the user. For convenience users, this is the real nickname. For AD users, this is the display name.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The total usage duration, in seconds.
   * 
   * @example
   * 3600
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The username. For convenience users, this is the nickname. For AD users, this is the UserPrincipalName.
   * 
   * @example
   * zhangsan
   */
  endUserName?: string;
  /**
   * @remarks
   * The list of organization paths. For convenience users, this includes multiple organization paths. For AD users, this is the OU path.
   */
  orgPathList?: string[];
  /**
   * @remarks
   * The list of user groups. This parameter has a value only for convenience users.
   */
  userGroupList?: QueryEndUserHistoryUsageResponseBodyUserUsageInfoListUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopUsageList: 'DesktopUsageList',
      displayName: 'DisplayName',
      duration: 'Duration',
      endUserId: 'EndUserId',
      endUserName: 'EndUserName',
      orgPathList: 'OrgPathList',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopUsageList: { 'type': 'array', 'itemType': QueryEndUserHistoryUsageResponseBodyUserUsageInfoListDesktopUsageList },
      displayName: 'string',
      duration: 'number',
      endUserId: 'string',
      endUserName: 'string',
      orgPathList: { 'type': 'array', 'itemType': 'string' },
      userGroupList: { 'type': 'array', 'itemType': QueryEndUserHistoryUsageResponseBodyUserUsageInfoListUserGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.desktopUsageList)) {
      $dara.Model.validateArray(this.desktopUsageList);
    }
    if(Array.isArray(this.orgPathList)) {
      $dara.Model.validateArray(this.orgPathList);
    }
    if(Array.isArray(this.userGroupList)) {
      $dara.Model.validateArray(this.userGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndUserHistoryUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 269BDB16-2CD8-4865-84BD-11C40BC21DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of users that meet the query conditions.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of user usage durations on the current page.
   */
  userUsageInfoList?: QueryEndUserHistoryUsageResponseBodyUserUsageInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userUsageInfoList: 'UserUsageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      userUsageInfoList: { 'type': 'array', 'itemType': QueryEndUserHistoryUsageResponseBodyUserUsageInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.userUsageInfoList)) {
      $dara.Model.validateArray(this.userUsageInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


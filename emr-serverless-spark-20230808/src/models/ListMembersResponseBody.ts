// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersResponseBodyMembersActions extends $dara.Model {
  /**
   * @remarks
   * The ARN of the action.
   * 
   * @example
   * acs:emr::w-1234****abcd:action/add_MEMBER
   */
  actionArn?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * add
   */
  actionName?: string;
  /**
   * @remarks
   * The list of action dependencies.
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * add members
   */
  description?: string;
  /**
   * @remarks
   * The display name of the permission.
   * 
   * @example
   * add members
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      actionName: 'actionName',
      dependencies: 'dependencies',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      actionName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembersRolesActions extends $dara.Model {
  /**
   * @remarks
   * The ARN of the action.
   * 
   * @example
   * acs:emr::w-1234****abcd:action/add_MEMBER
   */
  actionArn?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * add
   */
  actionName?: string;
  /**
   * @remarks
   * The list of action dependencies.
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * add members
   */
  description?: string;
  /**
   * @remarks
   * The display name of the permission.
   * 
   * @example
   * add members
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      actionName: 'actionName',
      dependencies: 'dependencies',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      actionName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembersRoles extends $dara.Model {
  /**
   * @remarks
   * The list of permissions.
   */
  actions?: ListMembersResponseBodyMembersRolesActions[];
  /**
   * @remarks
   * The time when the role was created.
   * 
   * @example
   * 1753412502000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * DataScience
   */
  description?: string;
  /**
   * @remarks
   * The ARN of the role.
   * 
   * @example
   * acs:emr::w-1234****abcd:role/DataScience
   */
  roleArn?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * DataScience
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      description: 'description',
      roleArn: 'roleArn',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListMembersResponseBodyMembersRolesActions },
      createTime: 'number',
      description: 'string',
      roleArn: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The list of operations allowed for this user.
   */
  actions?: ListMembersResponseBodyMembersActions[];
  /**
   * @remarks
   * The time when the member was created.
   * 
   * @example
   * 1753412502000
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * jia***test
   */
  displayName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the user.
   * 
   * @example
   * acs:emr::w-1234****abcd:member/202265*****276
   */
  memberArn?: string;
  /**
   * @remarks
   * The list of roles in the workspace.
   */
  roles?: ListMembersResponseBodyMembersRoles[];
  /**
   * @remarks
   * The username.
   * 
   * @example
   * jia***test@195*****7311.onaliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * @example
   * MEMBER
   */
  userType?: string;
  /**
   * @remarks
   * Indicates whether the member is visible.
   * 
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      displayName: 'displayName',
      memberArn: 'memberArn',
      roles: 'roles',
      userName: 'userName',
      userType: 'userType',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListMembersResponseBodyMembersActions },
      createTime: 'string',
      displayName: 'string',
      memberArn: 'string',
      roles: { 'type': 'array', 'itemType': ListMembersResponseBodyMembersRoles },
      userName: 'string',
      userType: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of members.
   */
  members?: ListMembersResponseBodyMembers[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      members: 'members',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


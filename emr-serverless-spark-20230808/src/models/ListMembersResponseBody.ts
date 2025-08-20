// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersResponseBodyMembersActions extends $dara.Model {
  /**
   * @remarks
   * 行为 arn。
   * 
   * @example
   * acs:emr::w-1234****abcd:action/add_MEMBER
   */
  actionArn?: string;
  /**
   * @remarks
   * 权限名称。
   * 
   * @example
   * add
   */
  actionName?: string;
  /**
   * @remarks
   * action 依赖列表。
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * action 描述。
   * 
   * @example
   * add members
   */
  description?: string;
  /**
   * @remarks
   * 权限展示名称。
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
   * 行为 arn。
   * 
   * @example
   * acs:emr::w-1234****abcd:action/add_MEMBER
   */
  actionArn?: string;
  /**
   * @remarks
   * 权限名称。
   * 
   * @example
   * add
   */
  actionName?: string;
  /**
   * @remarks
   * action 依赖列表。
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * action 描述。
   * 
   * @example
   * add members
   */
  description?: string;
  /**
   * @remarks
   * 权限展示名称。
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
   * 权限列表。
   */
  actions?: ListMembersResponseBodyMembersRolesActions[];
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 1753412502000
   */
  createTime?: number;
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * DataScience
   */
  description?: string;
  /**
   * @remarks
   * 角色 arn。
   * 
   * @example
   * acs:emr::w-1234****abcd:role/DataScience
   */
  roleArn?: string;
  /**
   * @remarks
   * 角色名称。
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
   * 针对此用户允许的操作列表。
   */
  actions?: ListMembersResponseBodyMembersActions[];
  /**
   * @example
   * 1753412502000
   */
  createTime?: string;
  /**
   * @remarks
   * 用户展示名称。
   * 
   * @example
   * jia***test
   */
  displayName?: string;
  /**
   * @remarks
   * 用户 arn。
   * 
   * @example
   * acs:emr::w-1234****abcd:member/202265*****276
   */
  memberArn?: string;
  /**
   * @remarks
   * 用户角色列表。
   */
  roles?: ListMembersResponseBodyMembersRoles[];
  /**
   * @remarks
   * 用户名称。
   * 
   * @example
   * jia***test@195*****7311.onaliyun.com
   */
  userName?: string;
  /**
   * @remarks
   * 用户类型。
   * 
   * @example
   * MEMBER
   */
  userType?: string;
  /**
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
   * 一次获取的最大记录数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  members?: ListMembersResponseBodyMembers[];
  /**
   * @remarks
   * 下一页TOKEN。
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * 记录总数。
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


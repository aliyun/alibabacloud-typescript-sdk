// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyRolesRoleLatestDeletionTask extends $dara.Model {
  /**
   * @remarks
   * The time when the deletion task was created.
   * 
   * @example
   * 2018-10-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * ECSAdmin/cc61514b-26eb-4453-ab53-b142eb70****
   */
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The time when the role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the role is a service-linked role.
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The information of the most recent deletion task.
   */
  latestDeletionTask?: ListRolesResponseBodyRolesRoleLatestDeletionTask;
  /**
   * @remarks
   * The maximum session duration of the role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * 90123456789****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the role after authorization.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  /**
   * @remarks
   * The time when the role was updated.
   * 
   * @example
   * 2016-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: ListRolesResponseBodyRolesRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.latestDeletionTask && typeof (this.latestDeletionTask as any).validate === 'function') {
      (this.latestDeletionTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRoles extends $dara.Model {
  role?: ListRolesResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
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
   * The number of entries per page.
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
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the roles.
   */
  roles?: ListRolesResponseBodyRoles;
  /**
   * @remarks
   * The total number of roles.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      roles: 'Roles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      roles: ListRolesResponseBodyRoles,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


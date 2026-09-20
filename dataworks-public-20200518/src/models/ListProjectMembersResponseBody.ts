// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList extends $dara.Model {
  /**
   * @remarks
   * The role code. DataWorks provides preset roles. You can also create custom roles based on your business requirements. For more information about roles, see [Overview of users, roles, and permissions](https://help.aliyun.com/document_detail/295463.html).
   * 
   * @example
   * role_project_guest
   */
  projectRoleCode?: string;
  /**
   * @remarks
   * The role ID.
   * 
   * @example
   * 1
   */
  projectRoleId?: number;
  /**
   * @remarks
   * The name of the role. DataWorks provides preset roles. You can also create custom roles based on your business requirements. For more information about roles, see [Overview of users, roles, and permissions](https://help.aliyun.com/document_detail/295463.html).
   * 
   * @example
   * Visitor
   */
  projectRoleName?: string;
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * - SYSTEM (0): system role.
   * 
   * - USER_CUSTOM (2): custom role.
   * 
   * @example
   * 0
   */
  projectRoleType?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyDataProjectMemberList extends $dara.Model {
  /**
   * @remarks
   * The nickname of the workspace member.
   * 
   * @example
   * zhangsan
   */
  nick?: string;
  /**
   * @remarks
   * The user ID of the member.
   * 
   * @example
   * 121
   */
  projectMemberId?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * John Doe
   */
  projectMemberName?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * - 1: Alibaba Cloud account (USER_ALIYUN).
   * - 5: RAM user (USER_UBACCOUNT).
   * - 6: RAM role (USER_STS_ROLE).
   * 
   * @example
   * 1
   */
  projectMemberType?: string;
  /**
   * @remarks
   * The list of roles assigned to the member.
   */
  projectRoleList?: ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList[];
  /**
   * @remarks
   * The query status. Valid values:
   *  
   * - 0: Normal (NORMAL).
   * - 1: Disabled (FORBIDDEN).
   * - 2: Deleted (DELETED).
   * 
   * @example
   * 0
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      nick: 'Nick',
      projectMemberId: 'ProjectMemberId',
      projectMemberName: 'ProjectMemberName',
      projectMemberType: 'ProjectMemberType',
      projectRoleList: 'ProjectRoleList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nick: 'string',
      projectMemberId: 'string',
      projectMemberName: 'string',
      projectMemberType: 'string',
      projectRoleList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectRoleList)) {
      $dara.Model.validateArray(this.projectRoleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
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
   * The list of workspace members.
   */
  projectMemberList?: ListProjectMembersResponseBodyDataProjectMemberList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectMemberList: 'ProjectMemberList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectMemberList: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyDataProjectMemberList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectMemberList)) {
      $dara.Model.validateArray(this.projectMemberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result.
   */
  data?: ListProjectMembersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectMembersResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


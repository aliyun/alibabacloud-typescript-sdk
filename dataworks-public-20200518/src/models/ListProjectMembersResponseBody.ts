// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList extends $dara.Model {
  /**
   * @remarks
   * The code of the role. DataWorks provides built-in roles and allows you to create custom roles based on your business requirements. For more information about roles, see [Overview of users, roles, and permissions](https://help.aliyun.com/document_detail/295463.html).
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
   * The name of the role. DataWorks provides built-in roles and allows you to create custom roles based on your business requirements. For more information about roles, see [Overview of users, roles, and permissions](https://help.aliyun.com/document_detail/295463.html).
   * 
   * @example
   * test
   */
  projectRoleName?: string;
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * *   0: SYSTEM, which indicates that the role is a built-in role.
   * *   2: USER_CUSTOM, which indicates that the role is a custom role.
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
   * The nickname of the member.
   * 
   * @example
   * zhangsan
   */
  nick?: string;
  /**
   * @remarks
   * The member ID.
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
   * zhangsan
   */
  projectMemberName?: string;
  /**
   * @remarks
   * The type of the member. Valid values:
   * 
   * *   1: USER_ALIYUN, which indicates that the member is an Alibaba Cloud account.
   * *   5: USER_UBACCOUNT, which indicates that the member is a RAM user.
   * *   6: USER_STS_ROLE, which indicates that the member is a RAM role.
   * 
   * @example
   * 1
   */
  projectMemberType?: string;
  /**
   * @remarks
   * The roles that are assigned to the member.
   */
  projectRoleList?: ListProjectMembersResponseBodyDataProjectMemberListProjectRoleList[];
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   0: NORMAL, which indicates that the member is in a normal state.
   * *   1: FORBIDDEN, which indicates that the member is disabled.
   * *   2: DELETED, which indicates that the member is deleted.
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
   * The information about members in the DataWorks workspace.
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
   * The returned results.
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


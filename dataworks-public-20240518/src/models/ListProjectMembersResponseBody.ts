// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersResponseBodyPagingInfoProjectMembersRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the workspace role.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the workspace role.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The type of the workspace role. Valid values:
   * 
   * - UserCustom: Custom role.
   * 
   * - System: System role.
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPagingInfoProjectMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  /**
   * @remarks
   * The list of workspace roles assigned to the workspace member.
   */
  roles?: ListProjectMembersResponseBodyPagingInfoProjectMembersRoles[];
  /**
   * @remarks
   * The status of the workspace member. Valid values:
   * 
   * - Normal: Normal.
   * 
   * - Forbidden: Disabled.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The DataWorks account ID.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  /**
   * @remarks
   * The cloud account name of the member.
   * 
   * @example
   * liusan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roles: 'Roles',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roles: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembersRoles },
      status: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectMembersResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the requested data.
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
  projectMembers?: ListProjectMembersResponseBodyPagingInfoProjectMembers[];
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectMembers: 'ProjectMembers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectMembers: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectMembers)) {
      $dara.Model.validateArray(this.projectMembers);
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
   * The pagination information.
   */
  pagingInfo?: ListProjectMembersResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 9FBBBB1F-DD5E-5D8E-8F50-37F77460F056
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProjectMembersResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


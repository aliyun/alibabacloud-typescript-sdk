// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesResponseBodyPagingInfoProjectRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the role in the DataWorks workspace.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the role in the DataWorks workspace.
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      projectId: 'number',
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

export class ListProjectRolesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The roles in the DataWorks workspace.
   */
  projectRoles?: ListProjectRolesResponseBodyPagingInfoProjectRoles[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectRoles: 'ProjectRoles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      projectRoles: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyPagingInfoProjectRoles },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectRoles)) {
      $dara.Model.validateArray(this.projectRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListProjectRolesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 61649187-0BCF-5E75-8D4B-64FDBEBBB447
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
      pagingInfo: ListProjectRolesResponseBodyPagingInfo,
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


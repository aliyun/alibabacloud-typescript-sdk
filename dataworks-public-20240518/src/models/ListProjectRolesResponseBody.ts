// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesResponseBodyPagingInfoProjectRolesModulePermissions extends $dara.Model {
  /**
   * @example
   * 2
   */
  moduleId?: number;
  /**
   * @example
   * HoloStudio
   */
  moduleName?: string;
  /**
   * @example
   * Read
   */
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
      moduleName: 'string',
      permissionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyPagingInfoProjectRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the workspace role.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  modulePermissions?: ListProjectRolesResponseBodyPagingInfoProjectRolesModulePermissions[];
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
   * The ID of the DataWorks workspace.
   * 
   * Note: For system-defined roles, this parameter returns -1.
   * 
   * @example
   * 21229
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the workspace role.
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      modulePermissions: 'ModulePermissions',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      modulePermissions: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyPagingInfoProjectRolesModulePermissions },
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modulePermissions)) {
      $dara.Model.validateArray(this.modulePermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The returned page number.
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
   * A list of workspace roles.
   */
  projectRoles?: ListProjectRolesResponseBodyPagingInfoProjectRoles[];
  /**
   * @remarks
   * The total number of matching entries.
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
   * The request ID. Use this ID to locate logs and troubleshoot issues.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRoleResponseBodyProjectRoleModulePermissions extends $dara.Model {
  /**
   * @remarks
   * The module ID.
   * 
   * @example
   * 2
   */
  moduleId?: number;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * HoloStudio
   */
  moduleName?: string;
  /**
   * @remarks
   * The permission type.
   * 
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

export class GetProjectRoleResponseBodyProjectRole extends $dara.Model {
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
   * The permissions for the modules in the workspace.
   */
  modulePermissions?: GetProjectRoleResponseBodyProjectRoleModulePermissions[];
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
   * Note: A fixed value of -1 is returned for a system role.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the workspace role. Valid values:
   * 
   * - UserCustom: a custom role
   * 
   * - System: a system role
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
      modulePermissions: { 'type': 'array', 'itemType': GetProjectRoleResponseBodyProjectRoleModulePermissions },
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

export class GetProjectRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the workspace role.
   */
  projectRole?: GetProjectRoleResponseBodyProjectRole;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82F28E60-CF48-5EDF-AB25-D806847B97D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectRole: 'ProjectRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRole: GetProjectRoleResponseBodyProjectRole,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectRole && typeof (this.projectRole as any).validate === 'function') {
      (this.projectRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


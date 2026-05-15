// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRoleRequestModulePermissions extends $dara.Model {
  /**
   * @example
   * 2
   */
  moduleId?: number;
  /**
   * @example
   * Write
   */
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
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

export class CreateProjectRoleRequest extends $dara.Model {
  clientToken?: string;
  modulePermissions?: CreateProjectRoleRequestModulePermissions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * category_role
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      modulePermissions: 'ModulePermissions',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modulePermissions: { 'type': 'array', 'itemType': CreateProjectRoleRequestModulePermissions },
      name: 'string',
      projectId: 'number',
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


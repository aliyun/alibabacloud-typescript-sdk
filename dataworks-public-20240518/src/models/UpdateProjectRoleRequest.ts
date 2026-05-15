// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRoleRequestModulePermissions extends $dara.Model {
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

export class UpdateProjectRoleRequest extends $dara.Model {
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * base_role_xx
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modulePermissions?: UpdateProjectRoleRequestModulePermissions[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      modulePermissions: 'ModulePermissions',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      modulePermissions: { 'type': 'array', 'itemType': UpdateProjectRoleRequestModulePermissions },
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


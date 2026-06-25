// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRoleRequestModulePermissionsPermissionsPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values are:
   * 
   * - PUBLIC: All members in the current workspace can perform this action.
   * 
   * - PRIVATE: Only the creator can perform this action.
   * 
   * - ANY: Both the creator and non-creators can perform this action.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The entity access type. This parameter is ignored if `Accessibility` is set to `PUBLIC`. If `Accessibility` is set to `PRIVATE`, the value of this parameter determines the permissions. Valid values are:
   * 
   * - CREATOR: Only the creator can perform this action.
   * 
   * - ANY: Both the creator and non-creators can perform this action.
   * 
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRoleRequestModulePermissionsPermissions extends $dara.Model {
  /**
   * @remarks
   * A list of permissions.
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * A list of permission rules.
   */
  permissionRules?: UpdateWorkspaceRoleRequestModulePermissionsPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCodes: 'PermissionCodes',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      permissionRules: { 'type': 'array', 'itemType': UpdateWorkspaceRoleRequestModulePermissionsPermissionsPermissionRules },
    };
  }

  validate() {
    if(Array.isArray(this.permissionCodes)) {
      $dara.Model.validateArray(this.permissionCodes);
    }
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRoleRequestModulePermissions extends $dara.Model {
  /**
   * @remarks
   * The module name. Valid values are:
   * 
   * - PaiDesigner: PAI-Designer
   * 
   * - Paiflow: workflow
   * 
   * - DSW: PAI-DSW
   * 
   * - DLC: PAI-DLC
   * 
   * - Dataset: dataset
   * 
   * - Model: model
   * 
   * - Image: image
   * 
   * - CodeSource: code source
   * 
   * - PaiWorkspace@@Workspace: Basic workspace information
   * 
   * - PaiWorkspace@@MemberRole: workspace member management
   * 
   * - PaiWorkspace@@Resource: workspace computing resource management
   * 
   * - PaiWorkspace@@Config: workspace configuration center
   * 
   * - ArtLab: ArtLab
   * 
   * @example
   * PaiDesigner
   */
  moduleName?: string;
  /**
   * @remarks
   * The permission type. Valid values are:
   * 
   * - ReadOnly: read-only access.
   * 
   * - ReadWrite: Allows users to edit and run.
   * 
   * - FullAccess: full control.
   * 
   * - NoPrivilege: no permissions.
   * 
   * - CustomPermissions: custom permissions.
   * 
   * @example
   * ReadOnly
   */
  permissionType?: string;
  /**
   * @remarks
   * The permissions. This parameter is required and applies only when `PermissionType` is set to `CustomPermissions`.
   */
  permissions?: UpdateWorkspaceRoleRequestModulePermissionsPermissions[];
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      permissionType: 'PermissionType',
      permissions: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      permissionType: 'string',
      permissions: { 'type': 'array', 'itemType': UpdateWorkspaceRoleRequestModulePermissionsPermissions },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The permission settings for the role.
   */
  modulePermissions?: UpdateWorkspaceRoleRequestModulePermissions[];
  /**
   * @remarks
   * The name of the custom role. The name must be unique within the workspace. It can be up to 64 characters long and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * dev-test
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      modulePermissions: 'ModulePermissions',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modulePermissions: { 'type': 'array', 'itemType': UpdateWorkspaceRoleRequestModulePermissions },
      roleName: 'string',
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


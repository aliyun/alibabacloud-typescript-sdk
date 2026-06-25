// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceRoleResponseBodyModulePermissionsPermissionsPermissionRules extends $dara.Model {
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

export class GetWorkspaceRoleResponseBodyModulePermissionsPermissions extends $dara.Model {
  /**
   * @remarks
   * A list of permissions.
   */
  permissionCodes?: string[];
  /**
   * @remarks
   * A list of permission rules.
   */
  permissionRules?: GetWorkspaceRoleResponseBodyModulePermissionsPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCodes: 'PermissionCodes',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      permissionRules: { 'type': 'array', 'itemType': GetWorkspaceRoleResponseBodyModulePermissionsPermissionsPermissionRules },
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

export class GetWorkspaceRoleResponseBodyModulePermissions extends $dara.Model {
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
  permissions?: GetWorkspaceRoleResponseBodyModulePermissionsPermissions[];
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
      permissions: { 'type': 'array', 'itemType': GetWorkspaceRoleResponseBodyModulePermissionsPermissions },
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

export class GetWorkspaceRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account UID of the creator.
   * 
   * @example
   * 2680******4103
   */
  creator?: string;
  /**
   * @remarks
   * The time when the role was created. It is specified in UTC and formatted in ISO 8601.
   * 
   * @example
   * 2025-06-11T08:58:35.438Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the role was last modified. It is specified in UTC and formatted in ISO 8601.
   * 
   * @example
   * 2026-03-27T02:26:33.872Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The permission configuration of the role.
   */
  modulePermissions?: GetWorkspaceRoleResponseBodyModulePermissions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A519F77D-28A0-52F5-AB82-5********8
   */
  requestId?: string;
  /**
   * @remarks
   * The role ID.
   * 
   * @example
   * role-dhg*******
   */
  roleId?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * dev-test
   */
  roleName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - `Creating`: The role is being created.
   * 
   * - `Updating`: The role is being updated.
   * 
   * - `Deleting`: The role is being deleted.
   * 
   * - `Succeeded`: The task succeeded.
   * 
   * - `Failed`: The task failed.
   * 
   * @example
   * Successful
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modulePermissions: 'ModulePermissions',
      requestId: 'RequestId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modulePermissions: { 'type': 'array', 'itemType': GetWorkspaceRoleResponseBodyModulePermissions },
      requestId: 'string',
      roleId: 'string',
      roleName: 'string',
      status: 'string',
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


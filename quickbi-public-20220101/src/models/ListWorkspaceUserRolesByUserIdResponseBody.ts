// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUserRolesByUserIdResponseBodyResultRoleModel extends $dara.Model {
  /**
   * @remarks
   * The code that corresponds to the preset workspace role. This parameter is not returned for custom roles.
   * 
   * @example
   * 34637***35
   */
  roleCode?: string;
  /**
   * @remarks
   * The workspace role ID. This includes, but is not limited to, the following preset workspace roles:
   * 
   * - 25: Workspace Admin (preset role)
   * 
   * - 26: Workspace Developer (preset role)
   * 
   * - 27: Workspace Analyst (preset role)
   * 
   * - 30: Workspace Viewer (preset role)
   * 
   * @example
   * 111111111
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the workspace role.
   * 
   * @example
   * arms-admin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleCode: 'RoleCode',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleCode: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUserRolesByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The workspace role information.
   */
  roleModel?: ListWorkspaceUserRolesByUserIdResponseBodyResultRoleModel;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      roleModel: 'RoleModel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleModel: ListWorkspaceUserRolesByUserIdResponseBodyResultRoleModel,
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.roleModel && typeof (this.roleModel as any).validate === 'function') {
      (this.roleModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUserRolesByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC4E***************F67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The list of all workspace role information.
   * 
   * This parameter is required.
   */
  result?: ListWorkspaceUserRolesByUserIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListWorkspaceUserRolesByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


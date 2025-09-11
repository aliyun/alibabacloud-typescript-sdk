// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUserRolesByUserIdResponseBodyResultRoleModel extends $dara.Model {
  /**
   * @example
   * 34637***35
   */
  roleCode?: string;
  /**
   * @example
   * 111111111
   */
  roleId?: string;
  /**
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
  roleModel?: ListWorkspaceUserRolesByUserIdResponseBodyResultRoleModel;
  /**
   * @example
   * 9337d121-a78f-4c1b-a8bc-f81de117****
   */
  workspaceId?: string;
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
   * @example
   * DC4E***************F67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  result?: ListWorkspaceUserRolesByUserIdResponseBodyResult[];
  /**
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


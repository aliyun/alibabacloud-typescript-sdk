// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserRoleInfoInWorkspaceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Preset role code.
   * 
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @remarks
   * Preset role ID. Possible values:
   * - 25: Space Administrator
   * - 26: Space Developer
   * - 27: Space Analyst
   * - 30: Space Viewer
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Preset role name.
   * 
   * @example
   * test
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
      roleId: 'number',
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

export class QueryUserRoleInfoInWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Preset space role information of the user.
   */
  result?: QueryUserRoleInfoInWorkspaceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request succeeded.
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
      result: QueryUserRoleInfoInWorkspaceResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


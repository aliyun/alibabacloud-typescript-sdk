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


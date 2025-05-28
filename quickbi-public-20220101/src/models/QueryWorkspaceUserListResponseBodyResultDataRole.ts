// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkspaceUserListResponseBodyResultDataRole extends $dara.Model {
  /**
   * @remarks
   * Code corresponding to the preset role.
   * 
   * @example
   * role_workspace_admin
   */
  roleCode?: string;
  /**
   * @remarks
   * Preset role ID. Possible values:
   * 
   * - 25: Workspace Administrator
   * - 26: Workspace Developer
   * - 27: Workspace Analyst
   * - 30: Workspace Viewer
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Name of the preset role.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceUserRoleRequest extends $dara.Model {
  /**
   * @remarks
   * Preset workspace role ID, existing roles will be overwritten. Value range:
   * - 25: Workspace Administrator
   * - 26: Workspace Developer
   * - 27: Workspace Analyst
   * - 30: Workspace Viewer
   * 
   * @example
   * 25
   * 
   * @deprecated
   */
  roleId?: number;
  /**
   * @remarks
   * Multiple workspace role IDs, separated by commas. If this value is provided, it takes precedence.
   * >Notice: roleId and roleIds cannot both be empty
   * 
   * @example
   * 25,26
   */
  roleIds?: string;
  /**
   * @remarks
   * Quick BI user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
      roleIds: 'RoleIds',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      roleIds: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


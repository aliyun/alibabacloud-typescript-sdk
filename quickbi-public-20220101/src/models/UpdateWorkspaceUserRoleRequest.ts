// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceUserRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the preset workspace role. This operation overwrites existing roles. Valid values:
   * - 25: workspace administrator
   * - 26: workspace developer
   * - 27: workspace analyst
   * - 30: workspace viewer
   * 
   * @example
   * 25
   * 
   * @deprecated
   */
  roleId?: number;
  /**
   * @remarks
   * The IDs of multiple workspace roles, separated by commas. If this parameter is specified, it takes precedence. <notice>roleId and roleIds cannot be both empty.</notice>
   * 
   * @example
   * 25,26
   */
  roleIds?: string;
  /**
   * @remarks
   * The Quick BI user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
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


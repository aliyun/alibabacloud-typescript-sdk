// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceUsersRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the preset workspace role. Existing roles are overwritten. Valid values:
   * - 25: workspace administrator
   * - 26: workspace developer
   * - 27: workspace analyst
   * - 30: workspace viewer
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * The user IDs. The IDs are Quick BI user IDs, not Alibaba Cloud UIDs.
   * 
   * - You can specify multiple user IDs separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 136516262323****,124498444445****
   */
  userIds?: string;
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
      userIds: 'UserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
      userIds: 'string',
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


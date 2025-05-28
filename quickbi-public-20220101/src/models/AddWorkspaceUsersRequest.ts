// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Preset space role ID. Value range:
   * - 25: Space Administrator
   * - 26: Space Developer
   * - 27: Space Analyst
   * - 30: Space Viewer
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * User ID. This is the UserID for Quick BI, not the Alibaba Cloud UID.
   * 
   * - Supports batch parameters, with user IDs separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userIds?: string;
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


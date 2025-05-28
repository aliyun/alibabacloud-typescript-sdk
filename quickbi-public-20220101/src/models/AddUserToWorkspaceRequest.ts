// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The preset space role ID. Value range:
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
   * The ID of the Quick BI user to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
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
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace role ID. Preset roles:
   * - 25: Workspace administrator
   * - 26: Workspace developer
   * - 27: Workspace analyst
   * - 30: Workspace viewer
   * 
   * > Custom role IDs are supported since 6.0.3.
   * >
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * The ID of the Quick BI user to add.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
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


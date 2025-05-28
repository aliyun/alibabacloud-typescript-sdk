// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceRoleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the user\\"s nickname.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Current page number for pagination:
   * 
   * - Starting value: 1
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page for pagination:
   * 
   * - Default value: 10
   * - Maximum value: 1000
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom roles: The corresponding role ID for custom roles
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * The ID of the workspace. This parameter is optional. If you do not set this parameter, the roles of all workspaces are returned.
   * 
   * @example
   * 726bee5a-****-43e1-9a8e-b550f0120f35
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
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


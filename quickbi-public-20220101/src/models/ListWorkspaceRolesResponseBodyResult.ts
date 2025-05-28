// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspaceRolesResponseBodyResultAuthConfigList } from "./ListWorkspaceRolesResponseBodyResultAuthConfigList";


export class ListWorkspaceRolesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role authorization configurations.
   */
  authConfigList?: ListWorkspaceRolesResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Value range:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Workspace role ID, including predefined and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for a custom role
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Space administrator
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListWorkspaceRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


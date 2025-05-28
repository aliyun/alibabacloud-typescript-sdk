// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkspaceRoleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for the custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


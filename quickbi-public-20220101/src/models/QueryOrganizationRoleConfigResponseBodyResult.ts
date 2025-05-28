// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrganizationRoleConfigResponseBodyResultAuthConfigList } from "./QueryOrganizationRoleConfigResponseBodyResultAuthConfigList";


export class QueryOrganizationRoleConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: QueryOrganizationRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
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
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID of the custom role
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Organization Admin
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
      authConfigList: { 'type': 'array', 'itemType': QueryOrganizationRoleConfigResponseBodyResultAuthConfigList },
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


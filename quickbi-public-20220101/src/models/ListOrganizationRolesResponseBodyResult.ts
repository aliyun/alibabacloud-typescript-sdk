// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrganizationRolesResponseBodyResultAuthConfigList } from "./ListOrganizationRolesResponseBodyResultAuthConfigList";


export class ListOrganizationRolesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: ListOrganizationRolesResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Role ID.
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
      authConfigList: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResultAuthConfigList },
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


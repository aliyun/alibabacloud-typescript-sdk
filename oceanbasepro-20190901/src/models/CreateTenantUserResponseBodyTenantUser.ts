// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTenantUserResponseBodyTenantUserRoles } from "./CreateTenantUserResponseBodyTenantUserRoles";


export class CreateTenantUserResponseBodyTenantUser extends $dara.Model {
  /**
   * @example
   * Encrypt,Decrypt
   */
  globalPermissions?: string;
  roles?: CreateTenantUserResponseBodyTenantUserRoles[];
  /**
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @example
   * ONLINE
   */
  userStatus?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      globalPermissions: 'GlobalPermissions',
      roles: 'Roles',
      userName: 'UserName',
      userStatus: 'UserStatus',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalPermissions: 'string',
      roles: { 'type': 'array', 'itemType': CreateTenantUserResponseBodyTenantUserRoles },
      userName: 'string',
      userStatus: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDatabaseUserRolesResponseBodyTenantUserUsers } from "./ModifyDatabaseUserRolesResponseBodyTenantUserUsers";


export class ModifyDatabaseUserRolesResponseBodyTenantUser extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  users?: ModifyDatabaseUserRolesResponseBodyTenantUserUsers[];
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tenantId: 'TenantId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tenantId: 'string',
      users: { 'type': 'array', 'itemType': ModifyDatabaseUserRolesResponseBodyTenantUserUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


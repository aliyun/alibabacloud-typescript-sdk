// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseUserRolesResponseBodyTenantUserUsers extends $dara.Model {
  /**
   * @example
   * ReadOnly
   */
  role?: string;
  /**
   * @example
   * user_pay_ro
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


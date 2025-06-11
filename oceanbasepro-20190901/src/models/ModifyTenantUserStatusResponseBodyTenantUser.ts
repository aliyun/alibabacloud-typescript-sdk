// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserStatusResponseBodyTenantUser extends $dara.Model {
  /**
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @example
   * LOCKED
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userName: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


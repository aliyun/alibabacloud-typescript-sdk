// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **ModifyTenantUserStatus**.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of database accounts in the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @remarks
   * The status of the database account. Valid values:   
   * - Locked: The account is locked. 
   * - Online: The account is unlocked.
   * 
   * This parameter is required.
   * 
   * @example
   * The ID of the tenant.
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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


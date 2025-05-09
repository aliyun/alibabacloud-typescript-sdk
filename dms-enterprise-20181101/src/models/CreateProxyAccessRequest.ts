// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProxyAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * xxx
   */
  indepAccount?: string;
  /**
   * @remarks
   * The password that is used to log on to the database.
   * 
   * @example
   * xxx
   */
  indepPassword?: string;
  /**
   * @remarks
   * The ID of the security protection agent. You can call the [ListProxies](https://www.alibabacloud.com/help/en/data-management-service/latest/listproxies) or [GetProxy](https://www.alibabacloud.com/help/en/data-management-service/latest/getproxy) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://www.alibabacloud.com/help/en/data-management-service/latest/getuseractivetenant) or [ListUserTenants](https://www.alibabacloud.com/help/en/data-management-service/latest/listusertenants) operation to obtain this parameter.
   * 
   * @example
   * 1
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user. You can call the [ListUsers](https://www.alibabacloud.com/help/en/data-management-service/latest/listusers) or [GetUser](https://www.alibabacloud.com/help/en/data-management-service/latest/getuser) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      indepAccount: 'IndepAccount',
      indepPassword: 'IndepPassword',
      proxyId: 'ProxyId',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indepAccount: 'string',
      indepPassword: 'string',
      proxyId: 'number',
      tid: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


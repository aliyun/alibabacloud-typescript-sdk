// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProxyRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      proxyId: 'ProxyId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


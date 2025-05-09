// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProxyAccessesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the secure access proxy. 
   * 
   * >  You can call the [ListProxies](https://www.alibabacloud.com/help/en/data-management-service/latest/listproxies) operation to query the ID of the secure access proxy.
   * 
   * This parameter is required.
   * 
   * @example
   * 47
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the tenant. 
   * 
   * >  You can call the [GetUserActiveTenant](https://www.alibabacloud.com/help/en/data-management-service/latest/getuseractivetenant) operation to query the ID of the tenant.
   * 
   * @example
   * 3***
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InspectProxyAccessSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the security protection authorization. After the security protection agent authorizes the target user, the system automatically generates a security protection authorization ID. The ID is globally unique. You can call the [ListProxyAccesses](https://www.alibabacloud.com/help/en/data-management-service/latest/listproxyaccesses) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  proxyAccessId?: number;
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
      proxyAccessId: 'ProxyAccessId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyAccessId: 'number',
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


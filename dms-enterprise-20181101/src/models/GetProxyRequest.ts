// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the secure access proxy. You can call the [ListProxies](https://help.aliyun.com/document_detail/295371.html) operation to query the ID of the secure access proxy.
   * 
   * This parameter is required.
   * 
   * @example
   * 4**
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
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


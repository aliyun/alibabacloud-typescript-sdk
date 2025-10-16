// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityProxyRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * proxy-natfdc73073e031****8e0d
   */
  proxyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * proxy_auto_heyuan
   */
  proxyName?: string;
  /**
   * @example
   * 1
   */
  strictMode?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      proxyId: 'ProxyId',
      proxyName: 'ProxyName',
      strictMode: 'StrictMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      proxyId: 'string',
      proxyName: 'string',
      strictMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


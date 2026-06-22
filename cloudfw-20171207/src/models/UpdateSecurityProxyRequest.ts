// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the NAT firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy-natfdc73073e031****8e0d
   */
  proxyId?: string;
  /**
   * @remarks
   * The name of the NAT firewall. The name can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). The name must be 4 to 50 characters in length and cannot start with an underscore.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy_auto_heyuan
   */
  proxyName?: string;
  /**
   * @remarks
   * Specifies whether to enable strict mode. Valid values:
   * 
   * - 1: strict mode.
   * - 0: loose mode.
   * 
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


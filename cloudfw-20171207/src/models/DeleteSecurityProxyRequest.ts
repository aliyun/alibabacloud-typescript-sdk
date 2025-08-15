// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
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
   * proxy-nat00ab412ef93d4275a6b5
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      proxyId: 'ProxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      proxyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


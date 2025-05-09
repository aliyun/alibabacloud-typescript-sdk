// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
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
   * proxy-natbfd2fafbb77042308d1b
   */
  proxyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the NAT firewall. Valid values:
   * 
   * *   open: yes
   * *   close: no
   * 
   * This parameter is required.
   * 
   * @example
   * open
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      proxyId: 'ProxyId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      proxyId: 'string',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


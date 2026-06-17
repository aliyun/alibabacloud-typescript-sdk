// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSecurityProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
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
   * proxy-natbf******
   */
  proxyId?: string;
  /**
   * @remarks
   * The security protection switch. Valid values:
   * 
   * - open: Enables security protection.
   * 
   * - close: Disables security protection.
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


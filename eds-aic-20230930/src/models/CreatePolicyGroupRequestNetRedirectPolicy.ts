// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePolicyGroupRequestNetRedirectPolicyRules } from "./CreatePolicyGroupRequestNetRedirectPolicyRules";


export class CreatePolicyGroupRequestNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to manually configure a custom proxy.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  customProxy?: string;
  /**
   * @remarks
   * The IPv4 address of the custom proxy.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddr?: string;
  /**
   * @remarks
   * Specifies whether to enable the network redirection feature.
   * 
   * Valid values:
   * 
   * *   off
   * *   on
   * 
   * @example
   * off
   */
  netRedirect?: string;
  /**
   * @remarks
   * The port of the custom proxy. Valid values: 1 to 65535.
   * 
   * @example
   * 1145
   */
  port?: string;
  /**
   * @remarks
   * The password of the proxy. The password must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * password
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The type of the proxy protocol.
   * 
   * Valid values:
   * 
   * *   socks5.
   * 
   * @example
   * socks5
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy. The name must be 1 to 256 in length and cannot contain Chinese character or space characters.
   * 
   * @example
   * username
   */
  proxyUserName?: string;
  /**
   * @remarks
   * The proxy rules. You can create up to 100 proxy rules.
   */
  rules?: CreatePolicyGroupRequestNetRedirectPolicyRules[];
  static names(): { [key: string]: string } {
    return {
      customProxy: 'CustomProxy',
      hostAddr: 'HostAddr',
      netRedirect: 'NetRedirect',
      port: 'Port',
      proxyPassword: 'ProxyPassword',
      proxyType: 'ProxyType',
      proxyUserName: 'ProxyUserName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customProxy: 'string',
      hostAddr: 'string',
      netRedirect: 'string',
      port: 'string',
      proxyPassword: 'string',
      proxyType: 'string',
      proxyUserName: 'string',
      rules: { 'type': 'array', 'itemType': CreatePolicyGroupRequestNetRedirectPolicyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


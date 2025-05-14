// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules } from "./ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules";


export class ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a custom proxy is manually configured.
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
   * Indicates whether the network redirection feature is enabled. When this feature is enabled, network traffic is automatically redirected to the on-premises network by default.
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
   * The proxy rules.
   */
  rules?: ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules[];
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
      rules: { 'type': 'array', 'itemType': ListPolicyGroupsResponseBodyPolicyGroupModelNetRedirectPolicyRules },
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


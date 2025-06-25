// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkDomainRequestProxies extends $dara.Model {
  /**
   * @remarks
   * The new IP address of the proxy server.
   * 
   * @example
   * 114.21**.**
   */
  address?: string;
  /**
   * @remarks
   * The node type of the proxy server to modify. Valid values:
   * 
   * *   **Master**: primary proxy server.
   * *   **Slave**: secondary proxy server.
   * 
   * @example
   * Slave
   */
  nodeType?: string;
  /**
   * @remarks
   * The new password of the proxy server account.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The new port of the proxy server.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The new proxy mode. Valid values:
   * 
   * *   **SSHProxy**
   * *   **HTTPProxy**
   * *   **Socks5Proxy**
   * 
   * @example
   * HTTPProxy
   */
  proxyType?: string;
  /**
   * @remarks
   * The new username of the proxy server account.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      nodeType: 'NodeType',
      password: 'Password',
      port: 'Port',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      nodeType: 'string',
      password: 'string',
      port: 'number',
      proxyType: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


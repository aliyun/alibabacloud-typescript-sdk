// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkDomainRequestProxies extends $dara.Model {
  /**
   * @remarks
   * The IP address of the proxy server.
   * 
   * @example
   * ``47.104.**.**``
   */
  address?: string;
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * 
   * - **Master**: primary proxy server.
   * - **Slave**: secondary proxy server.
   * 
   * @example
   * Master
   */
  nodeType?: string;
  /**
   * @remarks
   * The Base64-encoded password of the proxy server.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The port of the proxy server.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The proxy type. Valid values:
   * 
   * - **SSHProxy**
   * - **HTTPProxy**
   * - **Socks5Proxy**
   * 
   * @example
   * SSHProxy
   */
  proxyType?: string;
  /**
   * @remarks
   * The username of the proxy server.
   * 
   * @example
   * root
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


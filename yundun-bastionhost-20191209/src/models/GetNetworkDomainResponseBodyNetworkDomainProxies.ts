// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkDomainResponseBodyNetworkDomainProxies extends $dara.Model {
  /**
   * @remarks
   * The IP address of the proxy server.
   * 
   * @example
   * ``47.102.**.**``
   */
  address?: string;
  /**
   * @remarks
   * Indicates whether the proxy server has a password. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * - **Master**: primary proxy server.
   * - **Slave**: secondary proxy server.
   * 
   * @example
   * Master
   */
  nodeType?: string;
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
   * The status of the proxy server.
   * 
   * - **Available**
   * - **Unavailable**
   * 
   * @example
   * Unavailable
   */
  proxyState?: string;
  /**
   * @remarks
   * The error code that indicates the status of the proxy server.
   * 
   * - **CHECK_PWD_FAILED**: The password is invalid.
   * - **CHECK_PWD_TIMEOUT**: The password verification session timed out.
   * - **CHECK_PWD_NETWORK_ERR**: A network error occurred.
   * - **UNEXPECTED**: An unknown error occurred.
   * 
   * @example
   * CHECK_PWD_TIMEOUT
   */
  proxyStateErrorCode?: string;
  /**
   * @remarks
   * The proxy type. Valid values:
   * 
   * - **SSHProxy**
   * - **HTTPProxy**
   * - **Socks5Proxy**
   * 
   * @example
   * HTTPProxy
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
      hasPassword: 'HasPassword',
      nodeType: 'NodeType',
      port: 'Port',
      proxyState: 'ProxyState',
      proxyStateErrorCode: 'ProxyStateErrorCode',
      proxyType: 'ProxyType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hasPassword: 'boolean',
      nodeType: 'string',
      port: 'number',
      proxyState: 'string',
      proxyStateErrorCode: 'string',
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


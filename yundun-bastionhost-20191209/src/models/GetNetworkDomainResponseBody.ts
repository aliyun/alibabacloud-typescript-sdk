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

export class GetNetworkDomainResponseBodyNetworkDomain extends $dara.Model {
  /**
   * @remarks
   * The remarks of the network domain.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Indicates whether the network domain is a built-in network domain.
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The network domain ID.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The name of the network domain.
   * 
   * @example
   * SSH Proxy
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The connection mode of the network domain. Valid values:
   * 
   * * Direct
   * * Proxy
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * The information about the proxy servers.
   */
  proxies?: GetNetworkDomainResponseBodyNetworkDomainProxies[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      default: 'Default',
      networkDomainId: 'NetworkDomainId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxies: 'Proxies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      default: 'boolean',
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxies: { 'type': 'array', 'itemType': GetNetworkDomainResponseBodyNetworkDomainProxies },
    };
  }

  validate() {
    if(Array.isArray(this.proxies)) {
      $dara.Model.validateArray(this.proxies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the network domain.
   */
  networkDomain?: GetNetworkDomainResponseBodyNetworkDomain;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05F59944-2E24-595C-B21A-8C9955E60FAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkDomain: 'NetworkDomain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomain: GetNetworkDomainResponseBodyNetworkDomain,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkDomain && typeof (this.networkDomain as any).validate === 'function') {
      (this.networkDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


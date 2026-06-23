// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkDomainResponseBodyNetworkDomainProxies extends $dara.Model {
  /**
   * @remarks
   * The address of the proxy server.
   * 
   * @example
   * ``47.102.**.**``
   */
  address?: string;
  /**
   * @remarks
   * Specifies whether a password is set for the proxy server. Valid values:
   * 
   * - **true**: A password is set.
   * 
   * - **false**: No password is set.
   * 
   * @example
   * true
   */
  hasPassword?: boolean;
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * 
   * - Master: primary proxy server
   * 
   * - Slave: secondary proxy server
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
   * The status of the proxy server. Valid values:
   * 
   * - **Available**: available
   * 
   * - **Unavailable**: unavailable
   * 
   * @example
   * Unavailable
   */
  proxyState?: string;
  /**
   * @remarks
   * The error code that is returned if the proxy server is unavailable. Valid values:
   * 
   * - **CHECK_PWD_FAILED**: Incorrect password.
   * 
   * - **CHECK_PWD_TIMEOUT**: Password verification timeout.
   * 
   * - **CHECK_PWD_NETWORK_ERR**: Network error.
   * 
   * - **UNEXPECTED**: Unknown error.
   * 
   * @example
   * CHECK_PWD_TIMEOUT
   */
  proxyStateErrorCode?: string;
  /**
   * @remarks
   * The proxy method. Valid values:
   * 
   * - SSHProxy: SSH proxy
   * 
   * - HTTPProxy: HTTP proxy
   * 
   * - Socks5Proxy: SOCKS5 proxy
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
   * The comment for the network domain.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether the network domain is built-in. Valid values:
   * 
   * - **true**: Yes
   * 
   * - **false**: No
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The ID of the network domain.
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
   * The type of the network domain. Valid values:
   * 
   * - Direct: direct connection
   * 
   * - Proxy: proxy
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  /**
   * @remarks
   * A list of proxy servers.
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
   * The details of the network domain.
   */
  networkDomain?: GetNetworkDomainResponseBodyNetworkDomain;
  /**
   * @remarks
   * The ID of the request.
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


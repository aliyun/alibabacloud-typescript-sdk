// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkDomainsResponseBodyNetworkDomainsProxiesState extends $dara.Model {
  /**
   * @remarks
   * The node type of the proxy server. Valid values:
   * 
   * *   **Master**: primary proxy server.
   * *   **Slave**: secondary proxy server.
   * 
   * @example
   * Master
   */
  nodeType?: string;
  /**
   * @remarks
   * The status of the proxy server.
   * 
   * *   **Available**
   * *   **Unavailable**
   * 
   * @example
   * Available
   */
  proxyState?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      proxyState: 'ProxyState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      proxyState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponseBodyNetworkDomains extends $dara.Model {
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
   * Indicates whether the network domain is built-in.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
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
   * test
   */
  networkDomainName?: string;
  /**
   * @remarks
   * The connection mode of the network domain. Valid values:
   * 
   * *   **Direct**
   * *   **Proxy**
   * 
   * @example
   * Proxy
   */
  networkDomainType?: string;
  proxiesState?: ListNetworkDomainsResponseBodyNetworkDomainsProxiesState[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      default: 'Default',
      networkDomainId: 'NetworkDomainId',
      networkDomainName: 'NetworkDomainName',
      networkDomainType: 'NetworkDomainType',
      proxiesState: 'ProxiesState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      default: 'boolean',
      networkDomainId: 'string',
      networkDomainName: 'string',
      networkDomainType: 'string',
      proxiesState: { 'type': 'array', 'itemType': ListNetworkDomainsResponseBodyNetworkDomainsProxiesState },
    };
  }

  validate() {
    if(Array.isArray(this.proxiesState)) {
      $dara.Model.validateArray(this.proxiesState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network domains that are returned.
   */
  networkDomains?: ListNetworkDomainsResponseBodyNetworkDomains[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of network domains that are returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkDomains: 'NetworkDomains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomains: { 'type': 'array', 'itemType': ListNetworkDomainsResponseBodyNetworkDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkDomains)) {
      $dara.Model.validateArray(this.networkDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


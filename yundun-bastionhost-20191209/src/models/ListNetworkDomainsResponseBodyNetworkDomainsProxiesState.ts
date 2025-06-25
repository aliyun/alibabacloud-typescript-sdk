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


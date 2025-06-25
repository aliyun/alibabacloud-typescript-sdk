// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworkDomainsResponseBodyNetworkDomainsProxiesState } from "./ListNetworkDomainsResponseBodyNetworkDomainsProxiesState";


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


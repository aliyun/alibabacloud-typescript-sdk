// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNetworkDomainResponseBodyNetworkDomainProxies } from "./GetNetworkDomainResponseBodyNetworkDomainProxies";


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


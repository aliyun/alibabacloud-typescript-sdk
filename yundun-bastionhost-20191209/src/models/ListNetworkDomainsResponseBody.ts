// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetworkDomainsResponseBodyNetworkDomains } from "./ListNetworkDomainsResponseBodyNetworkDomains";


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


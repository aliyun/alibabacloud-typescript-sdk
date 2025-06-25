// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNetworkDomainResponseBodyNetworkDomain } from "./GetNetworkDomainResponseBodyNetworkDomain";


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


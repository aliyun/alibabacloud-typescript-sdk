// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignIpv6AddressesResponseBodyIpv6PrefixSets } from "./AssignIpv6addressesResponseBodyIpv6prefixSets";
import { AssignIpv6AddressesResponseBodyIpv6Sets } from "./AssignIpv6addressesResponseBodyIpv6sets";


export class AssignIpv6AddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv6 prefixes of the ENI.
   */
  ipv6PrefixSets?: AssignIpv6AddressesResponseBodyIpv6PrefixSets;
  /**
   * @remarks
   * The IPv6 addresses assigned to the ENI.
   */
  ipv6Sets?: AssignIpv6AddressesResponseBodyIpv6Sets;
  /**
   * @remarks
   * The ENI ID.
   * 
   * @example
   * eni-bp1iqejowblx6h8j****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6PrefixSets: 'Ipv6PrefixSets',
      ipv6Sets: 'Ipv6Sets',
      networkInterfaceId: 'NetworkInterfaceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6PrefixSets: AssignIpv6AddressesResponseBodyIpv6PrefixSets,
      ipv6Sets: AssignIpv6AddressesResponseBodyIpv6Sets,
      networkInterfaceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.ipv6PrefixSets && typeof (this.ipv6PrefixSets as any).validate === 'function') {
      (this.ipv6PrefixSets as any).validate();
    }
    if(this.ipv6Sets && typeof (this.ipv6Sets as any).validate === 'function') {
      (this.ipv6Sets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6addrPoolsIpv6addrPool";


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools extends $dara.Model {
  ipv6AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv6AddrPool: 'Ipv6AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6AddrPool)) {
      $dara.Model.validateArray(this.ipv6AddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


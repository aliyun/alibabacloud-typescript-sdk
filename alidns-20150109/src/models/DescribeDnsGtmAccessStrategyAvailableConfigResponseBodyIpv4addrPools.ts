// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4addrPoolsIpv4addrPool";


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools extends $dara.Model {
  ipv4AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv4AddrPool: 'Ipv4AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4AddrPool)) {
      $dara.Model.validateArray(this.ipv4AddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


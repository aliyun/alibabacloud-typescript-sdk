// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool";


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools extends $dara.Model {
  domainAddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool[];
  static names(): { [key: string]: string } {
    return {
      domainAddrPool: 'DomainAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.domainAddrPool)) {
      $dara.Model.validateArray(this.domainAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool } from "./DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool";


export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools extends $dara.Model {
  failoverAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool[];
  static names(): { [key: string]: string } {
    return {
      failoverAddrPool: 'FailoverAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.failoverAddrPool)) {
      $dara.Model.validateArray(this.failoverAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


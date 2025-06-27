// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool } from "./DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool";


export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools extends $dara.Model {
  defaultAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      defaultAddrPool: 'DefaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.defaultAddrPool)) {
      $dara.Model.validateArray(this.defaultAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


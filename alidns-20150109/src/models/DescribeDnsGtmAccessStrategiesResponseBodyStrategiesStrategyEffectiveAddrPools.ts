// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool";


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools extends $dara.Model {
  effectiveAddrPool?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool[];
  static names(): { [key: string]: string } {
    return {
      effectiveAddrPool: 'EffectiveAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveAddrPool)) {
      $dara.Model.validateArray(this.effectiveAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


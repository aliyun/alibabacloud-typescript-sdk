// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule } from "./DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule";


export class DescribeDomainMultiUsageDataResponseBodyTrafficPerInterval extends $dara.Model {
  trafficDataModule?: DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.trafficDataModule)) {
      $dara.Model.validateArray(this.trafficDataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


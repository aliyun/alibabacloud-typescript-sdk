// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule } from "./DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule";


export class DescribeDomainHitRateDataResponseBodyHitRateInterval extends $dara.Model {
  dataModule?: DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


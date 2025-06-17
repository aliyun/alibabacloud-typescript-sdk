// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule } from "./DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule";


export class DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
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


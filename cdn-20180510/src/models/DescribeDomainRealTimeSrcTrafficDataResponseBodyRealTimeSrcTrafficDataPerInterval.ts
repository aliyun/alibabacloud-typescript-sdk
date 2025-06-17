// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule } from "./DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule";


export class DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
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


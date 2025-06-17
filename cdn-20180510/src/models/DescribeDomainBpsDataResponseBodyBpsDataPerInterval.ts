// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule } from "./DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule";


export class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
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


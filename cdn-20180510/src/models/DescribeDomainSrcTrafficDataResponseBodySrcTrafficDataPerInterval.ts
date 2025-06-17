// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule } from "./DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule";


export class DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcTrafficDataResponseBodySrcTrafficDataPerIntervalDataModule },
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


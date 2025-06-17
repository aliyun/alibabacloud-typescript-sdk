// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule } from "./DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule";


export class DescribeDomainTrafficDataResponseBodyTrafficDataPerInterval extends $dara.Model {
  dataModule?: DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
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


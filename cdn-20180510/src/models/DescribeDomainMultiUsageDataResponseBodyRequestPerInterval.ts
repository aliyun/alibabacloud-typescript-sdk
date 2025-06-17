// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule } from "./DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule";


export class DescribeDomainMultiUsageDataResponseBodyRequestPerInterval extends $dara.Model {
  requestDataModule?: DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
    };
  }

  validate() {
    if(Array.isArray(this.requestDataModule)) {
      $dara.Model.validateArray(this.requestDataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


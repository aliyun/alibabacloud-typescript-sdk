// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel } from "./DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel";


export class DescribeDomainRealTimeBpsDataResponseBodyData extends $dara.Model {
  bpsModel?: DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  validate() {
    if(Array.isArray(this.bpsModel)) {
      $dara.Model.validateArray(this.bpsModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel } from "./DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel";


export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList extends $dara.Model {
  bpsDataModel?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.bpsDataModel)) {
      $dara.Model.validateArray(this.bpsDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


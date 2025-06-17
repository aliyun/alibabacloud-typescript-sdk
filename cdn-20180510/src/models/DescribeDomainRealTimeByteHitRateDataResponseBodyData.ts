// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel } from "./DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel";


export class DescribeDomainRealTimeByteHitRateDataResponseBodyData extends $dara.Model {
  byteHitRateDataModel?: DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.byteHitRateDataModel)) {
      $dara.Model.validateArray(this.byteHitRateDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel } from "./DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel";


export class DescribeDomainRealTimeReqHitRateDataResponseBodyData extends $dara.Model {
  reqHitRateDataModel?: DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.reqHitRateDataModel)) {
      $dara.Model.validateArray(this.reqHitRateDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


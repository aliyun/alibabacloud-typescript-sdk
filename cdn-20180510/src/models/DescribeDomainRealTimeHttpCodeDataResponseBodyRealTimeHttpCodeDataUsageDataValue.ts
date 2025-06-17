// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData } from "./DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData";


export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $dara.Model {
  realTimeCodeProportionData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.realTimeCodeProportionData)) {
      $dara.Model.validateArray(this.realTimeCodeProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData } from "./DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData";


export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue extends $dara.Model {
  realTimeSrcCodeProportionData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeSrcCodeProportionData: 'RealTimeSrcCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSrcCodeProportionData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.realTimeSrcCodeProportionData)) {
      $dara.Model.validateArray(this.realTimeSrcCodeProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


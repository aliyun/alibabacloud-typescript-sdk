// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData } from "./DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData";


export class DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


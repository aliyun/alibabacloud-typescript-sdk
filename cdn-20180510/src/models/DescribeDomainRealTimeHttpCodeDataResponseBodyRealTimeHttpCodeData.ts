// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData } from "./DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData";


export class DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
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


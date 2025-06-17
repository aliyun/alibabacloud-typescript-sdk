// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData } from "./DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData";


export class DescribeDomainHttpCodeDataResponseBodyHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData },
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


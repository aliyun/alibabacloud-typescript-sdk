// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData } from "./DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData";


export class DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeData extends $dara.Model {
  usageData?: DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainSrcHttpCodeDataResponseBodyHttpCodeDataUsageData },
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


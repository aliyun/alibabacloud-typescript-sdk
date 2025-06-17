// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData } from "./DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData";


export class DescribeDomainPathDataResponseBodyPathDataPerInterval extends $dara.Model {
  usageData?: DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainPathDataResponseBodyPathDataPerIntervalUsageData },
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


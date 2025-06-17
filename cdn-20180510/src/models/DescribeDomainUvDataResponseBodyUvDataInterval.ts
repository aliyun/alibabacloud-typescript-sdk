// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainUvDataResponseBodyUvDataIntervalUsageData } from "./DescribeDomainUvDataResponseBodyUvDataIntervalUsageData";


export class DescribeDomainUvDataResponseBodyUvDataInterval extends $dara.Model {
  usageData?: DescribeDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainUvDataResponseBodyUvDataIntervalUsageData },
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


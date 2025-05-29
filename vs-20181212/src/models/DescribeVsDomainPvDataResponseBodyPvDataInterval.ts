// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData } from "./DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData";


export class DescribeVsDomainPvDataResponseBodyPvDataInterval extends $dara.Model {
  usageData?: DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeVsDomainPvDataResponseBodyPvDataIntervalUsageData },
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


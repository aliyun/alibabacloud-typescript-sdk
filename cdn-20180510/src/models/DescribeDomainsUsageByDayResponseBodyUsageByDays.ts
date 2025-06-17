// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay } from "./DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay";


export class DescribeDomainsUsageByDayResponseBodyUsageByDays extends $dara.Model {
  usageByDay?: DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay[];
  static names(): { [key: string]: string } {
    return {
      usageByDay: 'UsageByDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageByDay: { 'type': 'array', 'itemType': DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
    };
  }

  validate() {
    if(Array.isArray(this.usageByDay)) {
      $dara.Model.validateArray(this.usageByDay);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


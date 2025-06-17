// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsUsageByDayResponseBodyUsageByDays } from "./DescribeDomainsUsageByDayResponseBodyUsageByDays";
import { DescribeDomainsUsageByDayResponseBodyUsageTotal } from "./DescribeDomainsUsageByDayResponseBodyUsageTotal";


export class DescribeDomainsUsageByDayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 86400
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-12-23T09:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C88EF8ED-72F0-45EA-9E86-95114E224FC5
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-22T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The monitoring data collected at each time interval.
   */
  usageByDays?: DescribeDomainsUsageByDayResponseBodyUsageByDays;
  /**
   * @remarks
   * The summarized monitoring data.
   */
  usageTotal?: DescribeDomainsUsageByDayResponseBodyUsageTotal;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      usageByDays: 'UsageByDays',
      usageTotal: 'UsageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
      usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
    };
  }

  validate() {
    if(this.usageByDays && typeof (this.usageByDays as any).validate === 'function') {
      (this.usageByDays as any).validate();
    }
    if(this.usageTotal && typeof (this.usageTotal as any).validate === 'function') {
      (this.usageTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


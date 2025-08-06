// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainReqHitRateDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * *   If you leave this parameter empty, the merged data of all your accelerated domain names is returned.
   * *   You can specify a maximum of 500 accelerated domain names. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2023-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity. Unit: seconds. Valid values: **300**, **3600**, and **86400**. If you leave this parameter empty or specify an invalid value, the default value is used. The supported time granularity varies based on the time range specified by `EndTime` and `StartTime`. The following content describes the supported time granularity.
   * 
   * *   Time range per query < 3 days: **300** (default), **3600**, and **86400**
   * *   3 days ≤ Time range per query < 31 days: **3600** (default) and **86400**
   * *   31 days ≤ Time range per query ≤ 90 days: **86400** (default)
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-12-21T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


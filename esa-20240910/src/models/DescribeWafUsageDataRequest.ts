// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * >The end time must be later than the start time.
   * 
   * @example
   * 2022-08-10T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for the query data, in seconds.
   * 
   * The valid values vary based on the time range specified by **StartTime** and **EndTime**:
   * 
   * - Less than 3 days: Valid values are **300**, **3600**, and **86400**. Default value: **300**.
   * 
   * - 3 to 31 days (exclusive of 31 days): Valid values are **3600** and **86400**. Default value: **3600**.
   * 
   * - 31 days or more: The only valid value is **86400**. Default value: **86400**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The domain record name. You can call the [ListSites](~~ListSites~~) operation to obtain the domain record name.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The grouping key. You can set this parameter to **domain**.
   * 
   * - **domain**: groups the data by domain name.
   * 
   * @example
   * domain
   */
  splitBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2022-08-10T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      recordName: 'RecordName',
      siteId: 'SiteId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      recordName: 'string',
      siteId: 'number',
      splitBy: 'string',
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


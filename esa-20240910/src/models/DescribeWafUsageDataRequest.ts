// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the data to retrieve. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * >The end time must be later than the start time.
   * 
   * @example
   * 2022-08-10T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data. Unit: seconds.
   * 
   * The valid values vary based on the time span between **StartTime** and **EndTime**:
   * 
   * - Less than 3 days: **300**, **3600**, and **86400**. Default value: **300**.
   * 
   * - 3 to 31 days: **3600** and **86400**. Default value: **3600**.
   * 
   * - 31 days or more: **86400**. Default value: **86400**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the domain name record. You can call the [ListSites](~~ListSites~~) operation to obtain the name of the domain name record.
   * 
   * @example
   * test.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The grouping key. You can set this parameter to **domain**.
   * 
   * - **domain**: The data is grouped by domain name.
   * 
   * @example
   * domain
   */
  splitBy?: string;
  /**
   * @remarks
   * The start time of the data to retrieve. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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


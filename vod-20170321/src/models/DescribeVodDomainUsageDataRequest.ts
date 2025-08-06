// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The region in which you want to query data. Valid values:
   * 
   * *   **CN**: Chinese mainland
   * *   **OverSeas**: outside the Chinese mainland
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The accelerated domain name. If you leave this parameter empty, the merged data of all your accelerated domain names is returned. Separate multiple accelerated domain names with commas (,).
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T12:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the data to return. Valid values:
   * 
   * *   **bps**: bandwidth
   * *   **traf**: traffic
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  field?: string;
  /**
   * @remarks
   * The time interval between the data entries to return. Unit: seconds. Valid values: **300** (5 minutes), **3600** (1 hour), and **86400** (1 day).
   * 
   * *   If **Interval** is set to **300**, you can query usage data in the last six months. The maximum time range per query that can be specified is three days.
   * *   If **Interval** is set to **3600** or **86400**, you can query usage data of the previous year.
   * *   If you do not set the **Interval** parameter, the maximum time range that you can query is one month. If you specify a time range of 1 to 3 days, the time interval between the entries that are returned is 1 hour. If you specify a time range of at least 4 days, the time interval between the entries that are returned is 1 day.
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T10:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of content that you want to query. Valid values:
   * 
   * *   **static**: static content
   * *   **dynamic**: dynamic requests
   * *   **all**: all content
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      interval: 'string',
      ownerId: 'number',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


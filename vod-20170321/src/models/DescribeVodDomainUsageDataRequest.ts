// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The region code. Default value: CN (the Chinese mainland). Valid values:
   * - **CN**: the Chinese mainland.
   * - **OverSeas**: outside the Chinese mainland.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The accelerated domain name. If this parameter is left empty, the merged data of all accelerated domain names is returned by default. Batch queries are supported. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T12:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * - **bps**: bandwidth.
   * - **traf**: traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  field?: string;
  /**
   * @remarks
   * Forces the retrieval of data at the specified time granularity, in seconds. Valid values: **300** (5 minutes), **3600** (1 hour), and **86400** (1 day).
   * - **Interval**=**300**: You can query data for up to the last half year. The maximum time span for a single query is 3 days.
   * - **Interval**=**3600** or **86400**: You can query data for up to the last year.
   * - If **Interval** is not specified: The maximum time span for a single query is 1 month. If the query time range is 1 to 3 days, data is returned at hourly granularity. If the query time range is 4 days or more, data is returned at daily granularity.
   * 
   * @example
   * 300
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2015-12-10T10:20:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of usage data to retrieve. Valid values:
   * 
   *  - **static**: static content.
   * - **dynamic**: dynamic content.
   * - **all**: all content.
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


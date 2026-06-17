// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorLogRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the browser.
   * 
   * @example
   * Chrome
   */
  browser?: string;
  /**
   * @remarks
   * This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * 无
   */
  browserInfo?: string;
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 546
   */
  city?: string;
  /**
   * @remarks
   * The type of the device. This parameter specifies the screen size for impersonation.
   * 
   * @example
   * laptop
   */
  device?: string;
  /**
   * @remarks
   * The end of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * 
   * - UTC format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > Use UNIX timestamps to prevent time zone-related issues.
   * 
   * @example
   * 1638422475687
   */
  endTime?: string;
  /**
   * @remarks
   * The filter expression for detection results.
   * 
   * Simple expressions are supported. For example, you can use the `TotalTime>100` expression to query the detection data whose total response time exceeds 100 milliseconds.
   * 
   * @example
   * TotalTime>100
   */
  filter?: string;
  /**
   * @remarks
   * The carrier ID.
   * 
   * @example
   * 465
   */
  isp?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 1440.
   * 
   * @example
   * 1000
   */
  length?: number;
  /**
   * @remarks
   * The metric.
   * 
   * Only the `ProbeLog` metric is supported.
   * 
   * @example
   * ProbeLog
   */
  metricName?: string;
  /**
   * @remarks
   * If the response is truncated, use the `NextToken` parameter to retrieve the next page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * 
   * - UTC format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > * The start time and end time follow the (StartTime, EndTime] pattern. The value of StartTime cannot be the same as or later than the value of EndTime.<br> - Use UNIX timestamps to prevent time zone-related issues.<br>
   * 
   * @example
   * 1638422474389
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the detection task. You can specify multiple task IDs. Separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * afa5c3ce-f944-4363-9edb-ce919a29****
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      browser: 'Browser',
      browserInfo: 'BrowserInfo',
      city: 'City',
      device: 'Device',
      endTime: 'EndTime',
      filter: 'Filter',
      isp: 'Isp',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browser: 'string',
      browserInfo: 'string',
      city: 'string',
      device: 'string',
      endTime: 'string',
      filter: 'string',
      isp: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorLogRequest extends $dara.Model {
  /**
   * @example
   * Chrome
   */
  browser?: string;
  browserInfo?: string;
  /**
   * @remarks
   * The city identification code.
   * 
   * @example
   * 546
   */
  city?: string;
  /**
   * @example
   * laptop
   */
  device?: string;
  /**
   * @remarks
   * The end of the time range to query. Valid values:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format
   * 
   * >  We recommend that you use UNIX timestamps to prevent time zone-related issues.
   * 
   * @example
   * 1638422475687
   */
  endTime?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * You can specify a simple expression, for example, `TotalTime>100`. In this case, the operation returns only the data for instant test tasks whose total response time exceeds 100 milliseconds.
   * 
   * @example
   * TotalTime>100
   */
  filter?: string;
  /**
   * @remarks
   * The carrier identification code.
   * 
   * @example
   * 465
   */
  isp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 1440.
   * 
   * @example
   * 1000
   */
  length?: number;
  /**
   * @remarks
   * The name of the metric.
   * 
   * Only the `ProbeLog` metric is supported.
   * 
   * @example
   * ProbeLog
   */
  metricName?: string;
  /**
   * @remarks
   * The token that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.``
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format
   * 
   * > 
   * 
   * *   The specified time range includes the end time and excludes the start time. The start time must be earlier than the end time.\\
   *     We recommend that you use UNIX timestamps to prevent time zone-related issues.
   * 
   * @example
   * 1638422474389
   */
  startTime?: string;
  /**
   * @remarks
   * The IDs of the instant test tasks. Separate multiple task IDs with commas (,).
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


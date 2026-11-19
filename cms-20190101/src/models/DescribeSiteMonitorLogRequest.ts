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
   * **[Deprecated]** This parameter is deprecated. You can ignore this parameter.
   * 
   * @example
   * None
   */
  browserInfo?: string;
  /**
   * @remarks
   * The identifier of the city.
   * 
   * @example
   * 546
   */
  city?: string;
  /**
   * @remarks
   * The device type, which indicates the simulated screen size type.
   * 
   * @example
   * laptop
   */
  device?: string;
  /**
   * @remarks
   * The end time. Supported formats:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * - UTC format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > Use UNIX timestamps to avoid time zone issues.
   * 
   * @example
   * 1638422475687
   */
  endTime?: string;
  /**
   * @remarks
   * The filter condition for detection values.
   * 
   * Simple expressions are supported. For example, `TotalTime>100` filters the detection data whose total response time exceeds 100 milliseconds.
   * 
   * @example
   * TotalTime>100
   */
  filter?: string;
  /**
   * @remarks
   * The identifier of the carrier.
   * 
   * @example
   * 465
   */
  isp?: string;
  /**
   * @remarks
   * The number of records to return on each page for paging. Valid values: 1 to 1440.
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
   * The pagination token. If the response is truncated, you can use `NextToken` to send another request and retrieve the remaining results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  regionId?: string;
  /**
   * @remarks
   * The start time. Supported formats:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
   * - UTC format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > - The start time and end time follow the left-open and right-closed interval pattern. The value of StartTime cannot be equal to or greater than the value of EndTime.                                                                                                                   
   *     - Use UNIX timestamps to avoid time zone issues.
   * 
   * @example
   * 1638422474389
   */
  startTime?: string;
  /**
   * @remarks
   * The IDs of the detection tasks. Separate multiple IDs with commas (,).
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


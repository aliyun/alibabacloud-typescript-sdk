// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on Thursday, January 1, 1970.
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 1551581437000
   */
  endTime?: string;
  /**
   * @remarks
   * The number of data points to return.
   * 
   * @example
   * 1000
   */
  length?: number;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   Availability
   * *   ResponseTime
   * 
   * This parameter is required.
   * 
   * @example
   * Availability
   */
  metricName?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 49f7b317-7645-4cc9-94fd-ea42e5220930ea42e5220930ea42e522****
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period. The value is an integral multiple of 60. Unit: seconds.
   * 
   * >  The default value equals the minimum interval at which detection requests are sent to the monitored address.
   * 
   * @example
   * 60
   */
  period?: string;
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on Thursday, January 1, 1970.
   * *   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 1551579637000
   */
  startTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 49f7b317-7645-4cc9-94fd-ea42e522****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the monitored object whose monitoring data is to be queried. Valid values:
   * 
   * *   metric
   * *   event
   * 
   * @example
   * metric
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
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


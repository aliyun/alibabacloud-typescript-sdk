// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   Availability
   * *   ErrorRate
   * *   ResponseTime
   * 
   * This parameter is required.
   * 
   * @example
   * Availability
   */
  metricName?: string;
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Unit: milliseconds. The default value is 1 hour ahead of the current time.
   * 
   * @example
   * 1576142850527
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * For more information about how to obtain the ID of a site monitoring task, see [DescribeSiteMonitorList](https://help.aliyun.com/document_detail/115052.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ef4cdc8b-9dc7-43e7-810e-f950e56c****
   */
  taskId?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * Unit: minutes. Default value: 1440 (one day). Maximum value: 43200 (30 days).
   * 
   * @example
   * 1440
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


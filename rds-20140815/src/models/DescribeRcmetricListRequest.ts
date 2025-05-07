// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCMetricListRequest extends $dara.Model {
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Example: `2024-08-06 10:15:00`.
   * 
   * @example
   * 2024-08-06 10:15:00
   */
  endTime?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  express?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 1000.
   * 
   * >  The maximum value of the Length parameter in a request is 1440.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The metric that you want to use. For more information, see [CloudMonitor metrics](https://cms.console.aliyun.com/metric-meta/acs_ecs_dashboard/ecs).
   * 
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 6178f1825f9fb76ce0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * 
   * Set the value to 60 or an integer multiple of 60.
   * 
   * Unit: seconds.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Example: `2024-08-06 10:05:00`.
   * 
   * @example
   * 2024-08-06 10:05:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      instanceId: 'InstanceId',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      instanceId: 'string',
      length: 'string',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
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


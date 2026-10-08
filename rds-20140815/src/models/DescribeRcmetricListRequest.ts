// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * Queries the monitoring data of specified resources in batches for Custom for SQL Server.
   * Format: a collection of `key:value` pairs.
   * 
   * @example
   * [{"instanceId":"rc-l9hv3rv74ql7oa******"},{"instanceId":"rc-b532l1uj8n6sex******"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the `2024-08-06 10:15:00` format. The end time must be later than the start time.
   * 
   * @example
   * 2024-08-06 10:15:00
   */
  endTime?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  express?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of records per page for paging query.
   * 
   * Default value: 1000.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The [monitoring metric](https://cms.console.aliyun.com/metric-meta/acs_ecs_dashboard/ecs).
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
   * 6178f1825f9fb76ce0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Unit: seconds. Valid values:
   * 
   * - 60 (default)
   * - An integer multiple of 60
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
   * The beginning of the time range to query. Specify the time in the `2024-08-06 10:05:00` format.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The method for aggregating data over time. Valid values:
   * 
   * - SUM_OVER_TIME
   * - COUNT_OVER_TIME
   * - AVG_OVER_TIME
   * - MAX_OVER_TIME
   * - MIN_OVER_TIME
   * - SUM_OVER_TIME_LCRO: The sum of values in a left-closed, right-open interval.
   * - AVG_OVER_TIME_LCRO: The average of values in a left-closed, right-open interval.
   * - SUM_OVER_TIME_LORC: The sum of values in a left-open, right-closed interval.
   * - AVG_OVER_TIME_LORC: The average of values in a left-open, right-closed interval.
   * 
   * @example
   * AVG_OVER_TIME
   */
  aggreOps?: string;
  /**
   * @remarks
   * The method for aggregating data across different lines. Valid values:
   * 
   * - NON: No aggregation is performed.
   * - SUM: The sum of values.
   * - AVG: The average of values.
   * - COUNT: The number of values.
   * - MAX: The maximum value.
   * - MIN: The minimum value.
   * 
   * @example
   * NON
   */
  aggreOverLineOps?: string;
  /**
   * @remarks
   * A map of dimensions in the JSON format. The map specifies the dimensions to query. The following keys are supported:
   * 
   * - DiskId: The disk name, such as d-xxx.
   * - DeviceType: The disk category. \\`system\\` indicates a system disk and \\`data\\` indicates a data disk.
   * - DeviceCategory: The disk type, such as cloud_essd.
   * - EcsInstanceId: The name of the ECS instance to which the disk is attached, such as i-xxx.
   * - Azone: The zone, such as cn-hangzhou-a.
   * 
   * The returned results are the intersection of all specified dimension-based filter conditions.
   * 
   * @example
   * {"DiskId":["d-bp14xxxx","d-bp11xxxx"], "DeviceCategory": ["cloud_essd"]}
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query metric data. The time cannot be later than the current time. The time must be in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-11-21T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * A list of fields for grouping and aggregation.
   */
  groupByLabels?: string[];
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * - disk_bps_percent
   * - disk_iops_percent
   * - disk_read_block_size
   * - disk_read_bps
   * - disk_read_iops
   * - disk_write_block_size
   * - disk_write_bps
   * - disk_write_iops
   * 
   * This parameter is required.
   * 
   * @example
   * disk_bps_percent
   */
  metricName?: string;
  /**
   * @remarks
   * The interval at which to query metric data. Unit: seconds. The default value is 5. Valid values:
   * 
   * - 5: 5-second precision. You can query data within a 12-hour time range.
   * - 10: 10-second precision. You can query data within a 24-hour time range.
   * - 60: 60-second precision. You can query data within a 7-day time range.
   * - 300: 300-second precision. You can query data within a 30-day time range.
   * - 600: 600-second precision. You can query data within a 30-day time range.
   * - 3600: 3600-second precision. You can query data within a 30-day time range.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query metric data. The start time can be up to 30 days before the current time. If you leave both the StartTime and EndTime parameters empty, the system queries the metrics for the most recent period. The time must be in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-11-21T01:50:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggreOps: 'AggreOps',
      aggreOverLineOps: 'AggreOverLineOps',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      groupByLabels: 'GroupByLabels',
      metricName: 'MetricName',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggreOps: 'string',
      aggreOverLineOps: 'string',
      dimensions: 'string',
      endTime: 'string',
      groupByLabels: { 'type': 'array', 'itemType': 'string' },
      metricName: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupByLabels)) {
      $dara.Model.validateArray(this.groupByLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


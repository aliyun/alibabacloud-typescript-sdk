// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * Aggregation method over time. Possible values include:
   * 
   * - SUM_OVER_TIME
   * - COUNT_OVER_TIME
   * - AVG_OVER_TIME
   * - MAX_OVER_TIME
   * - MIN_OVER_TIME
   * - SUM_OVER_TIME_LCRO: Sum over a left-closed, right-open interval
   * - AVG_OVER_TIME_LCRO: Average over a left-closed, right-open interval
   * - SUM_OVER_TIME_LORC: Sum over a left-open, right-closed interval
   * - AVG_OVER_TIME_LORC: Average over a left-open, right-closed interval
   * 
   * @example
   * AVG_OVER_TIME
   */
  aggreOps?: string;
  /**
   * @remarks
   * Aggregation method between lines. Possible values include:
   * - NON: No aggregation
   * - SUM: Sum
   * - AVG: Average
   * - COUNT: Count
   * - MAX: Maximum
   * - MIN: Minimum
   * 
   * @example
   * NON
   */
  aggreOverLineOps?: string;
  /**
   * @remarks
   * The dimension map, in the JSON format. Valid values:
   * 
   * *   DiskId: the disk name. Example: d-xxx.
   * *   DeviceType: the disk type. system indicates the system disk, and data indicates the data disk.
   * *   DeviceCategory: the disk category. Example: cloud_essd.
   * *   EcsInstanceId: the ECS instance name. Example: i-xxx.
   * *   Azone: the zone, such as cn-hangzhou-a.
   * 
   * The returned result is the intersection of all dimension filtering conditions.
   * 
   * @example
   * {"DiskId":["d-bp14xxxx","d-bp11xxxx"], "DeviceCategory": ["cloud_essd"]}
   */
  dimensions?: string;
  /**
   * @remarks
   * The end time point for obtaining metric data. It should not be later than the current moment. Represented according to the ISO 8601 standard, using UTC +0 time, in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-11-21T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of fields used for grouping and aggregation.
   */
  groupByLabels?: string[];
  /**
   * @remarks
   * Metric name. Possible values include:
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
   * The granularity at which data is collected for the metric. Unit: seconds. Default value: 5. Valid values:
   * 
   * *   5: 5 seconds. The query time range can be up to 12 hours.
   * *   10: 10 seconds. The query time range can be up to 24 hours.
   * *   60: 60 seconds. The query time range can be up to 7 days.
   * *   300: 300 seconds. The query time range can be up to 30 days.
   * *   600: 600 seconds. The query time range can be up to 30 days.
   * *   3600: 3,600 seconds. The query time range can be up to 30 days.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. You can specify a point in time that is up to 30 days before the current time. If both StartTime and EndTime are left empty, the monitoring metric data of the most recent statistical period is queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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


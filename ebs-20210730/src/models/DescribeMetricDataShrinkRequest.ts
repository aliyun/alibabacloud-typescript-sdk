// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataShrinkRequest extends $dara.Model {
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
   * Dimension map, in JSON format, representing the dimensions being queried. The currently available keys are:
   * - DiskId: Cloud disk name, e.g., d-xxx.
   * - DeviceType: Type of cloud disk, system indicates system disk, data indicates data disk.
   * - DeviceCategory: Category of cloud disk, e.g., cloud_essd.
   * - EcsInstanceId: Name of the ECS instance where the disk is located, e.g., i-xxx.
   * 
   * The returned results are the intersection of all dimension filter conditions.
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
  groupByLabelsShrink?: string;
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
   * The interval for obtaining metric data. Unit: seconds. The default value is 5 seconds. Possible values include:
   * 
   * - 5: 5s precision query, can query up to 12 hours of data
   * - 10: 10s precision query, can query up to 24 hours of data
   * - 60: 60s precision query, can query up to 7 days of data
   * - 3600: 3600s precision query, can query up to 30 days of data
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
   * The start time point for obtaining metric data. The earliest selectable time is one year before the current moment. When both StartTime and EndTime parameters are empty, it defaults to querying the most recent period\\"s monitoring metrics. Represented according to the ISO 8601 standard, using UTC +0 time, in the format yyyy-MM-ddTHH:mm:ssZ.
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
      groupByLabelsShrink: 'GroupByLabels',
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
      groupByLabelsShrink: 'string',
      metricName: 'string',
      period: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * Aggregation method in time dimension. Valid values:
   * 
   * - SUM
   * - COUNT
   * - AVG
   * - MAX
   * - MIN
   * 
   * @example
   * SUM
   */
  aggreOps?: string;
  aggreOverLineOps?: string;
  /**
   * @remarks
   * The dimension map in the JSON format. A dimension is a key-value pair. Valid dimension key: diskId.
   * 
   * @example
   * {"diskId":["d-bp14xxxx","d-bp11xxxx"]}
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The specified time must be later than the current time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-11-21T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   disk_bps_percent
   * *   disk_iops_percent
   * *   disk_read_block_size
   * *   disk_read_bps
   * *   disk_read_iops
   * *   disk_read_latency
   * *   disk_write_block_size
   * *   disk_write_bps
   * *   disk_write_iops
   * *   disk_write_latency
   * 
   * This parameter is required.
   * 
   * @example
   * disk_bps_percent
   */
  metricName?: string;
  /**
   * @remarks
   * The interval at which metric data is collected. Unit: seconds. Default value: 60. Valid values: 60, 300, 600, and 3600, which support queries for time ranges of up to 2 hours, 2 hours, 1 day, and 7 days, respectively. For example, if you set Period to 60, the end time is less than 2 hours from the end time.
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
   * The beginning of the time range to query. You can specify a point in time that is up to one year apart from the current time. If StartTime and EndTime are both unspecified, the monitoring metric data of the last Period value is queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
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


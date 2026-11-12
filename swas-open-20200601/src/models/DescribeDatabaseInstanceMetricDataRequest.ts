// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseInstanceMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lightweight database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * > The time in the console is displayed in UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * - `MySQL_MemCpuUsage`: The CPU utilization and memory usage of the instance, as a percentage of the total resources of the operating system.
   * 
   * - `MySQL_DetailedSpaceUsage`: The total, data, log, temporary, and system disk space usage of the instance.
   * 
   * - `MySQL_Sessions`: The number of active and total connections.
   * 
   * - `MySQL_IOPS`: The IOPS of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID of the lightweight database instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time must be in UTC.
   * 
   * > The time in the console is displayed in UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-06T04:04Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      metricName: 'string',
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


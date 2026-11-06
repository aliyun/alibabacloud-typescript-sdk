// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all Data Warehouse Edition clusters in the specified region.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC. The end time must not be earlier than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-10-07T03:04:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sampling granularity of performance data, in seconds. The value must be a multiple of 60 and greater than 0. Default value: 60.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The monitoring metric group. Valid values: Capacity (capacity), Inode (file nodes), Iops (read and write operations per second), Latency (read and write latency), QpsMeta (metadata operation requests), and Throughput (read and write throughput).
   * 
   * This parameter is required.
   * 
   * @example
   * Capacity
   */
  key?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the YYYY-MM-DDTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-10-07T02:04:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      polarFsInstanceId: 'string',
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


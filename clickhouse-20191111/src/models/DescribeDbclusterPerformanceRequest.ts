// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp125e3uu94wo****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in UTC using the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * > The end time must be later than the start time. The maximum time range cannot exceed 32 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple metric names with a comma (,). You can query up to five performance metrics at a time. The following performance metrics are supported:
   * 
   * > **Key** is required.
   * 
   * - **CPU**:
   * 
   *   - **CPU_USAGE**: The CPU utilization.
   * 
   * - **Memory**:
   * 
   *   - **MEM_USAGE**: The memory utilization.
   * 
   *   - **MEM_USAGE_SIZE**: The memory usage in MB.
   * 
   * - **Disk**:
   * 
   *   - **DISK_USAGE**: The disk utilization.
   * 
   *   - **DISK_USAGE_SIZE**: The disk usage in MB.
   * 
   *   - **IOPS**: The disk input/output operations per second (IOPS).
   * 
   * - **Connection**:
   * 
   *   - **CONN_USAGE**: The database connection utilization.
   * 
   *   - **CONN_USAGE_COUNT**: The number of database connections.
   * 
   * - **Write**:
   * 
   *   - **TPS**: The number of rows written per second (TPS).
   * 
   *   - **INSERT_SIZE**: The write size per second in MB.
   * 
   * - **Query**:
   * 
   *   - **QPS**: The queries per second (QPS).
   * 
   *   - **AVG_SEEK**: The number of random SEEK calls.
   * 
   * - **WAIT**:
   * 
   *   - **ZK_WAIT**: The average wait time of ZooKeeper (ZK) in ms.
   * 
   *   - **IO_WAIT**: The average I/O wait time in ms.
   * 
   *   - **CPU_WAIT**: The average CPU wait time in ms.
   * 
   * @example
   * MEM_USAGE
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in UTC using the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:37Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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


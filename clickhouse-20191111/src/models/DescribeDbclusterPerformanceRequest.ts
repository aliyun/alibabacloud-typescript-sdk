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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The interval cannot be more than 32 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics that you want to query. Separate multiple performance metrics with commas (,). You can query up to five performance metrics at a time. You can query the following performance metrics:
   * 
   * >  The **Key** parameter is required.
   * 
   * *   **CPU**:
   * 
   *     *   **CPU_USAGE**: the CPU utilization
   * 
   * *   **Memory**:
   * 
   *     *   **MEM_USAGE**: the memory usage
   *     *   **MEM_USAGE_SIZE**: the used memory. Unit: MB
   * 
   * *   **Disk**:
   * 
   *     *   **DISK_USAGE**: the disk usage
   *     *   **DISK_USAGE_SIZE**: the size of the used disks. Unit: MB
   *     *   **IOPS**: the disk Input/Output Operations per Second (IOPS)
   * 
   * *   **Connection**:
   * 
   *     *   **CONN_USAGE**: the database connection usage
   *     *   **CONN_USAGE_COUNT**: the number of database connections used
   * 
   * *   **Write**:
   * 
   *     *   **TPS**: the number of rows written per second
   *     *   **INSERT_SIZE**: the amount of data written per second. Unit: MB
   * 
   * *   **Query**:
   * 
   *     *   **QPS**: the queries per second
   *     *   **AVG_SEEK**: the average number of random seek calls
   * 
   * *   **WAIT**:
   * 
   *     *   **ZK_WAIT**: the average ZooKeeper wait time. Unit: ms
   *     *   **IO_WAIT**: the average I/O wait time. Unit: ms
   *     *   **CPU_WAIT**: the average CPU wait time. Unit: ms
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in Coordinated Universal Time (UTC).
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


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
   * The end time of the query. Format: yyyy-MM-ddTHH:mmZ (UTC time).
   * >The end time must be later than the start time, and the time interval between the start time and the end time cannot exceed 32 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The names of the performance metrics to query. Separate multiple values with commas (,). You can query up to 5 performance metrics at a time. The following performance metrics are supported:
   * >**Key** is required.
   * 
   * - **CPU**:
   *     - **CPU_USAGE**: CPU utilization.
   * - **Memory**:
   *     - **MEM_USAGE**: Memory utilization.
   *     - **MEM_USAGE_SIZE**: Memory usage (unit: MB).
   * - **Disk**:
   *     - **DISK_USAGE**: Disk utilization. 
   *     - **DISK_USAGE_SIZE**: Disk usage (unit: MB).
   *     - **IOPS**: Disk IOPS.
   * - **Connections**:
   *     - **CONN_USAGE**: Database connection utilization.
   *     - **CONN_USAGE_COUNT**: Number of database connections in use.
   * - **Writes**: 
   *     - **TPS**: Number of rows written per second.
   *     - **INSERT_SIZE**: Size of data written per second (unit: MB).
   * - **Queries**: 
   *     - **QPS**: Queries per second (QPS).
   *     - **AVG_SEEK**: Number of random SEEK calls.
   * - **WAIT**: 
   *     - **ZK_WAIT**: Average wait time for ZooKeeper (unit: ms).
   *     - **IO_WAIT**: Average wait time for IO_WAIT (unit: ms).
   *     - **CPU_WAIT**: Average wait time for CPU_WAIT (unit: ms).
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
   * The start time of the query. Format: yyyy-MM-ddTHH:mmZ (UTC time).
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


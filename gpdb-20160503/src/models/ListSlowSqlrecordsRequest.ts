// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as *yyyy-MM-dd*T*HH:mm*Z. The time must be in UTC. The end time must be later than the start time.
   * 
   * Defaults to the current time.
   * 
   * @example
   * 2024-12-04T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The longest execution duration. Unit: seconds.
   * 
   * @example
   * 600
   */
  maxDuration?: string;
  /**
   * @remarks
   * The minimum execution duration. Unit: seconds.
   * 
   * @example
   * 10
   */
  minDuration?: string;
  /**
   * @remarks
   * Sort criteria (JSON string). {"Field":"QueryStartTime","Type":"Desc"}
   * 
   * Field: Specifies the field to sort by.
   * 
   * *   QueryID: Query ID.
   * *   UserName: The username.
   * *   DBName: The name of the database.
   * *   QueryStartTime: The start time.
   * *   QueryEndTime: The end time.
   * *   DurationTime: The execution duration of the query.
   * *   Optimizer.
   * *   LockWaitTime: The lock waiting time.
   * *   QueueWaitTime: Time in Queue.
   * *   CpuTimeMs: CPU time.
   * *   MemBytes: The memory usage.
   * *   SpillBytes: Spill File Size.
   * 
   * Type: Sort order.
   * 
   * *   Desc: descending.
   * *   Asc: ascending.
   * 
   * @example
   * {"Field":"QueryStartTime","Type":"Desc"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer in the range [1, 100]. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC and formatted as yyyy-MM-ddTHH:mmZ.
   * 
   * Defaults to the current time minus 5 minutes.
   * 
   * @example
   * 2024-12-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxDuration: 'MaxDuration',
      minDuration: 'MinDuration',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      keyword: 'string',
      maxDuration: 'string',
      minDuration: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


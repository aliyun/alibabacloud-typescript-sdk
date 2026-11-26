// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowSQLRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testdb01
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * Default value: The current time.
   * 
   * @example
   * 2024-12-04T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum execution duration. Unit: seconds.
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
   * The sorting conditions in JSON format. Example: {"Field":"QueryStartTime","Type":"Desc"}.
   * 
   * Field: the field to sort by. Valid values:
   * 
   * - QueryID: the query ID.
   * 
   * - UserName: the username.
   * 
   * - DBName: the database name.
   * 
   * - QueryStartTime: the start time.
   * 
   * - QueryEndTime: the end time.
   * 
   * - DurationTime: the execution duration.
   * 
   * - Optimizer: the optimizer.
   * 
   * - LockWaitTime: the lock wait time.
   * 
   * - QueueWaitTime: the queue wait time.
   * 
   * - CpuTimeMs: the CPU time.
   * 
   * - MemBytes: the memory usage.
   * 
   * - SpillBytes: the size of spilled files.
   * 
   * Type: the sorting order. Valid values:
   * 
   * - Desc: descending order.
   * 
   * - Asc: ascending order.
   * 
   * @example
   * {"Field":"QueryStartTime","Type":"Desc"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and less than or equal to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30**
   * - **50**
   * - **100**
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
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * Default value: 5 minutes before the current time.
   * 
   * @example
   * 2024-12-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The database username.
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


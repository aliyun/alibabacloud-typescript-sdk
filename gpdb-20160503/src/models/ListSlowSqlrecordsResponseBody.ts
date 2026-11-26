// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSlowSQLRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The total CPU time consumed by the query execution. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  cpuTimeMs?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adbpgadmin
   */
  DBName?: string;
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  durationTime?: number;
  /**
   * @remarks
   * The total lock wait time of the query. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  lockWaitTime?: number;
  /**
   * @remarks
   * The total memory occupied by the query execution. Unit: bytes.
   * 
   * @example
   * 1000
   */
  memBytes?: number;
  /**
   * @remarks
   * The execution optimizer.
   * 
   * @example
   * planner
   */
  optimizer?: string;
  /**
   * @remarks
   * The end time of the execution.
   * 
   * @example
   * 2024-12-04T18:00:00Z
   */
  queryEndTime?: string;
  /**
   * @remarks
   * The query ID, which is the unique identifier of the query.
   * 
   * @example
   * 7775338456746339025
   */
  queryID?: string;
  /**
   * @remarks
   * The start time of the execution.
   * 
   * @example
   * 2024-12-04T17:00:00Z
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The time the query spent waiting in resource queues and resource groups. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  queueWaitTime?: number;
  /**
   * @remarks
   * The total size of files spilled to disk during the query. Unit: bytes.
   * 
   * @example
   * 1000
   */
  spillBytes?: number;
  /**
   * @remarks
   * The SQL statement in the audit log.
   * 
   * @example
   * SHOW COLUMNS FROM `t_project`
   */
  sqlText?: string;
  /**
   * @remarks
   * Specifies whether the SQL statement is truncated. Valid values:
   * - true: The SQL statement is truncated.
   * - false: The SQL statement is not truncated.
   * 
   * @example
   * false
   */
  sqlTruncated?: string;
  /**
   * @remarks
   * The truncation threshold for SQL statements.
   * 
   * @example
   * 100
   */
  sqlTruncatedThreshold?: number;
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
      cpuTimeMs: 'CpuTimeMs',
      DBName: 'DBName',
      durationTime: 'DurationTime',
      lockWaitTime: 'LockWaitTime',
      memBytes: 'MemBytes',
      optimizer: 'Optimizer',
      queryEndTime: 'QueryEndTime',
      queryID: 'QueryID',
      queryStartTime: 'QueryStartTime',
      queueWaitTime: 'QueueWaitTime',
      spillBytes: 'SpillBytes',
      sqlText: 'SqlText',
      sqlTruncated: 'SqlTruncated',
      sqlTruncatedThreshold: 'SqlTruncatedThreshold',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuTimeMs: 'number',
      DBName: 'string',
      durationTime: 'number',
      lockWaitTime: 'number',
      memBytes: 'number',
      optimizer: 'string',
      queryEndTime: 'string',
      queryID: 'string',
      queryStartTime: 'string',
      queueWaitTime: 'number',
      spillBytes: 'number',
      sqlText: 'string',
      sqlTruncated: 'string',
      sqlTruncatedThreshold: 'number',
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

export class ListSlowSQLRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of slow query records.
   */
  items?: ListSlowSQLRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListSlowSQLRecordsResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


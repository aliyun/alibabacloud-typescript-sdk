// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList extends $dara.Model {
  /**
   * @remarks
   * The number of rows affected by the SQL task.
   * 
   * @example
   * 0
   */
  affectRows?: number;
  /**
   * @remarks
   * The SQL statement that was executed in the SQL task.
   * 
   * @example
   * update a set id = 1 where id  = 1;
   */
  currentSql?: string;
  /**
   * @remarks
   * The ID of the physical database.
   * 
   * @example
   * 1988****
   */
  dbId?: number;
  /**
   * @remarks
   * The point in time when the SQL task ended.
   * 
   * @example
   * 2021-12-16 00:00:01
   */
  endTime?: string;
  /**
   * @remarks
   * The number of times that the SQL statement was executed.
   * 
   * @example
   * 1
   */
  executeCount?: number;
  /**
   * @remarks
   * The ID of the details of the SQL task.
   * 
   * @example
   * 24723****
   */
  jobDetailId?: number;
  /**
   * @remarks
   * The ID of the SQL task.
   * 
   * @example
   * 1276****
   */
  jobId?: number;
  /**
   * @remarks
   * The details of the operational log.
   * 
   * @example
   * log_info
   */
  log?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * Indicates whether the SQL statement was skipped. Valid values:
   * 
   * *   **true**: The SQL statement was skipped.
   * *   **false**: The SQL statement was not skipped.
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The type of the SQL statement, such as DELETE, UPDATE, or ALTER_TABLE.
   * 
   * @example
   * CREATE_TABLE
   */
  sqlType?: string;
  /**
   * @remarks
   * The point in time when the SQL task started.
   * 
   * @example
   * 2021-12-16 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the SQL task. Valid values:
   * 
   * *   **INIT**: The SQL task was initialized.
   * *   **PENDING**: The SQL task waited to be run.
   * *   **BE_SCHEDULED**: The SQL task waited to be scheduled.
   * *   **FAIL**: The SQL task failed.
   * *   **SUCCESS**: The SQL task was successful.
   * *   **PAUSE**: The SQL task was paused.
   * *   **DELETE**: The SQL task was deleted.
   * *   **RUNNING**: The SQL task was being run.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The duration of the SQL task. Unit: milliseconds.
   * 
   * @example
   * 38
   */
  timeDelay?: number;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      currentSql: 'CurrentSql',
      dbId: 'DbId',
      endTime: 'EndTime',
      executeCount: 'ExecuteCount',
      jobDetailId: 'JobDetailId',
      jobId: 'JobId',
      log: 'Log',
      logic: 'Logic',
      skip: 'Skip',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      status: 'Status',
      timeDelay: 'TimeDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      currentSql: 'string',
      dbId: 'number',
      endTime: 'string',
      executeCount: 'number',
      jobDetailId: 'number',
      jobId: 'number',
      log: 'string',
      logic: 'boolean',
      skip: 'boolean',
      sqlType: 'string',
      startTime: 'string',
      status: 'string',
      timeDelay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of SQL tasks.
   */
  DBTaskSQLJobDetailList?: ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList[];
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * MissingJobId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * JobId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F044E33-FE09-58F1-8C61-A0F612EC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobDetailList: 'DBTaskSQLJobDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobDetailList: { 'type': 'array', 'itemType': ListDBTaskSQLJobDetailResponseBodyDBTaskSQLJobDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBTaskSQLJobDetailList)) {
      $dara.Model.validateArray(this.DBTaskSQLJobDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


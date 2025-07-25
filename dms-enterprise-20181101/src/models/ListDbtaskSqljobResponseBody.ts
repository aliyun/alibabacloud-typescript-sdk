// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDBTaskSQLJobResponseBodyDBTaskSQLJobList extends $dara.Model {
  /**
   * @remarks
   * The description of the SQL task.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The time when the SQL task was created.
   * 
   * @example
   * 2021-02-18 17:49:20
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 43214523
   */
  dbId?: number;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxx:3306【test】
   */
  dbSearchName?: string;
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 4324132
   */
  dbTaskGroupId?: number;
  /**
   * @remarks
   * The ID of the SQL task.
   * 
   * @example
   * 123435
   */
  jobId?: number;
  /**
   * @remarks
   * The type of the SQL task.
   * 
   * @example
   * STRUCT_SYNC
   */
  jobType?: string;
  /**
   * @remarks
   * The time when the SQL task was last executed.
   * 
   * @example
   * 2021-02-18 17:49:31
   */
  lastExecTime?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The state of the SQL task. Valid values:
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
   * Indicates whether the SQL task is executed as a transaction. Valid values:
   * 
   * *   **true**: The SQL task is executed as a transaction.
   * *   **false**: The SQL task is not executed as a transaction.
   * 
   * @example
   * false
   */
  transactional?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      dbTaskGroupId: 'DbTaskGroupId',
      jobId: 'JobId',
      jobType: 'JobType',
      lastExecTime: 'LastExecTime',
      logic: 'Logic',
      status: 'Status',
      transactional: 'Transactional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      dbId: 'number',
      dbSearchName: 'string',
      dbTaskGroupId: 'number',
      jobId: 'number',
      jobType: 'string',
      lastExecTime: 'string',
      logic: 'boolean',
      status: 'string',
      transactional: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDBTaskSQLJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the SQL tasks.
   */
  DBTaskSQLJobList?: ListDBTaskSQLJobResponseBodyDBTaskSQLJobList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6C47680-8D2D-43A4-8902-F2740D71A398
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of the SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBTaskSQLJobList: 'DBTaskSQLJobList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskSQLJobList: { 'type': 'array', 'itemType': ListDBTaskSQLJobResponseBodyDBTaskSQLJobList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBTaskSQLJobList)) {
      $dara.Model.validateArray(this.DBTaskSQLJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


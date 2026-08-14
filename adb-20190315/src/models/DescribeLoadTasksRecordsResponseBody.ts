// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadTasksRecordsResponseBodyLoadTasksRecords extends $dara.Model {
  /**
   * @remarks
   * The start time of the task, accurate to milliseconds. The time is in the <i>yyyy-MM-ddTHH:mm:ss.SSSZ</i> format.
   * 
   * @example
   * 2021-05-18 18:47:27.0
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the database involved in the import or export task.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2021051818472717201616624903453******
   */
  jobName?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 2021051818472717201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The number of data rows processed by the asynchronous import or export task.
   * 
   * @example
   * 6
   */
  processRows?: number;
  /**
   * @remarks
   * The SQL statement used in the asynchronous import or export task.
   * 
   * @example
   * insert overwrite into courses_external_table\\nselect * from courses
   */
  sql?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * FINISH
   */
  state?: string;
  /**
   * @remarks
   * The time when the task status was updated, accurate to milliseconds. The time is in the <i>yyyy-MM-ddTHH:mm:ss.SSSZ</i> format.
   * 
   * @example
   * 2021-05-18 18:47:31.0
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBName: 'DBName',
      jobName: 'JobName',
      processID: 'ProcessID',
      processRows: 'ProcessRows',
      sql: 'Sql',
      state: 'State',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBName: 'string',
      jobName: 'string',
      processID: 'string',
      processRows: 'number',
      sql: 'string',
      state: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadTasksRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of task information.
   */
  loadTasksRecords?: DescribeLoadTasksRecordsResponseBodyLoadTasksRecords[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C60B05DB-2B77-421A-98E9-92C20E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      loadTasksRecords: 'LoadTasksRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      loadTasksRecords: { 'type': 'array', 'itemType': DescribeLoadTasksRecordsResponseBodyLoadTasksRecords },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadTasksRecords)) {
      $dara.Model.validateArray(this.loadTasksRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


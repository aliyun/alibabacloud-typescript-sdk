// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTaskResponseBodyDataFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * 
   * >  For more information about the filter parameters, see the **Valid values of Key** section of this topic.
   * 
   * @example
   * keyWords
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * select
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogTaskResponseBodyDataQueries extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * testname
   */
  accountName?: string;
  collection?: string;
  /**
   * @remarks
   * The execution duration. Unit: millisecond.
   * 
   * @example
   * 58
   */
  consume?: number;
  /**
   * @remarks
   * The CPU execution time. Unit: microsecond.
   * 
   * @example
   * 100
   */
  cpuTime?: number;
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
   * The execution time. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-07T02:15:32Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The extended information. This parameter is a reserved parameter.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The number of rows pulled by the CNs of the PolarDB-X 2.0 instance.
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 11.197.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The lock wait time. Unit: millisecond.
   * 
   * @example
   * 0
   */
  lockTime?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 0
   */
  logicRead?: number;
  /**
   * @remarks
   * The ID of the child node.
   * 
   * @example
   * pi-bp1o58x3ib7e6****
   */
  nodeId?: string;
  /**
   * @remarks
   * The execution timestamp. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1701886532000
   */
  originTime?: number;
  /**
   * @remarks
   * The wait time of parallel queries in the queue in the PolarDB for MySQL instance. Unit: millisecond.
   * 
   * @example
   * 10
   */
  parallelDegree?: string;
  /**
   * @remarks
   * The degree of parallelism (DOP) value of the PolarDB for MySQL instance.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
   * @remarks
   * The number of physical asynchronous reads.
   * 
   * @example
   * 0
   */
  physicAsyncRead?: number;
  /**
   * @remarks
   * The total number of physical reads.
   * 
   * @example
   * 0
   */
  physicRead?: number;
  /**
   * @remarks
   * The number of physical synchronous reads.
   * 
   * @example
   * 0
   */
  physicSyncRead?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 0
   */
  returnRows?: number;
  /**
   * @remarks
   * The total number of rows updated or returned by the CNs of the PolarDB-X 2.0 instance.
   * 
   * @example
   * 10
   */
  rows?: number;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The number of requests from the compute nodes (CNs) to the data nodes (DNs) in the PolarDB-X 2.0 instance.
   * 
   * @example
   * 10
   */
  scnt?: number;
  sqlCommand?: number;
  /**
   * @remarks
   * The ID of the SQL statement.
   * 
   * @example
   * a4111670e80596c5bf42cf5154438a91
   */
  sqlId?: string;
  /**
   * @remarks
   * The queried SQL statement.
   * 
   * @example
   * SELECT @@session.transaction_read_only
   */
  sqlText?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **SELECT**
   * *   **UPDATE**
   * *   **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution result of the SQL statement. Valid values:
   * 
   * *   **0**: The execution was successful.
   * *   **1**: The execution failed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * None
   */
  threadId?: number;
  /**
   * @remarks
   * The trace ID of the PolarDB-X 2.0 instance, which is the execution ID of the SQL statement on the DN.
   * 
   * @example
   * 14c93b7c7bf00000
   */
  traceId?: string;
  /**
   * @remarks
   * The transaction ID.
   * 
   * @example
   * 200000
   */
  trxId?: string;
  /**
   * @remarks
   * The number of rows updated.
   * 
   * @example
   * 0
   */
  updateRows?: number;
  /**
   * @remarks
   * Indicates whether the PolarDB for MySQL instance uses In-Memory Column Indexes (IMCIs). Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  useImciEngine?: string;
  /**
   * @remarks
   * The IP address to which the endpoint used for query is resolved.
   * 
   * @example
   * 10.146.XX.XX
   */
  vip?: string;
  /**
   * @remarks
   * The number of writes to the ApsaraDB RDS for SQL Server instance.
   * 
   * @example
   * 10
   */
  writes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      collection: 'Collection',
      consume: 'Consume',
      cpuTime: 'CpuTime',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      ext: 'Ext',
      frows: 'Frows',
      hostAddress: 'HostAddress',
      lockTime: 'LockTime',
      logicRead: 'LogicRead',
      nodeId: 'NodeId',
      originTime: 'OriginTime',
      parallelDegree: 'ParallelDegree',
      parallelQueueTime: 'ParallelQueueTime',
      physicAsyncRead: 'PhysicAsyncRead',
      physicRead: 'PhysicRead',
      physicSyncRead: 'PhysicSyncRead',
      returnRows: 'ReturnRows',
      rows: 'Rows',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
      sqlCommand: 'SqlCommand',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      sqlType: 'SqlType',
      state: 'State',
      threadId: 'ThreadId',
      traceId: 'TraceId',
      trxId: 'TrxId',
      updateRows: 'UpdateRows',
      useImciEngine: 'UseImciEngine',
      vip: 'Vip',
      writes: 'Writes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      collection: 'string',
      consume: 'number',
      cpuTime: 'number',
      DBName: 'string',
      executeTime: 'string',
      ext: 'string',
      frows: 'number',
      hostAddress: 'string',
      lockTime: 'number',
      logicRead: 'number',
      nodeId: 'string',
      originTime: 'number',
      parallelDegree: 'string',
      parallelQueueTime: 'string',
      physicAsyncRead: 'number',
      physicRead: 'number',
      physicSyncRead: 'number',
      returnRows: 'number',
      rows: 'number',
      scanRows: 'number',
      scnt: 'number',
      sqlCommand: 'number',
      sqlId: 'string',
      sqlText: 'string',
      sqlType: 'string',
      state: 'string',
      threadId: 'number',
      traceId: 'string',
      trxId: 'string',
      updateRows: 'number',
      useImciEngine: 'string',
      vip: 'string',
      writes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * The download URL of the export task.
   * 
   * @example
   * "https://das-sqllog-download-cn-hongkong.oss-cn-hongkong.aliyuncs.com/****"
   */
  export?: string;
  /**
   * @remarks
   * The filter parameters.
   */
  filters?: DescribeSqlLogTaskResponseBodyDataFilters[];
  /**
   * @remarks
   * The task name.
   */
  name?: string;
  /**
   * @remarks
   * The results of the offline querying task.
   */
  queries?: DescribeSqlLogTaskResponseBodyDataQueries[];
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1596177993000
   */
  start?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is to be scheduled.
   * *   **RUNNING**: The task is running.
   * *   **FAILED**: The task failed.
   * *   **CANCELED**: The task is canceled.
   * *   **COMPLETED**: The task is complete.
   * 
   * >  If a task is in the **COMPLETED** state, you can view the results of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9a4f5c4494dbd6713185d87a97aa53e8
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **Export**
   * *   **Query**
   * 
   * @example
   * Query
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      end: 'End',
      expire: 'Expire',
      export: 'Export',
      filters: 'Filters',
      name: 'Name',
      queries: 'Queries',
      start: 'Start',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      end: 'number',
      expire: 'boolean',
      export: 'string',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogTaskResponseBodyDataFilters },
      name: 'string',
      queries: { 'type': 'array', 'itemType': DescribeSqlLogTaskResponseBodyDataQueries },
      start: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSqlLogTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSqlLogTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


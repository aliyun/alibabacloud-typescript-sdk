// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTaskResponseBodyDataFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * >For supported filter parameters and their values, refer to **Supplementary description of response parameters**.
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
  /**
   * @remarks
   * The affected columns.
   * 
   * @example
   * ["col1"]
   */
  affectColumns?: string;
  /**
   * @remarks
   * The client IP address in the query.
   * 
   * @example
   * 10.0.0.1xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The client port number in the query.
   * 
   * @example
   * 3306
   */
  clientPort?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  collection?: string;
  /**
   * @remarks
   * The connection ID used in the query.
   * 
   * @example
   * ld-******
   */
  connectionId?: string;
  /**
   * @remarks
   * The execution duration in milliseconds.
   * 
   * @example
   * 58
   */
  consume?: number;
  /**
   * @remarks
   * The CPU execution time in microseconds.
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
   * The execution time in UTC format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-12-07T02:15:32Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The extended information field. This is a reserved parameter.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The number of rows fetched by the PolarDB-X 2.0 compute node (CN).
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 11.197.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The lock wait time in milliseconds.
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
   * The child node ID.
   * 
   * @example
   * pi-bp1o58x3ib7e6****
   */
  nodeId?: string;
  /**
   * @remarks
   * The execution timestamp. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1701886532000
   */
  originTime?: number;
  /**
   * @remarks
   * The parallel queue time of the PolarDB for MySQL instance in milliseconds.
   * 
   * @example
   * 10
   */
  parallelDegree?: string;
  /**
   * @remarks
   * The parallel degree of the PolarDB for MySQL instance.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
   * @remarks
   * The list of query parameters.
   * 
   * @example
   * [1, "das"]
   */
  params?: string;
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
   * The number of physical reads.
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
   * Indicates whether the query item is protected.
   * 
   * @example
   * MySQL
   */
  protected?: string;
  /**
   * @remarks
   * The number of returned rows.
   * 
   * @example
   * 0
   */
  returnRows?: number;
  /**
   * @remarks
   * The row key in the query.
   * 
   * @example
   * 23
   */
  rowKey?: string;
  /**
   * @remarks
   * The total number of rows updated or returned by the PolarDB-X 2.0 compute node.
   * 
   * @example
   * 10
   */
  rows?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 0
   */
  scanRows?: number;
  /**
   * @remarks
   * The number of DN requests from the PolarDB-X 2.0 compute node (CN).
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL command in the query.
   * 
   * @example
   * sql
   */
  sqlCommand?: number;
  /**
   * @remarks
   * SQL ID。
   * 
   * @example
   * a4111670e80596c5bf42cf5154438a91
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL statement details.
   * 
   * @example
   * SELECT @@session.transaction_read_only
   */
  sqlText?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * - **SELECT**
   * - **UPDATE**
   * - **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution result.
   * 
   * - **0**: Execution succeeded.
   * - **1**: Execution failed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The table name used in the query.
   * 
   * @example
   * das
   */
  tableName?: string;
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
   * The trace ID of PolarDB-X 2.0, which is the execution ID of the SQL statement on the data node.
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
   * The number of updated rows.
   * 
   * @example
   * 0
   */
  updateRows?: number;
  /**
   * @remarks
   * Indicates whether the PolarDB for MySQL instance uses the In-Memory Column Index.
   * 
   * - **true**: The IMCI is used.
   * - **false**: The IMCI is not used.
   * 
   * @example
   * true
   */
  useImciEngine?: string;
  /**
   * @remarks
   * The endpoint resolution address of the query link.
   * 
   * @example
   * 10.146.XX.XX
   */
  vip?: string;
  /**
   * @remarks
   * The number of writes for the RDS SQL Server engine.
   * 
   * @example
   * 10
   */
  writes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      affectColumns: 'AffectColumns',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      collection: 'Collection',
      connectionId: 'ConnectionId',
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
      params: 'Params',
      physicAsyncRead: 'PhysicAsyncRead',
      physicRead: 'PhysicRead',
      physicSyncRead: 'PhysicSyncRead',
      protected: 'Protected',
      returnRows: 'ReturnRows',
      rowKey: 'RowKey',
      rows: 'Rows',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
      sqlCommand: 'SqlCommand',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      sqlType: 'SqlType',
      state: 'State',
      tableName: 'TableName',
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
      affectColumns: 'string',
      clientIp: 'string',
      clientPort: 'number',
      collection: 'string',
      connectionId: 'string',
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
      params: 'string',
      physicAsyncRead: 'number',
      physicRead: 'number',
      physicSyncRead: 'number',
      protected: 'string',
      returnRows: 'number',
      rowKey: 'string',
      rows: 'number',
      scanRows: 'number',
      scnt: 'number',
      sqlCommand: 'number',
      sqlId: 'string',
      sqlText: 'string',
      sqlType: 'string',
      state: 'string',
      tableName: 'string',
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
   * The task creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The query end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1608888296000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task has expired.
   * 
   * - **true**: The task has expired.
   * - **false**: The task has not expired.
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * The download URL of the export task. This value is returned only when TaskType is set to Export.
   * 
   * @example
   * "https://das-sqllog-download-cn-hongkong.oss-cn-hongkong.aliyuncs.com/****"
   */
  export?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: DescribeSqlLogTaskResponseBodyDataFilters[];
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * SQL audit export 1
   */
  name?: string;
  /**
   * @remarks
   * The task result of the offline query node. This value is returned only when TaskType is set to Query.
   */
  queries?: DescribeSqlLogTaskResponseBodyDataQueries[];
  /**
   * @remarks
   * The query start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1596177993000
   */
  start?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **INIT**: Pending scheduling.
   * - **RUNNING**: Running.
   * - **FAILED**: Failed.
   * - **CANCELED**: Canceled.
   * - **COMPLETED**: Completed.
   * > When the task is in the **COMPLETED** state, you can view the results of the offline task.
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
   * - **Export**: export task.
   * - **Query**: custom query task.
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
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSqlLogTaskResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, exception information such as an error code is returned.
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
   * Indicates whether the request is successful.
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
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


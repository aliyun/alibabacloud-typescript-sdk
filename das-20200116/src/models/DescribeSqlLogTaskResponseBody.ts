// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogTaskResponseBodyDataFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * 
   * > For more information about the supported filter parameters and their valid values, see the "Additional information about response parameters" section.
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
   * The client IP address.
   * 
   * @example
   * 10.0.0.1xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The client port.
   * 
   * @example
   * 3306
   */
  clientPort?: number;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * None
   */
  collection?: string;
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * ld-******
   */
  connectionId?: string;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 58
   */
  consume?: number;
  /**
   * @remarks
   * The CPU execution time. Unit: microseconds.
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
   * The time when the SQL statement was executed. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-07T02:15:32Z
   */
  executeTime?: string;
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The number of rows that are fetched by the compute nodes of a PolarDB-X 2.0 instance.
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
   * The lock wait time. Unit: milliseconds.
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
   * The node ID.
   * 
   * @example
   * pi-bp1o58x3ib7e6****
   */
  nodeId?: string;
  /**
   * @remarks
   * The time when the SQL statement was executed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1701886532000
   */
  originTime?: number;
  /**
   * @remarks
   * The degree of parallelism (DOP) for the PolarDB for MySQL instance.
   * 
   * @example
   * 10
   */
  parallelDegree?: string;
  /**
   * @remarks
   * The parallel queuing time for the PolarDB for MySQL instance. Unit: milliseconds.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
   * @remarks
   * The query parameters.
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
   * Indicates whether the query is protected.
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
   * The row key.
   * 
   * @example
   * 23
   */
  rowKey?: string;
  /**
   * @remarks
   * The total number of rows that are updated or returned by the compute nodes of a PolarDB-X 2.0 instance.
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
   * The number of requests that are sent from compute nodes (CNs) to data nodes (DNs) for a PolarDB-X 2.0 instance.
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
   * The SQL ID.
   * 
   * @example
   * a4111670e80596c5bf42cf5154438a91
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT @@session.transaction_read_only
   */
  sqlText?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * - **SELECT**
   * 
   * - **UPDATE**
   * 
   * - **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution state. Valid values:
   * 
   * - **0**: The execution was successful.
   * 
   * - **1**: The execution failed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The table name.
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
   * The trace ID of a PolarDB-X 2.0 instance. The trace ID is the execution ID of the SQL statement on data nodes.
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
   * Indicates whether an In-Memory Column Index (IMCI) is used for the PolarDB for MySQL instance. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  useImciEngine?: string;
  /**
   * @remarks
   * The IP address that the query endpoint resolves to.
   * 
   * @example
   * 10.146.XX.XX
   */
  vip?: string;
  /**
   * @remarks
   * The number of writes for the ApsaraDB RDS for SQL Server instance.
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
   * The time when the task was created, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1681363254423
   */
  createTime?: number;
  /**
   * @remarks
   * The end of the query time range, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1608888296000
   */
  end?: number;
  /**
   * @remarks
   * Indicates whether the task has expired. Valid values:
   * 
   * - **true**: The task has expired.
   * 
   * - **false**: The task has not expired.
   * 
   * @example
   * false
   */
  expire?: boolean;
  /**
   * @remarks
   * The download URL of the exported file. This parameter is returned only if the value of `TaskType` is `Export`.
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
   * The results of the offline query task. This parameter is returned only if the value of `TaskType` is `Query`.
   */
  queries?: DescribeSqlLogTaskResponseBodyDataQueries[];
  /**
   * @remarks
   * The beginning of the query time range, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1596177993000
   */
  start?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **INIT**: The task is pending.
   * 
   * - **RUNNING**: The task is running.
   * 
   * - **FAILED**: The task failed.
   * 
   * - **CANCELED**: The task was canceled.
   * 
   * - **COMPLETED**: The task is complete.
   * 
   * > The results of an offline task are available only when the status is **COMPLETED**.
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
   * - **Export**: an export task.
   * 
   * - **Query**: a query task.
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
   * The returned HTTP status code.
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
   * The response message.
   * 
   * > If the request is successful, **Successful** is returned. Otherwise, an error message is returned.
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
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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


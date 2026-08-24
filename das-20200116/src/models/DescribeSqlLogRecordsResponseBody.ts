// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord extends $dara.Model {
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
   * The execution duration. Unit: microseconds (μs).
   * 
   * @example
   * 58
   */
  consume?: number;
  /**
   * @remarks
   * The CPU execution time. Unit: microseconds (μs).
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
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The execution time. The time is in UTC. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-12-07T02:15:32Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The extended information. This parameter is reserved.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The number of rows fetched by the compute node (CN) in a PolarDB-X 2.0 instance.
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
   * pi-uf6k5f6g3912i****
   */
  nodeId?: string;
  /**
   * @remarks
   * The execution time. This value is a UNIX timestamp. Unit: milliseconds.
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
   * The parallel queue time for the PolarDB for MySQL instance. Unit: milliseconds.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
   * @remarks
   * The SQL parameters.
   * 
   * @example
   * [1, "das"]
   */
  params?: string;
  /**
   * @remarks
   * The number of asynchronous physical reads.
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
   * The number of synchronous physical reads.
   * 
   * @example
   * 0
   */
  physicSyncRead?: number;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * MySQL
   */
  protocol?: string;
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
   * The row key of the SQL log record.
   * 
   * @example
   * 23
   */
  rowKey?: string;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute node (CN) of a PolarDB-X 2.0 instance.
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
   * The number of requests sent from a compute node (CN) to data nodes (DNs) in a PolarDB-X 2.0 instance.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * c67649d4a7fb62c4f8c7a447c52b5b17
   */
  sqlId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select resource_id as cluster_id, tpl_name \\n\\tfrom dbfree_alert_resource_tpl_ref\\n\\twhere user_id=? and type=\\"cluster\\" group by resource_id, tpl_name
   */
  sqlText?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution status. Valid values:
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
   * The name of the table that the SQL statement references.
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
   * The trace ID for a PolarDB-X 2.0 instance. This is the ID of the SQL statement that was executed on a data node (DN).
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
   * Indicates whether an In-Memory Column Index (IMCI) is used for the PolarDB for MySQL instance.
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
   * The endpoint that is resolved from the query connection string.
   * 
   * @example
   * 100.115.XX.XX
   */
  vip?: string;
  /**
   * @remarks
   * The number of write operations on an ApsaraDB RDS for SQL Server instance.
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
      protocol: 'Protocol',
      returnRows: 'ReturnRows',
      rowKey: 'RowKey',
      rows: 'Rows',
      scanRows: 'ScanRows',
      scnt: 'Scnt',
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
      protocol: 'string',
      returnRows: 'number',
      rowKey: 'string',
      rows: 'number',
      scanRows: 'number',
      scnt: 'number',
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

export class DescribeSqlLogRecordsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The SQL log data.
   */
  SQLLogRecord?: DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLLogRecord: 'SQLLogRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLLogRecord: { 'type': 'array', 'itemType': DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord },
    };
  }

  validate() {
    if(Array.isArray(this.SQLLogRecord)) {
      $dara.Model.validateArray(this.SQLLogRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * - **0**: The task is in progress.
   * 
   * - **1**: The task is complete.
   * 
   * > If this parameter is **0** and the **JobId** parameter is returned, the current request is an asynchronous request and you cannot obtain the returned results. You must use the value of **JobId** to initiate another request. Set the **Filters** parameter to the value of **JobId**. Example: `Filters=[{"Key": "JobId", "Value": "******"}]`.
   * 
   * @example
   * 1
   */
  finish?: string;
  /**
   * @remarks
   * The details of the SQL logs.
   */
  items?: DescribeSqlLogRecordsResponseBodyDataItems;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * MzI4NTZfUUlOR0RBT19DTTlfTlUyMF9NWVNRTF9PREJTX0xWU18zMjg1Nl9teXNxbF9XZWQgTWFyIDA2IDE0OjUwOjQ3IENTVCAyMDI0XzBfMzBfRXhlY3V0ZVRpbWVfREVTQ19XZWQgTWFyIDA2IDE0OjM1OjQ3IENTVCAyMDI0Xw==_1709708406465
   */
  jobId?: string;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      finish: 'Finish',
      items: 'Items',
      jobId: 'JobId',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      finish: 'string',
      items: DescribeSqlLogRecordsResponseBodyDataItems,
      jobId: 'string',
      startTime: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSqlLogRecordsResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * F43E7FB3-CE67-5FFD-A59C-EFD278BCD7BE
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
      data: DescribeSqlLogRecordsResponseBodyData,
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


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
   * The client IP address in the SQL log record.
   * The IP address of the client in the SQL log record.
   * 
   * @example
   * 10.0.0.1xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The port number of the client.
   * 
   * @example
   * 3306
   */
  clientPort?: number;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  collection?: string;
  /**
   * @remarks
   * The connection ID of the SQL log record.
   * 
   * @example
   * ld-******
   */
  connectionId?: string;
  /**
   * @remarks
   * The execution duration in microseconds.
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
   * The name of the database.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The execution time in the UTC format: `yyyy-MM-ddTHH:mm:ssZ`.
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
   * The number of rows pulled by the compute node (CN) in PolarDB-X 2.0.
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
   * The node ID.
   * 
   * @example
   * pi-uf6k5f6g3912i****
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
   * The degree of parallelism of the PolarDB for MySQL instance.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
   * @remarks
   * The parameters of the SQL log record.
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
   * The protocol type of the SQL log record.
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
   * The total number of rows updated or returned by the compute node of the PolarDB-X 2.0 instance.
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
   * The number of requests from the compute node (CN) to the data node (DN) in PolarDB-X 2.0.
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
   * - **1**: The execution failed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The table name in the SQL log record.
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
   * The trace ID in PolarDB-X 2.0, which is the execution ID of the SQL statement on the data node.
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
   * Indicates whether the PolarDB for MySQL instance uses IMCI. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  useImciEngine?: string;
  /**
   * @remarks
   * The resolved endpoint address of the query connection.
   * 
   * @example
   * 100.115.XX.XX
   */
  vip?: string;
  /**
   * @remarks
   * The number of writes for the ApsaraDB RDS for SQL Server engine.
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
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task is completed. Valid values:
   * 
   * - **0**: Not completed.
   * - **1**: Completed.
   * 
   * > If **Finish** is 0 and the **JobId** field is included, the current request is an asynchronous request and the result cannot be directly obtained. You must query the result based on **JobId**. When you query the result, use **JobId** as the input value for **Filters**. Example: `Filters=[{"Key": "JobId", "Value": "******"}]`.
   * 
   * @example
   * 1
   */
  finish?: string;
  /**
   * @remarks
   * The list data.
   */
  items?: DescribeSqlLogRecordsResponseBodyDataItems;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * MzI4NTZfUUlOR0RBT19DTTlfTlUyMF9NWVNRTF9PREJTX0xWU18zMjg1Nl9teXNxbF9XZWQgTWFyIDA2IDE0OjUwOjQ3IENTVCAyMDI0XzBfMzBfRXhlY3V0ZVRpbWVfREVTQ19XZWQgTWFyIDA2IDE0OjM1OjQ3IENTVCAyMDI0Xw==_1709708406465
   */
  jobId?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of records.
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
  data?: DescribeSqlLogRecordsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
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


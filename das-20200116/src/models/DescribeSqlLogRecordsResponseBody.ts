// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogRecordsResponseBodyDataItemsSQLLogRecord extends $dara.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * testname
   */
  accountName?: string;
  /**
   * @example
   * ["col1"]
   */
  affectColumns?: string;
  /**
   * @example
   * 10.0.0.1xx
   */
  clientIp?: string;
  /**
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
   * @example
   * ld-******
   */
  connectionId?: string;
  /**
   * @remarks
   * The amount of time that is consumed to execute the SQL statement. Unit: millisecond.
   * 
   * @example
   * 58
   */
  consume?: number;
  /**
   * @remarks
   * The CPU execution duration. Unit: microsecond.
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
   * The time when the SQL statement was executed. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
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
   * The number of rows that are pulled by the compute nodes of the PolarDB-X 2.0 instance.
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
   * The lock wait duration. Unit: millisecond.
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
   * The timestamp generated when the SQL statement was executed. The value of this parameter is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1701886532000
   */
  originTime?: number;
  /**
   * @remarks
   * The parallel queue time of the PolarDB for MySQL instance. Unit: millisecond.
   * 
   * @example
   * 10
   */
  parallelDegree?: string;
  /**
   * @remarks
   * The parallelism of the PolarDB for MySQL cluster.
   * 
   * @example
   * 2
   */
  parallelQueueTime?: string;
  /**
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
   * @example
   * MySQL
   */
  protocol?: string;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 0
   */
  returnRows?: number;
  /**
   * @example
   * 23
   */
  rowKey?: string;
  /**
   * @remarks
   * The total number of rows that are updated or returned by the compute nodes of the PolarDB-X 2.0 instance.
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
   * The number of requests that are sent from the compute nodes to the data nodes of the PolarDB-X 2.0 instance.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL statement ID.
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
   * The execution status of the SQL statement.
   * 
   * *   **0**: The execution was successful.
   * *   **1**: The execution failed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
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
   * The trace ID of the PolarDB-X 2.0 instance. The value is the execution ID of the SQL statement on the data node.
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
   * The number of rows that are updated.
   * 
   * @example
   * 0
   */
  updateRows?: number;
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index (IMCI) feature is enabled for the PolarDB for MySQL cluster. Valid values:
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
   * The IP address that is resolved from the endpoint of the query link.
   * 
   * @example
   * 100.115.XX.XX
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
   * The end of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task was complete. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * >  If the value of **Finish** is 0 and the value of **JobId** is returned, the request is an asynchronous request and the return result cannot be directly obtained. You must query the return result based on the value of **JobId**. Specify JobId as the key of **Filters** and the value of **JobId** as the value of Filters. Example: `Filters=[{"Key": "JobId", "Value": "******"}]`.
   * 
   * @example
   * 1
   */
  finish?: string;
  /**
   * @remarks
   * The data.
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
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: DescribeSqlLogRecordsResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
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


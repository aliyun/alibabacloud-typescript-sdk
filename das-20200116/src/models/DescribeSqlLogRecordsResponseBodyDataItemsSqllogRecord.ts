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
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  collection?: string;
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
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 0
   */
  returnRows?: number;
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


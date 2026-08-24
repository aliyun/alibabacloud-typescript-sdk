// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyDataLogsSqlTag extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  comments?: string;
  /**
   * @remarks
   * sqlid。
   * 
   * @example
   * 8ad7069f236bcdaaa9b3ae4b6299****
   */
  sqlId?: string;
  /**
   * @remarks
   * Multiple tags separated by commas.
   * 
   * @example
   * DAS_IMPORTANT,DAS_IN_PLAN
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      sqlId: 'SqlId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      sqlId: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyDataLogs extends $dara.Model {
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user1
   */
  accountName?: string;
  /**
   * @remarks
   * The application name.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * MyApp
   */
  applicationName?: string;
  /**
   * @remarks
   * The CPU query time.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 50
   */
  CPUTime?: number;
  /**
   * @remarks
   * The CPU query time, in seconds.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 100
   */
  CPUTimeSeconds?: number;
  clientIp?: string;
  cmd?: string;
  /**
   * @remarks
   * The slow query statement.
   * > Only ApsaraDB for Tair (Redis® OSS-Compatible) database instances are supported.
   * 
   * @example
   * SELECT
   */
  command?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test
   */
  DBName?: string;
  dbId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2zebg30mk056g****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The number of documents scanned during the MongoDB operation.
   * 
   * @example
   * 100
   */
  docsExamined?: string;
  extText?: string;
  fail?: string;
  /**
   * @remarks
   * The number of rows fetched by the compute node (CN) of the ApsaraDB PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   * 
   * @example
   * 10
   */
  frows?: number;
  /**
   * @remarks
   * The source host address.
   * 
   * @example
   * 192.168.1.1
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of I/O writes.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 1
   */
  IOWrites?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  insName?: string;
  /**
   * @remarks
   * The number of index rows scanned in MongoDB.
   * 
   * @example
   * valueA
   */
  keysExamined?: string;
  /**
   * @remarks
   * The number of rows affected by the last statement.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 10
   */
  lastRowsCountAffected?: number;
  /**
   * @remarks
   * The lock wait time.
   * 
   * @example
   * 100
   */
  lockTime?: number;
  /**
   * @remarks
   * The lock wait time, in seconds.
   * 
   * @example
   * 100
   */
  lockTimeSeconds?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 1
   */
  logicalIOReads?: number;
  /**
   * @remarks
   * The namespace.
   * > Only ApsaraDB for MongoDB instances are supported.
   * 
   * @example
   * pro-test
   */
  namespace?: string;
  nodeId?: string;
  opType?: string;
  originTime?: string;
  params?: string;
  /**
   * @remarks
   * The number of physical reads.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 1
   */
  physicalIOReads?: number;
  /**
   * @remarks
   * The SQL template.
   * 
   * @example
   * SELECT * FROM my_table WHERE ROWNUM <= 10
   */
  psql?: string;
  /**
   * @remarks
   * The query ID.
   * > Only ApsaraDB for MongoDB instances are supported.
   * 
   * @example
   * sq-1pzcdMwRb
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the query started. Format: yyyy-MM-dd hh:mm:ss (UTC).
   * 
   * @example
   * 2024-04-01 11:00:00
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The query duration.
   * 
   * @example
   * 121
   */
  queryTime?: number;
  /**
   * @remarks
   * The query duration, in seconds.
   * 
   * @example
   * 100
   */
  queryTimeSeconds?: number;
  reason?: string;
  reqId?: string;
  requestSize?: number;
  responseSize?: number;
  /**
   * @remarks
   * The number of returned items.
   * 
   * @example
   * test
   */
  returnItemNumbers?: string;
  /**
   * @remarks
   * The number of rows returned.
   * > Only ApsaraDB for MongoDB instances are supported.
   * 
   * @example
   * 20
   */
  returnNum?: string;
  /**
   * @remarks
   * The total number of rows updated or returned by the compute nodes of the ApsaraDB PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   * 
   * @example
   * 20
   */
  rows?: number;
  /**
   * @remarks
   * The number of rows affected.
   * 
   * > Only ApsaraDB RDS for SQL Server instances are supported.
   * 
   * @example
   * 10
   */
  rowsCountAffected?: number;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 100
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 10
   */
  rowsSent?: number;
  rt?: number;
  /**
   * @remarks
   * The SQL text.
   * 
   * @example
   * SELECT * FROM my_table WHERE ROWNUM <= 10
   */
  SQLText?: string;
  /**
   * @remarks
   * The data schema.
   * 
   * @example
   * HTTPS
   */
  scheme?: string;
  /**
   * @remarks
   * The number of DN requests from the compute node (CN) of the ApsaraDB PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   * 
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * sqlId
   */
  sqlId?: string;
  /**
   * @remarks
   * The tag.
   */
  sqlTag?: DescribeSlowLogRecordsResponseBodyDataLogsSqlTag;
  /**
   * @remarks
   * The SQL statement type. Valid values:
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
   * The child instance ID.
   * 
   * @example
   * r-8vb219d10038****
   */
  subInstanceId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tableNameExample
   */
  tableName?: string;
  /**
   * @remarks
   * The template ID of the ApsaraDB PolarDB-X 2.0 database instance.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   * 
   * @example
   * 6a63b6ac4572abfaef7d1163f684****
   */
  templateId?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 57472578
   */
  threadId?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1747118812
   */
  timestamp?: number;
  /**
   * @remarks
   * The trace ID of PolarDB-X 2.0, which is the execute ID of the SQL statement on the ApsaraDB PolarDB-X 2.0 database node.
   * 
   * > Only ApsaraDB PolarDB-X 2.0 instances are supported.
   * 
   * @example
   * 074ce334-5247-40b9-b0c1-158aea5d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      applicationName: 'ApplicationName',
      CPUTime: 'CPUTime',
      CPUTimeSeconds: 'CPUTimeSeconds',
      clientIp: 'ClientIp',
      cmd: 'Cmd',
      command: 'Command',
      DBName: 'DBName',
      dbId: 'DbId',
      dbInstanceName: 'DbInstanceName',
      docsExamined: 'DocsExamined',
      extText: 'ExtText',
      fail: 'Fail',
      frows: 'Frows',
      hostAddress: 'HostAddress',
      IOWrites: 'IOWrites',
      insName: 'InsName',
      keysExamined: 'KeysExamined',
      lastRowsCountAffected: 'LastRowsCountAffected',
      lockTime: 'LockTime',
      lockTimeSeconds: 'LockTimeSeconds',
      logicalIOReads: 'LogicalIOReads',
      namespace: 'Namespace',
      nodeId: 'NodeId',
      opType: 'OpType',
      originTime: 'OriginTime',
      params: 'Params',
      physicalIOReads: 'PhysicalIOReads',
      psql: 'Psql',
      queryId: 'QueryId',
      queryStartTime: 'QueryStartTime',
      queryTime: 'QueryTime',
      queryTimeSeconds: 'QueryTimeSeconds',
      reason: 'Reason',
      reqId: 'ReqId',
      requestSize: 'RequestSize',
      responseSize: 'ResponseSize',
      returnItemNumbers: 'ReturnItemNumbers',
      returnNum: 'ReturnNum',
      rows: 'Rows',
      rowsCountAffected: 'RowsCountAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      rt: 'Rt',
      SQLText: 'SQLText',
      scheme: 'Scheme',
      scnt: 'Scnt',
      sqlId: 'SqlId',
      sqlTag: 'SqlTag',
      sqlType: 'SqlType',
      subInstanceId: 'SubInstanceId',
      tableName: 'TableName',
      templateId: 'TemplateId',
      threadId: 'ThreadId',
      timestamp: 'Timestamp',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      applicationName: 'string',
      CPUTime: 'number',
      CPUTimeSeconds: 'number',
      clientIp: 'string',
      cmd: 'string',
      command: 'string',
      DBName: 'string',
      dbId: 'string',
      dbInstanceName: 'string',
      docsExamined: 'string',
      extText: 'string',
      fail: 'string',
      frows: 'number',
      hostAddress: 'string',
      IOWrites: 'number',
      insName: 'string',
      keysExamined: 'string',
      lastRowsCountAffected: 'number',
      lockTime: 'number',
      lockTimeSeconds: 'number',
      logicalIOReads: 'number',
      namespace: 'string',
      nodeId: 'string',
      opType: 'string',
      originTime: 'string',
      params: 'string',
      physicalIOReads: 'number',
      psql: 'string',
      queryId: 'string',
      queryStartTime: 'string',
      queryTime: 'number',
      queryTimeSeconds: 'number',
      reason: 'string',
      reqId: 'string',
      requestSize: 'number',
      responseSize: 'number',
      returnItemNumbers: 'string',
      returnNum: 'string',
      rows: 'number',
      rowsCountAffected: 'number',
      rowsExamined: 'number',
      rowsSent: 'number',
      rt: 'number',
      SQLText: 'string',
      scheme: 'string',
      scnt: 'number',
      sqlId: 'string',
      sqlTag: DescribeSlowLogRecordsResponseBodyDataLogsSqlTag,
      sqlType: 'string',
      subInstanceId: 'string',
      tableName: 'string',
      templateId: 'string',
      threadId: 'string',
      timestamp: 'number',
      traceId: 'string',
    };
  }

  validate() {
    if(this.sqlTag && typeof (this.sqlTag as any).validate === 'function') {
      (this.sqlTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The numeric ID of the instance.
   * 
   * @example
   * 100
   */
  dbInstanceId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp157g54vy772****
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1672617600000
   */
  endTime?: string;
  /**
   * @remarks
   * The number of items in the query log list on the current page.
   * 
   * @example
   * 10
   */
  itemsNumbers?: number;
  /**
   * @remarks
   * The returned data.
   */
  logs?: DescribeSlowLogRecordsResponseBodyDataLogs[];
  /**
   * @remarks
   * The maximum number of records per page for the paged query. Valid values: 5 to 100.
   * 
   * @example
   * 20
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node123
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number for the paged query. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1672531200000
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      endTime: 'EndTime',
      itemsNumbers: 'ItemsNumbers',
      logs: 'Logs',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      nodeId: 'NodeId',
      pageNumbers: 'PageNumbers',
      startTime: 'StartTime',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'number',
      dbInstanceName: 'string',
      endTime: 'string',
      itemsNumbers: 'number',
      logs: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyDataLogs },
      maxRecordsPerPage: 'number',
      nodeId: 'string',
      pageNumbers: 'number',
      startTime: 'string',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * DBLogRecords<SlowLogItem>
   */
  data?: DescribeSlowLogRecordsResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * >  This parameter returns **Successful** when the request succeeds. If the request fails, an exception message is returned, such as an error code.
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
   * A1C79EE2-D04D-571B-8C60-961FAF8E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * - **true**: successful.
   * 
   * - **false**: failed.
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
      data: DescribeSlowLogRecordsResponseBodyData,
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


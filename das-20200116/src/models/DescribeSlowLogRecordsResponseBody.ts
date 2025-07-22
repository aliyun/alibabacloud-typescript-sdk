// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyDataLogsSqlTag extends $dara.Model {
  /**
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
   * @example
   * user1
   */
  accountName?: string;
  /**
   * @example
   * MyApp
   */
  applicationName?: string;
  /**
   * @example
   * 50
   */
  CPUTime?: number;
  /**
   * @example
   * 100
   */
  CPUTimeSeconds?: number;
  /**
   * @example
   * SELECT
   */
  command?: string;
  /**
   * @example
   * test
   */
  DBName?: string;
  /**
   * @example
   * rm-2zebg30mk056g****
   */
  dbInstanceName?: string;
  /**
   * @example
   * 100
   */
  docsExamined?: string;
  /**
   * @example
   * 10
   */
  frows?: number;
  /**
   * @example
   * 192.168.1.1
   */
  hostAddress?: string;
  /**
   * @example
   * 1
   */
  IOWrites?: number;
  /**
   * @example
   * test
   */
  insName?: string;
  /**
   * @example
   * valueA
   */
  keysExamined?: string;
  /**
   * @example
   * 10
   */
  lastRowsCountAffected?: number;
  /**
   * @example
   * 100
   */
  lockTime?: number;
  /**
   * @example
   * 100
   */
  lockTimeSeconds?: number;
  /**
   * @example
   * 1
   */
  logicalIOReads?: number;
  /**
   * @example
   * pro-test
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  physicalIOReads?: number;
  /**
   * @example
   * SELECT * FROM my_table WHERE ROWNUM <= 10
   */
  psql?: string;
  /**
   * @example
   * sq-1pzcdMwRb
   */
  queryId?: string;
  /**
   * @example
   * 2024-04-01 11:00:00
   */
  queryStartTime?: string;
  /**
   * @example
   * 121
   */
  queryTime?: number;
  /**
   * @example
   * 100
   */
  queryTimeSeconds?: number;
  /**
   * @example
   * test
   */
  returnItemNumbers?: string;
  /**
   * @example
   * 20
   */
  returnNum?: string;
  /**
   * @example
   * 20
   */
  rows?: number;
  /**
   * @example
   * 10
   */
  rowsCountAffected?: number;
  /**
   * @example
   * 100
   */
  rowsExamined?: number;
  /**
   * @example
   * 10
   */
  rowsSent?: number;
  /**
   * @example
   * SELECT * FROM my_table WHERE ROWNUM <= 10
   */
  SQLText?: string;
  /**
   * @example
   * HTTPS
   */
  scheme?: string;
  /**
   * @example
   * 10
   */
  scnt?: number;
  /**
   * @example
   * sqlId
   */
  sqlId?: string;
  sqlTag?: DescribeSlowLogRecordsResponseBodyDataLogsSqlTag;
  /**
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @example
   * r-8vb219d10038****
   */
  subInstanceId?: string;
  /**
   * @example
   * tableNameExample
   */
  tableName?: string;
  /**
   * @example
   * 6a63b6ac4572abfaef7d1163f684****
   */
  templateId?: string;
  /**
   * @example
   * 57472578
   */
  threadId?: string;
  /**
   * @example
   * 1747118812
   */
  timestamp?: number;
  /**
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
      command: 'Command',
      DBName: 'DBName',
      dbInstanceName: 'DbInstanceName',
      docsExamined: 'DocsExamined',
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
      physicalIOReads: 'PhysicalIOReads',
      psql: 'Psql',
      queryId: 'QueryId',
      queryStartTime: 'QueryStartTime',
      queryTime: 'QueryTime',
      queryTimeSeconds: 'QueryTimeSeconds',
      returnItemNumbers: 'ReturnItemNumbers',
      returnNum: 'ReturnNum',
      rows: 'Rows',
      rowsCountAffected: 'RowsCountAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
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
      command: 'string',
      DBName: 'string',
      dbInstanceName: 'string',
      docsExamined: 'string',
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
      physicalIOReads: 'number',
      psql: 'string',
      queryId: 'string',
      queryStartTime: 'string',
      queryTime: 'number',
      queryTimeSeconds: 'number',
      returnItemNumbers: 'string',
      returnNum: 'string',
      rows: 'number',
      rowsCountAffected: 'number',
      rowsExamined: 'number',
      rowsSent: 'number',
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
   * @example
   * 100
   */
  dbInstanceId?: number;
  /**
   * @example
   * rm-bp157g54vy772****
   */
  dbInstanceName?: string;
  /**
   * @example
   * 1672617600000
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  itemsNumbers?: number;
  logs?: DescribeSlowLogRecordsResponseBodyDataLogs[];
  /**
   * @example
   * 20
   */
  maxRecordsPerPage?: number;
  /**
   * @example
   * node123
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @example
   * 1672531200000
   */
  startTime?: string;
  /**
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
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * A1C79EE2-D04D-571B-8C60-961FAF8E****
   */
  requestId?: string;
  /**
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


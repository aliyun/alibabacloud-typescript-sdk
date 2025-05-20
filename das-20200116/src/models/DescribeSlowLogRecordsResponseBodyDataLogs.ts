// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyDataLogsSqlTag } from "./DescribeSlowLogRecordsResponseBodyDataLogsSqlTag";


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


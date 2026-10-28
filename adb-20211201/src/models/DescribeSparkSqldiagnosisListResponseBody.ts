// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query the ID of the Spark application.
   * 
   * @example
   * s202404291020bjd448ad40002122
   */
  appId?: string;
  /**
   * @remarks
   * The actual running time. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The internal query execution ID within the Spark application.
   * 
   * @example
   * 1
   */
  innerQueryId?: number;
  /**
   * @remarks
   * The maximum operator execution time. Unit: milliseconds.
   * 
   * @example
   * 90
   */
  maxExclusiveTime?: number;
  /**
   * @remarks
   * The maximum operator memory consumption. Unit: bytes.
   * 
   * @example
   * 1024
   */
  peakMemory?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select * from device where name = \\"105506012112790031\\"
   */
  SQL?: string;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 100
   */
  scanRowCount?: number;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-MM-ddTHH:mmZ</i> (UTC time).
   * 
   * @example
   * 2024-11-20 09:09:00
   */
  startTime?: string;
  /**
   * @remarks
   * The final execution state of the query. Valid values:
   * 
   * - COMPLETED: The query is completed.
   * - CANCELED: The query is canceled.
   * - ABORTED: The query is aborted.
   * - FAILED: The query failed.
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The unique ID of the code block in the Spark job.
   * 
   * @example
   * 1
   */
  statementId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      elapsedTime: 'ElapsedTime',
      innerQueryId: 'InnerQueryId',
      maxExclusiveTime: 'MaxExclusiveTime',
      peakMemory: 'PeakMemory',
      SQL: 'SQL',
      scanRowCount: 'ScanRowCount',
      startTime: 'StartTime',
      state: 'State',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      elapsedTime: 'number',
      innerQueryId: 'number',
      maxExclusiveTime: 'number',
      peakMemory: 'number',
      SQL: 'string',
      scanRowCount: 'number',
      startTime: 'string',
      state: 'string',
      statementId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkSQLDiagnosisListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A91C9D07-7462-5F35-BB47-83629CE6CCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL diagnostics information collection.
   */
  SQLDiagnosisList?: DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1343
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      SQLDiagnosisList: 'SQLDiagnosisList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      SQLDiagnosisList: { 'type': 'array', 'itemType': DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SQLDiagnosisList)) {
      $dara.Model.validateArray(this.SQLDiagnosisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


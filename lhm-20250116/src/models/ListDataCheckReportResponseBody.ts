// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The validation job (batch) ID.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * The number of columns checked.
   * 
   * @example
   * 10
   */
  checkColumCount?: number;
  /**
   * @remarks
   * The check result. Valid values:
   * 
   * - 0: No records.
   * - 1: Passed.
   * - 2: Failed.
   * 
   * @example
   * 1
   */
  checkResult?: number;
  /**
   * @remarks
   * The number of rows compared.
   * 
   * @example
   * 1000
   */
  compareRowCount?: number;
  /**
   * @remarks
   * The job completion rate.
   * 
   * @example
   * 95.00%
   */
  completionRate?: string;
  /**
   * @remarks
   * The difference rate.
   * 
   * @example
   * 0.00%
   */
  diffRate?: string;
  /**
   * @remarks
   * The primary key or composite primary key of the destination. This is the comparison column on the destination used during row-by-row, column-by-column comparison.
   * 
   * @example
   * id
   */
  dstCompareColumn?: string;
  dstHint?: string;
  /**
   * @remarks
   * The metric field of the destination.
   * 
   * @example
   * amount
   */
  dstMetricName?: string;
  /**
   * @remarks
   * The SQL list of the destination.
   */
  dstSqlList?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection timeout
   */
  errorMsg?: string;
  /**
   * @remarks
   * The execution time of this check report detail.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  execTime?: string;
  /**
   * @remarks
   * The expected number of different rows.
   * 
   * @example
   * 0
   */
  expDiffCount?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Indicates whether the check is skipped.
   * 
   * @example
   * 0
   */
  isSkipped?: number;
  /**
   * @remarks
   * The ID of the check sub-job.
   * 
   * @example
   * 10001
   */
  jobId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - 0: INIT (pending).
   * - 1: RUNNING (running).
   * - 2: FINISHED (completed).
   * - 3: STOPPED (stopped).
   * - 4: FAIL (failed).
   * - 6: READY (ready).
   * - 7: SKIPPED (skipped).
   * 
   * @example
   * 2
   */
  jobStatus?: number;
  /**
   * @remarks
   * The number of metrics checked.
   * 
   * @example
   * 10
   */
  metricColumCount?: number;
  /**
   * @remarks
   * The number of metrics that passed the check.
   * 
   * @example
   * 8
   */
  metricPassColumCount?: number;
  /**
   * @remarks
   * The number of rows that exist only on the destination.
   * 
   * @example
   * 0
   */
  onlyDstCount?: number;
  /**
   * @remarks
   * The number of rows that exist only on the source.
   * 
   * @example
   * 0
   */
  onlySrcCount?: number;
  /**
   * @remarks
   * The number of columns that passed the check.
   * 
   * @example
   * 8
   */
  passColumCount?: number;
  /**
   * @remarks
   * The actual number of different rows.
   * 
   * @example
   * 0
   */
  realDiffCount?: number;
  /**
   * @remarks
   * The actual number of identical rows.
   * 
   * @example
   * 1000
   */
  realSameCount?: number;
  /**
   * @remarks
   * The ID of the check result.
   * 
   * @example
   * 30001
   */
  resultId?: string;
  /**
   * @remarks
   * The name of the source column.
   * 
   * @example
   * amount
   */
  sourceColumn?: string;
  /**
   * @remarks
   * The number of rows in the source data.
   * 
   * @example
   * 1000
   */
  sourceCount?: string;
  /**
   * @remarks
   * The source data source.
   * 
   * @example
   * ds_demo
   */
  sourceDataSource?: string;
  /**
   * @remarks
   * The error message of the source.
   * 
   * @example
   * Table \\"src_db.src_table\\" doesn\\"t exist
   */
  sourceError?: string;
  /**
   * @remarks
   * The GROUP BY clause of the source.
   * 
   * @example
   * col_a,col_b
   */
  sourceGroupClause?: string;
  /**
   * @remarks
   * The source partition.
   * 
   * @example
   * ds=20260116
   */
  sourcePartition?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * table_demo
   */
  sourceTable?: string;
  /**
   * @remarks
   * The data type of the source.
   * 
   * @example
   * Hive
   */
  sourceType?: string;
  /**
   * @remarks
   * The WHERE clause of the source.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  sourceWhereClause?: string;
  /**
   * @remarks
   * The primary key or composite primary key of the source. This is the comparison column on the source used during row-by-row, column-by-column comparison.
   * 
   * @example
   * id
   */
  srcCompareColumn?: string;
  srcHint?: string;
  /**
   * @remarks
   * The metric field of the source.
   * 
   * @example
   * amount
   */
  srcMetricName?: string;
  /**
   * @remarks
   * The SQL list of the source.
   */
  srcSqlList?: string[];
  /**
   * @remarks
   * The column of the destination.
   * 
   * @example
   * amount
   */
  targetColumn?: string;
  /**
   * @remarks
   * The number of rows in the destination data.
   * 
   * @example
   * 1000
   */
  targetCount?: string;
  /**
   * @remarks
   * The data source of the destination.
   * 
   * @example
   * ds_demo
   */
  targetDataSource?: string;
  /**
   * @remarks
   * The error message of the destination.
   * 
   * @example
   * Table \\"dst_db.dst_table\\" doesn\\"t exist
   */
  targetError?: string;
  /**
   * @remarks
   * The GROUP BY clause of the destination.
   * 
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  /**
   * @remarks
   * The destination partition.
   * 
   * @example
   * ds=20260116
   */
  targetPartition?: string;
  /**
   * @remarks
   * The destination table.
   * 
   * @example
   * table_demo
   */
  targetTable?: string;
  /**
   * @remarks
   * The destination data source type.
   * 
   * @example
   * hive
   */
  targetType?: string;
  /**
   * @remarks
   * The destination WHERE clause.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  targetWhereClause?: string;
  /**
   * @remarks
   * The ID of the validation task configuration.
   * 
   * @example
   * 1001
   */
  taskConfigId?: number;
  /**
   * @remarks
   * The validation template name.
   * 
   * @example
   * Data Volume Validation Template
   */
  templateName?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 0.0
   */
  threshold?: number;
  /**
   * @remarks
   * The threshold for comparing grouped data volumes.
   * 
   * @example
   * 0.5
   */
  totalCountThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkColumCount: 'checkColumCount',
      checkResult: 'checkResult',
      compareRowCount: 'compareRowCount',
      completionRate: 'completionRate',
      diffRate: 'diffRate',
      dstCompareColumn: 'dstCompareColumn',
      dstHint: 'dstHint',
      dstMetricName: 'dstMetricName',
      dstSqlList: 'dstSqlList',
      errorMsg: 'errorMsg',
      execTime: 'execTime',
      expDiffCount: 'expDiffCount',
      finishTime: 'finishTime',
      isSkipped: 'isSkipped',
      jobId: 'jobId',
      jobStatus: 'jobStatus',
      metricColumCount: 'metricColumCount',
      metricPassColumCount: 'metricPassColumCount',
      onlyDstCount: 'onlyDstCount',
      onlySrcCount: 'onlySrcCount',
      passColumCount: 'passColumCount',
      realDiffCount: 'realDiffCount',
      realSameCount: 'realSameCount',
      resultId: 'resultId',
      sourceColumn: 'sourceColumn',
      sourceCount: 'sourceCount',
      sourceDataSource: 'sourceDataSource',
      sourceError: 'sourceError',
      sourceGroupClause: 'sourceGroupClause',
      sourcePartition: 'sourcePartition',
      sourceTable: 'sourceTable',
      sourceType: 'sourceType',
      sourceWhereClause: 'sourceWhereClause',
      srcCompareColumn: 'srcCompareColumn',
      srcHint: 'srcHint',
      srcMetricName: 'srcMetricName',
      srcSqlList: 'srcSqlList',
      targetColumn: 'targetColumn',
      targetCount: 'targetCount',
      targetDataSource: 'targetDataSource',
      targetError: 'targetError',
      targetGroupClause: 'targetGroupClause',
      targetPartition: 'targetPartition',
      targetTable: 'targetTable',
      targetType: 'targetType',
      targetWhereClause: 'targetWhereClause',
      taskConfigId: 'taskConfigId',
      templateName: 'templateName',
      threshold: 'threshold',
      totalCountThreshold: 'totalCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkColumCount: 'number',
      checkResult: 'number',
      compareRowCount: 'number',
      completionRate: 'string',
      diffRate: 'string',
      dstCompareColumn: 'string',
      dstHint: 'string',
      dstMetricName: 'string',
      dstSqlList: { 'type': 'array', 'itemType': 'string' },
      errorMsg: 'string',
      execTime: 'string',
      expDiffCount: 'string',
      finishTime: 'string',
      isSkipped: 'number',
      jobId: 'string',
      jobStatus: 'number',
      metricColumCount: 'number',
      metricPassColumCount: 'number',
      onlyDstCount: 'number',
      onlySrcCount: 'number',
      passColumCount: 'number',
      realDiffCount: 'number',
      realSameCount: 'number',
      resultId: 'string',
      sourceColumn: 'string',
      sourceCount: 'string',
      sourceDataSource: 'string',
      sourceError: 'string',
      sourceGroupClause: 'string',
      sourcePartition: 'string',
      sourceTable: 'string',
      sourceType: 'string',
      sourceWhereClause: 'string',
      srcCompareColumn: 'string',
      srcHint: 'string',
      srcMetricName: 'string',
      srcSqlList: { 'type': 'array', 'itemType': 'string' },
      targetColumn: 'string',
      targetCount: 'string',
      targetDataSource: 'string',
      targetError: 'string',
      targetGroupClause: 'string',
      targetPartition: 'string',
      targetTable: 'string',
      targetType: 'string',
      targetWhereClause: 'string',
      taskConfigId: 'number',
      templateName: 'string',
      threshold: 'number',
      totalCountThreshold: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dstSqlList)) {
      $dara.Model.validateArray(this.dstSqlList);
    }
    if(Array.isArray(this.srcSqlList)) {
      $dara.Model.validateArray(this.srcSqlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child field descriptions.
   */
  data?: ListDataCheckReportResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which is the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues with this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for details.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the query conditions. This value is used for pagination.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataCheckReportResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


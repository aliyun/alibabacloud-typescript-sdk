// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @example
   * 10
   */
  checkColumCount?: number;
  /**
   * @example
   * 1
   */
  checkResult?: number;
  /**
   * @example
   * 1000
   */
  compareRowCount?: number;
  /**
   * @example
   * 95.00%
   */
  completionRate?: string;
  /**
   * @example
   * 0.00%
   */
  diffRate?: string;
  /**
   * @example
   * id
   */
  dstCompareColumn?: string;
  dstHint?: string;
  /**
   * @example
   * amount
   */
  dstMetricName?: string;
  dstSqlList?: string[];
  /**
   * @example
   * connection timeout
   */
  errorMsg?: string;
  /**
   * @example
   * 2026-01-16 10:00:00
   */
  execTime?: string;
  /**
   * @example
   * 0
   */
  expDiffCount?: string;
  /**
   * @example
   * 2026-01-16T10:00:00Z
   */
  finishTime?: string;
  /**
   * @example
   * 0
   */
  isSkipped?: number;
  /**
   * @example
   * 10001
   */
  jobId?: string;
  /**
   * @example
   * 2
   */
  jobStatus?: number;
  /**
   * @example
   * 10
   */
  metricColumCount?: number;
  /**
   * @example
   * 8
   */
  metricPassColumCount?: number;
  /**
   * @example
   * 0
   */
  onlyDstCount?: number;
  /**
   * @example
   * 0
   */
  onlySrcCount?: number;
  /**
   * @example
   * 8
   */
  passColumCount?: number;
  /**
   * @example
   * 0
   */
  realDiffCount?: number;
  /**
   * @example
   * 1000
   */
  realSameCount?: number;
  /**
   * @example
   * 30001
   */
  resultId?: string;
  /**
   * @example
   * amount
   */
  sourceColumn?: string;
  /**
   * @example
   * 1000
   */
  sourceCount?: string;
  /**
   * @example
   * ds_demo
   */
  sourceDataSource?: string;
  /**
   * @example
   * Table \\"src_db.src_table\\" doesn\\"t exist
   */
  sourceError?: string;
  /**
   * @example
   * col_a,col_b
   */
  sourceGroupClause?: string;
  /**
   * @example
   * ds=20260116
   */
  sourcePartition?: string;
  /**
   * @example
   * table_demo
   */
  sourceTable?: string;
  /**
   * @example
   * Hive
   */
  sourceType?: string;
  /**
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  sourceWhereClause?: string;
  /**
   * @example
   * id
   */
  srcCompareColumn?: string;
  srcHint?: string;
  /**
   * @example
   * amount
   */
  srcMetricName?: string;
  srcSqlList?: string[];
  /**
   * @example
   * amount
   */
  targetColumn?: string;
  /**
   * @example
   * 1000
   */
  targetCount?: string;
  /**
   * @example
   * ds_demo
   */
  targetDataSource?: string;
  /**
   * @example
   * Table \\"dst_db.dst_table\\" doesn\\"t exist
   */
  targetError?: string;
  /**
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  /**
   * @example
   * ds=20260116
   */
  targetPartition?: string;
  /**
   * @example
   * table_demo
   */
  targetTable?: string;
  /**
   * @example
   * hive
   */
  targetType?: string;
  /**
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  targetWhereClause?: string;
  /**
   * @example
   * 1001
   */
  taskConfigId?: number;
  /**
   * @example
   * 数据量校验模板
   */
  templateName?: string;
  /**
   * @example
   * 0.0
   */
  threshold?: number;
  /**
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
  data?: ListDataCheckReportResponseBodyData[];
  /**
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  success?: boolean;
  /**
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


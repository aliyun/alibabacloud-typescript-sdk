// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @example
   * 1000
   */
  batchSize?: number;
  /**
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @example
   * =
   */
  comparator?: string;
  /**
   * @example
   * {}
   */
  extra?: string;
  /**
   * @example
   * 0.5
   */
  groupCountThreshold?: number;
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 1
   */
  isFullTableCount?: number;
  /**
   * @example
   * 0
   */
  isSkipped?: number;
  /**
   * @example
   * CUSTOM_METRIC_MIX
   */
  metricType?: string;
  /**
   * @example
   * 1
   */
  sourceCheckAllColumn?: number;
  /**
   * @example
   * col_a,col_b
   */
  sourceColumns?: string;
  /**
   * @example
   * id
   */
  sourceCompareKey?: string;
  /**
   * @example
   * ds_demo
   */
  sourceDataSource?: string;
  /**
   * @example
   * col_a,col_b
   */
  sourceGroupClause?: string;
  sourceHint?: string;
  /**
   * @example
   * 1001
   */
  sourceId?: string;
  /**
   * @example
   * ds=20260116
   */
  sourcePartition?: string;
  /**
   * @example
   * SELECT * FROM t;
   */
  sourceSql?: string;
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
   * 1
   */
  targetCheckAllColumn?: number;
  /**
   * @example
   * col_a,col_b
   */
  targetColumns?: string;
  /**
   * @example
   * id
   */
  targetCompareKey?: string;
  /**
   * @example
   * ds_demo
   */
  targetDataSource?: string;
  /**
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  targetHint?: string;
  /**
   * @example
   * 2001
   */
  targetId?: string;
  /**
   * @example
   * ds=20260116
   */
  targetPartition?: string;
  /**
   * @example
   * SELECT * FROM t;
   */
  targetSql?: string;
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
   * lhm|lhm_dw|*
   */
  taskConfigInfo?: string;
  /**
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @example
   * 0.5
   */
  totalCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      batchSize: 'batchSize',
      checkType: 'checkType',
      comparator: 'comparator',
      extra: 'extra',
      groupCountThreshold: 'groupCountThreshold',
      id: 'id',
      isFullTableCount: 'isFullTableCount',
      isSkipped: 'isSkipped',
      metricType: 'metricType',
      sourceCheckAllColumn: 'sourceCheckAllColumn',
      sourceColumns: 'sourceColumns',
      sourceCompareKey: 'sourceCompareKey',
      sourceDataSource: 'sourceDataSource',
      sourceGroupClause: 'sourceGroupClause',
      sourceHint: 'sourceHint',
      sourceId: 'sourceId',
      sourcePartition: 'sourcePartition',
      sourceSql: 'sourceSql',
      sourceTable: 'sourceTable',
      sourceType: 'sourceType',
      sourceWhereClause: 'sourceWhereClause',
      targetCheckAllColumn: 'targetCheckAllColumn',
      targetColumns: 'targetColumns',
      targetCompareKey: 'targetCompareKey',
      targetDataSource: 'targetDataSource',
      targetGroupClause: 'targetGroupClause',
      targetHint: 'targetHint',
      targetId: 'targetId',
      targetPartition: 'targetPartition',
      targetSql: 'targetSql',
      targetTable: 'targetTable',
      targetType: 'targetType',
      targetWhereClause: 'targetWhereClause',
      taskConfigInfo: 'taskConfigInfo',
      taskId: 'taskId',
      totalCountThreshold: 'totalCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      batchSize: 'number',
      checkType: 'number',
      comparator: 'string',
      extra: 'string',
      groupCountThreshold: 'number',
      id: 'number',
      isFullTableCount: 'number',
      isSkipped: 'number',
      metricType: 'string',
      sourceCheckAllColumn: 'number',
      sourceColumns: 'string',
      sourceCompareKey: 'string',
      sourceDataSource: 'string',
      sourceGroupClause: 'string',
      sourceHint: 'string',
      sourceId: 'string',
      sourcePartition: 'string',
      sourceSql: 'string',
      sourceTable: 'string',
      sourceType: 'string',
      sourceWhereClause: 'string',
      targetCheckAllColumn: 'number',
      targetColumns: 'string',
      targetCompareKey: 'string',
      targetDataSource: 'string',
      targetGroupClause: 'string',
      targetHint: 'string',
      targetId: 'string',
      targetPartition: 'string',
      targetSql: 'string',
      targetTable: 'string',
      targetType: 'string',
      targetWhereClause: 'string',
      taskConfigInfo: 'string',
      taskId: 'number',
      totalCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckConfigResponseBody extends $dara.Model {
  data?: ListDataCheckConfigResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListDataCheckConfigResponseBodyData },
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


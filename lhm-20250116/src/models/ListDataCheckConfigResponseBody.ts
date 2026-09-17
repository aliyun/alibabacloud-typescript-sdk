// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check algorithm.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The batch size.
   * 
   * @example
   * 1000
   */
  batchSize?: number;
  /**
   * @remarks
   * The check type.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The compare type. Valid values: =, !=, >, <, >=, <=, contains, not contains, and ==.
   * 
   * @example
   * =
   */
  comparator?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * {}
   */
  extra?: string;
  /**
   * @remarks
   * The group data volume compare threshold.
   * 
   * @example
   * 0.5
   */
  groupCountThreshold?: number;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether a full table count is performed.
   * 
   * @example
   * 1
   */
  isFullTableCount?: number;
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
   * The metric type. Valid values:
   * - CUSTOM_METRIC_NUM: built-in NUM mode.
   * - CUSTOM_METRIC_LEN: built-in LEN mode.
   * - CUSTOM_METRIC_MIX: built-in MIX mode.
   * 
   * @example
   * CUSTOM_METRIC_MIX
   */
  metricType?: string;
  /**
   * @remarks
   * Indicates whether all columns of the source are checked. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  sourceCheckAllColumn?: number;
  /**
   * @remarks
   * The source table fields. You can specify multiple fields separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  sourceColumns?: string;
  /**
   * @remarks
   * The source compare key.
   * 
   * @example
   * id
   */
  sourceCompareKey?: string;
  /**
   * @remarks
   * The name of the source data source.
   * 
   * @example
   * ds_demo
   */
  sourceDataSource?: string;
  /**
   * @remarks
   * The GROUP BY clause for the source table.
   * 
   * @example
   * col_a,col_b
   */
  sourceGroupClause?: string;
  /**
   * @remarks
   * The hint for the source.
   */
  sourceHint?: string;
  /**
   * @remarks
   * The ID of the source data source.
   * 
   * @example
   * 1001
   */
  sourceId?: string;
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
   * The SQL statement for the source.
   * 
   * @example
   * SELECT * FROM t;
   */
  sourceSql?: string;
  /**
   * @remarks
   * The source table.
   * 
   * @example
   * table_demo
   */
  sourceTable?: string;
  /**
   * @remarks
   * The type of the source data source.
   * 
   * @example
   * Hive
   */
  sourceType?: string;
  /**
   * @remarks
   * The WHERE clause for the source table.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  sourceWhereClause?: string;
  /**
   * @remarks
   * Indicates whether all columns of the target are checked. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  targetCheckAllColumn?: number;
  /**
   * @remarks
   * The target table fields. You can specify multiple fields separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  targetColumns?: string;
  /**
   * @remarks
   * The target compare key.
   * 
   * @example
   * id
   */
  targetCompareKey?: string;
  /**
   * @remarks
   * The target data source.
   * 
   * @example
   * ds_demo
   */
  targetDataSource?: string;
  /**
   * @remarks
   * The GROUP BY clause for the target table.
   * 
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  /**
   * @remarks
   * The hint for the target.
   */
  targetHint?: string;
  /**
   * @remarks
   * The ID of the target data source.
   * 
   * @example
   * 2001
   */
  targetId?: string;
  /**
   * @remarks
   * The target partition.
   * 
   * @example
   * ds=20260116
   */
  targetPartition?: string;
  /**
   * @remarks
   * The SQL statement for the target.
   * 
   * @example
   * SELECT * FROM t;
   */
  targetSql?: string;
  /**
   * @remarks
   * The target table.
   * 
   * @example
   * table_demo
   */
  targetTable?: string;
  /**
   * @remarks
   * The type of the target data source.
   * 
   * @example
   * hive
   */
  targetType?: string;
  /**
   * @remarks
   * The WHERE clause for the target table.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  targetWhereClause?: string;
  /**
   * @remarks
   * The configuration details.
   * 
   * @example
   * lhm|lhm_dw|*
   */
  taskConfigInfo?: string;
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The total data volume compare threshold.
   * 
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
  /**
   * @remarks
   * The data list returned by the operation. For the element structure, see the child field descriptions.
   */
  data?: ListDataCheckConfigResponseBodyData[];
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
   * The request ID, which is used to locate and troubleshoot issues.
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


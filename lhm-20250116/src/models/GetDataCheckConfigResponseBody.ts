// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckConfigResponseBodyData extends $dara.Model {
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
   * The comparison type. Valid values: =, !=, >, <, >=, <=, contains, does not contain, and ==.
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
   * The group data volume comparison threshold.
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
   * Indicates whether all columns are checked on the source side. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  sourceCheckAllColumn?: number;
  /**
   * @remarks
   * The source table columns. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  sourceColumns?: string;
  /**
   * @remarks
   * The source comparison key.
   * 
   * @example
   * id
   */
  sourceCompareKey?: string;
  /**
   * @remarks
   * The name of the source datasource.
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
   * The hint for the source side.
   */
  sourceHint?: string;
  /**
   * @remarks
   * The ID of the source datasource.
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
   * The SQL statement for the source side.
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
   * The type of the source datasource.
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
   * Indicates whether all columns are checked on the target side. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 1
   */
  targetCheckAllColumn?: number;
  /**
   * @remarks
   * The target table columns. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  targetColumns?: string;
  /**
   * @remarks
   * The target comparison key.
   * 
   * @example
   * id
   */
  targetCompareKey?: string;
  /**
   * @remarks
   * The target datasource.
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
   * The hint for the target side.
   */
  targetHint?: string;
  /**
   * @remarks
   * The ID of the target datasource.
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
   * The SQL statement for the target side.
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
   * The type of the target datasource.
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
   * The total data volume comparison threshold.
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

export class GetDataCheckConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child field descriptions.
   */
  data?: GetDataCheckConfigResponseBodyData[];
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
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check the values of errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataCheckConfigResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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


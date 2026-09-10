// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTaskConfigResponseBodyDataDataCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The validation algorithm.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 20001
   */
  batchId?: number;
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
   * The validation rule type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * - 3: custom comparison.
   * - 4: full-text comparison.
   * - 5: null value ratio comparison.
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
  extra?: any;
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
   * Specifies whether to perform a full table count.
   * 
   * @example
   * 1
   */
  isFullTableCount?: number;
  /**
   * @remarks
   * Specifies whether to skip the task. Valid values:
   * - 0: No.
   * - 1: Yes.
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
   * The source table columns. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  sourceColumns?: string;
  /**
   * @remarks
   * The source comparison key (the key field used for data comparison between the source and destination).
   * 
   * @example
   * id
   */
  sourceCompareKey?: string;
  /**
   * @remarks
   * The source data source name.
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
  sourceHint?: string;
  /**
   * @remarks
   * The source data source ID.
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
   * The source SQL statement.
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
   * The source data source type.
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
   * The destination table columns. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  targetColumns?: string;
  /**
   * @remarks
   * The destination comparison key (the key field used for data comparison between the source and destination).
   * 
   * @example
   * id
   */
  targetCompareKey?: string;
  /**
   * @remarks
   * The destination data source.
   * 
   * @example
   * ds_demo
   */
  targetDataSource?: string;
  /**
   * @remarks
   * The GROUP BY clause for the destination table.
   * 
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  targetHint?: string;
  /**
   * @remarks
   * The destination ID.
   * 
   * @example
   * 2001
   */
  targetId?: string;
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
   * The destination SQL statement.
   * 
   * @example
   * SELECT * FROM t;
   */
  targetSql?: string;
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
   * The WHERE clause for the destination table.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  targetWhereClause?: string;
  /**
   * @remarks
   * The validation task configuration ID.
   * 
   * @example
   * 1001
   */
  taskConfigId?: number;
  /**
   * @remarks
   * The validation task configuration information (regular expression matching rules). This parameter takes effect only when taskMode is set to 1.
   * 
   * @example
   * lhm|lhm_dw|*
   */
  taskConfigInfo?: string;
  /**
   * @remarks
   * The validation batch token. Together with batchId, it identifies the result records generated by a validation batch.
   * 
   * @example
   * 9f2c7a1e4b8d****
   */
  token?: string;
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
      batchId: 'batchId',
      batchSize: 'batchSize',
      checkType: 'checkType',
      comparator: 'comparator',
      extra: 'extra',
      groupCountThreshold: 'groupCountThreshold',
      id: 'id',
      isFullTableCount: 'isFullTableCount',
      isSkipped: 'isSkipped',
      metricType: 'metricType',
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
      taskConfigId: 'taskConfigId',
      taskConfigInfo: 'taskConfigInfo',
      token: 'token',
      totalCountThreshold: 'totalCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      batchId: 'number',
      batchSize: 'number',
      checkType: 'number',
      comparator: 'string',
      extra: 'any',
      groupCountThreshold: 'number',
      id: 'number',
      isFullTableCount: 'number',
      isSkipped: 'number',
      metricType: 'string',
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
      taskConfigId: 'number',
      taskConfigInfo: 'string',
      token: 'string',
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

export class GetDataCheckTaskConfigResponseBodyDataScopeFilter extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-14 13:59:00
   */
  end?: string;
  /**
   * @remarks
   * The last N parameter.
   * 
   * @example
   * 7
   */
  lastN?: number;
  /**
   * @remarks
   * The filter type.
   * 
   * @example
   * 1
   */
  scopeFilterType?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-01-14 11:21:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      lastN: 'lastN',
      scopeFilterType: 'scopeFilterType',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      lastN: 'number',
      scopeFilterType: 'number',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTaskConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The batch ID that uniquely identifies a data validation batch.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * The global node parameter settings (built-in configuration of the data validation service).
   * 
   * @example
   * {}
   */
  checkGlobalParams?: string;
  /**
   * @remarks
   * The validation template ID.
   * 
   * @example
   * 1001
   */
  checkTemplateId?: string;
  /**
   * @remarks
   * The validation rule type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * - 3: custom comparison.
   * - 4: full-text comparison.
   * - 5: null value ratio comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The batch concurrency.
   * 
   * @example
   * 5
   */
  concurrency?: number;
  /**
   * @remarks
   * The scheduling cycle expression (cron expression).
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronExp?: string;
  /**
   * @remarks
   * The task configuration table.
   */
  dataCheckConfig?: GetDataCheckTaskConfigResponseBodyDataDataCheckConfig[];
  /**
   * @remarks
   * The destination data source ID.
   * 
   * @example
   * 2001
   */
  dstDsId?: string;
  /**
   * @remarks
   * The destination data source name.
   * 
   * @example
   * ds_demo
   */
  dstDsName?: string;
  /**
   * @remarks
   * The destination data source type.
   * 
   * @example
   * Hive
   */
  dstDsType?: string;
  /**
   * @remarks
   * The ID of the destination verification engine.
   * 
   * @example
   * 2001
   */
  dstEngineId?: string;
  /**
   * @remarks
   * The name of the destination verification engine.
   * 
   * @example
   * engine_demo
   */
  dstEngineName?: string;
  /**
   * @remarks
   * The type of the destination verification engine.
   * 
   * @example
   * Tez
   */
  dstEngineType?: string;
  /**
   * @remarks
   * The execution type. Valid values:
   * - 0: immediate execution
   * - 1: scheduled execution
   * 
   * @example
   * 0
   */
  executeType?: number;
  /**
   * @remarks
   * The count mode. Valid values:
   * - 0: count by partition
   * - 1: count the entire table
   * 
   * @example
   * 0
   */
  fullTableCount?: number;
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
   * Indicates whether the template is a built-in template. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  isBuiltin?: number;
  /**
   * @remarks
   * Indicates whether scheduling is enabled. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  isScheduled?: number;
  /**
   * @remarks
   * Indicates whether the task is on the whitelist. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  isWhiteList?: number;
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
   * The ID of the scheduled task (scheduling ID).
   * 
   * @example
   * 1001
   */
  scheduleId?: number;
  /**
   * @remarks
   * The scope filter JSON data.
   */
  scopeFilter?: GetDataCheckTaskConfigResponseBodyDataScopeFilter;
  /**
   * @remarks
   * The source node parameter settings (source execute parameters).
   * 
   * @example
   * {}
   */
  sourceGlobalParams?: string;
  /**
   * @remarks
   * The ID of the source data source.
   * 
   * @example
   * 1001
   */
  srcDsId?: string;
  /**
   * @remarks
   * The name of the source data source.
   * 
   * @example
   * ds_demo
   */
  srcDsName?: string;
  /**
   * @remarks
   * The type of the source data source.
   * 
   * @example
   * Hive
   */
  srcDsType?: string;
  /**
   * @remarks
   * The ID of the source verification engine.
   * 
   * @example
   * 1001
   */
  srcEngineId?: string;
  /**
   * @remarks
   * The name of the source verification engine.
   * 
   * @example
   * engine_demo
   */
  srcEngineName?: string;
  /**
   * @remarks
   * The type of the source verification engine.
   * 
   * @example
   * Tez
   */
  srcEngineType?: string;
  /**
   * @remarks
   * Indicates whether to start the task immediately. Valid values:
   * - 0: No.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  startImmediately?: number;
  /**
   * @remarks
   * The destination node parameter settings (destination execute parameters).
   * 
   * @example
   * {}
   */
  targetGlobalParams?: string;
  /**
   * @remarks
   * The regular expression information of the verification task.
   * 
   * @example
   * lhm|lhm_dw|*
   */
  taskConfigInfo?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Data validation node description
   */
  taskDescription?: string;
  /**
   * @remarks
   * The task ID, which uniquely identifies a task.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The parameter creation mode. Valid values:
   * - 0: fine-grained creation on a per-table basis
   * - 1: batch creation with the same pattern
   * 
   * @example
   * 0
   */
  taskMode?: number;
  /**
   * @remarks
   * The task name. When used as a query condition, fuzzy matching with % is supported (SQL syntax).
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  /**
   * @remarks
   * The name of the verification template.
   * 
   * @example
   * Data volume verification template
   */
  templateName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The total data volume comparison threshold.
   * 
   * @example
   * 0.5
   */
  totalCountThreshold?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 10001
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkGlobalParams: 'checkGlobalParams',
      checkTemplateId: 'checkTemplateId',
      checkType: 'checkType',
      concurrency: 'concurrency',
      cronExp: 'cronExp',
      dataCheckConfig: 'dataCheckConfig',
      dstDsId: 'dstDsId',
      dstDsName: 'dstDsName',
      dstDsType: 'dstDsType',
      dstEngineId: 'dstEngineId',
      dstEngineName: 'dstEngineName',
      dstEngineType: 'dstEngineType',
      executeType: 'executeType',
      fullTableCount: 'fullTableCount',
      groupCountThreshold: 'groupCountThreshold',
      isBuiltin: 'isBuiltin',
      isScheduled: 'isScheduled',
      isWhiteList: 'isWhiteList',
      requestId: 'requestId',
      scheduleId: 'scheduleId',
      scopeFilter: 'scopeFilter',
      sourceGlobalParams: 'sourceGlobalParams',
      srcDsId: 'srcDsId',
      srcDsName: 'srcDsName',
      srcDsType: 'srcDsType',
      srcEngineId: 'srcEngineId',
      srcEngineName: 'srcEngineName',
      srcEngineType: 'srcEngineType',
      startImmediately: 'startImmediately',
      targetGlobalParams: 'targetGlobalParams',
      taskConfigInfo: 'taskConfigInfo',
      taskDescription: 'taskDescription',
      taskId: 'taskId',
      taskMode: 'taskMode',
      taskName: 'taskName',
      templateName: 'templateName',
      tenantId: 'tenantId',
      totalCountThreshold: 'totalCountThreshold',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkGlobalParams: 'string',
      checkTemplateId: 'string',
      checkType: 'number',
      concurrency: 'number',
      cronExp: 'string',
      dataCheckConfig: { 'type': 'array', 'itemType': GetDataCheckTaskConfigResponseBodyDataDataCheckConfig },
      dstDsId: 'string',
      dstDsName: 'string',
      dstDsType: 'string',
      dstEngineId: 'string',
      dstEngineName: 'string',
      dstEngineType: 'string',
      executeType: 'number',
      fullTableCount: 'number',
      groupCountThreshold: 'number',
      isBuiltin: 'number',
      isScheduled: 'number',
      isWhiteList: 'number',
      requestId: 'string',
      scheduleId: 'number',
      scopeFilter: GetDataCheckTaskConfigResponseBodyDataScopeFilter,
      sourceGlobalParams: 'string',
      srcDsId: 'string',
      srcDsName: 'string',
      srcDsType: 'string',
      srcEngineId: 'string',
      srcEngineName: 'string',
      srcEngineType: 'string',
      startImmediately: 'number',
      targetGlobalParams: 'string',
      taskConfigInfo: 'string',
      taskDescription: 'string',
      taskId: 'number',
      taskMode: 'number',
      taskName: 'string',
      templateName: 'string',
      tenantId: 'string',
      totalCountThreshold: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataCheckConfig)) {
      $dara.Model.validateArray(this.dataCheckConfig);
    }
    if(this.scopeFilter && typeof (this.scopeFilter as any).validate === 'function') {
      (this.scopeFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTaskConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For the field structure, see the descriptions of child fields.
   */
  data?: GetDataCheckTaskConfigResponseBodyData;
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
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for troubleshooting.
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
      data: GetDataCheckTaskConfigResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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


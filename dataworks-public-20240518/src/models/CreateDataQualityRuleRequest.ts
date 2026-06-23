// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleRequestCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For a fluctuation-type rule, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01 
   * - Fluctuation drops below -0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation: abs($checkValue) > 0.01
   * 
   * For a fixed-value type rule, you can also use an expression to configure the threshold. If both are configured at the same time, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.05
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator:
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For a fluctuation-type rule, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01 
   * - Fluctuation drops below -0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation: abs($checkValue) > 0.01
   * 
   * For a fixed-value type rule, you can also use an expression to configure the threshold. If both are configured at the same time, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue <= 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator:
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For a fluctuation-type rule, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation rises above 0.01: $checkValue > 0.01 
   * - Fluctuation drops below -0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation: abs($checkValue) > 0.01
   * 
   * For a fixed-value type rule, you can also use an expression to configure the threshold. If both are configured at the same time, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator:
   * - \\>
   * - \\>=
   * - \\<
   * - \\<=
   * - !=
   * - =
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for a critical warning.
   */
  critical?: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for a normal warning.
   */
  warned?: CreateDataQualityRuleRequestCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical,
      expected: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected,
      warned: CreateDataQualityRuleRequestCheckingConfigThresholdsWarned,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.expected && typeof (this.expected as any).validate === 'function') {
      (this.expected as any).validate();
    }
    if(this.warned && typeof (this.warned as any).validate === 'function') {
      (this.warned as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds require querying for reference samples and then summarizing the values of the reference samples to derive the threshold to be compared. An expression is used here to represent the query method for the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: CreateDataQualityRuleRequestCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. You do not need to specify this parameter when a template is used.
   * - Fixed
   * - Fluctation
   * - FluctationDiscreate
   * - Auto
   * - Average
   * - Variance
   * 
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      thresholds: 'Thresholds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
      thresholds: CreateDataQualityRuleRequestCheckingConfigThresholds,
      type: 'string',
    };
  }

  validate() {
    if(this.thresholds && typeof (this.thresholds as any).validate === 'function') {
      (this.thresholds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * For a custom SQL rule, you must specify an SQL statement to filter problematic data.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The handler type:
   * - SaveErrorData
   * 
   * @example
   * SaveErrorData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorDataFilter: 'ErrorDataFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDataFilter: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the metric to be sampled. You do not need to specify this parameter when a template is used.
   * - Count: the number of rows in the table.
   * - Min: the minimum value of the field.
   * - Max: the maximum value of the field.
   * - Avg: the average value of the field.
   * - DistinctCount: the number of distinct values of the field.
   * - DistinctPercent: the ratio of the number of distinct values of the field to the number of data rows.
   * - DuplicatedCount: the number of duplicate values of the field.
   * - DuplicatedPercent: the ratio of the number of duplicate values of the field to the number of data rows.
   * - TableSize: the size of the table.
   * - NullValueCount: the number of rows in which the field is null.
   * - NullValuePercent: the ratio of rows in which the field is null.
   * - GroupCount: the values aggregated by field value and the corresponding number of data rows for each value.
   * - CountNotIn: the number of rows whose enum values do not match.
   * - CountDistinctNotIn: the number of distinct values that do not match the enum values.
   * - UserDefinedSql: collects samples by using a custom SQL statement.
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required during sample collection.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The condition used to perform a secondary filter on the irrelevant data during sampling. The maximum length is 16777215 characters.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements to be inserted and executed before the sampling statement is executed. The maximum length is 1000 characters. Only MaxCompute is supported.
   * 
   * @example
   * SET odps.sql.udf.timeout=600s; 
   * SET odps.sql.python.version=cp27;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      samplingFilter: 'SamplingFilter',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      samplingFilter: 'string',
      settingConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequestTarget extends $dara.Model {
  /**
   * @remarks
   * For a table-type dataset, the type of database to which the table belongs.
   * - maxcompute
   * - emr
   * - cdh
   * - hologres
   * - analyticdb_for_postgresql
   * - analyticdb_for_mysql
   * - starrocks
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The partition settings of the partitioned table.
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The unique ID of the table in Data Map on which the rule operates.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitored object.
   * 
   * - Table
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      partitionSpec: 'PartitionSpec',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      partitionSpec: 'string',
      tableGuid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: CreateDataQualityRuleRequestCheckingConfig;
  /**
   * @remarks
   * The description of the rule. The maximum length is 500 characters.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the data quality rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of issue handlers for the data quality rule check.
   */
  errorHandlers?: CreateDataQualityRuleRequestErrorHandlers[];
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10726
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: CreateDataQualityRuleRequestSamplingConfig;
  /**
   * @remarks
   * The severity of the rule for the business (corresponding to the strong/weak rule on the page). Valid values:
   * - Normal
   * - High
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The object monitored by the rule.
   */
  target?: CreateDataQualityRuleRequestTarget;
  /**
   * @remarks
   * The unique identifier of the rule template that the rule references.
   * 
   * @example
   * SYSTEM:table:table_count:fixed
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      description: 'Description',
      enabled: 'Enabled',
      errorHandlers: 'ErrorHandlers',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: CreateDataQualityRuleRequestCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': CreateDataQualityRuleRequestErrorHandlers },
      name: 'string',
      projectId: 'number',
      samplingConfig: CreateDataQualityRuleRequestSamplingConfig,
      severity: 'string',
      target: CreateDataQualityRuleRequestTarget,
      templateCode: 'string',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
    }
    if(Array.isArray(this.errorHandlers)) {
      $dara.Model.validateArray(this.errorHandlers);
    }
    if(this.samplingConfig && typeof (this.samplingConfig as any).validate === 'function') {
      (this.samplingConfig as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


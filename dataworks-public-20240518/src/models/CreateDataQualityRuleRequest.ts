// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleRequestCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * You can also use an expression to configure the threshold for fixed value rules. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.05
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
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
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * You can also use an expression to configure the threshold for fixed value rules. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue <= 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
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
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * You can also use an expression to configure the threshold for fixed value rules. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
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
   * The threshold settings for critical warnings.
   */
  critical?: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for common warnings.
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
   * For some types of thresholds, reference samples must be queried, and the values of the reference samples are aggregated to obtain the threshold for comparison. This parameter specifies an expression that represents the query method for the reference samples.
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
   * The threshold calculation method. This parameter is not required when a template is used. Valid values:
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
   * If the rule is a custom SQL rule, you must specify an SQL statement to filter the problematic data.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The handler type. Valid values:
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
   * The name of the sampling metric. This parameter is not required when a template is used. Valid values:
   * - Count: the number of rows in the table.
   * - Min: the minimum value of the field.
   * - Max: the maximum value of the field.
   * - Avg: the average value of the field.
   * - DistinctCount: the number of unique values in the field.
   * - DistinctPercent: the ratio of the number of unique values in the field to the total number of rows.
   * - DuplicatedCount: the number of duplicate values in the field.
   * - DuplicatedPercent: the ratio of the number of duplicate values in the field to the total number of rows.
   * - TableSize: the size of the table.
   * - NullValueCount: the number of rows where the field is null.
   * - NullValuePercent: the ratio of rows where the field is null.
   * - GroupCount: the number of rows corresponding to each value after aggregation by field value.
   * - CountNotIn: the number of rows that do not match the enumerated values.
   * - CountDistinctNotIn: the number of unique values that do not match the enumerated values.
   * - UserDefinedSql: sample collection by using custom SQL statements.
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sample collection.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The conditions used to filter out unneeded data during sampling. The conditions can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements that are inserted and executed before the sampling statements are executed. The statements can be up to 1,000 characters in length. Only MaxCompute is supported.
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
   * The type of the database to which the table belongs. This parameter is required when the dataset is of the table type. Valid values:
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
   * The unique ID of the table to which the rule applies in Data Map.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The monitored object type. Valid values:
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
   * The description of the rule. The description can be up to 500 characters in length.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of handlers for quality rule check issues.
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
   * The severity level of the rule for business operations, which corresponds to strong and weak rules on the page. Valid values:
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
   * The unique identifier of the rule template referenced by the rule.
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


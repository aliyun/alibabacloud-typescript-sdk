// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleRequestCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Example:
   * 
   * *   $checkValue > 0.01
   * *   $checkValue < -0.01
   * *   abs($checkValue) > 0.01
   * 
   * If the template specified by the TemplateCode parameter is about fixed value, you can also use an expression to represent the threshold. If you configure the Expression, Operator, and Value parameters for the threshold at the same time, the Expression parameter takes precedence over the Operator and Value parameters.
   * 
   * @example
   * $checkValue > 0.05
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * 
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
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
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Example:
   * 
   * *   $checkValue > 0.01
   * *   $checkValue < -0.01
   * *   abs($checkValue) > 0.01
   * 
   * If the template specified by the TemplateCode parameter is about fixed value, you can also use an expression to represent the threshold. If you configure the Expression, Operator, and Value parameters for the threshold at the same time, the Expression parameter takes precedence over the Operator and Value parameters.
   * 
   * @example
   * $checkValue <= 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * 
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
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
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Example:
   * 
   * *   $checkValue > 0.01
   * *   $checkValue < -0.01
   * *   abs($checkValue) > 0.01
   * 
   * If the template specified by the TemplateCode parameter is about fixed value, you can also use an expression to represent the threshold. If you configure the Expression, Operator, and Value parameters for the threshold at the same time, the Expression parameter takes precedence over the Operator and Value parameters.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * 
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
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
   * The threshold settings for critical alerts.
   */
  critical?: CreateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: CreateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
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
   * The method that is used to query the referenced samples. To obtain some types of thresholds, you need to query reference samples and perform aggregate operations on the reference values. In this example, an expression is used to specify the query method of referenced samples.
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
   * The method that is used to calculate a threshold. You can leave this parameter empty if you use a rule template. Valid values:
   * 
   * *   Fixed
   * *   Fluctation
   * *   FluctationDiscreate
   * *   Auto
   * *   Average
   * *   Variance
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
   * The SQL statement that is used to filter failed tasks. If you define the rule by using custom SQL statements, you must specify an SQL statement to filter failed tasks.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   SaveErrorData
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
   * The metrics used for sampling. You can leave this parameter empty if you use a rule template. Valid values:
   * 
   * *   Count: the number of rows in the table.
   * *   Min: the minimum value of the field.
   * *   Max: the maximum value of the field.
   * *   Avg: the average value of the field.
   * *   DistinctCount: the number of unique values of the field after deduplication.
   * *   DistinctPercent: the proportion of the number of unique values of the field after deduplication to the number of rows in the table.
   * *   DuplicatedCount: the number of duplicated values of the field.
   * *   DuplicatedPercent: the proportion of the number of duplicated values of the field to the number of rows in the table.
   * *   TableSize: the table size.
   * *   NullValueCount: the number of rows in which the field value is null.
   * *   NullValuePercent: the proportion of the number of rows in which the field value is null to the number of rows in the table.
   * *   GroupCount: the field value and the number of rows for each field value.
   * *   CountNotIn: the number of rows in which the field values are different from the referenced values that you specified in the rule.
   * *   CountDistinctNotIn: the number of unique values that are different from the referenced values that you specified in the rule after deduplication.
   * *   UserDefinedSql: specifies that data is sampled by executing custom SQL statements.
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sampling.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The statements that are used to filter unnecessary data during sampling. The statements can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The statements that are used to configure the parameters required for sampling before you execute the sampling statements. The statements can be up to 1,000 characters in length. Only the MaxCompute database is supported.
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
   * The type of the database to which the table belongs. Valid values:
   * 
   * *   maxcompute
   * *   emr
   * *   cdh
   * *   hologres
   * *   analyticdb_for_postgresql
   * *   analyticdb_for_mysql
   * *   starrocks
   * 
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @remarks
   * The configuration of the partitioned table.
   * 
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @remarks
   * The ID of the table that is limited by the rule in Data Map.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitored object. Valid values:
   * 
   * *   Table
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
   * The check settings for sample data.
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
   * Specifies whether to enable the monitoring rule.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The operations that you can perform after the rule-based check fails.
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
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10726
   */
  projectId?: number;
  /**
   * @remarks
   * The sampling settings.
   */
  samplingConfig?: CreateDataQualityRuleRequestSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * *   Normal
   * *   High
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The monitored object of the rule.
   */
  target?: CreateDataQualityRuleRequestTarget;
  /**
   * @remarks
   * The ID of the template used by the rule.
   * 
   * @example
   * system::user_defined
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


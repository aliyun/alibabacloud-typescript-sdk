// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. For fluctuation rules, you must use an expression to specify the fluctuation threshold. Examples:
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over the Operator and Value parameters.
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

export class UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. For fluctuation rules, you must use an expression to specify the fluctuation threshold. Examples:
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over the Operator and Value parameters.
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
   * - <
   * - <=
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

export class UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression. For fluctuation rules, you must use an expression to specify the fluctuation threshold. Examples:
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over the Operator and Value parameters.
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

export class UpdateDataQualityRuleRequestCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical warnings.
   */
  critical?: UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for common warnings.
   */
  warned?: UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical,
      expected: UpdateDataQualityRuleRequestCheckingConfigThresholdsExpected,
      warned: UpdateDataQualityRuleRequestCheckingConfigThresholdsWarned,
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

export class UpdateDataQualityRuleRequestCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * For some types of thresholds, reference samples must be queried, and the values of the reference samples are aggregated to obtain the threshold for comparison. This parameter uses an expression to specify the query method for the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: UpdateDataQualityRuleRequestCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. This parameter is optional when a template is used. Valid values:
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
      thresholds: UpdateDataQualityRuleRequestCheckingConfigThresholds,
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

export class UpdateDataQualityRuleRequestErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * If the rule is a custom SQL rule, you must specify an SQL statement to filter the error data.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * The type of the error handler. Valid values:
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

export class UpdateDataQualityRuleRequestSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric. This parameter is optional when a template is used. Valid values:
   * - Count: number of rows in the table
   * - Min: minimum value of the field
   * - Max: maximum value of the field
   * - Avg: average value of the field
   * - DistinctCount: number of unique values in the field
   * - DistinctPercent: ratio of the number of unique values in the field to the number of data rows
   * - DuplicatedCount: number of duplicate values in the field
   * - DuplicatedPercent: ratio of the number of duplicate values in the field to the number of data rows
   * - TableSize: size of the table
   * - NullValueCount: number of rows where the field is null
   * - NullValuePercent: ratio of rows where the field is null
   * - GroupCount: number of data rows corresponding to each value after aggregation by field value
   * - CountNotIn: number of rows that do not match the enumerated values
   * - CountDistinctNotIn: number of unique values that do not match the enumerated values
   * - UserDefinedSql: sample collection by using custom SQL statements
   * 
   * @example
   * Min
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
   * The condition used to filter out unneeded data during sampling. It can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements that are inserted and executed before the sampling statements are executed. It can be up to 1,000 characters in length. Only MaxCompute is supported.
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

export class UpdateDataQualityRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: UpdateDataQualityRuleRequestCheckingConfig;
  /**
   * @remarks
   * The description of the rule. It can be up to 500 characters in length.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of error handlers for quality rule check issues.
   */
  errorHandlers?: UpdateDataQualityRuleRequestErrorHandlers[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks. It can be up to 255 characters in length.
   * 
   * @example
   * Table cannot be empty
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Configuration page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: UpdateDataQualityRuleRequestSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to the strong or weak rule on the page. Valid values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
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
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      severity: 'Severity',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: UpdateDataQualityRuleRequestCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': UpdateDataQualityRuleRequestErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: UpdateDataQualityRuleRequestSamplingConfig,
      severity: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


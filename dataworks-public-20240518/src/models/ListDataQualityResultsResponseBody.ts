// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The final value used for comparison with the threshold.
   * 
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @remarks
   * The referenced sample value used as the baseline for calculating the checked value.
   * 
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * The final comparison result status. Valid values:
   * - Error
   * - Passed
   * - Warned
   * - Critical
   * 
   * @example
   * Passed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * For fluctuation rules, you must use an expression to represent the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of fluctuation rate: abs($checkValue) > 0.01
   * 
   * For fixed value rules, you can also use an expression to configure the threshold. If both are configured, the expression takes precedence over Operator and Value.
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical warnings.
   */
  critical?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for common warnings.
   */
  warned?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical,
      expected: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected,
      warned: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned,
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The expression used to query reference samples for certain types of thresholds. The values of the reference samples are aggregated to obtain the threshold for comparison.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds;
  /**
   * @remarks
   * The threshold calculation method. Valid values:
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
      thresholds: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds,
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * The SQL statement specified by the user to filter error data for custom SQL rules.
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric. Valid values:
   * - Count: The number of rows in the table.
   * - Min: The minimum value of the field.
   * - Max: The maximum value of the field.
   * - Avg: The average value of the field.
   * - DistinctCount: The number of unique values in the field.
   * - DistinctPercent: The ratio of unique values to the total number of rows in the field.
   * - DuplicatedCount: The number of duplicate values in the field.
   * - DuplicatedPercent: The ratio of duplicate values to the total number of rows in the field.
   * - TableSize: The table size.
   * - NullValueCount: The number of rows with null values in the field.
   * - NullValuePercent: The ratio of null values in the field.
   * - GroupCount: The number of rows corresponding to each value after aggregation by field value.
   * - CountNotIn: The number of rows that do not match the enumerated values.
   * - CountDistinctNotIn: The number of unique values that do not match the enumerated values.
   * - UserDefinedSql: Sample collection through custom SQL.
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
   * { "columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @remarks
   * The conditions used to filter out unneeded data during sampling. It can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements inserted before the sampling statement is executed. It can be up to 1,000 characters in length. Only MaxCompute is supported.
   * 
   * @example
   * SET odps.sql.udf.timeout=600s;
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget extends $dara.Model {
  /**
   * @remarks
   * The database type of the table dataset. Valid values:
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
   * The unique ID of the table in DataWorks Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The type of the monitored object. Valid values:
   * - Table
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      tableGuid: 'TableGuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig;
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
   * The error handlers for data quality rule checks.
   */
  errorHandlers?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 100001
   */
  id?: number;
  /**
   * @remarks
   * The rule name. The name can contain digits, letters, Chinese characters, and half-width or full-width punctuation marks. It can be up to 255 characters in length.
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for the business, which corresponds to strong and weak rules on the page. Valid values:
   * - High
   * - Normal
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The object monitored by the rule.
   */
  target?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget;
  /**
   * @remarks
   * The code of the rule template referenced when the rule was created.
   * 
   * @example
   * SYSTEM:user_defined_sql
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
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig,
      severity: 'string',
      target: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget,
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResults extends $dara.Model {
  /**
   * @remarks
   * The time when the check result was generated.
   * 
   * @example
   * 1708284916414
   */
  createTime?: number;
  /**
   * @remarks
   * The details of this check.
   */
  details?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails[];
  /**
   * @remarks
   * The check result ID.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * The snapshot of the rule configuration at the start of the check.
   */
  rule?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule;
  /**
   * @remarks
   * The sample value used for this check.
   * 
   * @example
   * [
   *   {
   *     "gender": "male",
   *     "_count": 100
   *   }, {
   *     "gender": "female",
   *     "_count": 100
   *   }
   * ]
   */
  sample?: string;
  /**
   * @remarks
   * The status of the check result. Valid values:
   * - Running
   * - Error
   * - Passed
   * - Warned
   * - Critical
   * 
   * @example
   * Passed
   */
  status?: string;
  /**
   * @remarks
   * The ID of the data quality evaluation task instance.
   * 
   * @example
   * 200001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      details: 'Details',
      id: 'Id',
      rule: 'Rule',
      sample: 'Sample',
      status: 'Status',
      taskInstanceId: 'TaskInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      details: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails },
      id: 'number',
      rule: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule,
      sample: 'string',
      status: 'string',
      taskInstanceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of data quality check results.
   */
  dataQualityResults?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResults[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityResults: 'DataQualityResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityResults: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResults },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityResults)) {
      $dara.Model.validateArray(this.dataQualityResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated data quality check results.
   */
  pagingInfo?: ListDataQualityResultsResponseBodyPagingInfo;
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 691CA452-D37A-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataQualityResultsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


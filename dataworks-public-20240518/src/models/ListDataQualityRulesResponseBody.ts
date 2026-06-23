// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * Threshold expression.
   * 
   * Fluctuation rate type rules must use the expression method to indicate the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value type rules can also configure thresholds using expressions. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator.
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
   * Threshold value.
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * Threshold expression.
   * 
   * Fluctuation rate type rules must use the expression method to indicate the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value type rules can also configure thresholds using expressions. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator.
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
   * Threshold value.
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * Threshold expression.
   * 
   * Fluctuation rate type rules must use the expression method to indicate the fluctuation threshold. Examples:
   * 
   * - Fluctuation increase greater than 0.01: $checkValue > 0.01 
   * - Fluctuation decrease greater than 0.01: $checkValue < -0.01 
   * - Absolute value of the fluctuation rate: abs($checkValue) > 0.01
   * 
   * Fixed value type rules can also configure thresholds using expressions. If both are configured, the expression takes precedence over Operator and Value.
   * 
   * @example
   * $checkValue > 0.01
   */
  expression?: string;
  /**
   * @remarks
   * Comparison operator.
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
   * Threshold value.
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * Threshold settings for critical warnings.
   */
  critical?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * Expected threshold settings.
   */
  expected?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * Threshold settings for normal warnings.
   */
  warned?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical,
      expected: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected,
      warned: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned,
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds require querying some reference samples, then aggregating the values of the reference samples to obtain the threshold for comparison. An expression is used here to represent the query method for the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * Threshold settings.
   */
  thresholds?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds;
  /**
   * @remarks
   * Threshold calculation method.
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
      thresholds: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds,
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * For custom SQL rules, the user needs to specify SQL to filter problem data.
   * 
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
   * @remarks
   * Handler type:
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * Sampling metric name.
   * - Count: number of table rows.
   * - Min: minimum value of the field.
   * - Max: maximum value of the field.
   * - Avg: average value of the field.
   * - DistinctCount: number of distinct values of the field.
   * - DistinctPercent: ratio of the number of distinct values of the field to the number of data rows.
   * - DuplicatedCount: number of duplicate values of the field.
   * - DuplicatedPercent: ratio of the number of duplicate values of the field to the number of data rows.
   * - TableSize: table size.
   * - NullValueCount: number of rows where the field value is null.
   * - NullValuePercent: percentage of rows where the field value is null.
   * - GroupCount: each value and its corresponding number of data rows after aggregation by field value.
   * - CountNotIn: number of rows whose enumerated values do not match.
   * - CountDistinctNotIn: number of distinct values whose enumerated values do not match.
   * - UserDefinedSql: sample collection via custom SQL.
   * 
   * @example
   * Max
   */
  metric?: string;
  /**
   * @remarks
   * Parameters required during sample collection.
   * 
   * @example
   * { "Columns": [ "id", "name" ] , "SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * Condition for the secondary filtering of data that is not of concern during sampling. Maximum length: 16,777,215 characters.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * Runtime parameter setting statements inserted and executed before the sampling statement is actually executed. Maximum length: 1,000 characters. Currently only MaxCompute is supported.
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget extends $dara.Model {
  /**
   * @remarks
   * For table-type datasets, the database type to which the table belongs.
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
   * Unique ID of the table to which the rule applies in Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * Type of the monitored object.
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRules extends $dara.Model {
  /**
   * @remarks
   * Sample validation settings.
   */
  checkingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig;
  /**
   * @remarks
   * Rule description. Maximum length: 500 characters.
   * 
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @remarks
   * Whether the data quality rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * List of issue handlers for data quality rule validation.
   */
  errorHandlers?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 22130
   */
  id?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * The table cannot be empty.
   */
  name?: string;
  /**
   * @remarks
   * DataWorks workspace ID.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * Settings required for sample collection.
   */
  samplingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * Severity level of the rule for the business (corresponding to strong/weak rules on the page). Valid enumerated values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * Object monitored by the rule.
   */
  target?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget;
  /**
   * @remarks
   * Unique identifier of the rule template referenced by the rule.
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
      checkingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig,
      severity: 'string',
      target: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget,
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

export class ListDataQualityRulesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * Specific rule list.
   */
  dataQualityRules?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRules[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRules: { 'type': 'array', 'itemType': ListDataQualityRulesResponseBodyPagingInfoDataQualityRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRules)) {
      $dara.Model.validateArray(this.dataQualityRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Paginated query result of the rule list.
   */
  pagingInfo?: ListDataQualityRulesResponseBodyPagingInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
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
      pagingInfo: ListDataQualityRulesResponseBodyPagingInfo,
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


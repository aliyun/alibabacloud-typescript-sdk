// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The value that is used for comparison with the threshold.
   * 
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @remarks
   * The value that is calculated based on sample data. The value serves as a baseline value during the calculation of the value of the CheckedValue parameter.
   * 
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * The comparison result between the value of CheckedValue and the threshold. Valid values:
   * 
   * *   Error
   * *   Passed
   * *   Warned
   * *   Critical
   * 
   * @example
   * PASSED
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
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Examples:
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Examples:
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * If the template specified by the TemplateCode parameter is about fluctuation, you must use an expression to represent the threshold for fluctuation. Examples:
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

export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
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
   * The method that is used to query the referenced samples. To obtain some types of thresholds, you need to query reference samples and perform aggregate operations on the reference values. In this example, an expression is used to indicate the query method of referenced samples.
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
   * 
   * *   Fixed
   * *   Fluctation
   * *   FluctationDiscreate
   * *   Auto
   * *   Average
   * *   Variance
   * 
   * @example
   * FIXED
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
   * The SQL statement that is used to filter failed tasks. If the rule is defined by custom SQL statements, you must specify an SQL statement to filter failed tasks.
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
   * SAVE_ERROR_DATA
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
   * The metrics used for sampling. Valid values:
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
   * *   UserDefinedSql: indicates that data is sampled by executing custom SQL statements.
   * 
   * @example
   * COUNT
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sampling.
   * 
   * @example
   * { "columns": [ "id", "name" ] }
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
   * MAX_COMPUTE
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the table in Data Map.
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
   * TABLE
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
   * The check settings for sample data.
   */
  checkingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleCheckingConfig;
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
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The operations that you can perform after the rule-based check fails.
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
   * The name of the rule. The name can be up to 255 characters in length and can contain digits, letters, and punctuation marks.
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
   * The sampling settings.
   */
  samplingConfig?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * *   High
   * *   Normal
   * 
   * @example
   * NORMAL
   */
  severity?: string;
  /**
   * @remarks
   * The monitored object of the rule.
   */
  target?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRuleTarget;
  /**
   * @remarks
   * The code of the template that is referenced when you create a rule.
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
   * The time when the data quality check result was generated.
   * 
   * @example
   * 1708284916414
   */
  createTime?: number;
  /**
   * @remarks
   * The information about the data quality check.
   */
  details?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails[];
  /**
   * @remarks
   * The ID of the check result.
   * 
   * @example
   * 16033
   */
  id?: number;
  /**
   * @remarks
   * The snapshot of the rule configuration when the check starts.
   */
  rule?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsRule;
  /**
   * @remarks
   * The sample values used for the check.
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
   * 
   * *   Running
   * *   Error
   * *   Passed
   * *   Warned
   * *   Critical
   * 
   * @example
   * PASSED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the instance generated by the check.
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
   * The data quality check results.
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
   * The total number of entries returned.
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
   * The pagination information.
   */
  pagingInfo?: ListDataQualityResultsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
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


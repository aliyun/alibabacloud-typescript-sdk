// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical extends $dara.Model {
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected extends $dara.Model {
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsWarned extends $dara.Model {
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical alerts.
   */
  critical?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold setting.
   */
  expected?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal alerts.
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
   * The method that is used to query the referenced samples. To obtain some types of thresholds, you need to query reference values. In this example, an expression is used to indicate the query method of referenced samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfigThresholds;
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
   * The metrics used for sampling. Valid values:
   * 
   * *   Count: the number of rows in the table.
   * *   Min: the minimum value of the field.
   * *   Max: the maximum value of the field.
   * *   Avg: the average value of the field.
   * *   DistinctCount: the number of unique values of the field after deduplication.
   * *   DistinctPercent: the percentage of the number of unique values of the field after deduplication to the number of rows in the table.
   * *   DuplicatedCount: the number of duplicated values in the field.
   * *   DuplicatedPercent: the percentage of the number of duplicated values of the field to the number of rows in the table.
   * *   TableSize: the table size.
   * *   NullValueCount: the number of rows in which the field is set to null.
   * *   NullValuePercent: the percentage of the number of rows in which the field is set to null to the number of rows in the table.
   * *   GroupCount: the field value and the number of rows for each field value.
   * *   CountNotIn: the number of rows in which the field values are different from the referenced values that you specified in the rule.
   * *   CountDistinctNotIn: the number of unique values that are different from the referenced values that you specified in the rule after deduplication.
   * *   UserDefinedSql: indicates that the data is sampled by executing custom SQL statements.
   * 
   * @example
   * Max
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

export class ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget extends $dara.Model {
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
   * The ID of the table that is limited by the rule in Data Map.
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
   * The check settings for sample data.
   */
  checkingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesCheckingConfig;
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
  errorHandlers?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 22130
   */
  id?: number;
  /**
   * @remarks
   * The rule name.
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
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The settings for sampling.
   */
  samplingConfig?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesSamplingConfig;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * 
   * *   Normal
   * *   High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The monitored object of the rule.
   */
  target?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRulesTarget;
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
   * The rules.
   */
  dataQualityRules?: ListDataQualityRulesResponseBodyPagingInfoDataQualityRules[];
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
   * The pagination information.
   */
  pagingInfo?: ListDataQualityRulesResponseBodyPagingInfo;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
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

export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
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

export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
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

export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholds extends $dara.Model {
  /**
   * @remarks
   * The threshold settings for critical warnings.
   */
  critical?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical;
  /**
   * @remarks
   * The expected threshold settings.
   */
  expected?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected;
  /**
   * @remarks
   * The threshold settings for normal warnings.
   */
  warned?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsCritical,
      expected: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsExpected,
      warned: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholdsWarned,
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

export class GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds require querying reference samples and then aggregating the values of the reference samples to derive the threshold for comparison. This field uses an expression to specify how to query the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold settings.
   */
  thresholds?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholds;
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
      thresholds: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfigThresholds,
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

export class GetDataQualityRuleResponseBodyDataQualityRuleErrorHandlers extends $dara.Model {
  /**
   * @remarks
   * The SQL statement specified by the user to filter error data. This is required for custom SQL rules.
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

export class GetDataQualityRuleResponseBodyDataQualityRuleSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric. Valid values:
   * - Count: the number of table rows.
   * - Min: the minimum value of a field.
   * - Max: the maximum value of a field.
   * - Avg: the average value of a field.
   * - DistinctCount: the number of unique values of a field.
   * - DistinctPercent: the ratio of the number of unique values of a field to the number of data rows.
   * - DuplicatedCount: the number of duplicate values of a field.
   * - DuplicatedPercent: the ratio of the number of duplicate values of a field to the number of data rows.
   * - TableSize: the table size.
   * - NullValueCount: the number of rows in which the field is null.
   * - NullValuePercent: the ratio of rows in which the field is null.
   * - GroupCount: the number of data rows for each value after aggregation by field value.
   * - CountNotIn: the number of rows with mismatched enumeration values.
   * - CountDistinctNotIn: the number of unique values with mismatched enumeration values.
   * - UserDefinedSql: sample collection through custom SQL.
   * 
   * @example
   * Max
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
   * The filter condition used to perform secondary filtering on irrelevant data during sampling. The value can be up to 16,777,215 characters in length.
   * 
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
   * @remarks
   * The runtime parameter setting statements that are executed before the sampling statement. The value can be up to 1,000 characters in length. Only MaxCompute is supported.
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

export class GetDataQualityRuleResponseBodyDataQualityRuleTarget extends $dara.Model {
  /**
   * @remarks
   * The database type of the table for a table-type dataset. Valid values:
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
   * The unique ID of the table in Data Map that the rule applies to.
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

export class GetDataQualityRuleResponseBodyDataQualityRule extends $dara.Model {
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfig;
  /**
   * @remarks
   * The rule description. The description can be up to 500 characters in length.
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
   * The list of quality rule check error handlers.
   */
  errorHandlers?: GetDataQualityRuleResponseBodyDataQualityRuleErrorHandlers[];
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 16033
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
   * 1948
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: GetDataQualityRuleResponseBodyDataQualityRuleSamplingConfig;
  /**
   * @remarks
   * The severity level of the rule for business (corresponding to strong and weak rules on the page). Valid values:
   * - Normal
   * - High
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The object monitored by the rule.
   */
  target?: GetDataQualityRuleResponseBodyDataQualityRuleTarget;
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
      target: 'Target',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: GetDataQualityRuleResponseBodyDataQualityRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': GetDataQualityRuleResponseBodyDataQualityRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: GetDataQualityRuleResponseBodyDataQualityRuleSamplingConfig,
      severity: 'string',
      target: GetDataQualityRuleResponseBodyDataQualityRuleTarget,
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

export class GetDataQualityRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule details.
   */
  dataQualityRule?: GetDataQualityRuleResponseBodyDataQualityRule;
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRule: 'DataQualityRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRule: GetDataQualityRuleResponseBodyDataQualityRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityRule && typeof (this.dataQualityRule as any).validate === 'function') {
      (this.dataQualityRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


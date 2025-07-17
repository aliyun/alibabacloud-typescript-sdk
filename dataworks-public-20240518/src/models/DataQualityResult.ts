// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityResultDetails extends $dara.Model {
  /**
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
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

export class DataQualityResultRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DataQualityResultRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DataQualityResultRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DataQualityResultRuleCheckingConfigThresholds extends $dara.Model {
  critical?: DataQualityResultRuleCheckingConfigThresholdsCritical;
  expected?: DataQualityResultRuleCheckingConfigThresholdsExpected;
  warned?: DataQualityResultRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DataQualityResultRuleCheckingConfigThresholdsCritical,
      expected: DataQualityResultRuleCheckingConfigThresholdsExpected,
      warned: DataQualityResultRuleCheckingConfigThresholdsWarned,
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

export class DataQualityResultRuleCheckingConfig extends $dara.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: DataQualityResultRuleCheckingConfigThresholds;
  /**
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
      thresholds: DataQualityResultRuleCheckingConfigThresholds,
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

export class DataQualityResultRuleErrorHandlers extends $dara.Model {
  /**
   * @example
   * SELECT * FROM tb_api_log WHERE id IS NULL
   */
  errorDataFilter?: string;
  /**
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

export class DataQualityResultRuleSamplingConfig extends $dara.Model {
  /**
   * @example
   * Min
   */
  metric?: string;
  /**
   * @example
   * { "Columns": [ "id", "name" ] }
   */
  metricParameters?: string;
  /**
   * @example
   * id IS NULL
   */
  samplingFilter?: string;
  /**
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

export class DataQualityResultRuleTarget extends $dara.Model {
  /**
   * @example
   * maxcompute
   */
  databaseType?: string;
  /**
   * @example
   * ds=$[yyyymmdd-1]
   */
  partitionSpec?: string;
  /**
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
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

export class DataQualityResultRule extends $dara.Model {
  checkingConfig?: DataQualityResultRuleCheckingConfig;
  /**
   * @example
   * this is a odps _sql task
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  errorHandlers?: DataQualityResultRuleErrorHandlers[];
  /**
   * @example
   * 100001
   */
  id?: number;
  /**
   * @example
   * 表不能为空
   */
  name?: string;
  /**
   * @example
   * 100
   */
  projectId?: number;
  samplingConfig?: DataQualityResultRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityResultRuleTarget;
  /**
   * @example
   * SYSTEM:user_defined_sql
   */
  templateCode?: string;
  /**
   * @example
   * 1
   */
  tenantId?: number;
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
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityResultRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityResultRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityResultRuleSamplingConfig,
      severity: 'string',
      target: DataQualityResultRuleTarget,
      templateCode: 'string',
      tenantId: 'number',
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

export class DataQualityResult extends $dara.Model {
  details?: DataQualityResultDetails[];
  /**
   * @example
   * 10001
   */
  id?: number;
  rule?: DataQualityResultRule;
  /**
   * @example
   * [   {     "gender": "male",     "_count": 100   }, {     "gender": "female",     "_count": 100   } ]
   */
  sample?: string;
  /**
   * @example
   * Passed
   */
  status?: string;
  /**
   * @example
   * 20001
   */
  taskInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
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
      details: { 'type': 'array', 'itemType': DataQualityResultDetails },
      id: 'number',
      rule: DataQualityResultRule,
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


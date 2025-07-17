// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityRuleCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @example
   * 波动率类型规则使用，通过表达式来表示波动阈值。如：波动上升大于0.01： $checkValue > 0.01  波动下降大于0.01：$checkValue < -0.01   波动率绝对值：abs($checkValue) > 0.01
   */
  expression?: string;
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

export class DataQualityRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @example
   * 波动率类型规则使用，通过表达式来表示波动阈值。如：波动上升大于0.01： $checkValue > 0.01  波动下降大于0.01：$checkValue < -0.01   波动率绝对值：abs($checkValue) > 0.01
   */
  expression?: string;
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

export class DataQualityRuleCheckingConfigThresholdsWarned extends $dara.Model {
  /**
   * @example
   * 波动率类型规则使用，通过表达式来表示波动阈值。如：波动上升大于0.01： $checkValue > 0.01  波动下降大于0.01：$checkValue < -0.01   波动率绝对值：abs($checkValue) > 0.01
   */
  expression?: string;
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

export class DataQualityRuleCheckingConfigThresholds extends $dara.Model {
  critical?: DataQualityRuleCheckingConfigThresholdsCritical;
  expected?: DataQualityRuleCheckingConfigThresholdsExpected;
  warned?: DataQualityRuleCheckingConfigThresholdsWarned;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      expected: 'Expected',
      warned: 'Warned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DataQualityRuleCheckingConfigThresholdsCritical,
      expected: DataQualityRuleCheckingConfigThresholdsExpected,
      warned: DataQualityRuleCheckingConfigThresholdsWarned,
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

export class DataQualityRuleCheckingConfig extends $dara.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  thresholds?: DataQualityRuleCheckingConfigThresholds;
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
      thresholds: DataQualityRuleCheckingConfigThresholds,
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

export class DataQualityRuleErrorHandlers extends $dara.Model {
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

export class DataQualityRuleSamplingConfig extends $dara.Model {
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

export class DataQualityRuleTarget extends $dara.Model {
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

export class DataQualityRule extends $dara.Model {
  checkingConfig?: DataQualityRuleCheckingConfig;
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
  errorHandlers?: DataQualityRuleErrorHandlers[];
  /**
   * @example
   * 1
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
  samplingConfig?: DataQualityRuleSamplingConfig;
  /**
   * @example
   * High
   */
  severity?: string;
  target?: DataQualityRuleTarget;
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
      checkingConfig: DataQualityRuleCheckingConfig,
      description: 'string',
      enabled: 'boolean',
      errorHandlers: { 'type': 'array', 'itemType': DataQualityRuleErrorHandlers },
      id: 'number',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityRuleSamplingConfig,
      severity: 'string',
      target: DataQualityRuleTarget,
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


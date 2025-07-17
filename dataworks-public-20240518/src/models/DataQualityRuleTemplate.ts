// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityRuleTemplateCheckingConfig extends $dara.Model {
  /**
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @example
   * Fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      referencedSamplesFilter: 'ReferencedSamplesFilter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referencedSamplesFilter: 'string',
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

export class DataQualityRuleTemplateSamplingConfig extends $dara.Model {
  /**
   * @example
   * Min
   */
  metric?: string;
  /**
   * @example
   * { "SQL": "SELECT min(id) from table;" }
   */
  metricParameters?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
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

export class DataQualityRuleTemplate extends $dara.Model {
  checkingConfig?: DataQualityRuleTemplateCheckingConfig;
  code?: string;
  /**
   * @example
   * /ods/订单数据
   */
  directoryPath?: string;
  name?: string;
  projectId?: number;
  samplingConfig?: DataQualityRuleTemplateSamplingConfig;
  tenantId?: number;
  /**
   * @example
   * Project
   */
  visibleScope?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      code: 'Code',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      tenantId: 'TenantId',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: DataQualityRuleTemplateCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: DataQualityRuleTemplateSamplingConfig,
      tenantId: 'number',
      visibleScope: 'string',
    };
  }

  validate() {
    if(this.checkingConfig && typeof (this.checkingConfig as any).validate === 'function') {
      (this.checkingConfig as any).validate();
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


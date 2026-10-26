// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityRuleTemplateCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The expression used to query referenced samples. Some threshold types require querying referenced samples and aggregating their values to derive the comparison threshold.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold calculation method.
   * 
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
   * @remarks
   * The name of the sampled metric.
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
   * { "SQL": "SELECT min(id) from table;" }
   */
  metricParameters?: string;
  /**
   * @remarks
   * The runtime parameter setting statements inserted before the execution of the sampling statement. The maximum length is 1,000 characters. Currently, only MaxCompute is supported.
   * 
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
  /**
   * @remarks
   * The sample check settings.
   */
  checkingConfig?: DataQualityRuleTemplateCheckingConfig;
  /**
   * @remarks
   * The globally unique code of the rule template.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
  /**
   * @remarks
   * The category directory where the custom template is stored. Levels are separated by forward slashes.
   * 
   * @example
   * /ods/OrderData
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the rule template.
   * 
   * @example
   * Table row count check
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * The sample collection settings.
   */
  samplingConfig?: DataQualityRuleTemplateSamplingConfig;
  /**
   * @remarks
   * The DataWorks tenant ID.
   * 
   * @example
   * 1
   */
  tenantId?: number;
  /**
   * @remarks
   * The visibility scope of the template.
   * 
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


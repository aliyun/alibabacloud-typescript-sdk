// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds require you to query reference samples and aggregate the values of the reference samples to obtain the threshold for comparison. An expression is used to indicate the query method of reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold calculation method:
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

export class GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the metric to be sampled:
   * - Count: the number of rows in the table.
   * - Min: the minimum value of the field.
   * - Max: the maximum value of the field.
   * - Avg: the average value of the field.
   * - DistinctCount: the number of distinct values of the field.
   * - DistinctPercent: the ratio of the number of distinct values of the field to the number of data rows.
   * - DuplicatedCount: the number of duplicate values of the field.
   * - DuplicatedPercent: the ratio of the number of duplicate values of the field to the number of data rows.
   * - TableSize: the size of the table.
   * - NullValueCount: the number of rows in which the field is null.
   * - NullValuePercent: the percentage of rows in which the field is null.
   * - GroupCount: the number of data rows corresponding to each value after aggregation by field value.
   * - CountNotIn: the number of rows whose enumerated values do not match.
   * - CountDistinctNotIn: the number of distinct values whose enumerated values do not match.
   * - UserDefinedSql: collects samples by using a custom SQL statement.
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
   * {"SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The runtime parameter setting statements that are inserted and executed before the specific sampling statement is executed. The setting can be a maximum of 1,000 characters in length. Only MaxCompute is supported.
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

export class GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * The sample verification settings.
   */
  checkingConfig?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig;
  /**
   * @remarks
   * The code of the rule template.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
  /**
   * @remarks
   * The category directory in which the custom template is stored. Levels are separated by forward slashes (/). Each level name can be a maximum of 1,024 characters in length and cannot contain whitespace characters or forward slashes (/).
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the rule template. The name can be a combination of digits, letters, Chinese characters, and half-width or full-width punctuation marks. The name can be a maximum of 512 characters in length.
   * 
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 4020
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig;
  /**
   * @remarks
   * The scope in which the template is available:
   * - Tenant: available to the entire tenant.
   * - Project: available only in the current project.
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
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplateSamplingConfig,
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

export class GetDataQualityRuleTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule template.
   */
  dataQualityRuleTemplate?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 691CA452-D37A-4E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRuleTemplate: 'DataQualityRuleTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRuleTemplate: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityRuleTemplate && typeof (this.dataQualityRuleTemplate as any).validate === 'function') {
      (this.dataQualityRuleTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


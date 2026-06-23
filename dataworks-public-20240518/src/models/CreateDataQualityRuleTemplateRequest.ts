// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleTemplateRequestCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some threshold types require querying reference samples and then aggregating the values of those reference samples to derive the threshold used for comparison. An expression is used here to describe how the reference samples are queried.
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

export class CreateDataQualityRuleTemplateRequestSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the metric to sample:
   * - Count: number of table rows
   * - Min: minimum field value
   * - Max: maximum field value
   * - Avg: average field value
   * - DistinctCount: number of distinct field values
   * - DistinctPercent: ratio of the number of distinct field values to the number of data rows
   * - DuplicatedCount: number of duplicate field values
   * - DuplicatedPercent: ratio of the number of duplicate field values to the number of data rows
   * - TableSize: table size
   * - NullValueCount: number of rows where the field is null
   * - NullValuePercent: ratio of rows where the field is null
   * - GroupCount: each value and the corresponding number of data rows after aggregating by field value
   * - CountNotIn: number of rows whose enum value does not match
   * - CountDistinctNotIn: number of distinct values whose enum value does not match
   * - UserDefinedSql: sample collection via a custom SQL statement
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
   * {"SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * Runtime parameter setting statements to be inserted and executed before the sampling statement is executed. The maximum length is 1000 characters. Currently only MaxCompute is supported.
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

export class CreateDataQualityRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The sample validation settings.
   */
  checkingConfig?: CreateDataQualityRuleTemplateRequestCheckingConfig;
  /**
   * @remarks
   * The category directory where the custom template is stored. Hierarchy levels are separated by slashes. Each level name can be up to 1024 characters long and cannot contain whitespace characters or slashes.
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the rule template. It can be a combination of digits, English letters, Chinese characters, and half-width or full-width punctuation marks. The maximum length is 512 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: CreateDataQualityRuleTemplateRequestSamplingConfig;
  /**
   * @remarks
   * The visibility scope of the template:
   * - Tenant: available to the entire tenant
   * - Project: available only in the current project
   * 
   * @example
   * Project
   */
  visibleScope?: string;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
      visibleScope: 'VisibleScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: CreateDataQualityRuleTemplateRequestCheckingConfig,
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: CreateDataQualityRuleTemplateRequestSamplingConfig,
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


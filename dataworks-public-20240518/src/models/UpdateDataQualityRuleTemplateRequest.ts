// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityRuleTemplateRequestCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * For some types of thresholds, you must query reference samples and then aggregate the values of the reference samples to obtain the threshold used for comparison. An expression is used here to indicate the query method of reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The type of the monitored object. Valid values:
   * 
   * - Table
   * 
   * @example
   * Table
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

export class UpdateDataQualityRuleTemplateRequestSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the metric to be sampled. Valid values:
   * - Count: the number of table rows.
   * - Min: the minimum value of a field.
   * - Max: the maximum value of a field.
   * - Avg: the average value of a field.
   * - DistinctCount: the number of distinct values of a field.
   * - DistinctPercent: the ratio of the number of distinct values of a field to the number of data rows.
   * - DuplicatedCount: the number of duplicate values of a field.
   * - DuplicatedPercent: the ratio of the number of duplicate values of a field to the number of data rows.
   * - TableSize: the size of the table.
   * - NullValueCount: the number of rows in which the field is null.
   * - NullValuePercent: the percentage of rows in which the field is null.
   * - GroupCount: the number of data rows corresponding to each value after the field values are aggregated.
   * - CountNotIn: the number of rows whose values do not match the enumerated values.
   * - CountDistinctNotIn: the number of distinct values that do not match the enumerated values.
   * - UserDefinedSql: sample collection by using custom SQL.
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
   * The runtime parameter setting statements that are inserted and executed before the sampling statements are executed. The statements can be up to 1,000 characters in length. Only MaxCompute is supported.
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

export class UpdateDataQualityRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The settings for sample validation.
   */
  checkingConfig?: UpdateDataQualityRuleTemplateRequestCheckingConfig;
  /**
   * @remarks
   * The code of the rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
  /**
   * @remarks
   * The category directory in which the custom template is stored. Levels are separated by forward slashes (/). The name of each level can be up to 1024 characters in length and cannot contain whitespace characters or forward slashes (/).
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the rule template. The name can contain digits, letters, Chinese characters, and half-width and full-width punctuation marks. The name can be up to 512 characters in length.
   * 
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace used for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The settings required for sample collection.
   */
  samplingConfig?: UpdateDataQualityRuleTemplateRequestSamplingConfig;
  static names(): { [key: string]: string } {
    return {
      checkingConfig: 'CheckingConfig',
      code: 'Code',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      projectId: 'ProjectId',
      samplingConfig: 'SamplingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingConfig: UpdateDataQualityRuleTemplateRequestCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: UpdateDataQualityRuleTemplateRequestSamplingConfig,
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


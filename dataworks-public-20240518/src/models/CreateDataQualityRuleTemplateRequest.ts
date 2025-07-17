// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityRuleTemplateRequestCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * The method that is used to query the referenced samples. To obtain some types of thresholds, you need to query reference samples and perform aggregate operations on the reference values. In this example, an expression is used to specify the query method of referenced samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
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
   * *   UserDefinedSql: specifies that data is sampled by executing custom SQL statements.
   * 
   * @example
   * Count
   */
  metric?: string;
  /**
   * @remarks
   * The parameters required for sampling.
   * 
   * @example
   * {"SQL": "select count(1) from table;"}
   */
  metricParameters?: string;
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
   * The check settings for sample data.
   */
  checkingConfig?: CreateDataQualityRuleTemplateRequestCheckingConfig;
  /**
   * @remarks
   * The directory in which the template is stored. Slashes (/) are used to separate directory levels. The name of each directory level can be up to 1,024 characters in length. It cannot contain whitespace characters or slashes (/).
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 512 characters in length and can contain digits, letters, and punctuation marks.
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
   * The sampling settings.
   */
  samplingConfig?: CreateDataQualityRuleTemplateRequestSamplingConfig;
  /**
   * @remarks
   * The applicable scope of the template. Valid values:
   * 
   * *   Tenant: The template is available in all workspaces in the current tenant.
   * *   Project: The template is available only in the current workspace.
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


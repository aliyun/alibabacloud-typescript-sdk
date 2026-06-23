// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds require reference samples to be queried, and then the values of the reference samples are aggregated to obtain the threshold for comparison. An expression is used here to indicate the query method of the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * The threshold calculation method.
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

export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampling metric.
   * - Count: the number of table rows
   * - Min: the minimum value of the field
   * - Max: the maximum value of the field
   * - Avg: the average value of the field
   * - DistinctCount: the number of unique values of the field
   * - DistinctPercent: the ratio of the number of unique values of the field to the number of data rows
   * - DuplicatedCount: the number of duplicate values of the field
   * - DuplicatedPercent: the ratio of the number of duplicate values of the field to the number of data rows
   * - TableSize: the size of the table
   * - NullValueCount: the number of rows in which the field is null
   * - NullValuePercent: the ratio of rows in which the field is null
   * - GroupCount: each value and the corresponding number of data rows after aggregation by field value
   * - CountNotIn: the number of rows in which the enumeration value does not match
   * - CountDistinctNotIn: the number of unique values in which the enumeration value does not match
   * - UserDefinedSql: collect samples by using custom SQL
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
   * {"Sql": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * The runtime parameter setting statements that are inserted and executed before the sampling statement is executed. This parameter can be up to 1,000 characters in length. Currently, only MaxCompute is supported.
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

export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates extends $dara.Model {
  /**
   * @remarks
   * The sample verification settings.
   */
  checkingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig;
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
   * The category directory in which the custom template is stored. Levels are separated by forward slashes (/). Each level name can be up to 1,024 characters in length and cannot contain whitespace characters or slashes.
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the rule template. It can be a combination of digits, letters, Chinese characters, and half-width or full-width punctuation marks, and can be up to 512 characters in length.
   * 
   * @example
   * Table row Count Verification
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
   * The settings required for sample collection.
   */
  samplingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig;
  /**
   * @remarks
   * The available scope of the template:
   * - Tenant: available to all tenants
   * - Project: available only in the current project
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
      checkingConfig: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig,
      code: 'string',
      directoryPath: 'string',
      name: 'string',
      projectId: 'number',
      samplingConfig: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig,
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

export class ListDataQualityRuleTemplatesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of rule templates.
   */
  dataQualityRuleTemplates?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates[];
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
   * The total number of entries.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityRuleTemplates: 'DataQualityRuleTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRuleTemplates: { 'type': 'array', 'itemType': ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRuleTemplates)) {
      $dara.Model.validateArray(this.dataQualityRuleTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataQualityRuleTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated query result of data quality rule templates.
   */
  pagingInfo?: ListDataQualityRuleTemplatesResponseBodyPagingInfo;
  /**
   * @remarks
   * The API request ID.
   * 
   * @example
   * 691CA452-D37A-****
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
      pagingInfo: ListDataQualityRuleTemplatesResponseBodyPagingInfo,
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


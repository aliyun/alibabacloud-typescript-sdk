// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig extends $dara.Model {
  /**
   * @remarks
   * Some types of thresholds need to query some reference samples, and then summarize the values of the reference samples to obtain the threshold for comparison. Here, an expression is used to represent the query method of the reference samples.
   * 
   * @example
   * { "bizdate": [ "-1", "-7", "-1m" ] }
   */
  referencedSamplesFilter?: string;
  /**
   * @remarks
   * Threshold Calculation method
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
   * The name of the sampled metric.
   * - Count: number of table rows
   * - Min: minimum value of the field
   * - Max: The maximum value of the field.
   * - Avg: field mean
   * - DistinctCount: number of unique field values
   * - DistinctPercent: the ratio of the number of unique field values to the number of data rows.
   * - DuplicatedCount: number of duplicate field values
   * - DuplicatedPercent: the ratio of the number of duplicate field values to the number of data rows.
   * - TableSize: table size
   * - NullValueCount: number of rows with empty fields
   * - NullValuePercent: the proportion of fields that are empty.
   * - GroupCount: aggregate each value by field value and the corresponding number of data rows
   * - CountNotIn: the enumerated value does not match the number of rows.
   * - CountDistinctNotIn: the number of unique values that the enumerated values do not match.
   * - UserDefinedSql: use custom SQL to collect samples
   * 
   * @example
   * Max
   */
  metric?: string;
  /**
   * @remarks
   * Parameters required for sample collection
   * 
   * @example
   * {"Sql": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * Before executing the sample statement, insert some runtime parameter setting statements, which can be up to 1000 characters in length. Currently, only MaxCompute are supported.
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
   * Sample verification settings
   */
  checkingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesCheckingConfig;
  /**
   * @remarks
   * Rule template Code
   * 
   * @example
   * USER_DEFINED:123
   */
  code?: string;
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
   * @example
   * Table row Count Verification
   */
  name?: string;
  /**
   * @remarks
   * DataWorks workspace ID
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * Settings required for sample collection
   */
  samplingConfig?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig;
  /**
   * @remarks
   * Available range of templates:
   * - Tenant: all tenants are available
   * - Project: only available in the current Project
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
   * The templates.
   */
  dataQualityRuleTemplates?: ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplates[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries
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
   * The pagination information.
   */
  pagingInfo?: ListDataQualityRuleTemplatesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
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


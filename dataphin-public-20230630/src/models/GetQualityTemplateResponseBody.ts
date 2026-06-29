// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList extends $dara.Model {
  /**
   * @remarks
   * The control type.
   * 
   * @example
   * expression
   */
  componentType?: string;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * col
   */
  name?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      name: 'string',
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

export class GetQualityTemplateResponseBodyQualityTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * The template category. Valid values:
   * - CONSISTENT: consistency.
   * - EFFECTIVE: validity.
   * - TIMELINESE: timeliness.
   * - ACCURATE: accuracy.
   * - UNIQUENESS: uniqueness.
   * - COMPLETENESS: completeness.
   * - STABILITY: stability.
   * - CUSTOM: custom.
   * 
   * @example
   * CONSISTENT
   */
  catalog?: string;
  /**
   * @remarks
   * The display name of the template category.
   * 
   * @example
   * 一致性
   */
  catalogName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The key-value pairs of the rule configuration.
   */
  formPropertyList?: GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList[];
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the template is a system template.
   */
  isSystemTemplate?: boolean;
  /**
   * @remarks
   * The user ID of the last modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the last modifier.
   * 
   * @example
   * test
   */
  modifierName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * Indicates whether all data source types are supported.
   */
  supportAllDataSourceType?: boolean;
  /**
   * @remarks
   * The list of supported data source types, such as MySQL, Oracle, Microsoft SQL Server, MaxCompute, and Hive.
   */
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * The templatetype. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: field null value check.
   * - FIELD_EMPTY_STRING_VALIDATE: field empty character string check.
   * - FIELD_UNIQUE_VALIDATE: field uniqueness check.
   * - FIELD_GROUP_COUNT_VALIDATE: field unique value count check.
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count check.
   * - FUNCTION_TIME_COMPARE: time function comparison.
   * - SINGLE_TABLE_TIME_COMPARE: non-partitioned table time field comparison.
   * - DOUBLE_TABLE_TIME_COMPARE: two-table time field comparison.
   * - FIELD_FORMAT_VALIDATE: field format check.
   * - FIELD_LENGTH_VALIDATE: field length check.
   * - FIELD_VALUE_RANGE_VALIDATE: field value range check.
   * - CODE_TABLE_COMPARE: lookup table reference comparison.
   * - STANDARD_CODE_TABLE_COMPARE: data standard lookup table reference comparison.
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: non-partitioned table field value consistency comparison.
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: non-partitioned table field statistical value consistency comparison.
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: non-partitioned table field business logic consistency comparison.
   * - DOUBLE_TABLE_FIELD_VALUE_COMPARE: two-table field value consistency comparison.
   * - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: two-table field statistical value consistency comparison.
   * - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-source two-table field statistical value consistency comparison.
   * - DOUBLE_TABLE_FIELD_EXP_COMPARE: two-table field business logic consistency comparison.
   * - TABLE_STABILITY_VALIDATE: table stability check.
   * - TABLE_FLUCTUATION_VALIDATE: table fluctuation check.
   * - FIELD_STABILITY_VALIDATE: field stability check.
   * - FIELD_FLUCTUATION_VALIDATE: field fluctuation check.
   * - CUSTOM_STATISTICAL_VALIDATE: custom statistical metric check.
   * - CUSTOM_DATA_DETAILS_VALIDATE: custom data details check.
   * - DATASOURCE_AVAILABLE_CHECK: data source connectivity monitoring.
   * - TABLE_SCHEMA_CHECK: table schema change monitoring.
   * - REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison.
   * - REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value monitoring.
   * - REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-link comparison.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  type?: string;
  /**
   * @remarks
   * The display name of the templatetype.
   * 
   * @example
   * 字段空值校验
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      catalogName: 'CatalogName',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      isSystemTemplate: 'IsSystemTemplate',
      modifier: 'Modifier',
      modifierName: 'ModifierName',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      supportAllDataSourceType: 'SupportAllDataSourceType',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      catalogName: 'string',
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      formPropertyList: { 'type': 'array', 'itemType': GetQualityTemplateResponseBodyQualityTemplateInfoFormPropertyList },
      id: 'number',
      isSystemTemplate: 'boolean',
      modifier: 'string',
      modifierName: 'string',
      modifyTime: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      supportAllDataSourceType: 'boolean',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formPropertyList)) {
      $dara.Model.validateArray(this.formPropertyList);
    }
    if(Array.isArray(this.supportDataSourceTypeList)) {
      $dara.Model.validateArray(this.supportDataSourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The details of the template object.
   */
  qualityTemplateInfo?: GetQualityTemplateResponseBodyQualityTemplateInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      qualityTemplateInfo: 'QualityTemplateInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityTemplateInfo: GetQualityTemplateResponseBodyQualityTemplateInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityTemplateInfo && typeof (this.qualityTemplateInfo as any).validate === 'function') {
      (this.qualityTemplateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


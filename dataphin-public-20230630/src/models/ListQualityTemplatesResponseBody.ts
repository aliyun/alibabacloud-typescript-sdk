// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityTemplatesResponseBodyPageResultQualityTemplateListFormPropertyList extends $dara.Model {
  /**
   * @remarks
   * The type of the control.
   * 
   * @example
   * expression
   */
  componentType?: string;
  /**
   * @remarks
   * The name of the property.
   * 
   * @example
   * col
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
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

export class ListQualityTemplatesResponseBodyPageResultQualityTemplateList extends $dara.Model {
  /**
   * @remarks
   * The template category. Valid values:
   * - CONSISTENT: Consistency.
   * - EFFECTIVE: Effectiveness.
   * - TIMELINESE: Timeliness.
   * - ACCURATE: Accuracy.
   * - UNIQUENESS: Uniqueness.
   * - COMPLETENESS: Completeness.
   * - STABILITY: Stability.
   * - CUSTOM: Custom.
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
   * Consistency
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
   * The description of the template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The key-value pairs for rule configuration.
   */
  formPropertyList?: ListQualityTemplatesResponseBodyPageResultQualityTemplateListFormPropertyList[];
  /**
   * @remarks
   * The ID of the template.
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
   * The user ID of the last updater.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the last updater.
   * 
   * @example
   * test
   */
  modifierName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the template.
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
   * The specific data source types that are supported, such as MySQL, Oracle, Microsoft SQL Server, MaxCompute, and Hive.
   */
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * The template type. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: Field null value check.
   * - FIELD_EMPTY_STRING_VALIDATE: Field empty string check.
   * - FIELD_UNIQUE_VALIDATE: Field uniqueness check.
   * - FIELD_GROUP_COUNT_VALIDATE: Field unique value count check.
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: Field duplicate value count check.
   * - FUNCTION_TIME_COMPARE: Time function comparison.
   * - SINGLE_TABLE_TIME_COMPARE: Non-partitioned table time field comparison.
   * - DOUBLE_TABLE_TIME_COMPARE: Two-table time field comparison.
   * - FIELD_FORMAT_VALIDATE: Field format check.
   * - FIELD_LENGTH_VALIDATE: Field length check.
   * - FIELD_VALUE_RANGE_VALIDATE: Field value range check.
   * - CODE_TABLE_COMPARE: Lookup table reference comparison.
   * - STANDARD_CODE_TABLE_COMPARE: Data standard lookup table reference comparison.
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: Non-partitioned table field value consistency comparison.
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: Non-partitioned table field statistical value consistency comparison.
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: Non-partitioned table field business logic consistency comparison.
   * - DOUBLE_TABLE_FIELD_VALUE_COMPARE: Two-table field value consistency comparison.
   * - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Two-table field statistical value consistency comparison.
   * - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Cross-source two-table field statistical value consistency comparison.
   * - DOUBLE_TABLE_FIELD_EXP_COMPARE: Two-table field business logic consistency comparison.
   * - TABLE_STABILITY_VALIDATE: Table stability check.
   * - TABLE_FLUCTUATION_VALIDATE: Table fluctuation check.
   * - FIELD_STABILITY_VALIDATE: Field stability check.
   * - FIELD_FLUCTUATION_VALIDATE: Field fluctuation check.
   * - CUSTOM_STATISTICAL_VALIDATE: Custom statistical metric check.
   * - CUSTOM_DATA_DETAILS_VALIDATE: Custom data details check.
   * - DATASOURCE_AVAILABLE_CHECK: Data source connectivity check.
   * - TABLE_SCHEMA_CHECK: Table schema change check.
   * - REAL_TIME_OFFLINE_COMPARE: Real-time and offline comparison.
   * - REAL_TIME_STATISTICAL_VALIDATE: Real-time statistical value check.
   * - REAL_TIME_MULTI_CHAIN_COMPARE: Real-time multi-link comparison.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  type?: string;
  /**
   * @remarks
   * The display name of the template type.
   * 
   * @example
   * Field null value check
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
      formPropertyList: { 'type': 'array', 'itemType': ListQualityTemplatesResponseBodyPageResultQualityTemplateListFormPropertyList },
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

export class ListQualityTemplatesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged list of quality templates.
   */
  qualityTemplateList?: ListQualityTemplatesResponseBodyPageResultQualityTemplateList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      qualityTemplateList: 'QualityTemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityTemplateList: { 'type': 'array', 'itemType': ListQualityTemplatesResponseBodyPageResultQualityTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityTemplateList)) {
      $dara.Model.validateArray(this.qualityTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityTemplatesResponseBody extends $dara.Model {
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListQualityTemplatesResponseBodyPageResult;
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
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListQualityTemplatesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityTemplateRequestUpsertCommandFormPropertyList extends $dara.Model {
  /**
   * @remarks
   * Component type.
   * 
   * @example
   * expression
   */
  componentType?: string;
  /**
   * @remarks
   * Property name.
   * 
   * @example
   * col
   */
  name?: string;
  /**
   * @remarks
   * Property value.
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

export class UpsertQualityTemplateRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * Template category. Valid values: CONSISTENT: consistency. EFFECTIVE: validity. TIMELINESE: timeliness. ACCURATE: accuracy. UNIQUENESS: uniqueness. COMPLETENESS: completeness. STABILITY: stability. CUSTOM: custom.
   * 
   * This parameter is required.
   * 
   * @example
   * CONSISTENT
   */
  catalog?: string;
  /**
   * @remarks
   * Template description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Rule configuration key-value pairs.
   */
  formPropertyList?: UpsertQualityTemplateRequestUpsertCommandFormPropertyList[];
  /**
   * @remarks
   * Template ID. If specified, it indicates an update operation. If not specified, it indicates a creation operation.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Template name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Template owner ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * Supported data source types, such as MySQL, Oracle, Microsoft SQL Server, MaxCompute, and Hive.
   */
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * Template type. Valid values: FIELD_NULL_VALUE_VALIDATE: field null value validation. FIELD_EMPTY_STRING_VALIDATE: field empty string validation. FIELD_UNIQUE_VALIDATE: field uniqueness validation. FIELD_GROUP_COUNT_VALIDATE: field unique value count validation. FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count validation. FUNCTION_TIME_COMPARE: time function comparison. SINGLE_TABLE_TIME_COMPARE: single-table time field comparison. DOUBLE_TABLE_TIME_COMPARE: cross-table time field comparison. FIELD_FORMAT_VALIDATE: field format validation. FIELD_LENGTH_VALIDATE: field length validation. FIELD_VALUE_RANGE_VALIDATE: field value range validation. CODE_TABLE_COMPARE: code table reference comparison. STANDARD_CODE_TABLE_COMPARE: data standard code table reference comparison. SINGLE_TABLE_FIELD_VALUE_COMPARE: single-table field value consistency comparison. SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: single-table field statistical value consistency comparison. SINGLE_TABLE_FIELD_EXP_COMPARE: single-table field business logic consistency comparison. DOUBLE_TABLE_FIELD_VALUE_COMPARE: cross-table field value consistency comparison. DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-table field statistical value consistency comparison. CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-source cross-table field statistical value consistency comparison. DOUBLE_TABLE_FIELD_EXP_COMPARE: cross-table field business logic consistency comparison. TABLE_STABILITY_VALIDATE: table stability validation. TABLE_FLUCTUATION_VALIDATE: table fluctuation validation. FIELD_STABILITY_VALIDATE: field stability validation. FIELD_FLUCTUATION_VALIDATE: field fluctuation validation. CUSTOM_STATISTICAL_VALIDATE: custom statistical metric validation. CUSTOM_DATA_DETAILS_VALIDATE: custom data details validation. DATASOURCE_AVAILABLE_CHECK: data source connectivity check. TABLE_SCHEMA_CHECK: table schema change detection. REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison. REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value monitoring. REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-chain comparison.
   * 
   * This parameter is required.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      description: 'Description',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      description: 'string',
      formPropertyList: { 'type': 'array', 'itemType': UpsertQualityTemplateRequestUpsertCommandFormPropertyList },
      id: 'number',
      name: 'string',
      owner: 'string',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

export class UpsertQualityTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Upsert command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityTemplateRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      upsertCommand: UpsertQualityTemplateRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityTemplateRequestUpsertCommandFormPropertyList extends $dara.Model {
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

export class UpsertQualityTemplateRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The category of the template. Valid values: CONSISTENT (consistency), EFFECTIVE (effectiveness), TIMELINESE (timeliness), ACCURATE (accuracy), UNIQUENESS (uniqueness), COMPLETENESS (completeness), STABILITY (stability), and CUSTOM (custom).
   * 
   * This parameter is required.
   * 
   * @example
   * CONSISTENT
   */
  catalog?: string;
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
  formPropertyList?: UpsertQualityTemplateRequestUpsertCommandFormPropertyList[];
  /**
   * @remarks
   * The template ID. If this parameter is specified, the template is updated. If this parameter is not specified, a new template is created.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The supported data source types, such as MySQL, Oracle, Microsoft SQL Server, MaxCompute, and Hive.
   */
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * The templatetype. Valid values: FIELD_NULL_VALUE_VALIDATE (field null value check), FIELD_EMPTY_STRING_VALIDATE (field empty character check), FIELD_UNIQUE_VALIDATE (field uniqueness check), FIELD_GROUP_COUNT_VALIDATE (field unique value count check), FIELD_DUPLICATE_VALUE_COUNT_VALIDATE (field duplicate value count check), FUNCTION_TIME_COMPARE (time function comparison), SINGLE_TABLE_TIME_COMPARE (non-partitioned table time field comparison), DOUBLE_TABLE_TIME_COMPARE (two-table time field comparison), FIELD_FORMAT_VALIDATE (field format check), FIELD_LENGTH_VALIDATE (field length check), FIELD_VALUE_RANGE_VALIDATE (field value range check), CODE_TABLE_COMPARE (lookup table reference comparison), STANDARD_CODE_TABLE_COMPARE (data standard lookup table reference comparison), SINGLE_TABLE_FIELD_VALUE_COMPARE (non-partitioned table field value consistency comparison), SINGLE_TABLE_FIELD_STATISTICAL_COMPARE (non-partitioned table field statistical value consistency comparison), SINGLE_TABLE_FIELD_EXP_COMPARE (non-partitioned table field business logic consistency comparison), DOUBLE_TABLE_FIELD_VALUE_COMPARE (two-table field value consistency comparison), DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE (two-table field statistical value consistency comparison), CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE (cross-source two-table field statistical value consistency comparison), DOUBLE_TABLE_FIELD_EXP_COMPARE (two-table field business logic consistency comparison), TABLE_STABILITY_VALIDATE (table stability check), TABLE_FLUCTUATION_VALIDATE (table fluctuation check), FIELD_STABILITY_VALIDATE (field stability check), FIELD_FLUCTUATION_VALIDATE (field fluctuation check), CUSTOM_STATISTICAL_VALIDATE (custom statistical metric check), CUSTOM_DATA_DETAILS_VALIDATE (custom data details check), DATASOURCE_AVAILABLE_CHECK (data source connectivity monitoring), TABLE_SCHEMA_CHECK (table schema change monitoring), REAL_TIME_OFFLINE_COMPARE (real-time and offline comparison), REAL_TIME_STATISTICAL_VALIDATE (real-time statistical value monitoring), and REAL_TIME_MULTI_CHAIN_COMPARE (real-time multi-link comparison).
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
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The upsert command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityTemplateRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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


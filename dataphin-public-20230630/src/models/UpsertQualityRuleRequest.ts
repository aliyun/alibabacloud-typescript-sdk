// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the maximum value is included.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Indicates whether the minimum value is included.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. This parameter applies to range interval properties.
   * 
   * @example
   * 11
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This parameter applies to range interval properties.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The property value list. This parameter applies to properties whose input method is custom input, single-select dropdown, or multi-select dropdown.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      includeMaxValue: 'IncludeMaxValue',
      includeMinValue: 'IncludeMinValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMaxValue: 'boolean',
      includeMinValue: 'boolean',
      maxValue: 'string',
      minValue: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfig extends $dara.Model {
  /**
   * @remarks
   * The property field data type. Valid values:
   * - STRING: text.
   * - BIGINT: integer.
   * - DOUBLE: floating-point.
   * - BOOLEAN: Boolean.
   * - DATE: date.
   * - DATETIME: datetime.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The property default value.
   */
  defaultValue?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @remarks
   * The property field length. You can use this parameter to constrain the maximum length of text-type property values.
   * 
   * @example
   * 986992
   */
  length?: number;
  /**
   * @remarks
   * The property value input method. Valid values:
   * - CUSTOMIZED: custom input.
   * - SINGLE_ENUM: single-select dropdown.
   * - MULTIPLE_ENUMS: multi-select dropdown.
   * - RANGE: range interval.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The property option values. This parameter applies only to properties whose input method is single-select dropdown or multi-select dropdown.
   */
  valueEnumList?: string[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      length: 'Length',
      type: 'Type',
      valueEnumList: 'ValueEnumList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      defaultValue: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue,
      length: 'number',
      type: 'string',
      valueEnumList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.defaultValue && typeof (this.defaultValue as any).validate === 'function') {
      (this.defaultValue as any).validate();
    }
    if(Array.isArray(this.valueEnumList)) {
      $dara.Model.validateArray(this.valueEnumList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfo extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the property is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The property ID.
   * 
   * @example
   * 711484689131
   */
  id?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * attr01
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the property is required.
   */
  required?: boolean;
  /**
   * @remarks
   * Indicates whether the property is searchable.
   */
  searchable?: boolean;
  /**
   * @remarks
   * The property value configuration details.
   */
  valueConfig?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      required: 'Required',
      searchable: 'Searchable',
      valueConfig: 'ValueConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      required: 'boolean',
      searchable: 'boolean',
      valueConfig: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfig,
    };
  }

  validate() {
    if(this.valueConfig && typeof (this.valueConfig as any).validate === 'function') {
      (this.valueConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeValue extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the maximum value is included.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Indicates whether the minimum value is included.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. This parameter applies to range interval properties.
   * 
   * @example
   * 11
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This parameter applies to range interval properties.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The property value list. This parameter applies to properties whose input method is custom input, single-select dropdown, or multi-select dropdown.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      includeMaxValue: 'IncludeMaxValue',
      includeMinValue: 'IncludeMinValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMaxValue: 'boolean',
      includeMinValue: 'boolean',
      maxValue: 'string',
      minValue: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueList extends $dara.Model {
  /**
   * @remarks
   * The property details.
   */
  attributeInfo?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfo;
  /**
   * @remarks
   * The property value.
   */
  attributeValue?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeValue;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfo,
      attributeValue: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeValue,
    };
  }

  validate() {
    if(this.attributeInfo && typeof (this.attributeInfo as any).validate === 'function') {
      (this.attributeInfo as any).validate();
    }
    if(this.attributeValue && typeof (this.attributeValue as any).validate === 'function') {
      (this.attributeValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequestUpsertCommandFormPropertyList extends $dara.Model {
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

export class UpsertQualityRuleRequestUpsertCommandValidateConditionList extends $dara.Model {
  /**
   * @remarks
   * The condition node ID.
   * 
   * @example
   * 268
   */
  id?: string;
  /**
   * @remarks
   * The metric.
   * 
   * @example
   * test
   */
  metric?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * - EQUAL
   * - NOT_EQUAL
   * - LARGER
   * - SMALLER
   * - LARGE_OR_EQUAL
   * - SMALLER_OR_EQUAL
   * - AND
   * - OR
   * 
   * @example
   * AND
   */
  operator?: string;
  /**
   * @remarks
   * The parent condition node ID.
   * 
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @remarks
   * The condition type. Valid values:
   * - RELATION: relationship.
   * - EXPRESSION: expression.
   * 
   * @example
   * RELATION
   */
  type?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metric: 'Metric',
      operator: 'Operator',
      parentId: 'ParentId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metric: 'string',
      operator: 'string',
      parentId: 'string',
      type: 'string',
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

export class UpsertQualityRuleRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The exception archive mode. Valid values:
   * - ONLY_ERROR_FIELD: Archives only the exception fields.
   * - FULL_RECORD: Archives the complete record.
   * 
   * Default value: ONLY_ERROR_FIELD.
   * 
   * @example
   * ONLY_ERROR_FIELD
   */
  archiveMode?: string;
  /**
   * @remarks
   * The exception archive storage type. Valid values:
   * - FILE_SYSTEM: File system.
   * - CUSTOM_TABLE: Custom table.
   * 
   * Default value: FILE_SYSTEM.
   * 
   * @example
   * FILE_SYSTEM
   */
  archiveStoreType?: string;
  /**
   * @remarks
   * The rule business property configuration.
   */
  attributeWithValueList?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueList[];
  /**
   * @remarks
   * The rule catalog. Valid values:
   * - CONSISTENT: consistency.
   * - EFFECTIVE: validity.
   * - TIMELINESE: timeliness.
   * - ACCURATE: accuracy.
   * - UNIQUENESS: uniqueness.
   * - COMPLETENESS: completeness.
   * - STABILITY: stability.
   * - CUSTOM: custom.
   * 
   * This parameter is required.
   */
  catalogList?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable error archiving.
   */
  enableErrorArchive?: boolean;
  /**
   * @remarks
   * The rule configuration key-value pairs. These are related to the templatetype. Different template types return different form key-value pair configurations.
   */
  formPropertyList?: UpsertQualityRuleRequestUpsertCommandFormPropertyList[];
  /**
   * @remarks
   * The rule ID. If this parameter is not empty, the operation updates the rule. If this parameter is empty, the operation creates a rule.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The name of the quality rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The rule strength. Valid values:
   * - STRONG
   * - WEAK
   * 
   * This parameter is required.
   * 
   * @example
   * STRONG
   */
  strength?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The templatetype. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: field null value check.
   * - FIELD_EMPTY_STRING_VALIDATE: field empty string check.
   * - FIELD_UNIQUE_VALIDATE: field uniqueness check.
   * - FIELD_GROUP_COUNT_VALIDATE: field unique value count check.
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count check.
   * - FUNCTION_TIME_COMPARE: time function comparison.
   * - SINGLE_TABLE_TIME_COMPARE: single-table time field comparison.
   * - DOUBLE_TABLE_TIME_COMPARE: two-table time field comparison.
   * - FIELD_FORMAT_VALIDATE: field format check.
   * - FIELD_LENGTH_VALIDATE: field length check.
   * - FIELD_VALUE_RANGE_VALIDATE: field value range check.
   * - CODE_TABLE_COMPARE: lookup table reference comparison.
   * - STANDARD_CODE_TABLE_COMPARE: data standard lookup table reference comparison.
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: single-table field value consistency comparison.
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: single-table field statistical value consistency comparison.
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: single-table field business logic consistency comparison.
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
   * - DATASOURCE_AVAILABLE_CHECK: datasource connectivity monitoring.
   * - TABLE_SCHEMA_CHECK: table schema change monitoring.
   * - REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison.
   * - REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value monitoring.
   * - REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-link comparison.
   * 
   * This parameter is required.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  /**
   * @remarks
   * The validation conditions.
   */
  validateConditionList?: UpsertQualityRuleRequestUpsertCommandValidateConditionList[];
  /**
   * @remarks
   * The ID of the associated watch.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      archiveMode: 'ArchiveMode',
      archiveStoreType: 'ArchiveStoreType',
      attributeWithValueList: 'AttributeWithValueList',
      catalogList: 'CatalogList',
      description: 'Description',
      enableErrorArchive: 'EnableErrorArchive',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      name: 'Name',
      strength: 'Strength',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
      validateConditionList: 'ValidateConditionList',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveMode: 'string',
      archiveStoreType: 'string',
      attributeWithValueList: { 'type': 'array', 'itemType': UpsertQualityRuleRequestUpsertCommandAttributeWithValueList },
      catalogList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      enableErrorArchive: 'boolean',
      formPropertyList: { 'type': 'array', 'itemType': UpsertQualityRuleRequestUpsertCommandFormPropertyList },
      id: 'number',
      name: 'string',
      strength: 'string',
      templateId: 'number',
      templateType: 'string',
      validateConditionList: { 'type': 'array', 'itemType': UpsertQualityRuleRequestUpsertCommandValidateConditionList },
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeWithValueList)) {
      $dara.Model.validateArray(this.attributeWithValueList);
    }
    if(Array.isArray(this.catalogList)) {
      $dara.Model.validateArray(this.catalogList);
    }
    if(Array.isArray(this.formPropertyList)) {
      $dara.Model.validateArray(this.formPropertyList);
    }
    if(Array.isArray(this.validateConditionList)) {
      $dara.Model.validateArray(this.validateConditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityRuleRequest extends $dara.Model {
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
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityRuleRequestUpsertCommand;
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
      upsertCommand: UpsertQualityRuleRequestUpsertCommand,
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


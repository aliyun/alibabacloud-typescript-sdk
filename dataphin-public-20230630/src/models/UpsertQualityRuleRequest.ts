// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. Applicable to range interval attributes.
   * 
   * @example
   * 11
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. Applicable to range interval attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. Applicable to attributes with the custom input, single-select dropdown, or multi-select dropdown input method.
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
   * The attribute field type. Valid values: STRING (Text), BIGINT (Integer), DOUBLE (Floating-point), BOOLEAN (Boolean), DATE (Date), DATETIME (Datetime).
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The attribute default value.
   */
  defaultValue?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @remarks
   * The attribute field length. Used to constrain the maximum length of text-type attribute values.
   * 
   * @example
   * 986992
   */
  length?: number;
  /**
   * @remarks
   * The attribute value input method. Valid values: CUSTOMIZED (Custom input), SINGLE_ENUM (Single-select dropdown), MULTIPLE_ENUMS (Multi-select dropdown), RANGE (Range interval).
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The attribute option values. Only applicable to attributes with the single-select dropdown or multi-select dropdown input method.
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
   * Specifies whether to enable the attribute.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The attribute ID.
   * 
   * @example
   * 711484689131
   */
  id?: number;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * attr01
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the attribute is required.
   */
  required?: boolean;
  /**
   * @remarks
   * Specifies whether the attribute is searchable.
   */
  searchable?: boolean;
  /**
   * @remarks
   * The attribute value configuration details.
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
   * Specifies whether to include the maximum value.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. Applicable to range interval attributes.
   * 
   * @example
   * 11
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. Applicable to range interval attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. Applicable to attributes with the custom input, single-select dropdown, or multi-select dropdown input method.
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
   * The attribute details.
   */
  attributeInfo?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfo;
  /**
   * @remarks
   * The attribute value.
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
   * The component type.
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
   * The ID of the condition node.
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
   * The operator. Valid values: EQUAL, NOT_EQUAL, LARGER, SMALLER, LARGE_OR_EQUAL, SMALLER_OR_EQUAL, AND, OR.
   * 
   * @example
   * AND
   */
  operator?: string;
  /**
   * @remarks
   * The ID of the parent condition node.
   * 
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @remarks
   * The condition type. Valid values: RELATION, EXPRESSION.
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
   * The rule business attribute configuration.
   */
  attributeWithValueList?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueList[];
  /**
   * @remarks
   * The rule category. Valid values: CONSISTENT (Consistency), EFFECTIVE (Effectiveness), TIMELINESE (Timeliness), ACCURATE (Accuracy), UNIQUENESS (Uniqueness), COMPLETENESS (Completeness), STABILITY (Stability), CUSTOM (Custom).
   * 
   * This parameter is required.
   */
  catalogList?: string[];
  /**
   * @remarks
   * The description of the quality rule.
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
   * The rule configuration key-value pairs. The configuration varies based on the template type. Different template types return different form key-value pair configurations.
   */
  formPropertyList?: UpsertQualityRuleRequestUpsertCommandFormPropertyList[];
  /**
   * @remarks
   * Rule ID. A non-empty value indicates a modification, and an empty value indicates a creation.
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
   * The rule strength. Valid values: STRONG, WEAK.
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
   * The template type. Valid values:
   *   - FIELD_NULL_VALUE_VALIDATE: Field null value validation
   *   - FIELD_EMPTY_STRING_VALIDATE: Field empty string validation
   *   - FIELD_UNIQUE_VALIDATE: Field uniqueness validation
   *   - FIELD_GROUP_COUNT_VALIDATE: Field unique value count validation
   *   - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: Field duplicate value count validation
   *   - FUNCTION_TIME_COMPARE: Time function comparison
   *   - SINGLE_TABLE_TIME_COMPARE: Single-table time field comparison
   *   - DOUBLE_TABLE_TIME_COMPARE: Cross-table time field comparison
   *   - FIELD_FORMAT_VALIDATE: Field format validation
   *   - FIELD_LENGTH_VALIDATE: Field length validation
   *   - FIELD_VALUE_RANGE_VALIDATE: Field value range validation
   *   - CODE_TABLE_COMPARE: Code table reference comparison
   *   - STANDARD_CODE_TABLE_COMPARE: Data standard code table reference comparison
   *   - SINGLE_TABLE_FIELD_VALUE_COMPARE: Single-table field value consistency comparison
   *   - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: Single-table field statistical value consistency comparison
   *   - SINGLE_TABLE_FIELD_EXP_COMPARE: Single-table field business logic consistency comparison
   *   - DOUBLE_TABLE_FIELD_VALUE_COMPARE: Cross-table field value consistency comparison
   *   - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Cross-table field statistical value consistency comparison
   *   - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Cross-source cross-table field statistical value consistency comparison
   *   - DOUBLE_TABLE_FIELD_EXP_COMPARE: Cross-table field business logic consistency comparison
   *   - TABLE_STABILITY_VALIDATE: Table stability validation
   *   - TABLE_FLUCTUATION_VALIDATE: Table fluctuation validation
   *   - FIELD_STABILITY_VALIDATE: Field stability validation
   *   - FIELD_FLUCTUATION_VALIDATE: Field fluctuation validation
   *   - CUSTOM_STATISTICAL_VALIDATE: Custom statistical metric validation
   *   - CUSTOM_DATA_DETAILS_VALIDATE: Custom data details validation
   *   - DATASOURCE_AVAILABLE_CHECK: Data source connectivity check
   *   - TABLE_SCHEMA_CHECK: Table schema change monitoring
   *   - REAL_TIME_OFFLINE_COMPARE: Real-time offline comparison
   *   - REAL_TIME_STATISTICAL_VALIDATE: Real-time statistical value monitoring
   *   - REAL_TIME_MULTI_CHAIN_COMPARE: Real-time multi-chain comparison, etc.
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
   * The ID of the associated monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
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
   * The upsert command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityRuleRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
  /**
   * @remarks
   * Standard ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  standardId?: number;
  /**
   * @remarks
   * Version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      standardId: 'StandardId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardId: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo extends $dara.Model {
  /**
   * @remarks
   * Attribute source type. Valid values: SYSTEM (system attribute), CUSTOM (custom attribute), and STANDARD (standard).
   * 
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
  /**
   * @remarks
   * Standard reference. Effective when the attribute source is STANDARD.
   */
  standardReference?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference;
  static names(): { [key: string]: string } {
    return {
      attributeFrom: 'AttributeFrom',
      standardReference: 'StandardReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFrom: 'string',
      standardReference: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference,
    };
  }

  validate() {
    if(this.standardReference && typeof (this.standardReference as any).validate === 'function') {
      (this.standardReference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttribute extends $dara.Model {
  /**
   * @remarks
   * Attribute source.
   * 
   * This parameter is required.
   */
  attributeFromInfo?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo;
  /**
   * @remarks
   * Attribute ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  attributeId?: number;
  static names(): { [key: string]: string } {
    return {
      attributeFromInfo: 'AttributeFromInfo',
      attributeId: 'AttributeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFromInfo: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo,
      attributeId: 'number',
    };
  }

  validate() {
    if(this.attributeFromInfo && typeof (this.attributeFromInfo as any).validate === 'function') {
      (this.attributeFromInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference extends $dara.Model {
  /**
   * @remarks
   * Referenced lookup table column.
   * 
   * @example
   * col1
   */
  column?: string;
  /**
   * @remarks
   * Lookup table ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  lookupTableId?: number;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      lookupTableId: 'LookupTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      lookupTableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the maximum value.
   * 
   * This parameter is required.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether to include the minimum value.
   * 
   * This parameter is required.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * Maximum value.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * Minimum value.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minValue?: string;
  static names(): { [key: string]: string } {
    return {
      includeMaxValue: 'IncludeMaxValue',
      includeMinValue: 'IncludeMinValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeMaxValue: 'boolean',
      includeMinValue: 'boolean',
      maxValue: 'string',
      minValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRange extends $dara.Model {
  /**
   * @remarks
   * Dataphin attribute type. Effective when the value source is DATAPHIN_ATTRIBUTE. Valid values: BIZ_UNIT (data domain), PROJECT (project), USER (user), and USER_GROUP (user group).
   * 
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  /**
   * @remarks
   * Lookup table reference. Effective when the value source is LOOKUP_TABLE.
   */
  lookupTableReference?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * Min-max value configuration. Effective when the value source is MIN_MAX.
   */
  minMaxValueConfig?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig;
  /**
   * @remarks
   * Value source. Valid values: NONE (no constraint), LIST (from a list), LOOKUP_TABLE (lookup table), MIN_MAX (between minimum and maximum values), DATAPHIN_ATTRIBUTE (Dataphin system attribute), BUILT_IN_DATA_TYPES (built-in data types), BUILT_IN_DATA_CLASSIFICATION (built-in data classification), and BUILT_IN_DATA_LEVEL (built-in data security level).
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  valueConstraint?: string;
  /**
   * @remarks
   * Value list. Effective when the value source is LIST.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      dataphinAttributeType: 'DataphinAttributeType',
      lookupTableReference: 'LookupTableReference',
      minMaxValueConfig: 'MinMaxValueConfig',
      valueConstraint: 'ValueConstraint',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataphinAttributeType: 'string',
      lookupTableReference: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference,
      minMaxValueConfig: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig,
      valueConstraint: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.lookupTableReference && typeof (this.lookupTableReference as any).validate === 'function') {
      (this.lookupTableReference as any).validate();
    }
    if(this.minMaxValueConfig && typeof (this.minMaxValueConfig as any).validate === 'function') {
      (this.minMaxValueConfig as any).validate();
    }
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfig extends $dara.Model {
  /**
   * @remarks
   * Data type of the attribute value. Valid values: STRING (string), BIGINT (numeric), DOUBLE (floating point), DATE (date with day precision), DATETIME (date with millisecond precision), and BOOLEAN (boolean).
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * Attribute value length. An empty value or -1 indicates no length limit. Usually only the string type has a length limit for attribute values.
   * 
   * @example
   * 1
   */
  length?: number;
  /**
   * @remarks
   * Attribute value type. Valid values: CUSTOMIZED (custom input), SINGLE_ENUM (single enumeration value), MULTIPLE_ENUMS (multiple enumeration values), and RANGE (range value).
   * 
   * This parameter is required.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * Value range.
   * 
   * This parameter is required.
   */
  valueRange?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRange;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      length: 'Length',
      type: 'Type',
      valueRange: 'ValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      defaultValue: 'string',
      length: 'number',
      type: 'string',
      valueRange: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfigValueRange,
    };
  }

  validate() {
    if(this.valueRange && typeof (this.valueRange as any).validate === 'function') {
      (this.valueRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeList extends $dara.Model {
  /**
   * @remarks
   * Attribute code. Not required when referencing a public attribute.
   * 
   * @example
   * test_attr
   */
  code?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Attribute name. Not required when referencing a public attribute.
   * 
   * @example
   * attr1
   */
  name?: string;
  /**
   * @remarks
   * Referenced attribute information.
   */
  refAttribute?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttribute;
  /**
   * @remarks
   * Specifies whether the attribute is required. Not required when referencing a public attribute.
   */
  required?: boolean;
  /**
   * @remarks
   * Attribute type. Valid values: BIZ_ATTRIBUTE (business attribute), TECH_ATTRIBUTE (technical attribute), MANAGEMENT_ATTRIBUTE (management attribute), QUALITY_ATTRIBUTE (quality attribute), MASTER_DATA_ATTRIBUTE (master data attribute), LIFECYCLE_ATTRIBUTE (lifecycle attribute), and SECURITY_ATTRIBUTE (security attribute). Not required when referencing a public attribute.
   * 
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
  /**
   * @remarks
   * Value configuration. Not required when referencing a public attribute.
   */
  valueConfig?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      name: 'Name',
      refAttribute: 'RefAttribute',
      required: 'Required',
      type: 'Type',
      valueConfig: 'ValueConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      name: 'string',
      refAttribute: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListRefAttribute,
      required: 'boolean',
      type: 'string',
      valueConfig: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeListValueConfig,
    };
  }

  validate() {
    if(this.refAttribute && typeof (this.refAttribute as any).validate === 'function') {
      (this.refAttribute as any).validate();
    }
    if(this.valueConfig && typeof (this.valueConfig as any).validate === 'function') {
      (this.valueConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandAttributesConfig extends $dara.Model {
  /**
   * @remarks
   * Attribute list.
   * 
   * This parameter is required.
   */
  attributeList?: CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeList[];
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: { 'type': 'array', 'itemType': CreateStandardTemplateRequestCreateCommandAttributesConfigAttributeList },
    };
  }

  validate() {
    if(Array.isArray(this.attributeList)) {
      $dara.Model.validateArray(this.attributeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig extends $dara.Model {
  /**
   * @remarks
   * Number of digits.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  digit?: number;
  /**
   * @remarks
   * Specifies whether to pad with zeros.
   * 
   * This parameter is required.
   */
  needPaddingZero?: boolean;
  /**
   * @remarks
   * Start value.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  startValue?: number;
  /**
   * @remarks
   * Step.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      digit: 'Digit',
      needPaddingZero: 'NeedPaddingZero',
      startValue: 'StartValue',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digit: 'number',
      needPaddingZero: 'boolean',
      startValue: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleList extends $dara.Model {
  /**
   * @remarks
   * Auto-increment sequence configuration.
   */
  autoIncrementSequenceConfig?: CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig;
  /**
   * @remarks
   * Code rule position index.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Code rule type. Valid values: FIXED_STRING (fixed string), AUTO_INCREMENT (auto-increment sequence), and STANDARD_SET_CODE (standard set code).
   * 
   * This parameter is required.
   * 
   * @example
   * FIXED_STRING
   */
  type?: string;
  /**
   * @remarks
   * Code rule format or value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementSequenceConfig: 'AutoIncrementSequenceConfig',
      index: 'Index',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementSequenceConfig: CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig,
      index: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.autoIncrementSequenceConfig && typeof (this.autoIncrementSequenceConfig as any).validate === 'function') {
      (this.autoIncrementSequenceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfig extends $dara.Model {
  /**
   * @remarks
   * Standard code rules.
   * 
   * This parameter is required.
   */
  codeRuleList?: CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleList[];
  /**
   * @remarks
   * Specifies whether to enable strict validation.
   * 
   * This parameter is required.
   */
  needStrongValidate?: boolean;
  static names(): { [key: string]: string } {
    return {
      codeRuleList: 'CodeRuleList',
      needStrongValidate: 'NeedStrongValidate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeRuleList: { 'type': 'array', 'itemType': CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfigCodeRuleList },
      needStrongValidate: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.codeRuleList)) {
      $dara.Model.validateArray(this.codeRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandCodeRuleConfig extends $dara.Model {
  /**
   * @remarks
   * Standard code rule auto-generation configuration. Effective when the generation method is AUTO_GENERATE.
   */
  autoConfig?: CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfig;
  /**
   * @remarks
   * Standard code generation method. Valid values: CUSTOMIZED (custom) and AUTO_GENERATE (auto-generate based on standard code rules).
   * 
   * This parameter is required.
   * 
   * @example
   * CUSTOMIZED
   */
  generateType?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfig: 'AutoConfig',
      generateType: 'GenerateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfig: CreateStandardTemplateRequestCreateCommandCodeRuleConfigAutoConfig,
      generateType: 'string',
    };
  }

  validate() {
    if(this.autoConfig && typeof (this.autoConfig as any).validate === 'function') {
      (this.autoConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommandPublishInfo extends $dara.Model {
  /**
   * @remarks
   * Publish comment.
   * 
   * @example
   * test
   */
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * Attribute configuration.
   * 
   * This parameter is required.
   */
  attributesConfig?: CreateStandardTemplateRequestCreateCommandAttributesConfig;
  /**
   * @remarks
   * Standard template code. Globally unique. Cannot be modified when referenced.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  code?: string;
  /**
   * @remarks
   * Standard code auto-generation rule configuration.
   */
  codeRuleConfig?: CreateStandardTemplateRequestCreateCommandCodeRuleConfig;
  /**
   * @remarks
   * Standard template description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Maintainers.
   */
  maintainerList?: string[];
  /**
   * @remarks
   * Standard template name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试模板
   */
  name?: string;
  /**
   * @remarks
   * Standard template publish information.
   */
  publishInfo?: CreateStandardTemplateRequestCreateCommandPublishInfo;
  static names(): { [key: string]: string } {
    return {
      attributesConfig: 'AttributesConfig',
      code: 'Code',
      codeRuleConfig: 'CodeRuleConfig',
      description: 'Description',
      maintainerList: 'MaintainerList',
      name: 'Name',
      publishInfo: 'PublishInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesConfig: CreateStandardTemplateRequestCreateCommandAttributesConfig,
      code: 'string',
      codeRuleConfig: CreateStandardTemplateRequestCreateCommandCodeRuleConfig,
      description: 'string',
      maintainerList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      publishInfo: CreateStandardTemplateRequestCreateCommandPublishInfo,
    };
  }

  validate() {
    if(this.attributesConfig && typeof (this.attributesConfig as any).validate === 'function') {
      (this.attributesConfig as any).validate();
    }
    if(this.codeRuleConfig && typeof (this.codeRuleConfig as any).validate === 'function') {
      (this.codeRuleConfig as any).validate();
    }
    if(Array.isArray(this.maintainerList)) {
      $dara.Model.validateArray(this.maintainerList);
    }
    if(this.publishInfo && typeof (this.publishInfo as any).validate === 'function') {
      (this.publishInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateStandardTemplateRequestCreateCommand;
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateStandardTemplateRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
  /**
   * @remarks
   * The ID of the standard.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  standardId?: number;
  /**
   * @remarks
   * The version number.
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo extends $dara.Model {
  /**
   * @remarks
   * The source of the attribute. Valid values:
   * - SYSTEM: System attribute.
   * - CUSTOM: Custom attribute.
   * - STANDARD: Standard.
   * 
   * This parameter is required.
   * 
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
  /**
   * @remarks
   * The corresponding standard. This parameter takes effect when the attribute source is set to STANDARD.
   */
  standardReference?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference;
  static names(): { [key: string]: string } {
    return {
      attributeFrom: 'AttributeFrom',
      standardReference: 'StandardReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFrom: 'string',
      standardReference: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference,
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttribute extends $dara.Model {
  /**
   * @remarks
   * The source of the attribute.
   * 
   * This parameter is required.
   */
  attributeFromInfo?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo;
  /**
   * @remarks
   * The ID of the attribute.
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
      attributeFromInfo: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttributeAttributeFromInfo,
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference extends $dara.Model {
  /**
   * @remarks
   * The referenced field in the lookup table.
   * 
   * @example
   * col1
   */
  column?: string;
  /**
   * @remarks
   * The ID of the lookup table.
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
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
   * The maximum value.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value.
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRange extends $dara.Model {
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to DATAPHIN_ATTRIBUTE. Valid values:
   * - BIZ_UNIT: Business unit.
   * - PROJECT: Project.
   * - USER: User.
   * - USER_GROUP: User group.
   * 
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to LOOKUP_TABLE.
   */
  lookupTableReference?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to MIN_MAX.
   */
  minMaxValueConfig?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig;
  /**
   * @remarks
   * The value source. Valid values:
   * - NONE: No constraint.
   * - LIST: Obtained from a list.
   * - LOOKUP_TABLE: Lookup table.
   * - MIN_MAX: Value between the maximum and minimum values.
   * - DATAPHIN_ATTRIBUTE: Dataphin system property.
   * - BUILT_IN_DATA_TYPES: Built-in data type.
   * - BUILT_IN_DATA_CLASSIFICATION: Built-in data categorization.
   * - BUILT_IN_DATA_LEVEL: Built-in data security classification.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  valueConstraint?: string;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to LIST.
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
      lookupTableReference: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeLookupTableReference,
      minMaxValueConfig: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig,
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfig extends $dara.Model {
  /**
   * @remarks
   * The data type of the attribute value. Valid values:
   * - STRING: String.
   * - BIGINT: Numeric type.
   * - DOUBLE: Floating-point type.
   * - DATE: Date, accurate to the day.
   * - DATETIME: Date and time, accurate to the millisecond.
   * - BOOLEAN: Boolean.
   * 
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * The length of the attribute value. An empty value or -1 indicates that the length is not limited. Typically, the length is limited only for string types.
   * 
   * @example
   * 1
   */
  length?: number;
  /**
   * @remarks
   * The attribute value type. Valid values:
   * - CUSTOMIZED: Custom input.
   * - SINGLE_ENUM: Single enumeration value.
   * - MULTIPLE_ENUMS: Multiple enumeration values.
   * - RANGE: Range value.
   * 
   * This parameter is required.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The value range.
   * 
   * This parameter is required.
   */
  valueRange?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRange;
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
      valueRange: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfigValueRange,
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeList extends $dara.Model {
  /**
   * @remarks
   * The attribute code. This parameter is not required when a common attribute is referenced.
   * 
   * @example
   * test_attr
   */
  code?: string;
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
   * The attribute name. This parameter is not required when a common attribute is referenced.
   * 
   * @example
   * attr1
   */
  name?: string;
  /**
   * @remarks
   * The referenced attribute information.
   */
  refAttribute?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttribute;
  /**
   * @remarks
   * Specifies whether the attribute is required. This parameter is not required when a common attribute is referenced.
   */
  required?: boolean;
  /**
   * @remarks
   * The attribute type. This parameter is not required when a common attribute is referenced. Valid values:
   * - BIZ_ATTRIBUTE: Business attribute.
   * - TECH_ATTRIBUTE: Technical attribute.
   * - MANAGEMENT_ATTRIBUTE: Management attribute.
   * - QUALITY_ATTRIBUTE: Quality attribute.
   * - MASTER_DATA_ATTRIBUTE: Master data attribute.
   * - LIFECYCLE_ATTRIBUTE: Lifecycle attribute.
   * - SECURITY_ATTRIBUTE: Security attribute.
   * 
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
  /**
   * @remarks
   * The value configuration. This parameter is not required when a common attribute is referenced.
   */
  valueConfig?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfig;
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
      refAttribute: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListRefAttribute,
      required: 'boolean',
      type: 'string',
      valueConfig: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeListValueConfig,
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

export class UpdateStandardTemplateRequestUpdateCommandAttributesConfig extends $dara.Model {
  /**
   * @remarks
   * The attribute list.
   * 
   * This parameter is required.
   */
  attributeList?: UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeList[];
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: { 'type': 'array', 'itemType': UpdateStandardTemplateRequestUpdateCommandAttributesConfigAttributeList },
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

export class UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig extends $dara.Model {
  /**
   * @remarks
   * The number of digits.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  digit?: number;
  /**
   * @remarks
   * Specifies whether zero padding is enabled.
   * 
   * This parameter is required.
   */
  needPaddingZero?: boolean;
  /**
   * @remarks
   * The start value.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  startValue?: number;
  /**
   * @remarks
   * The step size.
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

export class UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleList extends $dara.Model {
  /**
   * @remarks
   * The auto-increment sequence configuration.
   */
  autoIncrementSequenceConfig?: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig;
  /**
   * @remarks
   * The position index of the code rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The code rule type. Valid values: FIXED_STRING: Fixed string. AUTO_INCREMENT: Auto-increment sequence. STANDARD_SET_CODE: Standard set code.
   * 
   * This parameter is required.
   * 
   * @example
   * FIXED_STRING
   */
  type?: string;
  /**
   * @remarks
   * The format or value of the code rule.
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
      autoIncrementSequenceConfig: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig,
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

export class UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfig extends $dara.Model {
  /**
   * @remarks
   * The standard code rules.
   * 
   * This parameter is required.
   */
  codeRuleList?: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleList[];
  /**
   * @remarks
   * Specifies whether strong validation is enabled.
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
      codeRuleList: { 'type': 'array', 'itemType': UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfigCodeRuleList },
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

export class UpdateStandardTemplateRequestUpdateCommandCodeRuleConfig extends $dara.Model {
  /**
   * @remarks
   * The auto-generation configuration for standard code rules. This configuration takes effect when the generation method is set to AUTO_GENERATE.
   */
  autoConfig?: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfig;
  /**
   * @remarks
   * The standard code generation method. Valid values: CUSTOMIZED: Custom. AUTO_GENERATE: Automatically generated based on standard code rules.
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
      autoConfig: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfigAutoConfig,
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

export class UpdateStandardTemplateRequestUpdateCommandPublishInfo extends $dara.Model {
  /**
   * @remarks
   * The publish comment.
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

export class UpdateStandardTemplateRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The attribute configuration.
   * 
   * This parameter is required.
   */
  attributesConfig?: UpdateStandardTemplateRequestUpdateCommandAttributesConfig;
  /**
   * @remarks
   * The data standard template code. It must be globally unique and cannot be modified if it is referenced.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  code?: string;
  /**
   * @remarks
   * The standard code auto-generation rule configuration.
   */
  codeRuleConfig?: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfig;
  /**
   * @remarks
   * The data standard template description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data standard template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * The maintainers.
   */
  maintainerList?: string[];
  /**
   * @remarks
   * The data standard template name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test template
   */
  name?: string;
  /**
   * @remarks
   * The publish information of the standard template.
   */
  publishInfo?: UpdateStandardTemplateRequestUpdateCommandPublishInfo;
  /**
   * @remarks
   * The version number. An empty value or -1 indicates the latest version.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      attributesConfig: 'AttributesConfig',
      code: 'Code',
      codeRuleConfig: 'CodeRuleConfig',
      description: 'Description',
      id: 'Id',
      maintainerList: 'MaintainerList',
      name: 'Name',
      publishInfo: 'PublishInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesConfig: UpdateStandardTemplateRequestUpdateCommandAttributesConfig,
      code: 'string',
      codeRuleConfig: UpdateStandardTemplateRequestUpdateCommandCodeRuleConfig,
      description: 'string',
      id: 'number',
      maintainerList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      publishInfo: UpdateStandardTemplateRequestUpdateCommandPublishInfo,
      version: 'number',
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

export class UpdateStandardTemplateRequest extends $dara.Model {
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
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateStandardTemplateRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateStandardTemplateRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


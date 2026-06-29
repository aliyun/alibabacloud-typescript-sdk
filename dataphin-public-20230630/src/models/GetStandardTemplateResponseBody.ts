// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * The field to check.
   * 
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
   * Indicates whether the check is case-sensitive.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * The monitoring method. Valid values:
   * - METADATA: metadata monitoring.
   * - QUALITY: data quality monitoring.
   * 
   * @example
   * METADATA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      isCaseSensitive: 'IsCaseSensitive',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      isCaseSensitive: 'boolean',
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
  /**
   * @remarks
   * The standard ID.
   * 
   * @example
   * 22
   */
  standardId?: number;
  /**
   * @remarks
   * The version number.
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfo extends $dara.Model {
  /**
   * @remarks
   * The attribute source. Valid values:
   * - SYSTEM: system attribute.
   * - CUSTOM: custom attribute.
   * - STANDARD: standard.
   * 
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
  /**
   * @remarks
   * The corresponding standard. This parameter takes effect when the attribute source is set to STANDARD.
   */
  standardReference?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference;
  static names(): { [key: string]: string } {
    return {
      attributeFrom: 'AttributeFrom',
      standardReference: 'StandardReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFrom: 'string',
      standardReference: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfoStandardReference,
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttribute extends $dara.Model {
  /**
   * @remarks
   * The attribute source.
   */
  attributeFromInfo?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfo;
  /**
   * @remarks
   * The attribute ID.
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
      attributeFromInfo: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfo,
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeLookupTableReference extends $dara.Model {
  /**
   * @remarks
   * The referenced lookup table field.
   * 
   * @example
   * col1
   */
  column?: string;
  /**
   * @remarks
   * The lookup table ID.
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
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
   * The maximum value.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value.
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRange extends $dara.Model {
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to DATAPHIN_ATTRIBUTE. Valid values:
   * - BIZ_UNIT: data domain.
   * - PROJECT: project.
   * - USER: user.
   * - USER_GROUP: user group.
   * 
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to LOOKUP_TABLE.
   */
  lookupTableReference?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to MIN_MAX.
   */
  minMaxValueConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig;
  /**
   * @remarks
   * The value source. Valid values:
   * - NONE: no constraint.
   * - LIST: obtained from a list.
   * - LOOKUP_TABLE: lookup table.
   * - MIN_MAX: value between the minimum and maximum.
   * - DATAPHIN_ATTRIBUTE: Dataphin system property.
   * - BUILT_IN_DATA_TYPES: built-in data types.
   * - BUILT_IN_DATA_CLASSIFICATION: built-in data categorization.
   * - BUILT_IN_DATA_LEVEL: built-in data security classification.
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
      lookupTableReference: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeLookupTableReference,
      minMaxValueConfig: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig,
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfig extends $dara.Model {
  /**
   * @remarks
   * The data type of the attribute value. Valid values:
   * - STRING: string.
   * - BIGINT: numeric.
   * - DOUBLE: floating-point.
   * - DATE: date, accurate to the day.
   * - DATETIME: date, accurate to the millisecond.
   * - BOOLEAN: Boolean.
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
   * The length of the attribute value. If this parameter is left empty or set to -1, the length is not limited. Typically, only string types have a length limit for attribute values.
   * 
   * @example
   * 1
   */
  length?: number;
  /**
   * @remarks
   * The attribute value type. Valid values:
   * - CUSTOMIZED: custom input.
   * - SINGLE_ENUM: single enumeration value.
   * - MULTIPLE_ENUMS: multiple enumeration values.
   * - RANGE: range value.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The value range.
   */
  valueRange?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRange;
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
      valueRange: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRange,
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeList extends $dara.Model {
  /**
   * @remarks
   * The attribute code.
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
   * Indicates whether monitoring configuration is enabled.
   */
  enableMonitorConfig?: boolean;
  /**
   * @remarks
   * The attribute ID.
   * 
   * @example
   * 1011
   */
  id?: number;
  /**
   * @remarks
   * The monitoring configuration.
   */
  monitorConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListMonitorConfig;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * attr1
   */
  name?: string;
  /**
   * @remarks
   * The referenced attribute information.
   */
  refAttribute?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttribute;
  /**
   * @remarks
   * Indicates whether the attribute is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The attribute type. Valid values:
   * - BIZ_ATTRIBUTE: business attribute.
   * - TECH_ATTRIBUTE: technical attribute.
   * - MANAGEMENT_ATTRIBUTE: management attribute.
   * - QUALITY_ATTRIBUTE: quality attribute.
   * - MASTER_DATA_ATTRIBUTE: master data attribute.
   * - LIFECYCLE_ATTRIBUTE: lifecycle attribute.
   * - SECURITY_ATTRIBUTE: security attribute.
   * 
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
  /**
   * @remarks
   * The value configuration.
   */
  valueConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      enableMonitorConfig: 'EnableMonitorConfig',
      id: 'Id',
      monitorConfig: 'MonitorConfig',
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
      enableMonitorConfig: 'boolean',
      id: 'number',
      monitorConfig: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListMonitorConfig,
      name: 'string',
      refAttribute: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttribute,
      required: 'boolean',
      type: 'string',
      valueConfig: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfig,
    };
  }

  validate() {
    if(this.monitorConfig && typeof (this.monitorConfig as any).validate === 'function') {
      (this.monitorConfig as any).validate();
    }
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

export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfig extends $dara.Model {
  /**
   * @remarks
   * The list of attributes.
   */
  attributeList?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeList[];
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: { 'type': 'array', 'itemType': GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeList },
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

export class GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig extends $dara.Model {
  /**
   * @remarks
   * The number of digits.
   * 
   * @example
   * 3
   */
  digit?: number;
  /**
   * @remarks
   * Indicates whether zero-padding is required.
   */
  needPaddingZero?: boolean;
  /**
   * @remarks
   * The start value.
   * 
   * @example
   * 1
   */
  startValue?: number;
  /**
   * @remarks
   * The step size.
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

export class GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleList extends $dara.Model {
  /**
   * @remarks
   * The auto-increment sequence configuration.
   */
  autoIncrementSequenceConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig;
  /**
   * @remarks
   * The position index of the code rule.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The code rule type. Valid values:
   * - FIXED_STRING: fixed string.
   * - AUTO_INCREMENT: auto-increment sequence.
   * - STANDARD_SET_CODE: standard set code.
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
      autoIncrementSequenceConfig: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig,
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

export class GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfig extends $dara.Model {
  /**
   * @remarks
   * The standard code rules.
   */
  codeRuleList?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleList[];
  /**
   * @remarks
   * Indicates whether strong validation is required.
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
      codeRuleList: { 'type': 'array', 'itemType': GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleList },
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

export class GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfig extends $dara.Model {
  /**
   * @remarks
   * The auto-generation configuration for the standard code rule. This parameter takes effect when the generation method is set to AUTO_GENERATE.
   */
  autoConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfig;
  /**
   * @remarks
   * The standard code generation method. Valid values:
   * - CUSTOMIZED: custom.
   * - AUTO_GENERATE: automatically generated based on the standard code rule.
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
      autoConfig: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfig,
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

export class GetStandardTemplateResponseBodyTemplateInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardTemplateResponseBodyTemplateInfoLastModifier extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardTemplateResponseBodyTemplateInfoMaintainerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardTemplateResponseBodyTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * The attribute configuration.
   */
  attributesConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfig;
  /**
   * @remarks
   * The code of the standard template. This value is globally unique and cannot be modified when references exist.
   * 
   * @example
   * test01
   */
  code?: string;
  /**
   * @remarks
   * The auto-generation rule configuration for the standard code.
   */
  codeRuleConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfig;
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
   * The creator.
   */
  creator?: GetStandardTemplateResponseBodyTemplateInfoCreator;
  /**
   * @remarks
   * The description of the standard template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The standard template ID.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   */
  lastModifier?: GetStandardTemplateResponseBodyTemplateInfoLastModifier;
  /**
   * @remarks
   * The list of maintainers.
   */
  maintainerList?: GetStandardTemplateResponseBodyTemplateInfoMaintainerList[];
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
   * The name of the standard template.
   * 
   * @example
   * 测试模板
   */
  name?: string;
  /**
   * @remarks
   * The source of the standard template. Valid values:
   * - CUSTOM: custom standard template.
   * - SYSTEM: system built-in standard template.
   * 
   * @example
   * SYSTEM
   */
  templateFrom?: string;
  /**
   * @remarks
   * uniqueId
   * 
   * @example
   * 1101
   */
  uniqueId?: string;
  /**
   * @remarks
   * The version number.
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
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      id: 'Id',
      lastModifier: 'LastModifier',
      maintainerList: 'MaintainerList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateFrom: 'TemplateFrom',
      uniqueId: 'UniqueId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesConfig: GetStandardTemplateResponseBodyTemplateInfoAttributesConfig,
      code: 'string',
      codeRuleConfig: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfig,
      createTime: 'string',
      creator: GetStandardTemplateResponseBodyTemplateInfoCreator,
      description: 'string',
      id: 'number',
      lastModifier: GetStandardTemplateResponseBodyTemplateInfoLastModifier,
      maintainerList: { 'type': 'array', 'itemType': GetStandardTemplateResponseBodyTemplateInfoMaintainerList },
      modifyTime: 'string',
      name: 'string',
      templateFrom: 'string',
      uniqueId: 'string',
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
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.lastModifier && typeof (this.lastModifier as any).validate === 'function') {
      (this.lastModifier as any).validate();
    }
    if(Array.isArray(this.maintainerList)) {
      $dara.Model.validateArray(this.maintainerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardTemplateResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The template details.
   */
  templateInfo?: GetStandardTemplateResponseBodyTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templateInfo: GetStandardTemplateResponseBodyTemplateInfo,
    };
  }

  validate() {
    if(this.templateInfo && typeof (this.templateInfo as any).validate === 'function') {
      (this.templateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


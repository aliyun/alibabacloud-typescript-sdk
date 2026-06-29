// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeMonitorConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfo extends $dara.Model {
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
  standardReference?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference;
  static names(): { [key: string]: string } {
    return {
      attributeFrom: 'AttributeFrom',
      standardReference: 'StandardReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeFrom: 'string',
      standardReference: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference,
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttribute extends $dara.Model {
  /**
   * @remarks
   * The attribute source.
   */
  attributeFromInfo?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfo;
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
      attributeFromInfo: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfo,
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRange extends $dara.Model {
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to DATAPHIN_ATTRIBUTE. Valid values:
   * - BIZ_UNIT: business unit.
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
  lookupTableReference?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference;
  /**
   * @remarks
   * The value range. This parameter takes effect when the value source is set to MIN_MAX.
   */
  minMaxValueConfig?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig;
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
      lookupTableReference: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference,
      minMaxValueConfig: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig,
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfig extends $dara.Model {
  /**
   * @remarks
   * The data type of the attribute value. Valid values:
   * - STRING: string.
   * - BIGINT: numeric type.
   * - DOUBLE: floating-point type.
   * - DATE: date, accurate to the day.
   * - DATETIME: date, accurate to milliseconds.
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
   * The length of the attribute value. If empty or -1, the length is not limited. Typically, only string types have a length limit for attribute values.
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
  valueRange?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRange;
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
      valueRange: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRange,
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttribute extends $dara.Model {
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
   * Indicates whether the monitoring configuration is enabled.
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
  monitorConfig?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeMonitorConfig;
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
  refAttribute?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttribute;
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
  valueConfig?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfig;
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
      monitorConfig: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeMonitorConfig,
      name: 'string',
      refAttribute: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttribute,
      required: 'boolean',
      type: 'string',
      valueConfig: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfig,
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueList extends $dara.Model {
  /**
   * @remarks
   * The attribute details.
   */
  attribute?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttribute;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: GetStandardResponseBodyStandardInfoAttributeWithValueListAttribute,
      value: 'string',
    };
  }

  validate() {
    if(this.attribute && typeof (this.attribute as any).validate === 'function') {
      (this.attribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardResponseBodyStandardInfoCreator extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoEffectiveTimeConfig extends $dara.Model {
  /**
   * @remarks
   * The end time of the effective period.
   * 
   * @example
   * 2025-12-30 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the effective period.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The effective period type. Valid values:
   * - FOREVER: permanent.
   * - TIME_PERIOD: time period.
   * 
   * @example
   * TIME_PERIOD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
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

export class GetStandardResponseBodyStandardInfoLastModifier extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoLookupTableRelations extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * zz
   */
  attributeCode?: string;
  /**
   * @remarks
   * The attribute ID.
   * 
   * @example
   * 1122
   */
  attributeId?: number;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * test
   */
  attributeName?: string;
  /**
   * @remarks
   * The lookup table code.
   * 
   * @example
   * test
   */
  lookupTableCode?: string;
  /**
   * @remarks
   * The lookup table ID.
   * 
   * @example
   * 1121
   */
  lookupTableId?: number;
  static names(): { [key: string]: string } {
    return {
      attributeCode: 'AttributeCode',
      attributeId: 'AttributeId',
      attributeName: 'AttributeName',
      lookupTableCode: 'LookupTableCode',
      lookupTableId: 'LookupTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeCode: 'string',
      attributeId: 'number',
      attributeName: 'string',
      lookupTableCode: 'string',
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

export class GetStandardResponseBodyStandardInfoOwner extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * CUSTOMIZED
   */
  name?: string;
  /**
   * @remarks
   * The template source. Valid values:
   * - FROM_SYSTEM: system template.
   * - CUSTOMIZED: custom template.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The configuration item value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList extends $dara.Model {
  /**
   * @remarks
   * The validation configuration ID. This ID is randomly generated by the business and must be unique.
   * 
   * @example
   * abc
   */
  id?: string;
  /**
   * @remarks
   * The metric. This parameter is required when the validation type is EXPRESSION.
   * 
   * @example
   * a
   */
  metric?: string;
  /**
   * @remarks
   * The metric name. This parameter is required when the validation type is EXPRESSION.
   * 
   * @example
   * test
   */
  metricName?: string;
  /**
   * @remarks
   * The operator. If the validation type is EXPRESSION, valid values:
   * - EQUAL: equal to.
   * - NOT_EQUAL: not equal to.
   * - LARGER: greater than.
   * - LARGE_OR_EQUAL: greater than or equal to.
   * - SMALLER: less than.
   * - SMALLER_OR_EQUAL: less than or equal to.
   * 
   * If the validation type is RELATION, valid values:
   * - AND: and.
   * - OR: or.
   * 
   * @example
   * AND
   */
  operator?: string;
  /**
   * @remarks
   * The parent validation configuration ID. The parent rule validation type can only be RELATION.
   * 
   * @example
   * a
   */
  parentId?: string;
  /**
   * @remarks
   * The rule validation type. Valid values:
   * - RELATION: relation.
   * - EXPRESSION: expression.
   * 
   * @example
   * RELATION
   */
  type?: string;
  /**
   * @remarks
   * The comparison value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metric: 'Metric',
      metricName: 'MetricName',
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
      metricName: 'string',
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigList extends $dara.Model {
  /**
   * @remarks
   * The associated attribute ID.
   * 
   * @example
   * 112
   */
  attributeId?: number;
  /**
   * @remarks
   * The monitoring configuration of the associated attribute.
   */
  attributeMonitorConfig?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * teset
   */
  attributeName?: string;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The monitoring configuration ID. If empty, a new monitoring configuration is created. If an existing monitoring configuration ID is specified, the corresponding monitoring configuration is updated.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The method by which the monitoring configuration is added. Valid values:
   * - BY_USER: manually added.
   * - BY_SYSTEM_ATTRIBUTE: preset by system attribute.
   * 
   * @example
   * BY_SYSTEM_ATTRIBUTE
   */
  monitorFrom?: string;
  /**
   * @remarks
   * The rule template. This parameter is required when the monitoring type is QUALITY.
   */
  qualityRuleTemplate?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate;
  /**
   * @remarks
   * The rule configurations. This parameter is required when the monitoring type is QUALITY.
   */
  ruleConfigList?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList[];
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule subtype. Valid values:
   * - BY_ATTRIBUTE: configured based on attributes.
   * - CUSTOMIZED: custom configuration.
   * 
   * This parameter is required when the monitoring type is QUALITY.
   * 
   * @example
   * CUSTOMIZED
   */
  ruleSubType?: string;
  /**
   * @remarks
   * The rule validation configurations. This parameter is required when the monitoring type is QUALITY.
   */
  ruleValidateConfigList?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList[];
  /**
   * @remarks
   * The monitoring type. Valid values:
   * - METADATA: metadata monitoring.
   * - QUALITY: data quality monitoring.
   * 
   * @example
   * METADATA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributeId: 'AttributeId',
      attributeMonitorConfig: 'AttributeMonitorConfig',
      attributeName: 'AttributeName',
      description: 'Description',
      id: 'Id',
      monitorFrom: 'MonitorFrom',
      qualityRuleTemplate: 'QualityRuleTemplate',
      ruleConfigList: 'RuleConfigList',
      ruleName: 'RuleName',
      ruleSubType: 'RuleSubType',
      ruleValidateConfigList: 'RuleValidateConfigList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeId: 'number',
      attributeMonitorConfig: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig,
      attributeName: 'string',
      description: 'string',
      id: 'number',
      monitorFrom: 'string',
      qualityRuleTemplate: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate,
      ruleConfigList: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList },
      ruleName: 'string',
      ruleSubType: 'string',
      ruleValidateConfigList: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList },
      type: 'string',
    };
  }

  validate() {
    if(this.attributeMonitorConfig && typeof (this.attributeMonitorConfig as any).validate === 'function') {
      (this.attributeMonitorConfig as any).validate();
    }
    if(this.qualityRuleTemplate && typeof (this.qualityRuleTemplate as any).validate === 'function') {
      (this.qualityRuleTemplate as any).validate();
    }
    if(Array.isArray(this.ruleConfigList)) {
      $dara.Model.validateArray(this.ruleConfigList);
    }
    if(Array.isArray(this.ruleValidateConfigList)) {
      $dara.Model.validateArray(this.ruleValidateConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * The list of standard monitoring configurations.
   */
  standardMonitorConfigList?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigList[];
  static names(): { [key: string]: string } {
    return {
      standardMonitorConfigList: 'StandardMonitorConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardMonitorConfigList: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.standardMonitorConfigList)) {
      $dara.Model.validateArray(this.standardMonitorConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardResponseBodyStandardInfoStandardRelations extends $dara.Model {
  /**
   * @remarks
   * The association type. Valid values:
   * - RELATIVE.
   * 
   * @example
   * RELATIVE
   */
  relationType?: string;
  /**
   * @remarks
   * The standard ID.
   * 
   * @example
   * 1121
   */
  standardId?: number;
  /**
   * @remarks
   * The stage of the standard.
   * 
   * @example
   * DEV
   */
  standardStage?: string;
  /**
   * @remarks
   * The standard status.
   * 
   * @example
   * draft
   */
  standardStatus?: string;
  /**
   * @remarks
   * The standard version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      standardId: 'StandardId',
      standardStage: 'StandardStage',
      standardStatus: 'StandardStatus',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      standardId: 'number',
      standardStage: 'string',
      standardStatus: 'string',
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

export class GetStandardResponseBodyStandardInfoStandardSet extends $dara.Model {
  /**
   * @remarks
   * The standard set code.
   * 
   * @example
   * cc
   */
  code?: string;
  /**
   * @remarks
   * The folder to which the standard set belongs.
   * 
   * @example
   * /dir1
   */
  directory?: string;
  /**
   * @remarks
   * The standard set ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The standard set name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      directory: 'Directory',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directory: 'string',
      id: 'number',
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

export class GetStandardResponseBodyStandardInfoStandardTemplate extends $dara.Model {
  /**
   * @remarks
   * The standard template code.
   * 
   * @example
   * 1121
   */
  code?: string;
  /**
   * @remarks
   * The standard template ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The standard template name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The source of the standard template. Valid values:
   * - CUSTOM: Custom standard template.
   * - SYSTEM: System built-in standard template.
   * 
   * @example
   * SYSTEM
   */
  templateFrom?: string;
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
      code: 'Code',
      id: 'Id',
      name: 'Name',
      templateFrom: 'TemplateFrom',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      name: 'string',
      templateFrom: 'string',
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

export class GetStandardResponseBodyStandardInfo extends $dara.Model {
  /**
   * @remarks
   * The attribute value configurations.
   */
  attributeWithValueList?: GetStandardResponseBodyStandardInfoAttributeWithValueList[];
  /**
   * @remarks
   * The standard code.
   * 
   * @example
   * zz
   */
  code?: string;
  /**
   * @remarks
   * The creator.
   */
  creator?: GetStandardResponseBodyStandardInfoCreator;
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
   * The effective period configuration.
   */
  effectiveTimeConfig?: GetStandardResponseBodyStandardInfoEffectiveTimeConfig;
  /**
   * @remarks
   * The English name of the standard.
   * 
   * @example
   * test
   */
  englishName?: string;
  /**
   * @remarks
   * The lookup table.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   */
  lastModifier?: GetStandardResponseBodyStandardInfoLastModifier;
  /**
   * @remarks
   * The list of associated lookup tables.
   */
  lookupTableRelations?: GetStandardResponseBodyStandardInfoLookupTableRelations[];
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The standard name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The owner.
   */
  owner?: GetStandardResponseBodyStandardInfoOwner;
  /**
   * @remarks
   * The stage to which the standard belongs.
   * 
   * @example
   * dev
   */
  stage?: string;
  /**
   * @remarks
   * The standard monitoring configuration.
   */
  standardGeneralMonitorConfig?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfig;
  /**
   * @remarks
   * The list of associated standards.
   */
  standardRelations?: GetStandardResponseBodyStandardInfoStandardRelations[];
  /**
   * @remarks
   * The standard set on which the current standard depends.
   */
  standardSet?: GetStandardResponseBodyStandardInfoStandardSet;
  /**
   * @remarks
   * The standard template on which the current standard depends.
   */
  standardTemplate?: GetStandardResponseBodyStandardInfoStandardTemplate;
  /**
   * @remarks
   * The status of the standard.
   * 
   * @example
   * draft
   */
  status?: string;
  /**
   * @remarks
   * The standard type.
   * 
   * @example
   * zz
   */
  type?: string;
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
      attributeWithValueList: 'AttributeWithValueList',
      code: 'Code',
      creator: 'Creator',
      description: 'Description',
      effectiveTimeConfig: 'EffectiveTimeConfig',
      englishName: 'EnglishName',
      id: 'Id',
      lastModifier: 'LastModifier',
      lookupTableRelations: 'LookupTableRelations',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      stage: 'Stage',
      standardGeneralMonitorConfig: 'StandardGeneralMonitorConfig',
      standardRelations: 'StandardRelations',
      standardSet: 'StandardSet',
      standardTemplate: 'StandardTemplate',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeWithValueList: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoAttributeWithValueList },
      code: 'string',
      creator: GetStandardResponseBodyStandardInfoCreator,
      description: 'string',
      effectiveTimeConfig: GetStandardResponseBodyStandardInfoEffectiveTimeConfig,
      englishName: 'string',
      id: 'number',
      lastModifier: GetStandardResponseBodyStandardInfoLastModifier,
      lookupTableRelations: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoLookupTableRelations },
      modifyTime: 'string',
      name: 'string',
      owner: GetStandardResponseBodyStandardInfoOwner,
      stage: 'string',
      standardGeneralMonitorConfig: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfig,
      standardRelations: { 'type': 'array', 'itemType': GetStandardResponseBodyStandardInfoStandardRelations },
      standardSet: GetStandardResponseBodyStandardInfoStandardSet,
      standardTemplate: GetStandardResponseBodyStandardInfoStandardTemplate,
      status: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeWithValueList)) {
      $dara.Model.validateArray(this.attributeWithValueList);
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.effectiveTimeConfig && typeof (this.effectiveTimeConfig as any).validate === 'function') {
      (this.effectiveTimeConfig as any).validate();
    }
    if(this.lastModifier && typeof (this.lastModifier as any).validate === 'function') {
      (this.lastModifier as any).validate();
    }
    if(Array.isArray(this.lookupTableRelations)) {
      $dara.Model.validateArray(this.lookupTableRelations);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(this.standardGeneralMonitorConfig && typeof (this.standardGeneralMonitorConfig as any).validate === 'function') {
      (this.standardGeneralMonitorConfig as any).validate();
    }
    if(Array.isArray(this.standardRelations)) {
      $dara.Model.validateArray(this.standardRelations);
    }
    if(this.standardSet && typeof (this.standardSet as any).validate === 'function') {
      (this.standardSet as any).validate();
    }
    if(this.standardTemplate && typeof (this.standardTemplate as any).validate === 'function') {
      (this.standardTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardResponseBody extends $dara.Model {
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
   * The standard details.
   */
  standardInfo?: GetStandardResponseBodyStandardInfo;
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
      requestId: 'RequestId',
      standardInfo: 'StandardInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      standardInfo: GetStandardResponseBodyStandardInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.standardInfo && typeof (this.standardInfo as any).validate === 'function') {
      (this.standardInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


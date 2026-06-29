// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
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
   * The maximum value. This applies to range interval attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This applies to range interval attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The list of attribute values. This applies to attributes with the input method set to custom input, single-select dropdown, or multi-select dropdown.
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfig extends $dara.Model {
  /**
   * @remarks
   * The attribute field type. Valid values:
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
   * The attribute default value.
   */
  defaultValue?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @remarks
   * The attribute field length. This constrains the maximum length of text-type attribute values.
   * 
   * @example
   * 6997283
   */
  length?: number;
  /**
   * @remarks
   * The attribute value input method. Valid values:
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
   * The attribute option values. This applies only to attributes with the input method set to single-select dropdown or multi-select dropdown.
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
      defaultValue: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue,
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfo extends $dara.Model {
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
   * Indicates whether the attribute is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The attribute ID.
   * 
   * @example
   * -168890138815
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
   * Indicates whether the attribute is required.
   */
  required?: boolean;
  /**
   * @remarks
   * Indicates whether the attribute is searchable.
   */
  searchable?: boolean;
  /**
   * @remarks
   * The attribute value configuration details.
   */
  valueConfig?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfig;
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
      valueConfig: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfig,
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeValue extends $dara.Model {
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
   * The maximum value. This applies to range interval attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This applies to range interval attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The list of attribute values. This applies to attributes with the input method set to custom input, single-select dropdown, or multi-select dropdown.
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueList extends $dara.Model {
  /**
   * @remarks
   * The attribute details.
   */
  attributeInfo?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfo;
  /**
   * @remarks
   * The property value.
   */
  attributeValue?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeValue;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfo,
      attributeValue: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeValue,
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListFormPropertyList extends $dara.Model {
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListScheduleBindList extends $dara.Model {
  /**
   * @remarks
   * The schedule ID.
   * 
   * @example
   * 1
   */
  scheduleId?: number;
  /**
   * @remarks
   * The schedule name.
   * 
   * @example
   * test
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleId: 'number',
      scheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyPageResultQualityRuleListValidateConditionList extends $dara.Model {
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
   * The metric name.
   * 
   * @example
   * test
   */
  metricName?: string;
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
   * The operator name.
   * 
   * @example
   * 且
   */
  operatorName?: string;
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
   * - RELATION: relation.
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
      metricName: 'MetricName',
      operator: 'Operator',
      operatorName: 'OperatorName',
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
      operatorName: 'string',
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListValidateObject extends $dara.Model {
  /**
   * @remarks
   * The validation object name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The validation object type. Valid values: UNKNOWN, TABLE, COLUMN, DATASOURCE, DATASOURCE_TABLE, REALTIME, INDEX, CHAIN.
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListQualityRulesResponseBodyPageResultQualityRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule business attribute configurations.
   */
  attributeWithValueList?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueList[];
  /**
   * @remarks
   * The rule category. Valid values:
   * - CONSISTENT: consistency.
   * - EFFECTIVE: validity.
   * - TIMELINESE: timeliness.
   * - ACCURATE: accuracy.
   * - UNIQUENESS: uniqueness.
   * - COMPLETENESS: completeness.
   * - STABILITY: stability.
   * - CUSTOM: custom.
   */
  catalogList?: string[];
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
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * test
   */
  creatorName?: string;
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
   * Indicates whether exception archiving is enabled.
   */
  enableErrorArchive?: boolean;
  /**
   * @remarks
   * The rule configuration key-value pairs. These vary by templatetype: different templatetypes return different form key-value pair configurations.
   */
  formPropertyList?: ListQualityRulesResponseBodyPageResultQualityRuleListFormPropertyList[];
  /**
   * @remarks
   * The quality rule ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the rule.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the rule.
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
   * The quality rule name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of schedules bound to the rule.
   */
  scheduleBindList?: ListQualityRulesResponseBodyPageResultQualityRuleListScheduleBindList[];
  /**
   * @remarks
   * The quality rule status. Valid values:
   * - ENABLE
   * - DISABLE.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The rule strength. Valid values:
   * - STRONG
   * - WEAK.
   * 
   * @example
   * STRONG
   */
  strength?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 1
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype group. Valid values:
   * - SYSTEM: system preset.
   * - CUSTOM: custom template.
   * - TEMPLATE: union of SYSTEM and CUSTOM.
   * - CUSTOM_SQL: custom SQL template.
   * 
   * @example
   * CUSTOM
   */
  templateScope?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   *   - FIELD_NULL_VALUE_VALIDATE: field null value validation.
   *   - FIELD_EMPTY_STRING_VALIDATE: field empty character string validation.
   *   - FIELD_UNIQUE_VALIDATE: field uniqueness validation.
   *   - FIELD_GROUP_COUNT_VALIDATE: field unique value count validation.
   *   - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count validation.
   *   - FUNCTION_TIME_COMPARE: time function comparison.
   *   - SINGLE_TABLE_TIME_COMPARE: non-partitioned table time field comparison.
   *   - DOUBLE_TABLE_TIME_COMPARE: two-table time field comparison.
   *   - FIELD_FORMAT_VALIDATE: field format validation.
   *   - FIELD_LENGTH_VALIDATE: field length validation.
   *   - FIELD_VALUE_RANGE_VALIDATE: field value range validation.
   *   - CODE_TABLE_COMPARE: lookup table reference comparison.
   *   - STANDARD_CODE_TABLE_COMPARE: data standard lookup table reference comparison.
   *   - SINGLE_TABLE_FIELD_VALUE_COMPARE: non-partitioned table field value consistency comparison.
   *   - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: non-partitioned table field statistical value consistency comparison.
   *   - SINGLE_TABLE_FIELD_EXP_COMPARE: non-partitioned table field business logic consistency comparison.
   *   - DOUBLE_TABLE_FIELD_VALUE_COMPARE: two-table field value consistency comparison.
   *   - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: two-table field statistical value consistency comparison.
   *   - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-source two-table field statistical value consistency comparison.
   *   - DOUBLE_TABLE_FIELD_EXP_COMPARE: two-table field business logic consistency comparison.
   *   - TABLE_STABILITY_VALIDATE: table stability validation.
   *   - TABLE_FLUCTUATION_VALIDATE: table fluctuation validation.
   *   - FIELD_STABILITY_VALIDATE: field stability validation.
   *   - FIELD_FLUCTUATION_VALIDATE: field fluctuation validation.
   *   - CUSTOM_STATISTICAL_VALIDATE: custom statistical metric validation.
   *   - CUSTOM_DATA_DETAILS_VALIDATE: custom data details validation.
   *   - DATASOURCE_AVAILABLE_CHECK: data source connectivity check.
   *   - TABLE_SCHEMA_CHECK: table schema change detection.
   *   - REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison.
   *   - REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value monitoring.
   *   - REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-link comparison, and more.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the most recent trial run task.
   * 
   * @example
   * 22
   */
  testRunRuleTaskId?: number;
  /**
   * @remarks
   * The status of the most recent trial run task. Valid values: NOT_RUN, WAITING, RUNNING, SUCCESS, FAILED.
   * 
   * @example
   * SUCCESS
   */
  testRunRuleTaskStatus?: string;
  /**
   * @remarks
   * Indicates whether the trial run validation passed.
   */
  testRunRuleValidateResult?: boolean;
  /**
   * @remarks
   * The list of validation conditions.
   */
  validateConditionList?: ListQualityRulesResponseBodyPageResultQualityRuleListValidateConditionList[];
  /**
   * @remarks
   * The validation object.
   */
  validateObject?: ListQualityRulesResponseBodyPageResultQualityRuleListValidateObject;
  /**
   * @remarks
   * The ID of the monitoring to which the rule belongs.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      attributeWithValueList: 'AttributeWithValueList',
      catalogList: 'CatalogList',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      enableErrorArchive: 'EnableErrorArchive',
      formPropertyList: 'FormPropertyList',
      id: 'Id',
      modifier: 'Modifier',
      modifierName: 'ModifierName',
      modifyTime: 'ModifyTime',
      name: 'Name',
      scheduleBindList: 'ScheduleBindList',
      status: 'Status',
      strength: 'Strength',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateScope: 'TemplateScope',
      templateType: 'TemplateType',
      testRunRuleTaskId: 'TestRunRuleTaskId',
      testRunRuleTaskStatus: 'TestRunRuleTaskStatus',
      testRunRuleValidateResult: 'TestRunRuleValidateResult',
      validateConditionList: 'ValidateConditionList',
      validateObject: 'ValidateObject',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeWithValueList: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueList },
      catalogList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      enableErrorArchive: 'boolean',
      formPropertyList: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyPageResultQualityRuleListFormPropertyList },
      id: 'number',
      modifier: 'string',
      modifierName: 'string',
      modifyTime: 'string',
      name: 'string',
      scheduleBindList: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyPageResultQualityRuleListScheduleBindList },
      status: 'string',
      strength: 'string',
      templateId: 'number',
      templateName: 'string',
      templateScope: 'string',
      templateType: 'string',
      testRunRuleTaskId: 'number',
      testRunRuleTaskStatus: 'string',
      testRunRuleValidateResult: 'boolean',
      validateConditionList: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyPageResultQualityRuleListValidateConditionList },
      validateObject: ListQualityRulesResponseBodyPageResultQualityRuleListValidateObject,
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
    if(Array.isArray(this.scheduleBindList)) {
      $dara.Model.validateArray(this.scheduleBindList);
    }
    if(Array.isArray(this.validateConditionList)) {
      $dara.Model.validateArray(this.validateConditionList);
    }
    if(this.validateObject && typeof (this.validateObject as any).validate === 'function') {
      (this.validateObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of quality rules returned by page.
   */
  qualityRuleList?: ListQualityRulesResponseBodyPageResultQualityRuleList[];
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
      qualityRuleList: 'QualityRuleList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityRuleList: { 'type': 'array', 'itemType': ListQualityRulesResponseBodyPageResultQualityRuleList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityRuleList)) {
      $dara.Model.validateArray(this.qualityRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRulesResponseBody extends $dara.Model {
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
  pageResult?: ListQualityRulesResponseBodyPageResult;
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
      pageResult: ListQualityRulesResponseBodyPageResult,
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


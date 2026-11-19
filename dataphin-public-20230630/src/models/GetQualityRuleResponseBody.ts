// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
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
   * The maximum value. This applies to range attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This applies to range attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. This applies to attributes whose entry method is custom input, single-select drop-down list, or multi-select drop-down list.
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

export class GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfig extends $dara.Model {
  /**
   * @remarks
   * The attribute field type. Valid values: STRING: text. BIGINT: integer. DOUBLE: floating-point number. BOOLEAN: Boolean. DATE: date. DATETIME: datetime.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the attribute.
   */
  defaultValue?: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @remarks
   * The attribute field length, which constrains the maximum length of text attribute values.
   * 
   * @example
   * 6921666
   */
  length?: number;
  /**
   * @remarks
   * The attribute value entry method. Valid values: CUSTOMIZED: custom input. SINGLE_ENUM: single-select drop-down list. MULTIPLE_ENUMS: multi-select drop-down list. RANGE: range.
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The attribute option values. This applies only to attributes whose entry method is a single-select drop-down list or a multi-select drop-down list.
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
      defaultValue: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfigDefaultValue,
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

export class GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfo extends $dara.Model {
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
   * 612415804007
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
  valueConfig?: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfig;
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
      valueConfig: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfoValueConfig,
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

export class GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeValue extends $dara.Model {
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
   * The maximum value. This applies to range attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This applies to range attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. This applies to attributes whose entry method is custom input, single-select drop-down list, or multi-select drop-down list.
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

export class GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueList extends $dara.Model {
  /**
   * @remarks
   * The attribute details.
   */
  attributeInfo?: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfo;
  /**
   * @remarks
   * The value of the property.
   */
  attributeValue?: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeValue;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeInfo,
      attributeValue: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueListAttributeValue,
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

export class GetQualityRuleResponseBodyQualityRuleInfoFormPropertyList extends $dara.Model {
  /**
   * @remarks
   * The type of the component.
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

export class GetQualityRuleResponseBodyQualityRuleInfoScheduleBindList extends $dara.Model {
  /**
   * @remarks
   * The ID of the schedule.
   * 
   * @example
   * 1
   */
  scheduleId?: number;
  /**
   * @remarks
   * The name of the schedule.
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

export class GetQualityRuleResponseBodyQualityRuleInfoValidateConditionList extends $dara.Model {
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
   * The name of the metric.
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
   * The name of the operator.
   * 
   * @example
   * AND
   */
  operatorName?: string;
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
   * The type of the condition. Valid values: RELATION, EXPRESSION.
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

export class GetQualityRuleResponseBodyQualityRuleInfoValidateObject extends $dara.Model {
  /**
   * @remarks
   * The name of the validation object.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The check object type. Valid values: UNKNOWN, TABLE, COLUMN, DATASOURCE, DATASOURCE_TABLE, REALTIME, INDEX, CHAIN.
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

export class GetQualityRuleResponseBodyQualityRuleInfo extends $dara.Model {
  /**
   * @remarks
   * The business attribute configuration of the rule.
   */
  attributeWithValueList?: GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueList[];
  /**
   * @remarks
   * The rule categories. Valid values:
   * - CONSISTENT: consistency
   * - EFFECTIVE: effectiveness
   * - TIMELINESE: timeliness
   * - ACCURATE: accuracy
   * - UNIQUENESS: uniqueness
   * - COMPLETENESS: completeness
   * - STABILITY: stability
   * - CUSTOM: custom
   */
  catalogList?: string[];
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
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
   * The name of the creator.
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
   * Specifies whether error archiving is enabled.
   */
  enableErrorArchive?: boolean;
  /**
   * @remarks
   * The key-value pairs for rule configuration. Different templatetypes return different form key-value pair configurations.
   */
  formPropertyList?: GetQualityRuleResponseBodyQualityRuleInfoFormPropertyList[];
  /**
   * @remarks
   * The ID of the quality rule.
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
   * The modification time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the quality rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of schedules bound to the rule.
   */
  scheduleBindList?: GetQualityRuleResponseBodyQualityRuleInfoScheduleBindList[];
  /**
   * @remarks
   * The status of the quality rule. Valid values: ENABLE, DISABLE.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The strength of the rule. Valid values: STRONG, WEAK.
   * 
   * @example
   * STRONG
   */
  strength?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * 1
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype group. Valid values: SYSTEM, CUSTOM, TEMPLATE (the union of SYSTEM and CUSTOM), CUSTOM_SQL.
   * 
   * @example
   * CUSTOM
   */
  templateScope?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   *   - FIELD_NULL_VALUE_VALIDATE: field null value check
   *   - FIELD_EMPTY_STRING_VALIDATE: field empty character string check
   *   - FIELD_UNIQUE_VALIDATE: field uniqueness check
   *   - FIELD_GROUP_COUNT_VALIDATE: field unique value count check
   *   - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count check
   *   - FUNCTION_TIME_COMPARE: time function comparison
   *   - SINGLE_TABLE_TIME_COMPARE: non-partitioned table time field comparison
   *   - DOUBLE_TABLE_TIME_COMPARE: two-table time field comparison
   *   - FIELD_FORMAT_VALIDATE: field format check
   *   - FIELD_LENGTH_VALIDATE: field length check
   *   - FIELD_VALUE_RANGE_VALIDATE: field value range check
   *   - CODE_TABLE_COMPARE: lookup table reference comparison
   *   - STANDARD_CODE_TABLE_COMPARE: data standard lookup table reference comparison
   *   - SINGLE_TABLE_FIELD_VALUE_COMPARE: non-partitioned table field value consistency comparison
   *   - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: non-partitioned table field statistical value consistency comparison
   *   - SINGLE_TABLE_FIELD_EXP_COMPARE: non-partitioned table field business logic consistency comparison
   *   - DOUBLE_TABLE_FIELD_VALUE_COMPARE: two-table field value consistency comparison
   *   - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: two-table field statistical value consistency comparison
   *   - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-source two-table field statistical value consistency comparison
   *   - DOUBLE_TABLE_FIELD_EXP_COMPARE: two-table field business logic consistency comparison
   *   - TABLE_STABILITY_VALIDATE: table stability check
   *   - TABLE_FLUCTUATION_VALIDATE: table fluctuation check
   *   - FIELD_STABILITY_VALIDATE: field stability check
   *   - FIELD_FLUCTUATION_VALIDATE: field fluctuation check
   *   - CUSTOM_STATISTICAL_VALIDATE: custom statistical metric check
   *   - CUSTOM_DATA_DETAILS_VALIDATE: custom data details check
   *   - DATASOURCE_AVAILABLE_CHECK: data source connectivity check
   *   - TABLE_SCHEMA_CHECK: table schema change check
   *   - REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison
   *   - REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value check
   *   - REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-link comparison
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the latest test run task.
   * 
   * @example
   * 22
   */
  testRunRuleTaskId?: number;
  /**
   * @remarks
   * The status of the latest test run task. Valid values: NOT_RUN, WAITING, RUNNING, SUCCESS, FAILED.
   * 
   * @example
   * SUCCESS
   */
  testRunRuleTaskStatus?: string;
  /**
   * @remarks
   * Specifies whether the test run check is passed.
   */
  testRunRuleValidateResult?: boolean;
  /**
   * @remarks
   * The check condition list.
   */
  validateConditionList?: GetQualityRuleResponseBodyQualityRuleInfoValidateConditionList[];
  /**
   * @remarks
   * The check object.
   */
  validateObject?: GetQualityRuleResponseBodyQualityRuleInfoValidateObject;
  /**
   * @remarks
   * The ID of the quality watchtask.
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
      attributeWithValueList: { 'type': 'array', 'itemType': GetQualityRuleResponseBodyQualityRuleInfoAttributeWithValueList },
      catalogList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      enableErrorArchive: 'boolean',
      formPropertyList: { 'type': 'array', 'itemType': GetQualityRuleResponseBodyQualityRuleInfoFormPropertyList },
      id: 'number',
      modifier: 'string',
      modifierName: 'string',
      modifyTime: 'string',
      name: 'string',
      scheduleBindList: { 'type': 'array', 'itemType': GetQualityRuleResponseBodyQualityRuleInfoScheduleBindList },
      status: 'string',
      strength: 'string',
      templateId: 'number',
      templateName: 'string',
      templateScope: 'string',
      templateType: 'string',
      testRunRuleTaskId: 'number',
      testRunRuleTaskStatus: 'string',
      testRunRuleValidateResult: 'boolean',
      validateConditionList: { 'type': 'array', 'itemType': GetQualityRuleResponseBodyQualityRuleInfoValidateConditionList },
      validateObject: GetQualityRuleResponseBodyQualityRuleInfoValidateObject,
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

export class GetQualityRuleResponseBody extends $dara.Model {
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
   * The quality rule details.
   */
  qualityRuleInfo?: GetQualityRuleResponseBodyQualityRuleInfo;
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
      qualityRuleInfo: 'QualityRuleInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityRuleInfo: GetQualityRuleResponseBodyQualityRuleInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityRuleInfo && typeof (this.qualityRuleInfo as any).validate === 'function') {
      (this.qualityRuleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


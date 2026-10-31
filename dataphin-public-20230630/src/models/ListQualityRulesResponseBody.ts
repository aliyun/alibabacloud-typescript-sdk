// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the maximum value is included.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether the minimum value is included.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. This parameter applies to range attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This parameter applies to range attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. This parameter applies to attributes whose input method is custom input, single-select drop-down list, or multi-select drop-down list.
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
   * The attribute field type. Valid values: STRING (text), BIGINT (integer), DOUBLE (floating-point number), BOOLEAN (boolean), DATE (date), and DATETIME (datetime).
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the attribute.
   */
  defaultValue?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @remarks
   * The attribute field length. You can use this parameter to constrain the maximum length of text attribute values.
   * 
   * @example
   * 6997283
   */
  length?: number;
  /**
   * @remarks
   * The attribute value input method. Valid values: CUSTOMIZED (custom input), SINGLE_ENUM (single-select drop-down list), MULTIPLE_ENUMS (multi-select drop-down list), and RANGE (range).
   * 
   * @example
   * CUSTOMIZED
   */
  type?: string;
  /**
   * @remarks
   * The attribute option values. This parameter applies only to attributes whose input method is a single-select or multi-select drop-down list.
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
   * Specifies whether the attribute is enabled.
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
   * Specifies whether the maximum value is included.
   */
  includeMaxValue?: boolean;
  /**
   * @remarks
   * Specifies whether the minimum value is included.
   */
  includeMinValue?: boolean;
  /**
   * @remarks
   * The maximum value. This parameter applies to range attributes.
   * 
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum value. This parameter applies to range attributes.
   * 
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * The attribute value list. This parameter applies to attributes whose input method is custom input, single-select drop-down list, or multi-select drop-down list.
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
   * The attribute value.
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
   * The attribute value.
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

export class ListQualityRulesResponseBodyPageResultQualityRuleListValidateConditionList extends $dara.Model {
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
   * The operator. Valid values:
   * - EQUAL: Equal to.
   * - NOT_EQUAL: Not equal to.
   * - LARGER: Greater than.
   * - SMALLER: Less than.
   * - LARGE_OR_EQUAL: Greater than or equal to.
   * - SMALLER_OR_EQUAL: Less than or equal to.
   * - AND: AND.
   * - OR: OR.
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
   * The condition type. Valid values:
   * - RELATION: Relation.
   * - EXPRESSION: Expression.
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
   * The name of the validation object.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The validation object type. Valid values:
   * - UNKNOWN: Unknown.
   * - TABLE: Table.
   * - COLUMN: Column.
   * - DATASOURCE: Data source.
   * - DATASOURCE_TABLE: Data source table.
   * - REALTIME: Real-time.
   * - INDEX: Index.
   * - CHAIN: Chain.
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
   * The business attribute configuration of the rule.
   */
  attributeWithValueList?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueList[];
  /**
   * @remarks
   * The rule category. Valid values: CONSISTENT (consistency), EFFECTIVE (validity), TIMELINESE (timeliness), ACCURATE (accuracy), UNIQUENESS (uniqueness), COMPLETENESS (completeness), STABILITY (stability), and CUSTOM (custom).
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
   * Specifies whether error archiving is enabled.
   */
  enableErrorArchive?: boolean;
  /**
   * @remarks
   * The rule configuration key-value pairs. Different template types return different form key-value pair configurations.
   */
  formPropertyList?: ListQualityRulesResponseBodyPageResultQualityRuleListFormPropertyList[];
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
   * The ID of the user who last modified the quality rule.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the quality rule.
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
  scheduleBindList?: ListQualityRulesResponseBodyPageResultQualityRuleListScheduleBindList[];
  /**
   * @remarks
   * The SQL preview text of the saved rule. The text may contain multiple SQL statements. If preview is not supported or generation fails, null is returned.
   * 
   * @example
   * select count(*) from test_table;
   */
  sql?: string;
  /**
   * @remarks
   * The status of the quality rule. Valid values:
   * - ENABLE: Enabled.
   * - DISABLE: Disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The strength of the rule. Valid values:
   * - STRONG: Strong rule.
   * - WEAK: Weak rule.
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
   * The template type group. Valid values:
   * - SYSTEM: System preset template.
   * - CUSTOM: Custom template.
   * - TEMPLATE: Union of SYSTEM and CUSTOM.
   * - CUSTOM_SQL: Custom SQL template.
   * 
   * @example
   * CUSTOM
   */
  templateScope?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: Field null value check.
   * - FIELD_EMPTY_STRING_VALIDATE: Field empty character string check.
   * - FIELD_UNIQUE_VALIDATE: Field uniqueness check.
   * - FIELD_GROUP_COUNT_VALIDATE: Field unique value count check.
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: Field duplicate value count check.
   * - FUNCTION_TIME_COMPARE: Time function comparison.
   * - SINGLE_TABLE_TIME_COMPARE: Non-partitioned table time field comparison.
   * - DOUBLE_TABLE_TIME_COMPARE: Two-table time field comparison.
   * - FIELD_FORMAT_VALIDATE: Field format check.
   * - FIELD_LENGTH_VALIDATE: Field length check.
   * - FIELD_VALUE_RANGE_VALIDATE: Field value range check.
   * - CODE_TABLE_COMPARE: Lookup table reference comparison.
   * - STANDARD_CODE_TABLE_COMPARE: Data standard lookup table reference comparison.
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: Non-partitioned table field value consistency comparison.
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: Non-partitioned table field statistical value consistency comparison.
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: Non-partitioned table field business logic consistency comparison.
   * - DOUBLE_TABLE_FIELD_VALUE_COMPARE: Two-table field value consistency comparison.
   * - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Two-table field statistical value consistency comparison.
   * - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Cross-source two-table field statistical value consistency comparison.
   * - DOUBLE_TABLE_FIELD_EXP_COMPARE: Two-table field business logic consistency comparison.
   * - TABLE_STABILITY_VALIDATE: Table stability check.
   * - TABLE_FLUCTUATION_VALIDATE: Table fluctuation check.
   * - FIELD_STABILITY_VALIDATE: Field stability check.
   * - FIELD_FLUCTUATION_VALIDATE: Field fluctuation check.
   * - CUSTOM_STATISTICAL_VALIDATE: Custom statistical metric check.
   * - CUSTOM_DATA_DETAILS_VALIDATE: Custom data details check.
   * - DATASOURCE_AVAILABLE_CHECK: Data source connectivity check.
   * - TABLE_SCHEMA_CHECK: Table schema change check.
   * - REAL_TIME_OFFLINE_COMPARE: Real-time and offline comparison.
   * - REAL_TIME_STATISTICAL_VALIDATE: Real-time statistical value check.
   * - REAL_TIME_MULTI_CHAIN_COMPARE: Real-time multi-link comparison.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the last test run task.
   * 
   * @example
   * 22
   */
  testRunRuleTaskId?: number;
  /**
   * @remarks
   * The status of the last test run task. Valid values:
   * - NOT_RUN: Not run.
   * - WAITING: Waiting.
   * - RUNNING: Running.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * 
   * @example
   * SUCCESS
   */
  testRunRuleTaskStatus?: string;
  /**
   * @remarks
   * Indicates whether the test run validation passed.
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
   * The ID of the quality watchtask to which the rule belongs.
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
      sql: 'Sql',
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
      sql: 'string',
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
   * The paged quality rule task list.
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
   * Indicates whether the request is successful.
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


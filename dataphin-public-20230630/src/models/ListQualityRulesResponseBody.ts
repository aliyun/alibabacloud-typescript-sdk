// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @example
   * 1
   */
  minValue?: string;
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
   * @example
   * STRING
   */
  dataType?: string;
  defaultValue?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @example
   * 6997283
   */
  length?: number;
  /**
   * @example
   * CUSTOMIZED
   */
  type?: string;
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
   * @example
   * test
   */
  description?: string;
  enabled?: boolean;
  /**
   * @example
   * -168890138815
   */
  id?: number;
  /**
   * @example
   * attr01
   */
  name?: string;
  required?: boolean;
  searchable?: boolean;
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
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @example
   * 1
   */
  minValue?: string;
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
  attributeInfo?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueListAttributeInfo;
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
   * @example
   * expression
   */
  componentType?: string;
  /**
   * @example
   * col
   */
  name?: string;
  /**
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
   * @example
   * 1
   */
  scheduleId?: number;
  /**
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
   * @example
   * 268
   */
  id?: string;
  /**
   * @example
   * test
   */
  metric?: string;
  /**
   * @example
   * test
   */
  metricName?: string;
  /**
   * @example
   * AND
   */
  operator?: string;
  /**
   * @example
   * 且
   */
  operatorName?: string;
  /**
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @example
   * RELATION
   */
  type?: string;
  /**
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
   * @example
   * test
   */
  name?: string;
  /**
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
  attributeWithValueList?: ListQualityRulesResponseBodyPageResultQualityRuleListAttributeWithValueList[];
  catalogList?: string[];
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  enableErrorArchive?: boolean;
  formPropertyList?: ListQualityRulesResponseBodyPageResultQualityRuleListFormPropertyList[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * test
   */
  modifierName?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  scheduleBindList?: ListQualityRulesResponseBodyPageResultQualityRuleListScheduleBindList[];
  /**
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @example
   * STRONG
   */
  strength?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 1
   */
  templateName?: string;
  /**
   * @example
   * CUSTOM
   */
  templateScope?: string;
  /**
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  /**
   * @example
   * 22
   */
  testRunRuleTaskId?: number;
  /**
   * @example
   * SUCCESS
   */
  testRunRuleTaskStatus?: string;
  testRunRuleValidateResult?: boolean;
  validateConditionList?: ListQualityRulesResponseBodyPageResultQualityRuleListValidateConditionList[];
  validateObject?: ListQualityRulesResponseBodyPageResultQualityRuleListValidateObject;
  /**
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
  qualityRuleList?: ListQualityRulesResponseBodyPageResultQualityRuleList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListQualityRulesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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


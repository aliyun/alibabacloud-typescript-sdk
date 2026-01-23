// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue extends $dara.Model {
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 11
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

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfig extends $dara.Model {
  /**
   * @example
   * STRING
   */
  dataType?: string;
  defaultValue?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfoValueConfigDefaultValue;
  /**
   * @example
   * 986992
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
   * @example
   * test
   */
  description?: string;
  enabled?: boolean;
  /**
   * @example
   * 711484689131
   */
  id?: number;
  /**
   * @example
   * attr01
   */
  name?: string;
  required?: boolean;
  searchable?: boolean;
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
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 11
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

export class UpsertQualityRuleRequestUpsertCommandAttributeWithValueList extends $dara.Model {
  attributeInfo?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueListAttributeInfo;
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

export class UpsertQualityRuleRequestUpsertCommandValidateConditionList extends $dara.Model {
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
   * AND
   */
  operator?: string;
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
  attributeWithValueList?: UpsertQualityRuleRequestUpsertCommandAttributeWithValueList[];
  /**
   * @remarks
   * This parameter is required.
   */
  catalogList?: string[];
  /**
   * @example
   * test
   */
  description?: string;
  enableErrorArchive?: boolean;
  formPropertyList?: UpsertQualityRuleRequestUpsertCommandFormPropertyList[];
  /**
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRONG
   */
  strength?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FIELD_NULL_VALUE_VALIDATE
   */
  templateType?: string;
  validateConditionList?: UpsertQualityRuleRequestUpsertCommandValidateConditionList[];
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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


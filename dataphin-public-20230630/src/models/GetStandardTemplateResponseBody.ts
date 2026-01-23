// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListMonitorConfig extends $dara.Model {
  /**
   * @example
   * column1
   */
  columnName?: string;
  isCaseSensitive?: boolean;
  /**
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
   * @example
   * 22
   */
  standardId?: number;
  /**
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
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
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
  attributeFromInfo?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttributeAttributeFromInfo;
  /**
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
   * @example
   * col1
   */
  column?: string;
  /**
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
  includeMaxValue?: boolean;
  includeMinValue?: boolean;
  /**
   * @example
   * 100
   */
  maxValue?: string;
  /**
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
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  lookupTableReference?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeLookupTableReference;
  minMaxValueConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListValueConfigValueRangeMinMaxValueConfig;
  /**
   * @example
   * NONE
   */
  valueConstraint?: string;
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
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @example
   * 1
   */
  length?: number;
  /**
   * @example
   * CUSTOMIZED
   */
  type?: string;
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
   * @example
   * test_attr
   */
  code?: string;
  /**
   * @example
   * test
   */
  description?: string;
  enableMonitorConfig?: boolean;
  /**
   * @example
   * 1011
   */
  id?: number;
  monitorConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListMonitorConfig;
  /**
   * @example
   * attr1
   */
  name?: string;
  refAttribute?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfigAttributeListRefAttribute;
  required?: boolean;
  /**
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
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
   * @example
   * 3
   */
  digit?: number;
  needPaddingZero?: boolean;
  /**
   * @example
   * 1
   */
  startValue?: number;
  /**
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
  autoIncrementSequenceConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleListAutoIncrementSequenceConfig;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * FIXED_STRING
   */
  type?: string;
  /**
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
  codeRuleList?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfigCodeRuleList[];
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
  autoConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfigAutoConfig;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
  attributesConfig?: GetStandardTemplateResponseBodyTemplateInfoAttributesConfig;
  /**
   * @example
   * test01
   */
  code?: string;
  codeRuleConfig?: GetStandardTemplateResponseBodyTemplateInfoCodeRuleConfig;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  creator?: GetStandardTemplateResponseBodyTemplateInfoCreator;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 22
   */
  id?: number;
  lastModifier?: GetStandardTemplateResponseBodyTemplateInfoLastModifier;
  maintainerList?: GetStandardTemplateResponseBodyTemplateInfoMaintainerList[];
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 测试模板
   */
  name?: string;
  /**
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
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


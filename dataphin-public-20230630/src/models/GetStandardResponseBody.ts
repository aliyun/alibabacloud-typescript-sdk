// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeMonitorConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfoStandardReference extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfo extends $dara.Model {
  /**
   * @example
   * CUSTOM
   */
  attributeFrom?: string;
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
  attributeFromInfo?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttributeAttributeFromInfo;
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRange extends $dara.Model {
  /**
   * @example
   * DATAPHIN_ATTRIBUTE
   */
  dataphinAttributeType?: string;
  lookupTableReference?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeLookupTableReference;
  minMaxValueConfig?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeValueConfigValueRangeMinMaxValueConfig;
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
  monitorConfig?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeMonitorConfig;
  /**
   * @example
   * attr1
   */
  name?: string;
  refAttribute?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttributeRefAttribute;
  required?: boolean;
  /**
   * @example
   * BIZ_ATTRIBUTE
   */
  type?: string;
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
  attribute?: GetStandardResponseBodyStandardInfoAttributeWithValueListAttribute;
  /**
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

export class GetStandardResponseBodyStandardInfoEffectiveTimeConfig extends $dara.Model {
  /**
   * @example
   * 2025-12-30 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
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

export class GetStandardResponseBodyStandardInfoLookupTableRelations extends $dara.Model {
  /**
   * @example
   * zz
   */
  attributeCode?: string;
  /**
   * @example
   * 1122
   */
  attributeId?: number;
  /**
   * @example
   * test
   */
  attributeName?: string;
  /**
   * @example
   * test
   */
  lookupTableCode?: string;
  /**
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig extends $dara.Model {
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

export class GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate extends $dara.Model {
  /**
   * @example
   * 22
   */
  id?: number;
  /**
   * @example
   * CUSTOMIZED
   */
  name?: string;
  /**
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
   * @example
   * k1
   */
  key?: string;
  /**
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
   * @example
   * abc
   */
  id?: string;
  /**
   * @example
   * a
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
   * a
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
   * @example
   * 112
   */
  attributeId?: number;
  attributeMonitorConfig?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig;
  /**
   * @example
   * teset
   */
  attributeName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * BY_SYSTEM_ATTRIBUTE
   */
  monitorFrom?: string;
  qualityRuleTemplate?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate;
  ruleConfigList?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList[];
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @example
   * CUSTOMIZED
   */
  ruleSubType?: string;
  ruleValidateConfigList?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList[];
  /**
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
   * @example
   * RELATIVE
   */
  relationType?: string;
  /**
   * @example
   * 1121
   */
  standardId?: number;
  /**
   * @example
   * DEV
   */
  standardStage?: string;
  /**
   * @example
   * draft
   */
  standardStatus?: string;
  /**
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
   * @example
   * cc
   */
  code?: string;
  /**
   * @example
   * /dir1
   */
  directory?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
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
   * @example
   * 1121
   */
  code?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * SYSTEM
   */
  templateFrom?: string;
  /**
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
  attributeWithValueList?: GetStandardResponseBodyStandardInfoAttributeWithValueList[];
  /**
   * @example
   * zz
   */
  code?: string;
  creator?: GetStandardResponseBodyStandardInfoCreator;
  /**
   * @example
   * test
   */
  description?: string;
  effectiveTimeConfig?: GetStandardResponseBodyStandardInfoEffectiveTimeConfig;
  /**
   * @example
   * test
   */
  englishName?: string;
  /**
   * @example
   * 1234
   */
  id?: number;
  lastModifier?: GetStandardResponseBodyStandardInfoLastModifier;
  lookupTableRelations?: GetStandardResponseBodyStandardInfoLookupTableRelations[];
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
  owner?: GetStandardResponseBodyStandardInfoOwner;
  /**
   * @example
   * dev
   */
  stage?: string;
  standardGeneralMonitorConfig?: GetStandardResponseBodyStandardInfoStandardGeneralMonitorConfig;
  standardRelations?: GetStandardResponseBodyStandardInfoStandardRelations[];
  standardSet?: GetStandardResponseBodyStandardInfoStandardSet;
  standardTemplate?: GetStandardResponseBodyStandardInfoStandardTemplate;
  /**
   * @example
   * draft
   */
  status?: string;
  /**
   * @example
   * zz
   */
  type?: string;
  /**
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
  standardInfo?: GetStandardResponseBodyStandardInfo;
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


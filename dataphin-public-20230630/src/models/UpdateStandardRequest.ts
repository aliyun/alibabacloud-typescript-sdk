// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardRequestUpdateCommandEffectiveTimeConfig extends $dara.Model {
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
   * @remarks
   * This parameter is required.
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig extends $dara.Model {
  /**
   * @example
   * column1
   */
  columnName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  isCaseSensitive?: boolean;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOMIZED
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigList extends $dara.Model {
  /**
   * @example
   * 112
   */
  attributeId?: number;
  attributeMonitorConfig?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BY_SYSTEM_ATTRIBUTE
   */
  monitorFrom?: string;
  qualityRuleTemplate?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate;
  ruleConfigList?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @example
   * CUSTOMIZED
   */
  ruleSubType?: string;
  ruleValidateConfigList?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList[];
  /**
   * @remarks
   * This parameter is required.
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
      attributeMonitorConfig: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListAttributeMonitorConfig,
      attributeName: 'string',
      description: 'string',
      id: 'number',
      monitorFrom: 'string',
      qualityRuleTemplate: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListQualityRuleTemplate,
      ruleConfigList: { 'type': 'array', 'itemType': UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleConfigList },
      ruleName: 'string',
      ruleSubType: 'string',
      ruleValidateConfigList: { 'type': 'array', 'itemType': UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigListRuleValidateConfigList },
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

export class UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  standardMonitorConfigList?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigList[];
  static names(): { [key: string]: string } {
    return {
      standardMonitorConfigList: 'StandardMonitorConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardMonitorConfigList: { 'type': 'array', 'itemType': UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfigStandardMonitorConfigList },
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

export class UpdateStandardRequestUpdateCommandStandardSetReference extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardRequestUpdateCommandStandardTemplateReferenceAttributeValueList extends $dara.Model {
  /**
   * @example
   * 1011
   */
  attributeId?: number;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attributeId: 'AttributeId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeId: 'number',
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

export class UpdateStandardRequestUpdateCommandStandardTemplateReference extends $dara.Model {
  attributeValueList?: UpdateStandardRequestUpdateCommandStandardTemplateReferenceAttributeValueList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValueList: 'AttributeValueList',
      id: 'Id',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValueList: { 'type': 'array', 'itemType': UpdateStandardRequestUpdateCommandStandardTemplateReferenceAttributeValueList },
      id: 'number',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeValueList)) {
      $dara.Model.validateArray(this.attributeValueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardRequestUpdateCommand extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  effectiveTimeConfig?: UpdateStandardRequestUpdateCommandEffectiveTimeConfig;
  needGenerateStandardCode?: boolean;
  /**
   * @example
   * 300000913
   */
  owner?: string;
  standardGeneralMonitorConfig?: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  standardId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  standardSetReference?: UpdateStandardRequestUpdateCommandStandardSetReference;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * draft
   */
  standardStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  standardTemplateReference?: UpdateStandardRequestUpdateCommandStandardTemplateReference;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      effectiveTimeConfig: 'EffectiveTimeConfig',
      needGenerateStandardCode: 'NeedGenerateStandardCode',
      owner: 'Owner',
      standardGeneralMonitorConfig: 'StandardGeneralMonitorConfig',
      standardId: 'StandardId',
      standardSetReference: 'StandardSetReference',
      standardStatus: 'StandardStatus',
      standardTemplateReference: 'StandardTemplateReference',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectiveTimeConfig: UpdateStandardRequestUpdateCommandEffectiveTimeConfig,
      needGenerateStandardCode: 'boolean',
      owner: 'string',
      standardGeneralMonitorConfig: UpdateStandardRequestUpdateCommandStandardGeneralMonitorConfig,
      standardId: 'number',
      standardSetReference: UpdateStandardRequestUpdateCommandStandardSetReference,
      standardStatus: 'string',
      standardTemplateReference: UpdateStandardRequestUpdateCommandStandardTemplateReference,
      version: 'number',
    };
  }

  validate() {
    if(this.effectiveTimeConfig && typeof (this.effectiveTimeConfig as any).validate === 'function') {
      (this.effectiveTimeConfig as any).validate();
    }
    if(this.standardGeneralMonitorConfig && typeof (this.standardGeneralMonitorConfig as any).validate === 'function') {
      (this.standardGeneralMonitorConfig as any).validate();
    }
    if(this.standardSetReference && typeof (this.standardSetReference as any).validate === 'function') {
      (this.standardSetReference as any).validate();
    }
    if(this.standardTemplateReference && typeof (this.standardTemplateReference as any).validate === 'function') {
      (this.standardTemplateReference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardRequest extends $dara.Model {
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
  updateCommand?: UpdateStandardRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateStandardRequestUpdateCommand,
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


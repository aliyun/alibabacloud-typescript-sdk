// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the rule parameter.
   * 
   * You must specify `ParameterName` and `ParameterValue` together, or leave both empty. If a rule template has a parameter without a default value, you must specify the parameter. For more information, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * bandwidth
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the rule parameter.
   * 
   * You must specify `ParameterName` and `ParameterValue` together, or leave both empty. If a rule template has a parameter without a default value, you must specify the parameter. For more information, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * 20
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequestConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID. CloudConfig adds the existing rule to the compliance pack.
   * 
   * You must specify either `ManagedRuleIdentifier` or `ConfigRuleId`. If you specify both parameters, `ConfigRuleId` takes precedence. For more information, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * cr-e918626622af000f****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * 检测闲置弹性公网IP
   */
  configRuleName?: string;
  /**
   * @remarks
   * The parameters of the rule.
   */
  configRuleParameters?: UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * 弹性公网已绑定到ECS或者NAT实例，非闲置状态，视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the rule template. CloudConfig automatically creates a rule based on the rule template identifier and adds the rule to the compliance pack.
   * 
   * You must specify either `ManagedRuleIdentifier` or `ConfigRuleId`. If you specify both parameters, `ConfigRuleId` takes precedence. For more information, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: high risk.
   * 
   * - 2: medium risk.
   * 
   * - 3: low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleParameters)) {
      $dara.Model.validateArray(this.configRuleParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-2
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * You can add up to 20 tag keys.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * You can add up to 20 tag values.
   * 
   * @example
   * value-1
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

export class UpdateAggregateCompliancePackRequestTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request. Generate a value that is unique among different requests. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the compliance pack.
   * 
   * For more information, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance pack.
   * 
   * For more information, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
   * 
   * @example
   * 等保三级预检合规包
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The rules in the compliance pack.
   * 
   * If you leave this parameter empty when you modify the compliance pack, the existing rules are not changed. If you specify new rules, the new rules replace the existing ones.
   */
  configRules?: UpdateAggregateCompliancePackRequestConfigRules[];
  /**
   * @remarks
   * The description of the compliance pack.
   * 
   * @example
   * 基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。
   */
  description?: string;
  /**
   * @remarks
   * The rules are not effective for resources in the specified regions. Resources in these regions are not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rules are not effective for resources in the specified resource groups. Resources in these resource groups are not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack is not effective for the specified resources. The specified resources are not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tag scope.
   */
  excludeTagsScope?: UpdateAggregateCompliancePackRequestExcludeTagsScope[];
  /**
   * @remarks
   * The compliance pack is effective only for resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack is effective only for resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rules are effective only for the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: high risk.
   * 
   * - 2: medium risk.
   * 
   * - 3: low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and no longer takes effect.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tag?: UpdateAggregateCompliancePackRequestTag[];
  /**
   * @remarks
   * The compliance pack is effective only for resources that have the specified tag key.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The compliance pack is effective only for resources that have the specified tag key and tag value.
   * 
   * > You must specify TagValueScope together with TagKeyScope.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag scope.
   */
  tagsScope?: UpdateAggregateCompliancePackRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRules: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tag: 'Tag',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRules: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRules },
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tag: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestTag },
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestTagsScope },
    };
  }

  validate() {
    if(Array.isArray(this.configRules)) {
      $dara.Model.validateArray(this.configRules);
    }
    if(Array.isArray(this.excludeTagsScope)) {
      $dara.Model.validateArray(this.excludeTagsScope);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.tagsScope)) {
      $dara.Model.validateArray(this.tagsScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


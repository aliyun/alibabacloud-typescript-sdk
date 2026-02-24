// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCompliancePackRequestConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the rule parameter.
   * 
   * You must specify `ParameterName` and `ParameterValue` together, or leave them both empty. If a rule template has a parameter without a default value, you must specify this parameter. For more information, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * bandwidth
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the rule parameter.
   * 
   * You must specify `ParameterName` and `ParameterValue` together, or leave them both empty. If a rule template has a parameter without a default value, you must specify this parameter. For more information, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
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

export class UpdateCompliancePackRequestConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID. CloudConfig adds an existing rule to the compliance pack.
   * 
   * You must specify either `ManagedRuleIdentifier` or `ConfigRuleId`. If you specify both parameters, `ConfigRuleId` takes precedence. For more information, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
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
  configRuleParameters?: UpdateCompliancePackRequestConfigRulesConfigRuleParameters[];
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
   * The identifier of the rule template. CloudConfig automatically creates a rule based on this identifier and adds the rule to the compliance pack.
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
   * - 1: High risk.
   * 
   * - 2: Medium risk.
   * 
   * - 3: Low risk.
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
      configRuleParameters: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRulesConfigRuleParameters },
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

export class UpdateCompliancePackRequestExcludeTagsScope extends $dara.Model {
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

export class UpdateCompliancePackRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * If you specify this parameter, it cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https:// `.
   * 
   * You can specify the tag keys of up to 20 tags at a time.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, it can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class UpdateCompliancePackRequestTagsScope extends $dara.Model {
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

export class UpdateCompliancePackRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique token for each request. The `ClientToken` value can contain only ASCII characters and must be no more than 64 characters long.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the compliance pack.
   * 
   * For more information, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance pack.
   * 
   * For more information, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * @example
   * 等保三级预检合规包
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The rules in the compliance pack.
   * 
   * If you leave this parameter empty when you modify the compliance pack, the original rules are retained. If you specify new rules, they replace the original rules.
   */
  configRules?: UpdateCompliancePackRequestConfigRules[];
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
   * The compliance pack does not evaluate resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not evaluate resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not evaluate the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tag scope.
   */
  excludeTagsScope?: UpdateCompliancePackRequestExcludeTagsScope[];
  /**
   * @remarks
   * The compliance pack evaluates only resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: High risk.
   * 
   * - 2: Medium risk.
   * 
   * - 3: Low risk.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated. Ignore this parameter because it is no longer valid.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tag?: UpdateCompliancePackRequestTag[];
  /**
   * @remarks
   * The compliance pack evaluates only resources that have the specified tag key.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The compliance pack evaluates only resources that have the specified tag key and value.
   * 
   * > You must use TagValueScope with TagKeyScope.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag scope.
   */
  tagsScope?: UpdateCompliancePackRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
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
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRules: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRules },
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tag: { 'type': 'array', 'itemType': UpdateCompliancePackRequestTag },
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackRequestTagsScope },
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


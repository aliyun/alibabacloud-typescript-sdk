// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the rule parameter.
   * 
   * @example
   * bandwidth
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the rule parameter.
   * 
   * @example
   * 10
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required for the rule. Valid values:
   * 
   * - true: The parameter is required.
   * 
   * - false: The parameter is not required.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePackConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-a260626622af0005****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * 弹性IP实例带宽满足最低要求
   */
  configRuleName?: string;
  /**
   * @remarks
   * The information about the rule parameters.
   */
  configRuleParameters?: GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * 弹性IP实例可用带宽大于等于指定参数值，视为“合规”。默认值：10 MB。
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the rule template.
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The types of resources that are evaluated by the rule. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
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
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      resourceTypesScope: 'string',
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

export class GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope extends $dara.Model {
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

export class GetCompliancePackResponseBodyCompliancePackScopeTagsScope extends $dara.Model {
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

export class GetCompliancePackResponseBodyCompliancePackScope extends $dara.Model {
  /**
   * @remarks
   * The IDs of the regions from which resources are excluded. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The compliance package is not effective for the resources in the resource groups with the specified IDs. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance package is not effective for the resources with the specified IDs. The resources are not evaluated.
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tag scope.
   * 
   * This parameter is required.
   */
  excludeTagsScope?: GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope[];
  /**
   * @remarks
   * The compliance package is effective only for resources in the specified regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The compliance package is effective only for the resources in the resource groups with the specified IDs.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance package is effective only for resources with the specified IDs. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The compliance package is effective only for the resources that have the specified tag key.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The compliance package is effective only for the resources that have the specified tag key-value pair.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag scope.
   * 
   * This parameter is required.
   */
  tagsScope?: GetCompliancePackResponseBodyCompliancePackScopeTagsScope[];
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackScopeTagsScope },
    };
  }

  validate() {
    if(Array.isArray(this.excludeTagsScope)) {
      $dara.Model.validateArray(this.excludeTagsScope);
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

export class GetCompliancePackResponseBodyCompliancePackTags extends $dara.Model {
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

export class GetCompliancePackResponseBodyCompliancePack extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the compliance package belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * 等保三级预检合规包
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The list of rules in the compliance package.
   */
  configRules?: GetCompliancePackResponseBodyCompliancePackConfigRules[];
  /**
   * @remarks
   * The timestamp when the compliance package was created. Unit: milliseconds.
   * 
   * @example
   * 1624245766000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * 基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the compliance package. Valid values:
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
   * The evaluation scope.
   */
  scope?: GetCompliancePackResponseBodyCompliancePackScope;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * - ACTIVE: The compliance package is active.
   * 
   * - CREATING: The compliance package is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetCompliancePackResponseBodyCompliancePackTags[];
  /**
   * @remarks
   * The template information for the compliance package. The rule list in the template does not include user-defined function rules. You can use this template to quickly create the same compliance package for other accounts or account groups.
   * 
   * @example
   * {
   *     "configRuleTemplates": [
   *         {
   *             "configRuleName": "自定义条件规则示例",
   *             "scope": {
   *                 "complianceResourceTypes": [
   *                     "ACS::ECS::Instance"
   *                 ]
   *             },
   *             "description": "",
   *             "source": {
   *                 "owner": "CUSTOM_CONFIGURATION",
   *                 "identifier": "acs-config-configuration",
   *                 "sourceDetails": [
   *                     {
   *                         "messageType": "ScheduledNotification",
   *                         "maximumExecutionFrequency": "Twelve_Hours"
   *                     },
   *                     {
   *                         "messageType": "ConfigurationItemChangeNotification"
   *                     }
   *                 ],
   *                 "conditions": "{\\"ComplianceConditions\\":\\"{\\\\\\"operator\\\\\\":\\\\\\"and\\\\\\",\\\\\\"children\\\\\\":[{\\\\\\"operator\\\\\\":\\\\\\"GreaterOrEquals\\\\\\",\\\\\\"featurePath\\\\\\":\\\\\\"$.Cpu\\\\\\",\\\\\\"featureSource\\\\\\":\\\\\\"CONFIGURATION\\\\\\",\\\\\\"desired\\\\\\":\\\\\\"2\\\\\\"}]}\\"}"
   *             },
   *             "inputParameters": {}
   *         },
   *         {
   *             "configRuleName": "OSS存储空间Referer在指定的防盗链白名单中",
   *             "scope": {
   *                 "complianceResourceTypes": [
   *                     "ACS::OSS::Bucket"
   *                 ]
   *             },
   *             "description": "OSS存储空间开启防盗链并且Referer在指定白名单中，视为“合规”。",
   *             "source": {
   *                 "owner": "ALIYUN",
   *                 "identifier": "oss-bucket-referer-limit",
   *                 "sourceDetails": [
   *                     {
   *                         "messageType": "ConfigurationItemChangeNotification"
   *                     }
   *                 ]
   *             },
   *             "inputParameters": {
   *                 "allowEmptyReferer": "true",
   *                 "allowReferers": "http://www.aliyun.com"
   *             }
   *         }
   *     ]
   * }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      status: 'Status',
      tags: 'Tags',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRules },
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      scope: GetCompliancePackResponseBodyCompliancePackScope,
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackTags },
      templateContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configRules)) {
      $dara.Model.validateArray(this.configRules);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance package.
   */
  compliancePack?: GetCompliancePackResponseBodyCompliancePack;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePack: 'CompliancePack',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePack: GetCompliancePackResponseBodyCompliancePack,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePack && typeof (this.compliancePack as any).validate === 'function') {
      (this.compliancePack as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


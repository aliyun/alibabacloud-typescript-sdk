// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter.
   * 
   * @example
   * bandwidth
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the input parameter.
   * 
   * @example
   * 10
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the input parameters are required. Valid values:
   * 
   * *   true
   * *   false
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
   * The rule name.
   * 
   * @example
   * eip-bandwidth-limit
   */
  configRuleName?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   */
  configRuleParameters?: GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The type of the resource evaluated based on the rule. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
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
   * The key of the tag.
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The key of the tag.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The IDs of regions that are excluded. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resource groups whose resources you do not want to evaluate by using the compliance package. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource that you do not want to evaluate by using the compliance package.
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The scope of the tag that is excluded.
   * 
   * This parameter is required.
   */
  excludeTagsScope?: GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope[];
  /**
   * @remarks
   * The ID of the region whose resources you want to evaluate by using the compliance package.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource group whose resources you want to evaluate by using the compliance package.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resources to which the rule applies. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The tag key of the resource that you want to evaluate by using the compliance package.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The tag value of the resource that you want to evaluate by using the compliance package.
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
   * The tag keys of the resource.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag values of the resource.
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
   * The ID of the compliance package.
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
   * example-pack-name
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
   * The rules in the compliance package.
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
   * example-name
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rules in the compliance package. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The resource group for which the compliance package took effect.
   */
  scope?: GetCompliancePackResponseBodyCompliancePackScope;
  /**
   * @remarks
   * The status of the compliance package. Valid values:
   * 
   * *   ACTIVE: The compliance package is normal.
   * *   CREATING: The compliance package is being created.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetCompliancePackResponseBodyCompliancePackTags[];
  /**
   * @remarks
   * The information about the current compliance package template. The rules in the template do not contain custom function rules. You can quickly create the same compliance package for other accounts or account groups based on the template information.
   * 
   * @example
   * {
   *     "configRuleTemplates": [
   *         {
   *             "configRuleName": "rule-example",
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
   *             "configRuleName": "name",
   *             "scope": {
   *                 "complianceResourceTypes": [
   *                     "ACS::OSS::Bucket"
   *                 ]
   *             },
   *             "description": "description-1",
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
   * The details of the compliance package.
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


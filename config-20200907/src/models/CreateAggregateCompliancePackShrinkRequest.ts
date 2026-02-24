// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateCompliancePackShrinkRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * 4
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * user
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

export class CreateAggregateCompliancePackShrinkRequestTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * tagKey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * tagValue1
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

export class CreateAggregateCompliancePackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request. Generate a value from your client to make sure that the value is unique among different requests. `ClientToken` supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the compliance pack.
   * 
   * This parameter is required.
   * 
   * @example
   * 等保三级预检合规包
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance pack template.
   * 
   * For more information about how to obtain the ID of a compliance pack template, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The rules in the compliance pack.
   * 
   * > Specify either this parameter or `TemplateContent`.
   */
  configRulesShrink?: string;
  /**
   * @remarks
   * Indicates whether the rule is enabled for quick activation. Valid values:
   * 
   * - true: The rule is enabled when you quickly activate the compliance pack.
   * 
   * - false (default): The rule is not enabled.
   * 
   * @example
   * false
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The description of the compliance pack.
   * 
   * @example
   * 基于等保三级的部分要求，对阿里云上资源的合规性做检测。
   */
  description?: string;
  /**
   * @remarks
   * The compliance pack does not take effect for resources in the specified regions. The resources in these regions are not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not take effect for resources in the specified resource groups. The resources in these resource groups are not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack does not take effect for the specified resources. The resources are not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tags.
   */
  excludeTagsScope?: CreateAggregateCompliancePackShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The compliance pack takes effect only for resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The compliance pack takes effect only for resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The compliance pack takes effect only for the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the compliance pack. Valid values:
   * 
   * - 1: High
   * 
   * - 2 (default): Medium
   * 
   * - 3: Low
   * 
   * @example
   * 2
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The compliance pack takes effect only for resources that have the specified tag key.
   * 
   * @example
   * ECS
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * The compliance pack takes effect only for resources that have the specified tag key-value pair.
   * 
   * > TagValueScope must be used with TagKeyScope.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The effective tags.
   */
  tagsScope?: CreateAggregateCompliancePackShrinkRequestTagsScope[];
  /**
   * @remarks
   * The template information that is used to generate the compliance pack. You can view the template content in the details of an existing compliance pack or create a template. For more information, see [Create a configurable compliance pack template](https://help.aliyun.com/document_detail/2659733.html).
   * 
   * > Specify either this parameter or `ConfigRules`.
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
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagShrink: 'Tag',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagShrink: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackShrinkRequestTagsScope },
      templateContent: 'string',
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


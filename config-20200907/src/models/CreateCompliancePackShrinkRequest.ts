// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompliancePackShrinkRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * TagKey
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * TagValue
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

export class CreateCompliancePackShrinkRequestTagsScope extends $dara.Model {
  /**
   * @remarks
   * Tagkey
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * TagValue
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

export class CreateCompliancePackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotency of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.``
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * This parameter is required.
   * 
   * @example
   * test-pack-name
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the compliance package template.
   * 
   * You can call the [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html) operation to obtain the ID of the compliance package.
   * 
   * @example
   * ct-5f26ff4e06a300c4****
   */
  compliancePackTemplateId?: string;
  /**
   * @remarks
   * The rules in the compliance package. You must specify either this parameter or TemplateContent.
   * 
   * **if can be null:**
   * false
   */
  configRulesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule together with the compliance package. Valid values:
   * 
   * *   true: The system enables the rule together with the compliance package.
   * *   false: The system does not enable the rule together with the compliance package.
   * 
   * @example
   * false
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The description of the compliance package.
   * 
   * @example
   * Test pack description.
   */
  description?: string;
  /**
   * @remarks
   * ExcludeRegionIdsScope
   * 
   * @example
   * cn-hangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * ExcludeResourceGroupIdsScope. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource that you do not want to evaluate by using the compliance package. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * ExcludeTagsScope
   */
  excludeTagsScope?: CreateCompliancePackShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The ID of the region whose resources you want to evaluate by using the compliance package. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource group whose resources you want to evaluate by using the compliance package. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * ResourceIdsScope
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rules in the compliance package. Default value: 2. Valid values:
   * 
   * *   1: high.
   * *   2: medium.
   * *   3: low.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tagShrink?: string;
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
   * >  You must configure the TagValueScope parameter together with the TagKeyScope parameter.
   * 
   * @example
   * test
   */
  tagValueScope?: string;
  /**
   * @remarks
   * TagsScope
   */
  tagsScope?: CreateCompliancePackShrinkRequestTagsScope[];
  /**
   * @remarks
   * The information about the template that is used to generate the compliance package. You can call an API operation to view the details of an existing compliance package or write a compliance package template. For more information, see [Write a compliance package template in a configuration file](https://help.aliyun.com/document_detail/2659733.html). You must specify one of ConfigRules and TemplateContent.
   * 
   * @example
   * { "configRuleTemplates": [ { "configRuleName": "condition-rule-example", "scope": { "complianceResourceTypes": [ "ACS::ECS::Instance" ] }, "description": "", "source": { "owner": "CUSTOM_CONFIGURATION", "identifier": "acs-config-configuration", "sourceDetails": [ { "messageType": "ScheduledNotification", "maximumExecutionFrequency": "Twelve_Hours" }, { "messageType": "ConfigurationItemChangeNotification" } ], "conditions": "{\\\\"ComplianceConditions\\\\":\\\\"{\\\\\\\\\\"operator\\\\\\\\\\":\\\\\\\\\\"and\\\\\\\\\\",\\\\\\\\\\"children\\\\\\\\\\":[{\\\\\\\\\\"operator\\\\\\\\\\":\\\\\\\\\\"GreaterOrEquals\\\\\\\\\\",\\\\\\\\\\"featurePath\\\\\\\\\\":\\\\\\\\\\"$.Cpu\\\\\\\\\\",\\\\\\\\\\"featureSource\\\\\\\\\\":\\\\\\\\\\"CONFIGURATION\\\\\\\\\\",\\\\\\\\\\"desired\\\\\\\\\\":\\\\\\\\\\"2\\\\\\\\\\"}]}\\\\"}" }, "inputParameters": {} }, { "configRuleName": "oss-bucket-referer-limit", "scope": { "complianceResourceTypes": [ "ACS::OSS::Bucket" ] }, "description": "If the hotlink protection feature is enabled for the Object Storage Service (OSS) bucket and the Referer is added to a specific whitelist, the evaluation result is compliant.", "source": { "owner": "ALIYUN", "identifier": "oss-bucket-referer-limit", "sourceDetails": [ { "messageType": "ConfigurationItemChangeNotification" } ] }, "inputParameters": { "allowEmptyReferer": "true", "allowReferers": "http://www.aliyun.com" } } ] }
   */
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
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
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagShrink: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestTagsScope },
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


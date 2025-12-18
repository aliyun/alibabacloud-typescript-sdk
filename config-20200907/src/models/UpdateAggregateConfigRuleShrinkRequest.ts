// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope extends $dara.Model {
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

export class UpdateAggregateConfigRuleShrinkRequestTagsScope extends $dara.Model {
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

export class UpdateAggregateConfigRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts to which the rule applies, which means that the resources within the member accounts are evaluated based on the rule. Separate multiple member account IDs with commas (,).
   * 
   * @example
   * 115748125982****
   */
  accountIdsScope?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to query the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information about how to query the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-4e3d626622af0080****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * For more information about how to query the name of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * test_rule
   */
  configRuleName?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
   * 
   * >  This parameter applies only to a custom rule.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  configRuleTriggerTypes?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the member accounts to which the rule does not apply, which means that the resources within the member accounts are not evaluated based on the rule. Separate multiple member account IDs with commas (,).
   * 
   * >  This parameter applies only to a managed rule.
   * 
   * @example
   * 120886317861****
   */
  excludeAccountIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resource directories to which the rule does not apply, which means that the resources within member accounts in the resource directories are not evaluated based on the rule. Separate multiple resource directory IDs with commas (,).
   * 
   * > 
   * 
   * *   This parameter applies only to a rule of a global account group.
   * 
   * *   This parameter applies only to a managed rule.
   * 
   * @example
   * fd-pWmkqZ****
   */
  excludeFolderIdsScope?: string;
  /**
   * @remarks
   * The IDs of the regions to which the rule not applies. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resource groups to which the rule not applies. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resources excluded from the compliance evaluations performed by the rule. Separate multiple resource IDs with commas (,).
   * 
   * >  This parameter applies only to a managed rule.
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * Exclude the specific tag scope of resources .
   */
  excludeTagsScope?: UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The IDs of the resource directories to which the rule applies, which means that the resources within member accounts in the resource directories are evaluated based on the rule.
   * 
   * > 
   * 
   * *   This parameter applies only to a rule of a global account group.
   * 
   * *   This parameter applies only to a managed rule.
   * 
   * @example
   * fd-ZtHsRH****
   */
  folderIdsScope?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   * 
   * @example
   * {"tag1Key":"ECS","tag1Value":"test"}
   */
  inputParametersShrink?: string;
  /**
   * @remarks
   * The interval at which the rule is triggered. Valid values:
   * 
   * *   One_Hour
   * *   Three_Hours
   * *   Six_Hours
   * *   Twelve_Hours
   * *   TwentyFour_Hours
   * 
   * >  This parameter is required if the `ConfigRuleTriggerTypes` parameter is set to `ScheduledNotification`.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The IDs of the regions to which the rule applies. Separate multiple region IDs with commas (,).
   * 
   * >  This parameter applies only to a managed rule.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resource groups to which the rule applies. Separate multiple resource group IDs with commas (,).
   * 
   * >  This parameter applies only to a managed rule.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resources included from the compliance evaluations performed by the rule. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The names of the resource to which the rule applies.
   * 
   * @example
   * i-xxx
   * 
   * **if can be null:**
   * true
   */
  resourceNameScope?: string;
  /**
   * @remarks
   * The type of the resource to be evaluated by the rule. Separate multiple resource types with commas (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypesScopeShrink?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   * 
   * @deprecated
   */
  tagShrink?: string;
  /**
   * @remarks
   * The logical relationship when parameter `TagsScope` takes multiple values, for example: When the parameter `TagsScope` is `"TagsScope.1.TagKey":"a", "TagsScope.1.TagValue":"a", "TagsScope.2.TagKey":"b", "TagsScope.2.TagValue":"b"`, if this parameter is set to` AND`, it means that the rule only applies to resources bound with both tags `a:a` and `b:b`. If not specified, the default logic is `OR`.
   * 
   * It can also be used for the deprecated field `TagKeyScope` (not recommended), for example: When the parameter `TagKeyScope` has a value of `ECS`,`OSS`, if this parameter is set to `AND`, it means that the rule only applies to resources bound with both labels `ECS` and `OSS`.
   * 
   * Values:
   * 
   *  - AND: And.
   * 
   *  - OR: Or.
   * 
   * @example
   * AND
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. We recommend that you use the `TagsScope` parameter.
   * 
   * The tag key used to filter resources. The rule applies only to the resources with the specified tag key.
   * 
   * >  This parameter applies only to a managed rule. You must configure the `TagKeyScope` and `TagValueScope` parameters at the same time.
   * 
   * @example
   * ECS
   * 
   * @deprecated
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. We recommend that you use the `TagsScope` parameter.
   * 
   * The tag value used to filter resources. The rule applies only to the resources that use the specified tag value.
   * 
   * >  This parameter applies only to a managed rule. You must configure the `TagKeyScope` and `TagValueScope` parameters at the same time.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The valid tag scope of resources.
   */
  tagsScope?: UpdateAggregateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceNameScope: 'ResourceNameScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagShrink: 'Tag',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsScope: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope },
      folderIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceNameScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      tagShrink: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleShrinkRequestTagsScope },
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


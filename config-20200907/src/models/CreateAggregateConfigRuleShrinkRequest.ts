// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateConfigRuleShrinkRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource to be excluded.
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource to be excluded.
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

export class CreateAggregateConfigRuleShrinkRequestTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
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

export class CreateAggregateConfigRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The rule is effective only for resources of the specified member accounts. Separate multiple member account IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * 115748125982****
   */
  accountIdsScope?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client token to ensure that the request is idempotent. Generate a unique value from your client for each request. The `ClientToken` parameter must contain only ASCII characters and be no more than 64 characters long.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @example
   * {"ComplianceConditions":"{\"operator\":\"and\",\"children\":[{\"operator\":\"StringEquals\",\"featurePath\":\"$.Status\",\"desired\":\"1\",\"featureSource\":\"CONFIGURATION\"}]}"}
   */
  conditions?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 存在所有指定标签
   */
  configRuleName?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * 
   * - ScheduledNotification: The rule is triggered on a regular basis.
   * 
   * This parameter is required.
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
   * 最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The rule is not effective for resources of the specified member accounts. The resources of the specified member accounts are not evaluated. Separate multiple member account IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * 120886317861****
   */
  excludeAccountIdsScope?: string;
  /**
   * @remarks
   * The rule is not effective for resources of the member accounts in the specified folders. The resources of the member accounts in the specified folders are not evaluated. Separate multiple folder IDs with commas (,).
   * 
   * > - This parameter applies only to rules of a global account group.
   * >
   * > - This parameter applies only to rule templates.
   * 
   * @example
   * fd-pWmkqZ****
   */
  excludeFolderIdsScope?: string;
  /**
   * @remarks
   * The rule is not effective for resources in the specified regions. The resources in the specified regions are not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rule is not effective for resources in the specified resource groups. The resources in the specified resource groups are not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule is not effective for the specified resources. The specified resources are not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The scope of the tags to be excluded.
   */
  excludeTagsScope?: CreateAggregateConfigRuleShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The extended content. This parameter specifies the trigger time for a rule that runs on a 24-hour cycle.
   * 
   * @example
   * {"fixedHour":"12"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The rule is effective only for resources of the member accounts in the specified folders. Separate multiple folder IDs with commas (,).
   * 
   * > - This parameter applies only to rules of a global account group.
   * >
   * > - This parameter applies only to rule templates.
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
   * The frequency at which the rule is run. Valid values:
   * 
   * - One_Hour: 1 hour.
   * 
   * - Three_Hours: 3 hours.
   * 
   * - Six_Hours: 6 hours.
   * 
   * - Twelve_Hours: 12 hours.
   * 
   * - TwentyFour_Hours (default): 24 hours.
   * 
   * > This parameter is required if you set `ConfigRuleTriggerTypes` to `ScheduledNotification`.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The rule is effective only for resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule is effective only for resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule is effective only for the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The rule is effective only for resources that have the specified names.
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
   * The resource types to be evaluated by the rule. Separate multiple resource types with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypesScopeShrink?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * - If you set `SourceOwner` to `ALIYUN`, enter the identifier of the rule template, such as `required-tags`.
   * 
   *   > For more information about how to query the identifier of a rule template, see [List of rule templates](https://help.aliyun.com/document_detail/127404.html).
   * 
   * - If you set `SourceOwner` to `CUSTOM_FC`, enter the Alibaba Cloud Resource Name (ARN) of the function in Function Compute.
   * 
   *   The ARN is in the format of `acs:fc:{region}:{accountId}:services/{serviceName}.LATEST/functions/{functionName}`. For example, `acs:fc:cn-hangzhou:120886317861****:services/service-test.LATEST/functions/config-test`.
   * 
   *   > For more information about how to obtain the ARN of a function, see [ListFunctions](https://help.aliyun.com/document_detail/415752.html).
   * 
   * This parameter is required.
   * 
   * @example
   * required-tags
   */
  sourceIdentifier?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - ALIYUN: rule template
   * 
   * - CUSTOM_FC: custom rule
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
  /**
   * @remarks
   * The tags to add to the rule. You can add up to 20 tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The logical relationship for multiple tags in the `TagsScope` parameter. For example, if you set the `TagsScope` parameter to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. The default value is `OR`.
   * 
   * This parameter can also be used for the deprecated `TagKeyScope` parameter, but this is not recommended. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.
   * 
   * Valid values:
   * 
   * - AND
   * 
   * - OR
   * 
   * @example
   * AND
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `TagsScope` parameter.
   * 
   * The rule is effective only for resources that have the specified tag keys. Separate multiple tag keys with commas (,).
   * 
   * > This parameter applies only to rule templates. The `TagKeyScope` and `TagValueScope` parameters must be used together.
   * 
   * @example
   * ECS
   * 
   * @deprecated
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `TagsScope` parameter.
   * 
   * The rule is effective only for resources that have the specified tag values.
   * 
   * > This parameter applies only to rule templates. The `TagKeyScope` and `TagValueScope` parameters must be used together.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The scope of the tags.
   */
  tagsScope?: CreateAggregateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      conditions: 'Conditions',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      extendContent: 'ExtendContent',
      folderIdsScope: 'FolderIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceNameScope: 'ResourceNameScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
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
      conditions: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleShrinkRequestExcludeTagsScope },
      extendContent: 'string',
      folderIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceNameScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagShrink: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleShrinkRequestTagsScope },
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


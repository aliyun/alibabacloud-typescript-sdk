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
   * The rule applies only to resources of the specified member accounts. Separate multiple member account IDs with a comma (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * 115748125982****
   */
  accountIdsScope?: string;
  /**
   * @remarks
   * The account group ID.
   * 
   * For more information, see [ListAggregators]().
   * 
   * This parameter is required.
   * 
   * @example
   * ca-a4e5626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Make sure that the client token is unique for each request. The `ClientToken` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The conditions for the custom rule, specified in JSON format.
   * 
   * @example
   * {"ComplianceConditions":"{\\"operator\\":\\"and\\",\\"children\\":[{\\"operator\\":\\"StringEquals\\",\\"featurePath\\":\\"$.Status\\",\\"desired\\":\\"1\\",\\"featureSource\\":\\"CONFIGURATION\\"}]}"}
   */
  conditions?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information, see [ListAggregateConfigRules]().
   * 
   * This parameter is required.
   * 
   * @example
   * cr-4e3d626622af0080****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * For more information, see [ListAggregateConfigRules]().
   * 
   * @example
   * 存在所有指定标签
   */
  configRuleName?: string;
  /**
   * @remarks
   * The trigger mechanism of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: Configuration changes.
   * 
   * - ScheduledNotification: Scheduled execution.
   * 
   * > You can modify this parameter only for custom rules.
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
   * The member accounts to exclude. The rule does not apply to resources of these member accounts. Separate multiple member account IDs with a comma (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * 120886317861****
   */
  excludeAccountIdsScope?: string;
  /**
   * @remarks
   * The folders to exclude. The rule does not apply to resources of member accounts in these folders. Separate multiple folder IDs with a comma (,).
   * 
   * > - This parameter applies only to rules in a global account group.
   * >
   * > - This parameter applies only to rule templates.
   * 
   * @example
   * fd-pWmkqZ****
   */
  excludeFolderIdsScope?: string;
  /**
   * @remarks
   * The regions to exclude. The rule does not apply to resources in these regions. Separate multiple region IDs with a comma (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The resource groups to exclude. The rule does not apply to resources in these resource groups. Separate multiple resource group IDs with a comma (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The resources to exclude. The rule does not apply to these resources. Separate multiple resource IDs with a comma (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded tag scope.
   */
  excludeTagsScope?: UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * The rule applies only to resources of member accounts in the specified resource directory IDs.
   * 
   * > - This parameter applies only to rules in a global account group.
   * >
   * > - This parameter applies only to rule templates.
   * 
   * @example
   * fd-ZtHsRH****
   */
  folderIdsScope?: string;
  /**
   * @remarks
   * The rule parameters.
   * 
   * @example
   * {"tag1Key":"ECS","tag1Value":"test"}
   */
  inputParametersShrink?: string;
  /**
   * @remarks
   * The frequency at which the rule runs. Valid values:
   * 
   * - One_Hour: 1 hour.
   * 
   * - Three_Hours: 3 hours.
   * 
   * - Six_Hours: 6 hours.
   * 
   * - Twelve_Hours: 12 hours.
   * 
   * - TwentyFour_Hours: 24 hours.
   * 
   * > This parameter is required if you set `ConfigRuleTriggerTypes` to `ScheduledNotification`.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The rule applies only to resources in the specified region IDs. Separate multiple region IDs with a comma (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to resources in the specified resource group IDs. Separate multiple resource group IDs with a comma (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to the specified resource IDs. Separate multiple resource IDs with a comma (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to resources with the specified resource name.
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
   * The resource types that the rule evaluates. Separate multiple resource types with a comma (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypesScopeShrink?: string;
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
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The rule applies only to resources with the specified resource name.
   * 
   * @deprecated
   */
  tagShrink?: string;
  /**
   * @remarks
   * The logical relationship for multiple tags in the `TagsScope` parameter. For example, if you set the `TagsScope` parameter to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you do not set this parameter, the default value is `OR`.
   * 
   * This parameter also works with the deprecated `TagKeyScope` parameter (not recommended). For example, if you set the `TagKeyScope` parameter to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.
   * 
   * Valid values:
   * 
   * - AND: Logical AND.
   * 
   * - OR: Logical OR.
   * 
   * @example
   * AND
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `TagsScope` parameter instead.
   * 
   * The rule applies only to resources with the specified tag.
   * 
   * > This parameter applies only to rule templates. You must specify both `TagKeyScope` and `TagValueScope`.
   * 
   * @example
   * ECS
   * 
   * @deprecated
   */
  tagKeyScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `TagsScope` parameter instead.
   * 
   * The rule applies only to resources with the specified tag.
   * 
   * > This parameter applies only to rule templates. You must specify both `TagKeyScope` and `TagValueScope`.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag scope.
   */
  tagsScope?: UpdateAggregateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      conditions: 'Conditions',
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
      conditions: 'string',
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


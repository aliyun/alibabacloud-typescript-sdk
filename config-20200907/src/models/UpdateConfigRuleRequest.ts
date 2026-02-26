// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigRuleRequestExcludeTagsScope extends $dara.Model {
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

export class UpdateConfigRuleRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class UpdateConfigRuleRequestTagsScope extends $dara.Model {
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

export class UpdateConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Generate a unique token on your client for each request. The `ClientToken` parameter supports only ASCII characters and must not exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The condition for a custom conditional rule, in JSON format.
   * 
   * @example
   * {"ComplianceConditions":"{\\"operator\\":\\"and\\",\\"children\\":[{\\"operator\\":\\"StringEquals\\",\\"featurePath\\":\\"$.Status\\",\\"desired\\":\\"1\\",\\"featureSource\\":\\"CONFIGURATION\\"}]}"}
   * 
   * **if can be null:**
   * true
   */
  conditions?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-a260626622af0005****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * For more information, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * 存在所有指定标签
   */
  configRuleName?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule triggers on configuration changes.
   * 
   * - ScheduledNotification: The rule triggers on a schedule.
   * 
   * > You can modify this parameter only for custom rules.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  configRuleTriggerTypes?: string;
  /**
   * @remarks
   * The rule description. The description can be up to 500 characters long.
   * 
   * @example
   * 最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The regions where the rule does not apply. To specify multiple region IDs, separate them with a comma (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The resource groups where the rule does not apply. To specify multiple resource group IDs, separate them with a comma (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The resources that the rule does not evaluate. To specify multiple resource IDs, separate them with a comma (,).
   * 
   * > This parameter applies only to managed rules.
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The tags used to exclude resources.
   */
  excludeTagsScope?: UpdateConfigRuleRequestExcludeTagsScope[];
  /**
   * @remarks
   * Optional. Extended content used with a 24-hour trigger period to set the trigger time.
   * 
   * @example
   * {"fixedHour":"12"}
   * 
   * **if can be null:**
   * true
   */
  extendContent?: string;
  /**
   * @remarks
   * The rule parameters.
   * 
   * @example
   * {"tag1Key":"ECS","tag1Value":"test"}
   */
  inputParameters?: { [key: string]: any };
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
   * - TwentyFour_Hours (default): 24 hours.
   * 
   * > Set this parameter when `ConfigRuleTriggerTypes` is set to `ScheduledNotification`.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The regions where the rule applies. To specify multiple region IDs, separate them with a comma (,).
   * 
   * > This parameter applies only to managed rules.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The resource groups where the rule applies. To specify multiple resource group IDs, separate them with a comma (,).
   * 
   * > This parameter applies only to managed rules.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The resources that the rule evaluates. To specify multiple resource IDs, separate them with a comma (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated. Ignore it. Values passed for this parameter have no effect.
   * 
   * You can add up to 20 tags.
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
   * The resource types that the rule evaluates. To specify multiple resource types, separate them with a comma (,).
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypesScope?: string[];
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
   * The tags of the resource. This parameter is deprecated. Ignore it. Values passed for this parameter have no effect.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tag?: UpdateConfigRuleRequestTag[];
  /**
   * @remarks
   * The logical relationship between tags in the `TagsScope` parameter. For example, if you set `TagsScope` to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you omit this parameter, the default logic is `OR`.
   * 
   * This parameter also works with the deprecated `TagKeyScope` parameter, but this is not recommended. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.
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
   * This parameter is deprecated. Use the `TagsScope` parameter instead.
   * 
   * The rule applies only to resources that have the specified tag.
   * 
   * > This parameter applies only to managed rules. You must specify both `TagKeyScope` and `TagValueScope`.
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
   * The rule applies only to resources that have the specified tag.
   * 
   * > This parameter applies only to managed rules. You must specify both `TagKeyScope` and `TagValueScope`.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * Scope of the tag
   */
  tagsScope?: UpdateConfigRuleRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conditions: 'Conditions',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      extendContent: 'ExtendContent',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceNameScope: 'ResourceNameScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tag: 'Tag',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conditions: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleRequestExcludeTagsScope },
      extendContent: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceNameScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      tag: { 'type': 'array', 'itemType': UpdateConfigRuleRequestTag },
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleRequestTagsScope },
    };
  }

  validate() {
    if(Array.isArray(this.excludeTagsScope)) {
      $dara.Model.validateArray(this.excludeTagsScope);
    }
    if(this.inputParameters) {
      $dara.Model.validateMap(this.inputParameters);
    }
    if(Array.isArray(this.resourceTypesScope)) {
      $dara.Model.validateArray(this.resourceTypesScope);
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


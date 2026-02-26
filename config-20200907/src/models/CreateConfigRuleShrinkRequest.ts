// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigRuleShrinkRequestExcludeTagsScope extends $dara.Model {
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

export class CreateConfigRuleShrinkRequestTagsScope extends $dara.Model {
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

export class CreateConfigRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure request idempotence. Generate a unique token on your client. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The conditions for a custom condition rule, in JSON format.
   * 
   * @example
   * {"ComplianceConditions":"{\\"operator\\":\\"and\\",\\"children\\":[{\\"operator\\":\\"StringEquals\\",\\"featurePath\\":\\"$.Status\\",\\"desired\\":\\"1\\",\\"featureSource\\":\\"CONFIGURATION\\"}]}"}
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
   * The trigger that invokes the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule runs when a resource configuration changes.
   * 
   * - ScheduledNotification: The rule runs on a regular schedule.
   * 
   * > If a rule has multiple triggers, separate them with commas (,).
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
   * The rule does not apply to resources in the specified regions. The compliance of resources in these regions is not evaluated. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rule does not apply to resources in the specified resource groups. The compliance of resources in these resource groups is not evaluated. Separate multiple resource group IDs with commas (,).
   * 
   * @example
   * rg-bnczc6r7rml****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule does not apply to the specified resources. The compliance of these resources is not evaluated. Separate multiple resource IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * lb-t4nbowvtbkss7t326****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The scope of the tags to exclude.
   */
  excludeTagsScope?: CreateConfigRuleShrinkRequestExcludeTagsScope[];
  /**
   * @remarks
   * Extended content. This parameter specifies the trigger time for a 24-hour evaluation cycle.
   * 
   * @example
   * {"fixedHour":"13"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The input parameters for the rule.
   * 
   * You can get the input parameters of a rule by calling the [GetManagedRule](https://help.aliyun.com/document_detail/606993.html) operation. View the `CompulsoryInputParameterDetails` and `OptionalInputParameterDetails` parameters to learn about the required and optional parameters.
   * 
   * The format of the input parameters is `{"Parameter 1 Name":"Parameter 1 Value","Parameter 2 Name":"Parameter 2 Value"}`.
   * 
   * @example
   * {"key1":"value1","key2":"value2"}
   */
  inputParametersShrink?: string;
  /**
   * @remarks
   * The frequency at which the rule runs. Valid values:
   * 
   * - One_Hour: every hour.
   * 
   * - Three_Hours: every three hours.
   * 
   * - Six_Hours: every six hours.
   * 
   * - Twelve_Hours: every twelve hours.
   * 
   * - TwentyFour_Hours (default): every twenty-four hours.
   * 
   * > This parameter is required if you set ConfigRuleTriggerTypes to ScheduledNotification.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The rule applies only to resources in the specified regions. Separate multiple region IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to resources in the specified resource groups. Separate multiple resource group IDs with commas (,).
   * 
   * > This parameter applies only to rule templates.
   * 
   * @example
   * rg-aekzc7r7rhx****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule applies to the specified resources. Separate multiple resource IDs with commas (,).
   * 
   * @example
   * lb-5cmbowstbkss9ta03****
   */
  resourceIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to resources that have the specified names.
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
   * The resource types to evaluate. Separate multiple resource types with commas (,).
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
   * - 1: high.
   * 
   * - 2: medium.
   * 
   * - 3: low.
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
   * - If you set `SourceOwner` to `ALIYUN`, specify the identifier of the rule template. Example: `required-tags`.
   * 
   *   > To query the identifier of a rule template, see [List of rule templates](https://help.aliyun.com/document_detail/127404.html).
   * 
   * - If you set `SourceOwner` to `CUSTOM_CONFIGURATION`, set this parameter to `acs-config-configuration`.
   * 
   * - If you set `SourceOwner` to `CUSTOM_FC`, specify the Alibaba Cloud Resource Name (ARN) of the function.
   * 
   *   The ARN must be in the format `acs:fc:{Region}:{AccountID}:services/{ServiceName}.LATEST/functions/{FunctionName}`. Example: `acs:fc:cn-hangzhou:120886317861****:services/service-test.LATEST/functions/config-test`.
   * 
   *   > To obtain the ARN of a function, see [ListFunctions](https://help.aliyun.com/document_detail/415752.html).
   * 
   * This parameter is required.
   * 
   * @example
   * required-tags
   */
  sourceIdentifier?: string;
  /**
   * @remarks
   * The type of rule to create. Valid values:
   * 
   * - ALIYUN: rule template.
   * 
   * - CUSTOM_FC: custom Function Compute rule.
   * 
   * - CUSTOM_CONFIGURATION: custom condition rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
  /**
   * @remarks
   * The tags of the rule to create.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The logical operator used when you specify multiple tags for the `TagsScope` parameter. For example, if you set `TagsScope` to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you do not specify this parameter, the default value `OR` is used.
   * 
   * This parameter also works with the deprecated `TagKeyScope` parameter. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.
   * 
   * Valid values:
   * 
   * - AND: Use AND logic.
   * 
   * - OR: Use OR logic.
   * 
   * @example
   * AND
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use the `TagsScope` parameter instead.
   * 
   * The rule applies only to resources that have the specified tag key.
   * 
   * > This parameter applies only to managed rules. You must set both `TagKeyScope` and `TagValueScope`.
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
   * The rule applies only to resources that have the specified tag value.
   * 
   * > This parameter applies only to rule templates. You must set both `TagKeyScope` and `TagValueScope`.
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
  tagsScope?: CreateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conditions: 'Conditions',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      extendContent: 'ExtendContent',
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
      clientToken: 'string',
      conditions: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateConfigRuleShrinkRequestExcludeTagsScope },
      extendContent: 'string',
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
      tagsScope: { 'type': 'array', 'itemType': CreateConfigRuleShrinkRequestTagsScope },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleResponseBodyConfigRuleCompliance } from "./GetConfigRuleResponseBodyConfigRuleCompliance";
import { GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus } from "./GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus";
import { GetConfigRuleResponseBodyConfigRuleCreateBy } from "./GetConfigRuleResponseBodyConfigRuleCreateBy";
import { GetConfigRuleResponseBodyConfigRuleExcludeTagsScope } from "./GetConfigRuleResponseBodyConfigRuleExcludeTagsScope";
import { GetConfigRuleResponseBodyConfigRuleManagedRule } from "./GetConfigRuleResponseBodyConfigRuleManagedRule";
import { GetConfigRuleResponseBodyConfigRuleScope } from "./GetConfigRuleResponseBodyConfigRuleScope";
import { GetConfigRuleResponseBodyConfigRuleSource } from "./GetConfigRuleResponseBodyConfigRuleSource";
import { GetConfigRuleResponseBodyConfigRuleTags } from "./GetConfigRuleResponseBodyConfigRuleTags";
import { GetConfigRuleResponseBodyConfigRuleTagsScope } from "./GetConfigRuleResponseBodyConfigRuleTagsScope";


export class GetConfigRuleResponseBodyConfigRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the rule belongs.
   * 
   * @example
   * 120886317861****
   */
  accountId?: number;
  /**
   * @remarks
   * The details of compliance evaluation results.
   */
  compliance?: GetConfigRuleResponseBodyConfigRuleCompliance;
  /**
   * @remarks
   * The ARN of the managed rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-7f7d626622af0041****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The information about compliance evaluations performed by the rule.
   */
  configRuleEvaluationStatus?: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ecs-disk-auto-snapshot-policy
   */
  configRuleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   ACTIVE: The rule is enabled.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is being used to evaluate resource configurations.
   * *   INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule was triggered by configuration changes.
   * *   ScheduledNotification: The rule was periodically triggered.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  configRuleTriggerTypes?: string;
  /**
   * @remarks
   * The information about the creation of the rule.
   */
  createBy?: GetConfigRuleResponseBodyConfigRuleCreateBy;
  /**
   * @remarks
   * The timestamp generated when the rule was created. Unit: millisecond.
   * 
   * @example
   * 1604684022000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * ExcludeRegionIdsScope
   * 
   * @example
   * cn-shanghai
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * ExcludeResourceGroupIdsScope
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource excluded from the compliance evaluations performed by the rule.
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * ExcludeTagsScope
   */
  excludeTagsScope?: GetConfigRuleResponseBodyConfigRuleExcludeTagsScope[];
  /**
   * @remarks
   * Optional field, only used in conjunction with the 24-hour cycle execution to set the trigger time.
   * 
   * @example
   * {"fixedHour":"12"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   * 
   * @example
   * {}
   */
  inputParameters?: { [key: string]: any };
  /**
   * @remarks
   * The details of the managed rule.
   */
  managedRule?: GetConfigRuleResponseBodyConfigRuleManagedRule;
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
   * >  This parameter is returned if the rule is periodically triggered.
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The timestamp generated when the rule was last updated. Unit: millisecond.
   * 
   * @example
   * 1614687022000
   */
  modifiedTimestamp?: number;
  /**
   * @remarks
   * The ID of the region to which the rule applies.
   * 
   * @example
   * global
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource group to which the rule applies.
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
   * The type of the resource to be evaluated by the rule.
   * 
   * @example
   * ACS::RAM::User
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
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
   * The effective scope of the rule.
   */
  scope?: GetConfigRuleResponseBodyConfigRuleScope;
  /**
   * @remarks
   * The information about how the rule was created.
   */
  source?: GetConfigRuleResponseBodyConfigRuleSource;
  /**
   * @remarks
   * When retrieving details of rules created using the parameter `TagsScope`, this field will not be returned.
   * 
   * To retrieve rules created using the deprecated field `TagKeyScope` (not recommended): for example, when the parameter `TagKeyScope` has a value of ECS,OSS, if this parameter is set to `AND`, it means that the rule only applies to resources bound with both labels ECS and OSS.
   * 
   * Values:
   * 
   *  - AND: And.
   * 
   *  - OR: Or.
   * 
   * @example
   * 120886317861****
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. We recommend that you use the `TagsScope` parameter.
   * 
   * The tag key used to filter resources. The rule applies only to the resources with the specified tag key.
   * 
   * >  The TagKeyScope and `TagValueScope` parameters are returned at the same time.``
   * 
   * @example
   * RAM
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
   * >  The TagKeyScope and `TagValueScope` parameters are returned at the same time.``
   * 
   * @example
   * MFA
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetConfigRuleResponseBodyConfigRuleTags[];
  /**
   * @remarks
   * TagsScope
   */
  tagsScope?: GetConfigRuleResponseBodyConfigRuleTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliance: 'Compliance',
      configRuleArn: 'ConfigRuleArn',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      createBy: 'CreateBy',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      extendContent: 'ExtendContent',
      inputParameters: 'InputParameters',
      managedRule: 'ManagedRule',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      modifiedTimestamp: 'ModifiedTimestamp',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceNameScope: 'ResourceNameScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      source: 'Source',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tags: 'Tags',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliance: GetConfigRuleResponseBodyConfigRuleCompliance,
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleExcludeTagsScope },
      extendContent: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceNameScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      scope: GetConfigRuleResponseBodyConfigRuleScope,
      source: GetConfigRuleResponseBodyConfigRuleSource,
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tags: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleTags },
      tagsScope: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleTagsScope },
    };
  }

  validate() {
    if(this.compliance && typeof (this.compliance as any).validate === 'function') {
      (this.compliance as any).validate();
    }
    if(this.configRuleEvaluationStatus && typeof (this.configRuleEvaluationStatus as any).validate === 'function') {
      (this.configRuleEvaluationStatus as any).validate();
    }
    if(this.createBy && typeof (this.createBy as any).validate === 'function') {
      (this.createBy as any).validate();
    }
    if(Array.isArray(this.excludeTagsScope)) {
      $dara.Model.validateArray(this.excludeTagsScope);
    }
    if(this.inputParameters) {
      $dara.Model.validateMap(this.inputParameters);
    }
    if(this.managedRule && typeof (this.managedRule as any).validate === 'function') {
      (this.managedRule as any).validate();
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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


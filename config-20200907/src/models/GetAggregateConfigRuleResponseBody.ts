// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleResponseBodyConfigRuleCompliance extends $dara.Model {
  /**
   * @remarks
   * The statistics on the compliance evaluation results by compliance type. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of evaluated resources.
   * 
   * @example
   * 3
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the rule was first triggered.
   * 
   * @example
   * 1624932221993
   */
  firstActivatedTimestamp?: number;
  /**
   * @remarks
   * Indicates whether resources were evaluated based on the rule. Valid values:
   * 
   * *   true: Resources were evaluated based on the rule.
   * *   false: Resources were not evaluated based on the rule.
   * 
   * @example
   * true
   */
  firstEvaluationStarted?: boolean;
  /**
   * @remarks
   * The error code returned for the last failed compliance evaluation.
   * 
   * @example
   * TimeOut
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The error message returned for the last failed compliance evaluation.
   * 
   * @example
   * time out
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The timestamp when the last failed compliance evaluation of the rule ended. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last failed compliance evaluation of the rule started. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedInvocationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last successful compliance evaluation of the rule ended. Unit: milliseconds.
   * 
   * @example
   * 1624932227486
   */
  lastSuccessfulEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the last successful compliance evaluation of the rule started. Unit: milliseconds.
   * 
   * @example
   * 1624932227476
   */
  lastSuccessfulInvocationTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      firstActivatedTimestamp: 'FirstActivatedTimestamp',
      firstEvaluationStarted: 'FirstEvaluationStarted',
      lastErrorCode: 'LastErrorCode',
      lastErrorMessage: 'LastErrorMessage',
      lastFailedEvaluationTimestamp: 'LastFailedEvaluationTimestamp',
      lastFailedInvocationTimestamp: 'LastFailedInvocationTimestamp',
      lastSuccessfulEvaluationTimestamp: 'LastSuccessfulEvaluationTimestamp',
      lastSuccessfulInvocationTimestamp: 'LastSuccessfulInvocationTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstActivatedTimestamp: 'number',
      firstEvaluationStarted: 'boolean',
      lastErrorCode: 'string',
      lastErrorMessage: 'string',
      lastFailedEvaluationTimestamp: 'number',
      lastFailedInvocationTimestamp: 'number',
      lastSuccessfulEvaluationTimestamp: 'number',
      lastSuccessfulInvocationTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleCreateBy extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-04b3fd170e340007****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * @example
   * Test_Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af008****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * The name of the compliance package.
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the account that was used to create the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the account that was used to create the rule.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the entity to which the rule belongs. The value is fixed to `AGGREGATOR`, which indicates an account group.
   * 
   * @example
   * AGGREGATOR
   */
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope extends $dara.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source of the managed rule.
   * 
   * >  Only events related to Cloud Config are supported. The value is fixed to aliyun.config.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The intervals at which the managed rule is triggered. Valid values:
   * 
   * *   One_Hour: 1 hour.
   * *   Three_Hours: 3 hours.
   * *   Six_Hours: 6 hours.
   * *   Twelve_Hours: 12 hours
   * *   TwentyFour_Hours: 24 hours
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The managed rule is triggered by configuration changes.
   * *   ScheduledNotification: The managed rule is periodically triggered.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRule extends $dara.Model {
  /**
   * @remarks
   * The required input parameters of the managed rule.
   * 
   * @example
   * {}
   */
  compulsoryInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The description of the managed rule.
   * 
   * @example
   * The description of the managed rule.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * ram-user-mfa-check
   */
  identifier?: string;
  /**
   * @remarks
   * The tags of the managed rule.
   */
  labels?: string[];
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * ram-user-mfa-check
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The optional input parameters of the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The details of the source of the managed rule.
   */
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      description: 'Description',
      identifier: 'Identifier',
      labels: 'Labels',
      managedRuleName: 'ManagedRuleName',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      managedRuleName: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
    };
  }

  validate() {
    if(this.compulsoryInputParameterDetails) {
      $dara.Model.validateMap(this.compulsoryInputParameterDetails);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.optionalInputParameterDetails) {
      $dara.Model.validateMap(this.optionalInputParameterDetails);
    }
    if(Array.isArray(this.sourceDetails)) {
      $dara.Model.validateArray(this.sourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source of the managed rule.
   * 
   * >  Only events related to Cloud Config are supported. The value is fixed to aliyun.config.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The intervals at which the managed rule is triggered. Valid values:
   * 
   * *   One_Hour: 1 hour.
   * *   Three_Hours: 3 hours.
   * *   Six_Hours: 6 hours.
   * *   Twelve_Hours: 12 hours
   * *   TwentyFour_Hours: 24 hours
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The managed rule is triggered by configuration changes.
   * *   ScheduledNotification: The managed rule is periodically triggered.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleSource extends $dara.Model {
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule was created based on a managed rule, the value of this parameter is the name of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of the relevant function in Function Compute.
   * 
   * @example
   * acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config
   */
  identifier?: string;
  /**
   * @remarks
   * The way in which the rule was created. Valid values:
   * 
   * *   CUSTOM_FC: The rule is a custom rule.
   * *   ALIYUN: The rule was created based on a managed rule of Alibaba Cloud.
   * 
   * @example
   * ALIYUN
   */
  owner?: string;
  /**
   * @remarks
   * The details of the source of the rule.
   */
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      owner: 'Owner',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      owner: 'string',
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.sourceDetails)) {
      $dara.Model.validateArray(this.sourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleTags extends $dara.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleTagsScope extends $dara.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRule extends $dara.Model {
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
   * The IDs of the members to which the rule applies. Separate multiple member IDs with commas (,).
   * 
   * @example
   * 120886317861****
   */
  accountIdsScope?: string;
  /**
   * @remarks
   * The details of compliance evaluation results.
   */
  compliance?: GetAggregateConfigRuleResponseBodyConfigRuleCompliance;
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
  configRuleEvaluationStatus?: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the monitoring rule.
   * 
   * @example
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   ACTIVE: The rule is being used to monitor resource configurations.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is triggered and is being used to monitor resource configurations.
   * *   INACTIVE: The rule is disabled and is no longer used to monitor resource configurations.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The managed rule is triggered by configuration changes.
   * *   ScheduledNotification: The managed rule is periodically triggered.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  configRuleTriggerTypes?: string;
  /**
   * @remarks
   * The information about the creation of the rule.
   */
  createBy?: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy;
  /**
   * @remarks
   * The timestamp when the rule was created. Unit: milliseconds.
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
   * The description of the managed rule.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the member account to which the rule does not apply, which means that the resources within the member account are not evaluated based on the rule.
   * 
   * >  This parameter applies only to a managed rule.
   * 
   * @example
   * 120886317861****
   */
  excludeAccountIdsScope?: string;
  /**
   * @remarks
   * The ID of the resource directory to which the rule does not apply, which means that the resources within member accounts in the resource directory are not evaluated based on the rule.
   * 
   * > 
   * *   This parameter applies only to a rule of a global account group.
   * *   This parameter applies only to a managed rule.
   * 
   * @example
   * fd-pWmkqZ****
   */
  excludeFolderIdsScope?: string;
  /**
   * @remarks
   * The IDs of the regions excluded from the compliance evaluations performed by the rule. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resource groups excluded from the compliance evaluations performed by the rule. Separate multiple resource group IDs with commas (,).
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
   * The scope of the tag that is excluded.
   */
  excludeTagsScope?: GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope[];
  /**
   * @remarks
   * The extended content, which is temporarily only used to configure the trigger time with a 24-hour cycle trigger.
   * 
   * @example
   * {"fixedHour":"12"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The ID of the resource directory to which the rule applies, which means that the resources within member accounts in the resource directory are evaluated based on the rule.
   * 
   * > 
   * *   This parameter applies only to rules of a global account group.
   * *   This parameter applies only to managed rules.
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
  inputParameters?: { [key: string]: any };
  /**
   * @remarks
   * The details of the managed rule.
   */
  managedRule?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule;
  /**
   * @remarks
   * The intervals at which the managed rule is triggered. Valid values:
   * 
   * *   One_Hour: 1 hour.
   * *   Three_Hours: 3 hours.
   * *   Six_Hours: 6 hours.
   * *   Twelve_Hours: 12 hours
   * *   TwentyFour_Hours: 24 hours
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The timestamp when the rule was last updated. Unit: milliseconds.
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
   * The IDs of the resources to which the rule applies. Separate multiple resource IDs with commas (,).
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
   * The type of the resource evaluated by the rule.
   * 
   * @example
   * ACS::RAM::User
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the resources that are not compliant with the rule. Valid values:
   * 
   * *   1: high risk level
   * *   2: medium risk level
   * *   3: low risk level
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The information about how the rule was created.
   */
  source?: GetAggregateConfigRuleResponseBodyConfigRuleSource;
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
   * AND
   */
  tagKeyLogicScope?: string;
  /**
   * @remarks
   * This parameter is deprecated. We recommend that you use the `TagsScope` parameter.
   * 
   * The tag key used to filter resources. The rule applies only to the resources with the specified tag key.
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
   * The tag value used to filter resources. The rule applies only to the resources with the specified tag value.
   * 
   * @example
   * MFA
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetAggregateConfigRuleResponseBodyConfigRuleTags[];
  /**
   * @remarks
   * The tag scope.
   */
  tagsScope?: GetAggregateConfigRuleResponseBodyConfigRuleTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountIdsScope: 'AccountIdsScope',
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
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      extendContent: 'ExtendContent',
      folderIdsScope: 'FolderIdsScope',
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
      accountIdsScope: 'string',
      compliance: GetAggregateConfigRuleResponseBodyConfigRuleCompliance,
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope },
      extendContent: 'string',
      folderIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceNameScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      source: GetAggregateConfigRuleResponseBodyConfigRuleSource,
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tags: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleTags },
      tagsScope: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleTagsScope },
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

export class GetAggregateConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rules.
   */
  configRule?: GetAggregateConfigRuleResponseBodyConfigRule;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 811234F4-C3AB-4D15-B90B-F55016D1B5AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRule: 'ConfigRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRule: GetAggregateConfigRuleResponseBodyConfigRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRule && typeof (this.configRule as any).validate === 'function') {
      (this.configRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


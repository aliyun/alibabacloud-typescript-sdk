// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleResponseBodyConfigRuleCompliance extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is not compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of resources that have the corresponding compliance evaluation result.
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
   * The timestamp when the rule was first activated.
   * 
   * @example
   * 1624932221993
   */
  firstActivatedTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the rule has been evaluated. Valid values:
   * 
   * - true: The rule has been evaluated.
   * 
   * - false: The rule has not been evaluated.
   * 
   * @example
   * true
   */
  firstEvaluationStarted?: boolean;
  /**
   * @remarks
   * The error code returned for the last failed execution of the rule.
   * 
   * @example
   * TimeOut
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The error message returned for the last failed execution of the rule.
   * 
   * @example
   * time out
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The timestamp of the last failed evaluation. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp of the last failed invocation. Unit: milliseconds.
   * 
   * @example
   * 1614687022000
   */
  lastFailedInvocationTimestamp?: number;
  /**
   * @remarks
   * The timestamp of the last successful evaluation. Unit: milliseconds.
   * 
   * @example
   * 1624932227486
   */
  lastSuccessfulEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp of the last successful invocation. Unit: milliseconds.
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
   * OSS合规基线
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the account that created the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the rule creator.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the rule creator. Only `AGGREGATOR` (account group) is supported.
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

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source.
   * 
   * > Only Cloud Config events are supported: aliyun.config.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The frequency at which the rule is executed.
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
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
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
   * The details of the required input parameters for the managed rule.
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
   * ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。
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
   * A list of labels for the managed rule.
   */
  labels?: string[];
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * RAM用户开启MFA
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The details of the optional input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The details of the managed rule source.
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
   * The event source.
   * 
   * > Only Cloud Config events are supported: aliyun.config.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The frequency at which the rule is executed. Valid values:
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
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
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
   * - If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
   * 
   * - If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of the function.
   * 
   * @example
   * acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config
   */
  identifier?: string;
  /**
   * @remarks
   * The owner of the rule. Valid values:
   * 
   * - CUSTOM_FC: a custom rule.
   * 
   * - ALIYUN: a managed rule.
   * 
   * @example
   * ALIYUN
   */
  owner?: string;
  /**
   * @remarks
   * The details of the rule source.
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
   * The rule applies only to resources in the specified member accounts. Separate multiple member account IDs with a comma (,).
   * 
   * @example
   * 120886317861****
   */
  accountIdsScope?: string;
  /**
   * @remarks
   * The compliance statistics of the rule.
   */
  compliance?: GetAggregateConfigRuleResponseBodyConfigRuleCompliance;
  /**
   * @remarks
   * The ARN of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-7f7d626622af0041****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The execution status of the rule.
   */
  configRuleEvaluationStatus?: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
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
   * RAM用户开启MFA
   */
  configRuleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - ACTIVE: The rule is enabled.
   * 
   * - DELETING: The rule is being deleted.
   * 
   * - EVALUATING: The rule is being evaluated.
   * 
   * - INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  configRuleTriggerTypes?: string;
  /**
   * @remarks
   * The information about the creator of the rule.
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
   * The description of the rule.
   * 
   * @example
   * RAM用户开启MFA，视为“合规”。
   */
  description?: string;
  /**
   * @remarks
   * The rule does not apply to resources in the specified member accounts. The system does not evaluate resources in these accounts.
   * 
   * @example
   * 120886317861****
   */
  excludeAccountIdsScope?: string;
  /**
   * @remarks
   * The rule does not apply to resources within the member accounts in the specified folders of the resource directory. The system does not evaluate resources in these folders.
   * 
   * @example
   * fd-pWmkqZ****
   */
  excludeFolderIdsScope?: string;
  /**
   * @remarks
   * The rule does not apply to resources in the specified regions. The system does not evaluate resources in these regions. Separate multiple region IDs with a comma (,).
   * 
   * @example
   * cn-hangzhou
   */
  excludeRegionIdsScope?: string;
  /**
   * @remarks
   * The rule does not apply to resources in the specified resource groups. The system does not evaluate resources in these resource groups. Separate multiple resource group IDs with a comma (,).
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  excludeResourceGroupIdsScope?: string;
  /**
   * @remarks
   * The IDs of the resources that are not evaluated by the rule.
   * 
   * @example
   * 23642660635687****
   */
  excludeResourceIdsScope?: string;
  /**
   * @remarks
   * The excluded scope of the tags.
   */
  excludeTagsScope?: GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope[];
  /**
   * @remarks
   * The extended content. This parameter is used to configure the trigger time for a rule that is triggered on a 24-hour cycle.
   * 
   * @example
   * {"fixedHour":"12"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The rule applies only to resources within the member accounts in the specified folders of the resource directory.
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
   * The frequency at which the rule is executed.
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
   * The rule applies only to resources in the specified regions.
   * 
   * @example
   * global
   */
  regionIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to resources in the specified resource groups.
   * 
   * @example
   * rg-aekzdibsjjc****
   */
  resourceGroupIdsScope?: string;
  /**
   * @remarks
   * The rule applies only to the specified resources. Separate multiple resource IDs with a comma (,).
   * 
   * @example
   * eip-8vbf3x310fn56ijfd****
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
   * The resource types that are evaluated by the rule.
   * 
   * @example
   * ACS::RAM::User
   */
  resourceTypesScope?: string;
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
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The source of the rule.
   */
  source?: GetAggregateConfigRuleResponseBodyConfigRuleSource;
  /**
   * @remarks
   * This parameter is not returned for rules that are created using the `TagsScope` parameter.
   * 
   * This parameter is returned only for rules that are created using the deprecated `TagKeyScope` parameter. For example, if `TagKeyScope` is set to `ECS,OSS` and this parameter is set to `AND`, the rule applies to resources that have both the `ECS` and `OSS` tags.
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
   * The rule applies only to resources that have the specified tag key.
   * 
   * @example
   * RAM
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
   * @example
   * MFA
   * 
   * @deprecated
   */
  tagValueScope?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetAggregateConfigRuleResponseBodyConfigRuleTags[];
  /**
   * @remarks
   * The scope of the tags.
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
   * The details of the rule.
   */
  configRule?: GetAggregateConfigRuleResponseBodyConfigRule;
  /**
   * @remarks
   * The request ID.
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


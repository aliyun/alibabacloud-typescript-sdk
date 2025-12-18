// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleResponseBodyConfigRuleCompliance extends $dara.Model {
  /**
   * @remarks
   * The statistics on the compliance evaluation results by compliance type. Valid values:
   * 
   * *   COMPLIANT: The resource was evaluated as compliant.
   * *   NON_COMPLIANT: The resource was evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule did not apply to your resource.
   * *   INSUFFICIENT_DATA: No resource data was available.
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

export class GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the rule was first triggered. Unit: millisecond.
   * 
   * @example
   * 1624932221993
   */
  firstActivatedTimestamp?: number;
  /**
   * @remarks
   * Indicates whether resource configurations were evaluated based on the rule. Valid values:
   * 
   * *   true: Resource configurations were evaluated based on the rule.
   * *   false: Resource configurations were not evaluated based on the rule.
   * 
   * @example
   * true
   */
  firstEvaluationStarted?: boolean;
  /**
   * @remarks
   * The error code returned for the previous failed compliance evaluation.
   * 
   * @example
   * TimeOut
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The error message returned for the previous failed compliance evaluation.
   * 
   * @example
   * Time out
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The timestamp generated when the previous failed compliance evaluation of the rule ended. Unit: millisecond.
   * 
   * @example
   * 1614687022000
   */
  lastFailedEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp generated when the previous failed compliance evaluation of the rule started. Unit: millisecond.
   * 
   * @example
   * 1614687022000
   */
  lastFailedInvocationTimestamp?: number;
  /**
   * @remarks
   * The timestamp generated when the previous successful compliance evaluation of the rule ended. Unit: millisecond.
   * 
   * @example
   * 1624932227486
   */
  lastSuccessfulEvaluationTimestamp?: number;
  /**
   * @remarks
   * The timestamp generated when the previous successful compliance evaluation of the rule started. Unit: millisecond.
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

export class GetConfigRuleResponseBodyConfigRuleCreateBy extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
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
   * example-name
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
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleExcludeTagsScope extends $dara.Model {
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

export class GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source.
   * 
   * >  Only aliyun.config is returned, which indicates that only events related to Cloud Config are supported.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
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
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
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

export class GetConfigRuleResponseBodyConfigRuleManagedRule extends $dara.Model {
  /**
   * @remarks
   * The settings of the required input parameters for the managed rule.
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
   * example-description
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
   * The rule tags.
   */
  labels?: string[];
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * example-name
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The settings of the optional input parameters for the managed rule.
   * 
   * @example
   * {}
   */
  optionalInputParameterDetails?: { [key: string]: any };
  /**
   * @remarks
   * The details of the source of the managed rule.
   */
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
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

export class GetConfigRuleResponseBodyConfigRuleScope extends $dara.Model {
  /**
   * @remarks
   * The types of the resources to be evaluated against the rule. You can also view the resource types by using the ResourceTypesScope parameter.
   */
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.complianceResourceTypes)) {
      $dara.Model.validateArray(this.complianceResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source.
   * 
   * >  Only aliyun.config is returned, which indicates that only events related to Cloud Config are supported.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
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
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
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

export class GetConfigRuleResponseBodyConfigRuleSource extends $dara.Model {
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of a function.
   * 
   * @example
   * acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config
   */
  identifier?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   CUSTOM_FC: a custom rule.
   * *   ALIYUN: a managed rule.
   * 
   * @example
   * ALIYUN
   */
  owner?: string;
  /**
   * @remarks
   * The details of the source of the rule.
   */
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleSourceSourceDetails },
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

export class GetConfigRuleResponseBodyConfigRuleTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
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

export class GetConfigRuleResponseBodyConfigRuleTagsScope extends $dara.Model {
  /**
   * @remarks
   * TagKey
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

export class GetConfigRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  configRule?: GetConfigRuleResponseBodyConfigRule;
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
      configRule: GetConfigRuleResponseBodyConfigRule,
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


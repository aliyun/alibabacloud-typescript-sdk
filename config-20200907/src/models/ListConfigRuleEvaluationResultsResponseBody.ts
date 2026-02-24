// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package to which the rule belongs.
   * 
   * @example
   * cp-bcc33457e0d900d5****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the rule.
   * 
   * @example
   * acs:config::120886317861****:rule/cr-cac56457e0d900d3****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-cac56457e0d900d3****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * ECS实例CPU核数满足最低要求
   */
  configRuleName?: string;
  /**
   * @remarks
   * The date when the ignored evaluation result is automatically resumed.
   * 
   * > If this parameter is empty, the result is not automatically resumed. You must manually resume it.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek3tprgnnc****
   * 
   * **if can be null:**
   * true
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-hp3e4kvhzqn2s11t****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * iZuf6j91r34rnwawoox****
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 120886317861****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      ignoreDate: 'IgnoreDate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      ignoreDate: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $dara.Model {
  /**
   * @remarks
   * The resource information in the rule evaluation result.
   */
  evaluationResultQualifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  /**
   * @remarks
   * The UNIX timestamp displayed on the timeline. Unit: milliseconds.
   * 
   * @example
   * 1622802307081
   */
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  validate() {
    if(this.evaluationResultQualifier && typeof (this.evaluationResultQualifier as any).validate === 'function') {
      (this.evaluationResultQualifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $dara.Model {
  /**
   * @remarks
   * The supplementary information about the non-compliant resource. This may include the following information:
   * 
   * - `configuration`: The current configuration of the resource, which is the non-compliant configuration.
   * 
   * - `desiredValue`: The expected configuration of the resource, which is the compliant configuration.
   * 
   * - `operator`: The comparison operator used to compare the current configuration with the expected configuration.
   * 
   * - `property`: The JSON path of the current configuration in the resource property struct.
   * 
   * - `reason`: The reason why the resource is non-compliant.
   * 
   * @example
   * {\\"configuration\\":\\"\\",\\"desiredValue\\":\\"\\",\\"operator\\":\\"IsNotStringEmpty\\",\\"property\\":\\"$.KeyPairName\\",\\"reason\\":\\"No property contains.\\"}
   */
  annotation?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * - IGNORED: The evaluation result is ignored.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The UNIX timestamp when the rule was triggered for evaluation. Unit: milliseconds.
   * 
   * @example
   * 1622802307081
   */
  configRuleInvokedTimestamp?: number;
  /**
   * @remarks
   * The unique ID of the evaluation result.
   * 
   * @example
   * 00000089-4e0d-58b5-a96a-8e54112110f3
   */
  evaluationId?: string;
  /**
   * @remarks
   * The identifier of the rule evaluation result.
   */
  evaluationResultIdentifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
   * 
   * - Manual: The rule is triggered manually.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  invokingEventMessageType?: string;
  /**
   * @remarks
   * The time when the resource was last remediated to a compliant state. This value is not recorded when a new resource or rule is evaluated as compliant for the first time.
   * 
   * @example
   * 1768788515723
   */
  lastCompliantFixedTimestamp?: number;
  /**
   * @remarks
   * The start time of the last non-compliance.
   * 
   * @example
   * 1744696665000
   */
  lastNonCompliantRecordTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the remediation setting is enabled. Valid values:
   * 
   * - true: The remediation setting is enabled.
   * 
   * - false: The remediation setting is disabled.
   * 
   * @example
   * false
   */
  remediationEnabled?: boolean;
  /**
   * @remarks
   * The UNIX timestamp when the resource evaluation result was generated. Unit: milliseconds.
   * 
   * @example
   * 1622802307150
   */
  resultRecordedTimestamp?: number;
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
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      evaluationId: 'EvaluationId',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      invokingEventMessageType: 'InvokingEventMessageType',
      lastCompliantFixedTimestamp: 'LastCompliantFixedTimestamp',
      lastNonCompliantRecordTimestamp: 'LastNonCompliantRecordTimestamp',
      remediationEnabled: 'RemediationEnabled',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      evaluationId: 'string',
      evaluationResultIdentifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
      lastCompliantFixedTimestamp: 'number',
      lastNonCompliantRecordTimestamp: 'number',
      remediationEnabled: 'boolean',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
    };
  }

  validate() {
    if(this.evaluationResultIdentifier && typeof (this.evaluationResultIdentifier as any).validate === 'function') {
      (this.evaluationResultIdentifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * The list of rule evaluation results.
   */
  evaluationResultList?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
   * 
   * @example
   * IWBjqMYSy0is7zSMGu16****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationResultList)) {
      $dara.Model.validateArray(this.evaluationResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule evaluation results.
   */
  evaluationResults?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A4A33BD-8186-4D60-91B9-42174EED75B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.evaluationResults && typeof (this.evaluationResults as any).validate === 'function') {
      (this.evaluationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $dara.Model {
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
   * The rule ID.
   * 
   * @example
   * cr-7f7d626622af0041****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * ram-user-mfa-check
   */
  configRuleName?: string;
  /**
   * @remarks
   * The date on which the ignored evaluation result is automatically resumed.
   * 
   * > If this parameter is empty, the result is not automatically resumed. You must manually resume the result.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * @example
   * global
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 23642660635396****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * rd_member
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
   * ACS::RAM::User
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      ignoreDate: 'IgnoreDate',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      ignoreDate: 'string',
      regionId: 'string',
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

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $dara.Model {
  /**
   * @remarks
   * The resource information in the evaluation result.
   */
  evaluationResultQualifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  /**
   * @remarks
   * The timestamp displayed on the timeline. Unit: milliseconds.
   * 
   * @example
   * 1624932227157
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
      evaluationResultQualifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
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

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $dara.Model {
  /**
   * @remarks
   * The supplementary information about the non-compliant resource.
   * 
   * @example
   * {\\"configuration\\":\\"false\\",\\"desiredValue\\":\\"True\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.LoginProfile.MFABindRequired\\"}
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
   * - INSUFFICIENT_DATA: No data is available for the resource.
   * 
   * - IGNORED: The evaluation result is ignored.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The timestamp when the rule was invoked to evaluate the resource. Unit: milliseconds.
   * 
   * @example
   * 1624932227157
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
   * The identifier of the resource evaluation result.
   */
  evaluationResultIdentifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * - ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
   * 
   * - ScheduledNotification: The rule is triggered periodically.
   * 
   * @example
   * ScheduledNotification
   */
  invokingEventMessageType?: string;
  /**
   * @remarks
   * The timestamp when the resource last became non-compliant.
   * 
   * @example
   * 1744696665000
   */
  lastNonCompliantRecordTimestamp?: number;
  /**
   * @remarks
   * Indicates whether remediation is enabled. Valid values:
   * 
   * - true: Remediation is enabled.
   * 
   * - false: Remediation is not enabled.
   * 
   * @example
   * false
   */
  remediationEnabled?: boolean;
  /**
   * @remarks
   * The timestamp when the evaluation result was recorded. Unit: milliseconds.
   * 
   * @example
   * 1624932227595
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
      evaluationResultIdentifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
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

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * A list of resource evaluation results.
   */
  evaluationResultList?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
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
   * The token that is used to retrieve the next page of results.
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
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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

export class ListAggregateResourceEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The evaluation results of the resources.
   */
  evaluationResults?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25C89DDB-BB79-487D-88C3-4A561F21EFC4
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
      evaluationResults: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults,
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


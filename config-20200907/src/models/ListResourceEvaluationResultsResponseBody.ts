// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-7f7d626622af0041****
   */
  configRuleArn?: string;
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
   * test-rule-name
   */
  configRuleName?: string;
  /**
   * @remarks
   * The date from which the system automatically re-evaluates the ignored incompliant resources.
   * 
   * >  If the value of this parameter is left empty, the system does not automatically re-evaluate the ignored incompliant resources. You must re-evaluate the ignored incompliant resources.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The ID of the region where your resources reside.
   * 
   * @example
   * global
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 23642660635396****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * Alice
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
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

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $dara.Model {
  /**
   * @remarks
   * The information about the evaluated resource returned in the compliance evaluation result.
   */
  evaluationResultQualifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  /**
   * @remarks
   * The timestamp when the compliance evaluation was performed. Unit: milliseconds.
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
      evaluationResultQualifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
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

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $dara.Model {
  /**
   * @remarks
   * The annotation to the resource that is evaluated as incompliant. The following section describes the parameters that can be returned:
   * 
   * *   `configuration`: the current resource configuration that is evaluated as incompliant by using the rule.
   * *   `desiredValue`: the expected resource configuration that is evaluated as compliant by using the rule.
   * *   `operator`: the operator that is used to compare the current configuration with the expected configuration of the resource.
   * *   `property`: the JSON path of the current configuration in the resource property struct.
   * *   `reason`: the reason why the resource is evaluated as incompliant.
   * 
   * @example
   * {\\"configuration\\":\\"false\\",\\"desiredValue\\":\\"True\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.LoginProfile.MFABindRequired\\"}
   */
  annotation?: string;
  /**
   * @remarks
   * The compliance evaluation result of the resources. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * *   IGNORED: The resource is ignored during compliance evaluation.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The timestamp when the rule was triggered for the compliance evaluation. Unit: milliseconds.
   * 
   * @example
   * 1624932227157
   */
  configRuleInvokedTimestamp?: number;
  /**
   * @example
   * 00000089-4e0d-58b5-a96a-8e54112110f3
   */
  evaluationId?: string;
  /**
   * @remarks
   * The identifying information about the compliance evaluation result.
   */
  evaluationResultIdentifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  /**
   * @remarks
   * The trigger type of the managed rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The managed rule is triggered by configuration changes.
   * *   ScheduledNotification: The managed rule is periodically triggered.
   * *   Manual: The rule is manually triggered.
   * 
   * @example
   * ScheduledNotification
   */
  invokingEventMessageType?: string;
  /**
   * @example
   * 1744696393000
   */
  lastNonCompliantRecordTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the remediation template is enabled. Valid values:
   * 
   * - true: The remediation template is enabled.
   * - false: The remediation template is disabled.
   * 
   * @example
   * true
   */
  remediationEnabled?: boolean;
  /**
   * @remarks
   * The timestamp when the compliance evaluation result was recorded. Unit: milliseconds.
   * 
   * @example
   * 1624932227595
   */
  resultRecordedTimestamp?: number;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high risk level
   * *   2: medium risk level
   * *   3: low risk level
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
      evaluationResultIdentifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
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

export class ListResourceEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * The details of the compliance evaluation result.
   */
  evaluationResultList?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was used to initiate the next request.
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
      evaluationResultList: { 'type': 'array', 'itemType': ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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

export class ListResourceEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the compliance evaluation results returned.
   */
  evaluationResults?: ListResourceEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The ID of the request.
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
      evaluationResults: ListResourceEvaluationResultsResponseBodyEvaluationResults,
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


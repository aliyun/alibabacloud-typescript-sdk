// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier } from "./ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier";


export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $dara.Model {
  /**
   * @remarks
   * The annotation to the resource that is evaluated as non-compliant. The following parameters may be returned:
   * 
   * *   `configuration`: the current resource configuration that is evaluated as incompliant by using the rule.
   * *   `desiredValue`: the expected resource configuration that is evaluated as compliant.
   * *   `operator`: the operator that compares the current configuration with the expected configuration of the resource.
   * *   `property`: the JSON path of the current configuration in the resource property struct.
   * *   `reason`: the reason why the resource is evaluated as non-compliant.
   * 
   * @example
   * {\\"configuration\\":\\"LRS\\",\\"desiredValue\\":\\"ZRS\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.DataRedundancyType\\"}
   */
  annotation?: string;
  /**
   * @remarks
   * The compliance evaluation result of the resource. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resource.
   * *   INSUFFICIENT_DATA: No data is available.
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
   * 1624869012713
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
  evaluationResultIdentifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
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
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  remediationEnabled?: boolean;
  /**
   * @remarks
   * The timestamp when the compliance evaluation result was recorded. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1624869013065
   */
  resultRecordedTimestamp?: number;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high
   * *   2: medium.
   * *   3: low.
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
      evaluationResultIdentifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
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


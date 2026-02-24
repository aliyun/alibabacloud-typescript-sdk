// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package to which the rule belongs.
   * 
   * @example
   * cr-7263fd26622af00bc****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-888f626622af00ae****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-888f626622af00ae****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * OSS存储空间开启同城冗余存储
   */
  configRuleName?: string;
  /**
   * @remarks
   * The date when the ignored evaluation result is automatically restored.
   * 
   * > If this parameter is empty, the result is not automatically restored. You must manually restore it.
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
   * rg-acfm26cicib****
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
   * Bucket-test
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * Bucket-test
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 173808452267****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::OSS::Bucket
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

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $dara.Model {
  /**
   * @remarks
   * The information about the resource that is evaluated.
   */
  evaluationResultQualifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  /**
   * @remarks
   * The timestamp that is displayed on the timeline. Unit: milliseconds.
   * 
   * > This is the timestamp when the rule was triggered to evaluate the resource. It is the same as the value of the `ConfigRuleInvokedTimestamp` parameter.
   * 
   * @example
   * 1624869012713
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
      evaluationResultQualifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
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

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $dara.Model {
  /**
   * @remarks
   * The annotation of the non-compliant resource. The annotation may include the following information:
   * 
   * - `configuration`: the current configuration of the resource, which is the non-compliant configuration.
   * 
   * - `desiredValue`: the expected configuration of the resource, which is the compliant configuration.
   * 
   * - `operator`: the comparison operator that is used to compare the current configuration with the expected configuration.
   * 
   * - `property`: the JSON path of the current configuration in the resource property struct.
   * 
   * - `reason`: the reason why the resource is non-compliant.
   * 
   * @example
   * {\\"configuration\\":\\"LRS\\",\\"desiredValue\\":\\"ZRS\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.DataRedundancyType\\"}
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
   * The timestamp when the rule was triggered to evaluate the resource. Unit: milliseconds.
   * 
   * @example
   * 1624869012713
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
   * The identifier of the evaluation result.
   */
  evaluationResultIdentifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
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
   * The timestamp when the resource was last remediated to a compliant state. This parameter is not returned if a new resource or rule is evaluated as compliant for the first time.
   * 
   * @example
   * 1768788515723
   * 
   * **if can be null:**
   * false
   */
  lastCompliantFixedTimestamp?: number;
  /**
   * @remarks
   * The timestamp when the resource last became non-compliant.
   * 
   * @example
   * 1744696393000
   */
  lastNonCompliantRecordTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the remediation setting is enabled. Valid values:
   * 
   * - true: The remediation setting is enabled.
   * 
   * - false: The remediation setting is not enabled.
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
   * 1624869013065
   */
  resultRecordedTimestamp?: number;
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
      evaluationResultIdentifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
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

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $dara.Model {
  /**
   * @remarks
   * A list of evaluation results.
   */
  evaluationResultList?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
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
   * The pagination token that is used in the next request to retrieve a new page of results.
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
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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

export class ListAggregateConfigRuleEvaluationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of evaluation results.
   */
  evaluationResults?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6662516-D056-4325-B6A7-CD3E89C97C39
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
      evaluationResults: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults,
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


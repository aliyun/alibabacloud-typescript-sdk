// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules extends $dara.Model {
  /**
   * @remarks
   * The reason why the resource was evaluated as incompliant.
   * 
   * @example
   * {\\"configuration\\":\\"false\\",\\"desiredValue\\":\\"True\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.DeletionProtection\\"}
   */
  annotation?: string;
  /**
   * @remarks
   * The compliance type of the resource that was evaluated by using the evaluation rule. Valid values:
   * 
   * - COMPLIANT: The resource is evaluated as compliant.
   * 
   * - NON_COMPLIANT: The resource is evaluated as non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The URL of the topic that describes how the managed rule remediates the non-compliant configurations.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrl?: string;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * @example
   * ecs-instance-deletion-protection-enabled
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      helpUrl: 'HelpUrl',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      helpUrl: 'string',
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponseBodyResourceEvaluations extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * > If the request parameter is empty, it is automatically generated based on the Base64 value of `ResourceProperties`.
   * 
   * @example
   * ResourceLogicId-test
   */
  resourceLogicalId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The evaluation rules.
   */
  rules?: EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules[];
  static names(): { [key: string]: string } {
    return {
      resourceLogicalId: 'ResourceLogicalId',
      resourceType: 'ResourceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogicalId: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 129ECF1C-7897-1131-BD0F-4B588AC05400
   */
  requestId?: string;
  /**
   * @remarks
   * The array that contains the compliance evaluation results.
   */
  resourceEvaluations?: EvaluatePreConfigRulesResponseBodyResourceEvaluations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceEvaluations: 'ResourceEvaluations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceEvaluations: { 'type': 'array', 'itemType': EvaluatePreConfigRulesResponseBodyResourceEvaluations },
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvaluations)) {
      $dara.Model.validateArray(this.resourceEvaluations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


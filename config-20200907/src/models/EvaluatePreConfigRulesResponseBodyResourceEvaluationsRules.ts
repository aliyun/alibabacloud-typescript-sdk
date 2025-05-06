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
   * *   COMPLIANT: The resource was evaluated as compliant.
   * *   NON_COMPLIANT: The resource was evaluated as incompliant.
   * *   NOT_APPLICABLE: The evaluation rule does not apply to the resource.
   * 
   * @example
   * NON_COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The URL of the topic that describes how the managed rule remediates the incompliant configurations.
   * 
   * @example
   * https://example.aliyundoc.com
   */
  helpUrl?: string;
  /**
   * @remarks
   * The identifier of the evaluation rule.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules } from "./EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules";


export class EvaluatePreConfigRulesResponseBodyResourceEvaluations extends $dara.Model {
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * >  If the ResourceLogicalId request parameter is left empty, the value of the ResourceLogicalId response parameter is generated based on the value of the `ResourceProperties` parameter.
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


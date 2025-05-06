// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluatePreConfigRulesRequestResourceEvaluateItems } from "./EvaluatePreConfigRulesRequestResourceEvaluateItems";


export class EvaluatePreConfigRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the managed rule. Valid values:
   * 
   * *   true: enables the managed rule.
   * *   false: does not enable the managed rule. This is the default value.
   * 
   * >  After you create an evaluation rule, a managed rule that has the same settings as the evaluation rule is created. After you create a resource, the managed rule can be used to continuously check the compliance of the resource.
   * 
   * @example
   * false
   */
  enableManagedRules?: boolean;
  /**
   * @remarks
   * The resources that you want to evaluate.
   * 
   * This parameter is required.
   */
  resourceEvaluateItems?: EvaluatePreConfigRulesRequestResourceEvaluateItems[];
  /**
   * @remarks
   * 下一个查询开始Token
   * 
   * @example
   * ros
   */
  resourceTypeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      enableManagedRules: 'EnableManagedRules',
      resourceEvaluateItems: 'ResourceEvaluateItems',
      resourceTypeFormat: 'ResourceTypeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItems: { 'type': 'array', 'itemType': EvaluatePreConfigRulesRequestResourceEvaluateItems },
      resourceTypeFormat: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvaluateItems)) {
      $dara.Model.validateArray(this.resourceEvaluateItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


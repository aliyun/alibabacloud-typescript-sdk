// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesShrinkRequest extends $dara.Model {
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
  resourceEvaluateItemsShrink?: string;
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
      resourceEvaluateItemsShrink: 'ResourceEvaluateItems',
      resourceTypeFormat: 'ResourceTypeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItemsShrink: 'string',
      resourceTypeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


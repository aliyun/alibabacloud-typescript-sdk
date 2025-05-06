// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreEvaluationResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The date from which the system automatically re-evaluates the ignored incompliant resources.
   * 
   * >  If you leave this parameter empty, the system does not automatically re-evaluate the ignored incompliant resources. You must manually re-evaluate the ignored incompliant resources.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The reason why you want to ignore the resource.
   * 
   * @example
   * Test ignore.
   */
  reason?: string;
  /**
   * @remarks
   * The resources to be ignored.
   * 
   * This parameter is required.
   */
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resourcesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


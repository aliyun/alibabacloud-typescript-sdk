// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreEvaluationResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the rule ID, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The date on which the ignored evaluation results are automatically restored.
   * 
   * > If this parameter is left empty, the ignored evaluation results are not automatically restored. You must manually restore them.
   * 
   * @example
   * 2022-06-01
   */
  ignoreDate?: string;
  /**
   * @remarks
   * The reason for ignoring the resources.
   * 
   * @example
   * 无需检测。
   */
  reason?: string;
  /**
   * @remarks
   * The list of resources to be ignored.
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


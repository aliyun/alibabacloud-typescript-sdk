// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertEvaluationResultsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
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


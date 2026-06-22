// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerDefenseRuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the rules that you want to modify.
   */
  ruleIds?: number[];
  /**
   * @remarks
   * The switch status of the rule. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 0
   */
  ruleSwitch?: number;
  static names(): { [key: string]: string } {
    return {
      ruleIds: 'RuleIds',
      ruleSwitch: 'RuleSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIds: { 'type': 'array', 'itemType': 'number' },
      ruleSwitch: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


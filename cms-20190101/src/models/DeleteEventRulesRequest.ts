// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert rule. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * rule1
   */
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


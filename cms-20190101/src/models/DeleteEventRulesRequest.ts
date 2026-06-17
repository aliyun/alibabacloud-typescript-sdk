// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the event-triggered alert rules to delete.
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


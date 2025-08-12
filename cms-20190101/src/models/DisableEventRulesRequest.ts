// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableEventRulesRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ruleName1
   */
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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


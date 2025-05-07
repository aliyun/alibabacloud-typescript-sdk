// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncQualityCheckResponseBodyDataRulesHit } from "./SyncQualityCheckResponseBodyDataRulesHit";
import { SyncQualityCheckResponseBodyDataRulesRuleInfoBase } from "./SyncQualityCheckResponseBodyDataRulesRuleInfoBase";


export class SyncQualityCheckResponseBodyDataRules extends $dara.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  /**
   * @example
   * 232232
   */
  rid?: string;
  ruleInfoBase?: SyncQualityCheckResponseBodyDataRulesRuleInfoBase;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      rid: 'Rid',
      ruleInfoBase: 'RuleInfoBase',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      rid: 'string',
      ruleInfoBase: SyncQualityCheckResponseBodyDataRulesRuleInfoBase,
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hit)) {
      $dara.Model.validateArray(this.hit);
    }
    if(this.ruleInfoBase && typeof (this.ruleInfoBase as any).validate === 'function') {
      (this.ruleInfoBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


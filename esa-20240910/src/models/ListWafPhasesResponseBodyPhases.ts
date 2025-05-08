// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafPhasesResponseBodyPhasesRulesets } from "./ListWafPhasesResponseBodyPhasesRulesets";


export class ListWafPhasesResponseBodyPhases extends $dara.Model {
  /**
   * @remarks
   * Name of the WAF operation phase.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * List of WAF rulesets.
   */
  rulesets?: ListWafPhasesResponseBodyPhasesRulesets[];
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      rulesets: 'Rulesets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      rulesets: { 'type': 'array', 'itemType': ListWafPhasesResponseBodyPhasesRulesets },
    };
  }

  validate() {
    if(Array.isArray(this.rulesets)) {
      $dara.Model.validateArray(this.rulesets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


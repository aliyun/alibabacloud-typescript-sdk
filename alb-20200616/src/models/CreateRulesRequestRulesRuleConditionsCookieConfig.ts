// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRulesRequestRulesRuleConditionsCookieConfigValues } from "./CreateRulesRequestRulesRuleConditionsCookieConfigValues";


export class CreateRulesRequestRulesRuleConditionsCookieConfig extends $dara.Model {
  values?: CreateRulesRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsCookieConfigValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleConditionsCookieConfigValues } from "./ListRulesResponseBodyRulesRuleConditionsCookieConfigValues";


export class ListRulesResponseBodyRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie value.
   */
  values?: ListRulesResponseBodyRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsCookieConfigValues },
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


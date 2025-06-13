// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues } from "./ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues";


export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The query string.
   */
  values?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues },
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


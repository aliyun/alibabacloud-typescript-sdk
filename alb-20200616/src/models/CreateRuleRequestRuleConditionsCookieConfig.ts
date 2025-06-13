// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestRuleConditionsCookieConfigValues } from "./CreateRuleRequestRuleConditionsCookieConfigValues";


export class CreateRuleRequestRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie values.
   */
  values?: CreateRuleRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsCookieConfigValues },
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


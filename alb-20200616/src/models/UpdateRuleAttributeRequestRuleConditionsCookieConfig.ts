// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleConditionsCookieConfigValues } from "./UpdateRuleAttributeRequestRuleConditionsCookieConfigValues";


export class UpdateRuleAttributeRequestRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of the cookie.
   */
  values?: UpdateRuleAttributeRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsCookieConfigValues },
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


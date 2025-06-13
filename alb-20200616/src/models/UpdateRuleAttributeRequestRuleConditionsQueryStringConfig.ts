// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues } from "./UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues";


export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The query strings. You can specify up to 20 query strings.
   */
  values?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues } from "./UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues";


export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig extends $dara.Model {
  values?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues },
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


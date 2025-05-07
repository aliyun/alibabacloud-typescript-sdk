// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQualityCheckSchemeResponseBodyDataRuleListRules } from "./ListQualityCheckSchemeResponseBodyDataRuleListRules";


export class ListQualityCheckSchemeResponseBodyDataRuleList extends $dara.Model {
  rules?: ListQualityCheckSchemeResponseBodyDataRuleListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


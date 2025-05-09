// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule } from "./ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule";


export class ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleList extends $dara.Model {
  semiDesensitizationRule?: ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule[];
  static names(): { [key: string]: string } {
    return {
      semiDesensitizationRule: 'SemiDesensitizationRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      semiDesensitizationRule: { 'type': 'array', 'itemType': ListSensitiveColumnInfoResponseBodySensitiveColumnListSensitiveColumnSemiDesensitizationRuleListSemiDesensitizationRule },
    };
  }

  validate() {
    if(Array.isArray(this.semiDesensitizationRule)) {
      $dara.Model.validateArray(this.semiDesensitizationRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


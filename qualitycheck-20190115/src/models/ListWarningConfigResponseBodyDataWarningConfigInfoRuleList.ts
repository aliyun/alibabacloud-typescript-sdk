// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule } from "./ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule";


export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleList extends $dara.Model {
  warningRule?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule[];
  static names(): { [key: string]: string } {
    return {
      warningRule: 'WarningRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningRule: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule },
    };
  }

  validate() {
    if(Array.isArray(this.warningRule)) {
      $dara.Model.validateArray(this.warningRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


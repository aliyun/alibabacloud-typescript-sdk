// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSLARulesResponseBodySLARuleListSLARule } from "./ListSlarulesResponseBodySlaruleListSlarule";


export class ListSLARulesResponseBodySLARuleList extends $dara.Model {
  SLARule?: ListSLARulesResponseBodySLARuleListSLARule[];
  static names(): { [key: string]: string } {
    return {
      SLARule: 'SLARule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLARule: { 'type': 'array', 'itemType': ListSLARulesResponseBodySLARuleListSLARule },
    };
  }

  validate() {
    if(Array.isArray(this.SLARule)) {
      $dara.Model.validateArray(this.SLARule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


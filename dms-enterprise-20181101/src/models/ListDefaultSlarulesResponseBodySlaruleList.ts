// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDefaultSLARulesResponseBodySLARuleListSLARule } from "./ListDefaultSlarulesResponseBodySlaruleListSlarule";


export class ListDefaultSLARulesResponseBodySLARuleList extends $dara.Model {
  SLARule?: ListDefaultSLARulesResponseBodySLARuleListSLARule[];
  static names(): { [key: string]: string } {
    return {
      SLARule: 'SLARule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLARule: { 'type': 'array', 'itemType': ListDefaultSLARulesResponseBodySLARuleListSLARule },
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


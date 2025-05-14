// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOutbounNumListResponseBodyDataNum } from "./GetOutbounNumListResponseBodyDataNum";
import { GetOutbounNumListResponseBodyDataNumGroup } from "./GetOutbounNumListResponseBodyDataNumGroup";


export class GetOutbounNumListResponseBodyData extends $dara.Model {
  num?: GetOutbounNumListResponseBodyDataNum[];
  numGroup?: GetOutbounNumListResponseBodyDataNumGroup[];
  static names(): { [key: string]: string } {
    return {
      num: 'Num',
      numGroup: 'NumGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      num: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNum },
      numGroup: { 'type': 'array', 'itemType': GetOutbounNumListResponseBodyDataNumGroup },
    };
  }

  validate() {
    if(Array.isArray(this.num)) {
      $dara.Model.validateArray(this.num);
    }
    if(Array.isArray(this.numGroup)) {
      $dara.Model.validateArray(this.numGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


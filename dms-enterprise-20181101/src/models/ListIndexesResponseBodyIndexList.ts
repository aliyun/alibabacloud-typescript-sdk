// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexesResponseBodyIndexListIndex } from "./ListIndexesResponseBodyIndexListIndex";


export class ListIndexesResponseBodyIndexList extends $dara.Model {
  index?: ListIndexesResponseBodyIndexListIndex[];
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: { 'type': 'array', 'itemType': ListIndexesResponseBodyIndexListIndex },
    };
  }

  validate() {
    if(Array.isArray(this.index)) {
      $dara.Model.validateArray(this.index);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList } from "./CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList";


export class CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionList extends $dara.Model {
  physicalConnectionList?: CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList[];
  static names(): { [key: string]: string } {
    return {
      physicalConnectionList: 'physicalConnectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionList: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionResponseBodyPhysicalConnectionListPhysicalConnectionList },
    };
  }

  validate() {
    if(Array.isArray(this.physicalConnectionList)) {
      $dara.Model.validateArray(this.physicalConnectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


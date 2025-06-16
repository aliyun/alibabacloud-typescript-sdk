// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList } from "./CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList";


export class CreateHighReliablePhysicalConnectionResponseBodyErrorInfoList extends $dara.Model {
  errorInfoList?: CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList[];
  static names(): { [key: string]: string } {
    return {
      errorInfoList: 'errorInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfoList: { 'type': 'array', 'itemType': CreateHighReliablePhysicalConnectionResponseBodyErrorInfoListErrorInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.errorInfoList)) {
      $dara.Model.validateArray(this.errorInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


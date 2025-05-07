// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FindInstanceInfoResponseBodyDataPegInstanceInfoList } from "./FindInstanceInfoResponseBodyDataPegInstanceInfoList";


export class FindInstanceInfoResponseBodyData extends $dara.Model {
  pegInstanceInfoList?: FindInstanceInfoResponseBodyDataPegInstanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      pegInstanceInfoList: 'PegInstanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pegInstanceInfoList: { 'type': 'array', 'itemType': FindInstanceInfoResponseBodyDataPegInstanceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.pegInstanceInfoList)) {
      $dara.Model.validateArray(this.pegInstanceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


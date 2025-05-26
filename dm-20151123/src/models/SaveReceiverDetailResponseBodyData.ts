// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveReceiverDetailResponseBodyDataDetail } from "./SaveReceiverDetailResponseBodyDataDetail";


export class SaveReceiverDetailResponseBodyData extends $dara.Model {
  detail?: SaveReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': SaveReceiverDetailResponseBodyDataDetail },
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


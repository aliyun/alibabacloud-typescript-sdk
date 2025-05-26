// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReceiverDetailResponseBodyDataDetail } from "./QueryReceiverDetailResponseBodyDataDetail";


export class QueryReceiverDetailResponseBodyData extends $dara.Model {
  detail?: QueryReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': QueryReceiverDetailResponseBodyDataDetail },
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


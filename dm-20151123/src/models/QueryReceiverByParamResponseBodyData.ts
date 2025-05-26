// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReceiverByParamResponseBodyDataReceiver } from "./QueryReceiverByParamResponseBodyDataReceiver";


export class QueryReceiverByParamResponseBodyData extends $dara.Model {
  receiver?: QueryReceiverByParamResponseBodyDataReceiver[];
  static names(): { [key: string]: string } {
    return {
      receiver: 'receiver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiver: { 'type': 'array', 'itemType': QueryReceiverByParamResponseBodyDataReceiver },
    };
  }

  validate() {
    if(Array.isArray(this.receiver)) {
      $dara.Model.validateArray(this.receiver);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


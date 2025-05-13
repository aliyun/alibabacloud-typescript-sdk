// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataStreamsResponseBodyHeaders } from "./ListDataStreamsResponseBodyHeaders";
import { ListDataStreamsResponseBodyResult } from "./ListDataStreamsResponseBodyResult";


export class ListDataStreamsResponseBody extends $dara.Model {
  headers?: ListDataStreamsResponseBodyHeaders;
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  result?: ListDataStreamsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDataStreamsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


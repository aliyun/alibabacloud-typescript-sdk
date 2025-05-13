// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceIndicesResponseBodyHeaders } from "./ListInstanceIndicesResponseBodyHeaders";
import { ListInstanceIndicesResponseBodyResult } from "./ListInstanceIndicesResponseBodyResult";


export class ListInstanceIndicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total size of the OpenStore cold stage index for this instance. Unit: bytes.
   */
  headers?: ListInstanceIndicesResponseBodyHeaders;
  /**
   * @remarks
   * The total number of indexes in Cloud Hosting.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The total storage space occupied by the current index. Unit: bytes.
   */
  result?: ListInstanceIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceIndicesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceIndicesResponseBodyResult },
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


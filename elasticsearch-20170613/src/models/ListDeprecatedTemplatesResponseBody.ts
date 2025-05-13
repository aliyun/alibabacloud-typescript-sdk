// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeprecatedTemplatesResponseBodyHeaders } from "./ListDeprecatedTemplatesResponseBodyHeaders";
import { ListDeprecatedTemplatesResponseBodyResult } from "./ListDeprecatedTemplatesResponseBodyResult";


export class ListDeprecatedTemplatesResponseBody extends $dara.Model {
  headers?: ListDeprecatedTemplatesResponseBodyHeaders;
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  result?: ListDeprecatedTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDeprecatedTemplatesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeprecatedTemplatesResponseBodyResult },
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


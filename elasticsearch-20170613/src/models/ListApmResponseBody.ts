// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApmResponseBodyHeaders } from "./ListApmResponseBodyHeaders";
import { ListApmResponseBodyResult } from "./ListApmResponseBodyResult";


export class ListApmResponseBody extends $dara.Model {
  headers?: ListApmResponseBodyHeaders;
  /**
   * @example
   * 080D3399-76CF-519D-A540-2C44BC056EB7
   */
  requestId?: string;
  result?: ListApmResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListApmResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListApmResponseBodyResult },
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


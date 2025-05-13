// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyHeaders } from "./ListNodesResponseBodyHeaders";
import { ListNodesResponseBodyResult } from "./ListNodesResponseBodyResult";


export class ListNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   */
  headers?: ListNodesResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1FD7642-7C40-4FF2-9C0F-21F1A1746F70
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListNodesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListNodesResponseBodyResult },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDictsResponseBodyHeaders } from "./ListDictsResponseBodyHeaders";
import { ListDictsResponseBodyResult } from "./ListDictsResponseBodyResult";


export class ListDictsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The header of the response.
   */
  headers?: ListDictsResponseBodyHeaders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2937F832-F39E-41EF-89BA-B528342A2A3A
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDictsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
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


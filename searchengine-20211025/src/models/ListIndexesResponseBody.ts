// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexesResponseBodyResult } from "./ListIndexesResponseBodyResult";


export class ListIndexesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The details of indexes.
   */
  result?: ListIndexesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


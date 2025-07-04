// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAdvanceConfigsResponseBodyResult } from "./ListAdvanceConfigsResponseBodyResult";


export class ListAdvanceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FB0325E-8C37-5525-96AC-0333523170A3
   */
  requestId?: string;
  /**
   * @remarks
   * The advanced configurations.
   */
  result?: ListAdvanceConfigsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAdvanceConfigsResponseBodyResult },
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


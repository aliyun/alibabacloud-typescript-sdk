// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogstashLogResponseBodyResult } from "./ListLogstashLogResponseBodyResult";


export class ListLogstashLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the log.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of log generation. Unit: ms.
   */
  result?: ListLogstashLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashLogResponseBodyResult },
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


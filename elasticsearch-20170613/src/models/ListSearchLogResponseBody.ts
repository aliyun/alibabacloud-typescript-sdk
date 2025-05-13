// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchLogResponseBodyHeaders } from "./ListSearchLogResponseBodyHeaders";
import { ListSearchLogResponseBodyResult } from "./ListSearchLogResponseBodyResult";


export class ListSearchLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The level of the log. Valid values:
   * 
   * *   warn: warning log
   * *   info: information log
   * *   error: error log
   * *   trace: trace logs
   * *   debug: debug logs
   * 
   * The level information has been migrated to the contentCollection field.
   */
  headers?: ListSearchLogResponseBodyHeaders;
  /**
   * @remarks
   * The list of logs returned by the request.
   * 
   * @example
   * 7F40EAA1-6F1D-4DD9-8DB8-C5F00C4E****
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the log entry. Migrated to the contentCollection field.
   */
  result?: ListSearchLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListSearchLogResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSearchLogResponseBodyResult },
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


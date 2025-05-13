// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKibanaPluginsResponseBodyHeaders } from "./ListKibanaPluginsResponseBodyHeaders";
import { ListKibanaPluginsResponseBodyResult } from "./ListKibanaPluginsResponseBodyResult";


export class ListKibanaPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request header.
   */
  headers?: ListKibanaPluginsResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11234B4A-34CE-473B-8E61-AD95702E****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the plug-ins.
   */
  result?: ListKibanaPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListKibanaPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKibanaPluginsResponseBodyResult },
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


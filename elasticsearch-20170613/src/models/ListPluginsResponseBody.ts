// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginsResponseBodyHeaders } from "./ListPluginsResponseBodyHeaders";
import { ListPluginsResponseBodyResult } from "./ListPluginsResponseBodyResult";


export class ListPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the plug-in.
   */
  headers?: ListPluginsResponseBodyHeaders;
  /**
   * @remarks
   * The return results.
   * 
   * @example
   * 5A5D8E74-565C-43DC-B031-29289FA9****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the plug-in.
   */
  result?: ListPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPluginsResponseBodyResult },
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


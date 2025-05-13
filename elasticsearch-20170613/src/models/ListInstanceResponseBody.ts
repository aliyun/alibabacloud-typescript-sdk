// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceResponseBodyHeaders } from "./ListInstanceResponseBodyHeaders";
import { ListInstanceResponseBodyResult } from "./ListInstanceResponseBodyResult";


export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   active: normal
   * *   activating: taking effect
   * *   inactive: frozen
   * *   invalid: invalid
   */
  headers?: ListInstanceResponseBodyHeaders;
  /**
   * @remarks
   * The time when the node is created.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether it is a service VPC.
   */
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
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


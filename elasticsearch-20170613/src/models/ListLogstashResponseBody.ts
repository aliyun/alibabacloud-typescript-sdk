// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogstashResponseBodyHeaders } from "./ListLogstashResponseBodyHeaders";
import { ListLogstashResponseBodyResult } from "./ListLogstashResponseBodyResult";


export class ListLogstashResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Supported: prepaid (subscription) and postpaid (pay-as-you-go).
   */
  headers?: ListLogstashResponseBodyHeaders;
  /**
   * @remarks
   * Detailed information about the matching instances.
   * 
   * @example
   * AC442F2F-5068-4434-AA21-E78947A9****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the VPC.
   */
  result?: ListLogstashResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListLogstashResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashResponseBodyResult },
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


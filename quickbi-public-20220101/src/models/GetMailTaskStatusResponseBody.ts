// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMailTaskStatusResponseBodyResult } from "./GetMailTaskStatusResponseBodyResult";


export class GetMailTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 38C0FEC8-****-415C-A9F1-****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: GetMailTaskStatusResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful. 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetMailTaskStatusResponseBodyResult },
      success: 'boolean',
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


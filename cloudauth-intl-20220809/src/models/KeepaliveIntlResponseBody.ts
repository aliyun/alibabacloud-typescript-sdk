// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KeepaliveIntlResponseBodyResult } from "./KeepaliveIntlResponseBodyResult";


export class KeepaliveIntlResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  result?: KeepaliveIntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: KeepaliveIntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Id2MetaPeriodVerifyIntlResponseBodyResult } from "./Id2metaPeriodVerifyIntlResponseBodyResult";


export class Id2MetaPeriodVerifyIntlResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 7B97D932-7FF5-517D-BF39-7CA1BEE3CDD9
   */
  requestId?: string;
  result?: Id2MetaPeriodVerifyIntlResponseBodyResult;
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
      result: Id2MetaPeriodVerifyIntlResponseBodyResult,
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


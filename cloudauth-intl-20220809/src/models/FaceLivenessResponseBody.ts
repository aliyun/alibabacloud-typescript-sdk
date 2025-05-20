// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FaceLivenessResponseBodyResult } from "./FaceLivenessResponseBodyResult";


export class FaceLivenessResponseBody extends $dara.Model {
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
   * 42EA58CA-5DF4-55D5-82C4-5E7A40DA62BA
   */
  requestId?: string;
  result?: FaceLivenessResponseBodyResult;
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
      result: FaceLivenessResponseBodyResult,
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


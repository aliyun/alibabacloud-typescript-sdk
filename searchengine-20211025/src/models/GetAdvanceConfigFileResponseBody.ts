// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAdvanceConfigFileResponseBodyResult } from "./GetAdvanceConfigFileResponseBodyResult";


export class GetAdvanceConfigFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetAdvanceConfigFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAdvanceConfigFileResponseBodyResult,
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


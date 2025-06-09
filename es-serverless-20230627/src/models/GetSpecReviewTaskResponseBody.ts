// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSpecReviewTaskResponseBodyResult } from "./GetSpecReviewTaskResponseBodyResult";


export class GetSpecReviewTaskResponseBody extends $dara.Model {
  /**
   * @example
   * E310AC54-957A-5FD5-B85B-E972B2BDA8DE
   */
  requestId?: string;
  result?: GetSpecReviewTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSpecReviewTaskResponseBodyResult,
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


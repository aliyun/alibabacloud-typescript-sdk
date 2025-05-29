// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchForbidVsStreamResponseBodyForbidResult } from "./BatchForbidVsStreamResponseBodyForbidResult";


export class BatchForbidVsStreamResponseBody extends $dara.Model {
  forbidResult?: BatchForbidVsStreamResponseBodyForbidResult;
  /**
   * @example
   * B058D71B-76EA-5DF6-ACAF-A617C1E7937F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbidResult: 'ForbidResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbidResult: BatchForbidVsStreamResponseBodyForbidResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.forbidResult && typeof (this.forbidResult as any).validate === 'function') {
      (this.forbidResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


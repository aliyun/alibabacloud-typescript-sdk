// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchResumeVsStreamResponseBodyResumeResult } from "./BatchResumeVsStreamResponseBodyResumeResult";


export class BatchResumeVsStreamResponseBody extends $dara.Model {
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  resumeResult?: BatchResumeVsStreamResponseBodyResumeResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resumeResult: 'ResumeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resumeResult: BatchResumeVsStreamResponseBodyResumeResult,
    };
  }

  validate() {
    if(this.resumeResult && typeof (this.resumeResult as any).validate === 'function') {
      (this.resumeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


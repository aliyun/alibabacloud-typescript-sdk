// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAIAppJobResponseBody extends $dara.Model {
  /**
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  jobId?: string;
  /**
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


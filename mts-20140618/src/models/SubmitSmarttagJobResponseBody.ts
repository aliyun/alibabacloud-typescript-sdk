// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmarttagJobResponseBody extends $dara.Model {
  /**
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  jobId?: string;
  /**
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
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


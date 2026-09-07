// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The video translation job ID, used to call GetVideoTranslationJob to query the job.
   * 
   * @example
   * vtj_0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID, used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * req-vt-20260820-001
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpShotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint analysis job. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * 2a0697e35a7342859f733a9190c4****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
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


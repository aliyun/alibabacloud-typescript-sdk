// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFpDBDeleteJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the job. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * d98459323c024947a104f6a50cbf****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4247B23C-26DE-529F-8D9F-FD6811AE979B
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


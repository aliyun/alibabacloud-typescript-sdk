// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRenderJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the task is in the Failed state.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
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


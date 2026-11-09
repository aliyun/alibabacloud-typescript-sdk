// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCreativeGenerationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the job is in the Failed state.
   * 
   * @example
   * WorkflowTaskFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ******3B0E1A586AAC29742247******
   */
  jobId?: string;
  /**
   * @remarks
   * Id of the request
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


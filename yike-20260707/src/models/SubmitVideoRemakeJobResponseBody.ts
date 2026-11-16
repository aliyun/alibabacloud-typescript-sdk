// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRemakeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code in the business response. This parameter is empty when the call is successful.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The unified remake job ID. Use GetVideoRemakeJob to query the progress and outputs.
   * 
   * @example
   * 0123456789abcdef0123456789abcdef
   */
  jobId?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 12345678-1234-4321-ABCD-123456789012
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRemakeScriptJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. An empty string is returned when the submission is successful.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 68ca759e798b40b4903b255********
   */
  jobId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCharacterReplaceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID returned by SubmitVideoCharacterReplaceJob.
   * 
   * @example
   * ag_83baeea38b534ee1937b8a4acd08****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID used to locate and troubleshoot the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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


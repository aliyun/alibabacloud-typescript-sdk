// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIImageAuditJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image review job.
   * 
   * @example
   * b1aa3024aee64*****6dc8ca20dbc328
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F42D500-1956-4B*****30-C09E755F4F4B
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIImageJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image AI processing job.
   * 
   * @example
   * cf08a2c6e11e*****de1711b738b9067
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 218A6807-A21E-43*****54-C0512880B0B0
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

